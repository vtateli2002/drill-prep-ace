-- Seed Tier 2 (Associate) badges
SELECT public._upsert_badge('accounting_ace','Accounting Ace','20 correct in Accounting.',2,'book');
SELECT public._upsert_badge('valuation_veteran','Valuation Veteran','20 correct in Valuation.',2,'trending-up');
SELECT public._upsert_badge('ma_master','M&A Master','20 correct in M&A.',2,'git-merge');
SELECT public._upsert_badge('lbo_lead','LBO Lead','20 correct in LBO.',2,'briefcase');
SELECT public._upsert_badge('steady_gains','Steady Gains','Reach 2,000 XP.',2,'award');

-- Award logic for Tier 2
CREATE OR REPLACE FUNCTION public.check_and_award_tier2(p_user uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $$
begin
  -- Accounting Ace
  if (
    select count(*) from public.user_questions
    where user_id = p_user and solved_correctly = true and track = 'accounting'
  ) >= 20 then
    perform public._award_badge_if_missing(p_user, 'accounting_ace');
  end if;

  -- Valuation Veteran
  if (
    select count(*) from public.user_questions
    where user_id = p_user and solved_correctly = true and track = 'valuation'
  ) >= 20 then
    perform public._award_badge_if_missing(p_user, 'valuation_veteran');
  end if;

  -- M&A Master
  if (
    select count(*) from public.user_questions
    where user_id = p_user and solved_correctly = true and track = 'ma'
  ) >= 20 then
    perform public._award_badge_if_missing(p_user, 'ma_master');
  end if;

  -- LBO Lead
  if (
    select count(*) from public.user_questions
    where user_id = p_user and solved_correctly = true and track = 'lbo'
  ) >= 20 then
    perform public._award_badge_if_missing(p_user, 'lbo_lead');
  end if;

  -- Steady Gains (2,000 XP)
  if (
    select coalesce(xp, 0) from public.profiles where id = p_user
  ) >= 2000 then
    perform public._award_badge_if_missing(p_user, 'steady_gains');
  end if;
end;
$$;

-- Trigger to award Tier 2 after user_questions changes
CREATE OR REPLACE FUNCTION public._award_tier2_after_user_questions()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $$
begin
  perform public.check_and_award_tier2(new.user_id);
  return new;
end;
$$;

DROP TRIGGER IF EXISTS trg_award_tier2 ON public.user_questions;
CREATE TRIGGER trg_award_tier2
AFTER INSERT OR UPDATE ON public.user_questions
FOR EACH ROW EXECUTE FUNCTION public._award_tier2_after_user_questions();