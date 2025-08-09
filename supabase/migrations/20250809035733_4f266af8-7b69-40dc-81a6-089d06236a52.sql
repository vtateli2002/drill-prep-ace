-- Award tier 1 badges (including quick_math) after a calculator event is inserted
-- Make idempotent by dropping any existing trigger first
DROP TRIGGER IF EXISTS after_calculator_event_award_badges ON public.calculator_events;

CREATE TRIGGER after_calculator_event_award_badges
AFTER INSERT ON public.calculator_events
FOR EACH ROW
EXECUTE FUNCTION public._trigger_check_and_award_tier1();