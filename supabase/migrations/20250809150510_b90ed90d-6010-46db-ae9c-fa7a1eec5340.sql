begin;

-- Directly drop potentially existing policies to avoid name conflicts
-- PROFILES
drop policy if exists "Users can insert their own profile" on public.profiles;
drop policy if exists "Users can update their own profile" on public.profiles;
drop policy if exists select_own_profile on public.profiles;
drop policy if exists update_own_profile on public.profiles;
drop policy if exists insert_own_profile on public.profiles;

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

-- USER_QUESTIONS
 drop policy if exists "Users can view their own question attempts" on public.user_questions;
 drop policy if exists "Users can insert their own question attempts" on public.user_questions;
 drop policy if exists "Users can update their own question attempts" on public.user_questions;
 drop policy if exists uq_select_own on public.user_questions;
 drop policy if exists uq_insert_own on public.user_questions;
 drop policy if exists uq_update_own on public.user_questions;

alter table public.user_questions enable row level security;

create policy uq_select_own on public.user_questions for select using ( user_id = (select auth.uid()) );
create policy uq_insert_own on public.user_questions for insert with check ( user_id = (select auth.uid()) );
create policy uq_update_own on public.user_questions for update using ( user_id = (select auth.uid()) ) with check ( user_id = (select auth.uid()) );

-- ATTEMPTS
 drop policy if exists "Users can view their own attempts" on public.attempts;
 drop policy if exists "Users can insert their own attempts" on public.attempts;
 drop policy if exists "Users can update their own attempts" on public.attempts;
 drop policy if exists attempts_select_own on public.attempts;
 drop policy if exists attempts_insert_own on public.attempts;
 drop policy if exists attempts_update_own on public.attempts;

alter table public.attempts enable row level security;

create policy attempts_select_own on public.attempts for select using ( user_id = (select auth.uid()) );
create policy attempts_insert_own on public.attempts for insert with check ( user_id = (select auth.uid()) );
create policy attempts_update_own on public.attempts for update using ( user_id = (select auth.uid()) ) with check ( user_id = (select auth.uid()) );

-- DAILY_CHALLENGES
 drop policy if exists "Users can view their own daily challenges" on public.daily_challenges;
 drop policy if exists "Users can insert their own daily challenges" on public.daily_challenges;
 drop policy if exists "Users can update their own daily challenges" on public.daily_challenges;
 drop policy if exists dc_select_own on public.daily_challenges;
 drop policy if exists dc_insert_own on public.daily_challenges;
 drop policy if exists dc_update_own on public.daily_challenges;

alter table public.daily_challenges enable row level security;

create policy dc_select_own on public.daily_challenges for select using ( user_id = (select auth.uid()) );
create policy dc_insert_own on public.daily_challenges for insert with check ( user_id = (select auth.uid()) );
create policy dc_update_own on public.daily_challenges for update using ( user_id = (select auth.uid()) ) with check ( user_id = (select auth.uid()) );

-- USER_NOTES
 drop policy if exists "Users can view their own notes" on public.user_notes;
 drop policy if exists "Users can insert their own notes" on public.user_notes;
 drop policy if exists notes_select_own on public.user_notes;
 drop policy if exists notes_insert_own on public.user_notes;

alter table public.user_notes enable row level security;

create policy notes_select_own on public.user_notes for select using ( user_id = (select auth.uid()) );
create policy notes_insert_own on public.user_notes for insert with check ( user_id = (select auth.uid()) );

-- CALCULATOR_EVENTS
 drop policy if exists "Users can view their own calculator events" on public.calculator_events;
 drop policy if exists "Users can insert their own calculator events" on public.calculator_events;
 drop policy if exists calc_select_own on public.calculator_events;
 drop policy if exists calc_insert_own on public.calculator_events;

alter table public.calculator_events enable row level security;

create policy calc_select_own on public.calculator_events for select using ( user_id = (select auth.uid()) );
create policy calc_insert_own on public.calculator_events for insert with check ( user_id = (select auth.uid()) );

-- BADGE_UNLOCKS
 drop policy if exists "Users can view their own badge unlocks" on public.badge_unlocks;
 drop policy if exists unlocks_read_own on public.badge_unlocks;
 drop policy if exists unlocks_select_own on public.badge_unlocks;
 drop policy if exists "Users can insert their own badge unlocks" on public.badge_unlocks;
 drop policy if exists unlocks_insert_own on public.badge_unlocks;

alter table public.badge_unlocks enable row level security;

create policy unlocks_select_own on public.badge_unlocks for select using ( user_id = (select auth.uid()) );
create policy unlocks_insert_own on public.badge_unlocks for insert with check ( user_id = (select auth.uid()) );

-- BADGES
 drop policy if exists "Badges are viewable by everyone" on public.badges;
 drop policy if exists badges_read_all on public.badges;
 drop policy if exists badges_public_read on public.badges;

alter table public.badges enable row level security;

create policy badges_public_read on public.badges for select to anon, authenticated using ( true );

-- Duplicate index on badges.slug
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