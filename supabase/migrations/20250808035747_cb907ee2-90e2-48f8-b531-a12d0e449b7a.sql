-- Retry: strip digits from bot usernames and dedupe with letter suffixes (cast for chr)
WITH bots AS (
  SELECT 
    id,
    username,
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
  ELSE r.cleaned || '_' || chr((96 + r.rn)::int)  -- a, b, c ...
END
FROM ranked r
WHERE p.id = r.id
  AND p.username IS DISTINCT FROM (
    CASE WHEN r.rn = 1 THEN r.cleaned ELSE r.cleaned || '_' || chr((96 + r.rn)::int) END
  );