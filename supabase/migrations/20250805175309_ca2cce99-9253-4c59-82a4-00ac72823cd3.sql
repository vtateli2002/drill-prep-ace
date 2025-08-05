-- Update existing unlocked badge descriptions in user profiles
-- Convert json to jsonb for processing, then back to json
UPDATE public.profiles 
SET badges = (
  SELECT json_agg(
    CASE 
      WHEN badge->>'id' = 'accounting-apprentice' THEN 
        json_build_object(
          'id', badge->>'id',
          'name', badge->>'name', 
          'emoji', badge->>'emoji',
          'description', 'Complete All Accounting Questions',
          'type', badge->>'type',
          'unlocked', (badge->>'unlocked')::boolean
        )
      WHEN badge->>'id' = 'valuation-strategist' THEN 
        json_build_object(
          'id', badge->>'id',
          'name', badge->>'name', 
          'emoji', badge->>'emoji',
          'description', 'Complete All Valuation Questions',
          'type', badge->>'type',
          'unlocked', (badge->>'unlocked')::boolean
        )
      WHEN badge->>'id' = 'lbo-operator' THEN 
        json_build_object(
          'id', badge->>'id',
          'name', badge->>'name', 
          'emoji', badge->>'emoji',
          'description', 'Complete All LBO Questions',
          'type', badge->>'type',
          'unlocked', (badge->>'unlocked')::boolean
        )
      WHEN badge->>'id' = 'ma-architect' THEN 
        json_build_object(
          'id', badge->>'id',
          'name', badge->>'name', 
          'emoji', badge->>'emoji',
          'description', 'Complete All M&A Questions',
          'type', badge->>'type',
          'unlocked', (badge->>'unlocked')::boolean
        )
      WHEN badge->>'id' = 'all-track-master' THEN 
        json_build_object(
          'id', badge->>'id',
          'name', badge->>'name', 
          'emoji', badge->>'emoji',
          'description', 'Complete All Questions in Every Track',
          'type', badge->>'type',
          'unlocked', (badge->>'unlocked')::boolean
        )
      ELSE badge
    END
  )
  FROM json_array_elements(badges) AS badge
)
WHERE badges IS NOT NULL 
AND json_array_length(badges) > 0
AND NOT is_bot;