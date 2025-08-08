-- Strip digits from AI (bot) usernames and de-duplicate with letter suffixes
-- Safe, one-time cleanup that touches only is_bot=true rows
WITH bots AS (
  SELECT 
    id,
    username,
    -- Remove all digits; if result is empty, fallback to 'bot'
    CASE 
      WHEN regexp_replace(username, '\\d', '', 'g') = '' THEN 'bot'
      ELSE regexp_replace(username, '\\d', '', 'g')
    END AS cleaned
  FROM public.profiles
  WHERE is_bot = true AND username IS NOT NULL
),
ranked AS (
  SELECT 
    id,
    username,
    cleaned,
    ROW_NUMBER() OVER (PARTITION BY cleaned ORDER BY id) AS rn
  FROM bots
)
UPDATE public.profiles AS p
SET username = CASE 
  WHEN r.rn = 1 THEN r.cleaned
  ELSE r.cleaned || '_' || chr(96 + r.rn)  -- a, b, c ...
END
FROM ranked r
WHERE p.id = r.id
  AND p.username IS DISTINCT FROM (
    CASE WHEN r.rn = 1 THEN r.cleaned ELSE r.cleaned || '_' || chr(96 + r.rn) END
  );