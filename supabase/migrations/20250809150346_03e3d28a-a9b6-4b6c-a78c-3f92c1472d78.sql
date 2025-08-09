-- =========================================
-- RLS performance rewrite + dedupe policies
-- Behavior-preserving, idempotent
-- =========================================
begin;

-- Helper: drop policy if it exists
create or replace function _drop_policy_if_exists(tbl regclass, policy_name text) returns void
language plpgsql as $$
begin
  if exists (
    select 1 from pg_policies
    where schemaname = split_part(tbl::text,'.',1)
      and tablename  = split_part(tbl::text,'.',2)
      and policyname = policy_name
  ) then
    execute format('drop policy %I on %s', policy_name, tbl);
  end if;
end$$;

-- =========
-- PROFILES
-- =========
select _drop_policy_if_exists('public.profiles','Users can insert their own profile');
select _drop_policy_if_exists('public.profiles','Users can update their own profile');
select _drop_policy_if_exists('public.profiles','select_own_profile');
select _drop_policy_if_exists('public.profiles','update_own_profile');

alter table public.profiles enable row level security;

create policy select_own_profile
on public.profiles
for select
using ( id = (select auth.uid()) );

create policy update_own_profile
on public.profiles
for update
using ( id = (select auth.uid()) )
with check ( id = (select auth.uid()) );

create policy insert_own_profile
on public.profiles
for insert
with check ( id = (select auth.uid()) );

-- =================
-- USER_QUESTIONS
-- =================
select _drop_policy_if_exists('public.user_questions','Users can view their own question attempts');
select _drop_policy_if_exists('public.user_questions','Users can insert their own question attempts');
select _drop_policy_if_exists('public.user_questions','Users can update their own question attempts');

alter table public.user_questions enable row level security;

create policy uq_select_own
on public.user_questions
for select
using ( user_id = (select auth.uid()) );

create policy uq_insert_own
on public.user_questions
for insert
with check ( user_id = (select auth.uid()) );

create policy uq_update_own
on public.user_questions
for update
using ( user_id = (select auth.uid()) )
with check ( user_id = (select auth.uid()) );

-- =========
-- ATTEMPTS
-- =========
select _drop_policy_if_exists('public.attempts','Users can view their own attempts');
select _drop_policy_if_exists('public.attempts','Users can insert their own attempts');
select _drop_policy_if_exists('public.attempts','Users can update their own attempts');

alter table public.attempts enable row level security;

create policy attempts_select_own
on public.attempts
for select
using ( user_id = (select auth.uid()) );

create policy attempts_insert_own
on public.attempts
for insert
with check ( user_id = (select auth.uid()) );

create policy attempts_update_own
on public.attempts
for update
using ( user_id = (select auth.uid()) )
with check ( user_id = (select auth.uid()) );

-- =================
-- DAILY_CHALLENGES
-- =================
select _drop_policy_if_exists('public.daily_challenges','Users can view their own daily challenges');
select _drop_policy_if_exists('public.daily_challenges','Users can insert their own daily challenges');
select _drop_policy_if_exists('public.daily_challenges','Users can update their own daily challenges');

alter table public.daily_challenges enable row level security;

create policy dc_select_own
on public.daily_challenges
for select
using ( user_id = (select auth.uid()) );

create policy dc_insert_own
on public.daily_challenges
for insert
with check ( user_id = (select auth.uid()) );

create policy dc_update_own
on public.daily_challenges
for update
using ( user_id = (select auth.uid()) )
with check ( user_id = (select auth.uid()) );

-- ===========
-- USER_NOTES
-- ============
select _drop_policy_if_exists('public.user_notes','Users can view their own notes');
select _drop_policy_if_exists('public.user_notes','Users can insert their own notes');

alter table public.user_notes enable row level security;

create policy notes_select_own
on public.user_notes
for select
using ( user_id = (select auth.uid()) );

create policy notes_insert_own
on public.user_notes
for insert
with check ( user_id = (select auth.uid()) );

-- ====================
-- CALCULATOR_EVENTS
-- ====================
select _drop_policy_if_exists('public.calculator_events','Users can view their own calculator events');
select _drop_policy_if_exists('public.calculator_events','Users can insert their own calculator events');

alter table public.calculator_events enable row level security;

create policy calc_select_own
on public.calculator_events
for select
using ( user_id = (select auth.uid()) );

create policy calc_insert_own
on public.calculator_events
for insert
with check ( user_id = (select auth.uid()) );

-- ===============
-- BADGE_UNLOCKS
-- ===============
-- Deduplicate permissive SELECT policies
select _drop_policy_if_exists('public.badge_unlocks','Users can view their own badge unlocks');
select _drop_policy_if_exists('public.badge_unlocks','unlocks_read_own');

alter table public.badge_unlocks enable row level security;

create policy unlocks_select_own
on public.badge_unlocks
for select
using ( user_id = (select auth.uid()) );

-- Insert policy (fast form)
select _drop_policy_if_exists('public.badge_unlocks','Users can insert their own badge unlocks');

create policy unlocks_insert_own
on public.badge_unlocks
for insert
with check ( user_id = (select auth.uid()) );

-- =======
-- BADGES
-- =======
-- Keep a single public SELECT policy; remove duplicates
select _drop_policy_if_exists('public.badges','Badges are viewable by everyone');
select _drop_policy_if_exists('public.badges','badges_read_all');

alter table public.badges enable row level security;

create policy badges_public_read
on public.badges
for select
to anon, authenticated
using ( true );

-- =================================
-- Duplicate index on badges.slug
-- =================================
do $$
begin
  if exists (select 1 from pg_indexes where schemaname='public' and indexname='badges_slug_unique') then
    drop index if exists public.badges_slug_unique;
  end if;
  if not exists (select 1 from pg_indexes where schemaname='public' and indexname='badges_slug_key') then
    create unique index badges_slug_key on public.badges (slug);
  end if;
end $$;

commit;