-- Harden function search_path for linter compliance
CREATE OR REPLACE FUNCTION public._normalized_track(p text)
RETURNS text
LANGUAGE sql
IMMUTABLE
SET search_path TO ''
AS $$
  select case
    when p ilike 'accounting%' then 'accounting'
    when p ilike 'valuation%'  then 'valuation'
    when p ~* 'm.?&.?a' or p ilike 'ma%' then 'mna'
    when p ilike 'lbo%'        then 'lbo'
    else null
  end
$$;