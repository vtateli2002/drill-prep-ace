begin;

-- Safe public view for leaderboard (no PII)
create or replace view public.public_profiles as
select id, username, xp, level, rank, profile_pic, is_bot
from public.profiles;

grant select on public.public_profiles to anon, authenticated;

-- Ensure RLS is enabled and tighten policies
alter table public.profiles enable row level security;

-- Drop broad/duplicate policies if they exist
drop policy if exists "Users can view all profiles" on public.profiles;
drop policy if exists "Users can update their own profile" on public.profiles;
drop policy if exists select_own_profile on public.profiles;
drop policy if exists update_own_profile on public.profiles;

-- Owner-only policies (compatible with existing UX)
create policy select_own_profile on public.profiles
for select using (auth.uid() = id);

create policy update_own_profile on public.profiles
for update using (auth.uid() = id)
with check (auth.uid() = id);

-- Column-level grants: only allow safe fields to be updated by regular users
revoke update on public.profiles from authenticated;
grant update (username, profile_pic, onboarding_plan, onboarding_started_at, interview_deadline)
  on public.profiles to authenticated;

-- Admin users list (referenced by award_xp)
create table if not exists public.admin_users (
  user_id uuid primary key
);

-- Secure RPC for awarding XP (self or admin)
create or replace function public.award_xp(p_user uuid, p_amount int, p_reason text)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare caller uuid;
begin
  caller := auth.uid();
  if caller is null then
    raise exception 'Not authenticated';
  end if;

  if caller <> p_user and not exists (select 1 from public.admin_users where user_id = caller) then
    raise exception 'Forbidden';
  end if;

  if p_amount <= 0 or p_amount > 200 then
    raise exception 'Invalid XP amount';
  end if;

  update public.profiles
    set xp = xp + p_amount,
        updated_at = now()
    where id = p_user;
end; $$;

revoke all on function public.award_xp(uuid,int,text) from public;
grant execute on function public.award_xp(uuid,int,text) to authenticated;

commit;