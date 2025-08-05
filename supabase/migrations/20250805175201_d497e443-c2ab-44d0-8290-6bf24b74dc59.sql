-- Update existing unlocked badge descriptions in user profiles
UPDATE public.profiles 
SET badges = (
  SELECT jsonb_agg(
    CASE 
      WHEN badge->>'id' = 'accounting-apprentice' THEN 
        jsonb_set(badge, '{description}', '"Complete All Accounting Questions"')
      WHEN badge->>'id' = 'valuation-strategist' THEN 
        jsonb_set(badge, '{description}', '"Complete All Valuation Questions"')
      WHEN badge->>'id' = 'lbo-operator' THEN 
        jsonb_set(badge, '{description}', '"Complete All LBO Questions"')
      WHEN badge->>'id' = 'ma-architect' THEN 
        jsonb_set(badge, '{description}', '"Complete All M&A Questions"')
      WHEN badge->>'id' = 'all-track-master' THEN 
        jsonb_set(badge, '{description}', '"Complete All Questions in Every Track"')
      ELSE badge
    END
  )
  FROM jsonb_array_elements(badges) AS badge
)
WHERE badges IS NOT NULL 
AND badges != '[]'::jsonb 
AND NOT is_bot;