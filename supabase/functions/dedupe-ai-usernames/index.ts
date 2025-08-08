// Dedupe AI usernames (is_bot=true) ensuring believable, unique names
// CORS + service role client, safe to call from the app
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.53.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

function titleCase(s: string) {
  return s
    .toLowerCase()
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

const FIRST_NAMES = [
  'Alex','Sam','Taylor','Jordan','Casey','Quinn','Riley','Parker','Avery','Morgan','Cameron','Drew','Jamie','Kendall','Reese','Blake','Emerson','Hayden','Rowan','Sage','Elliot','Micah','Logan','Skyler','Finley','Harper','Noah','Liam','Mia','Zoe','Chloe','Aiden','Ethan','Olivia','Ava','Isla','Mason','Ella','Leo','Nora'
];
const LAST_NAMES = [
  'Adler','Bennett','Carter','Dalton','Ellis','Foster','Greene','Hayes','Irving','Jensen','Keaton','Lawson','Mitchell','Nolan','Owens','Prescott','Quincy','Reynolds','Sawyer','Thompson','Underwood','Vaughn','Walker','Xavier','Young','Zimmer','Hughes','Carver','Bishop','Porter','Klein','Hart','Banks','Shaw','Ford','Stone','Webb','Wade','Lane','Cole'
];

function* nameGenerator(existing: Set<string>) {
  const max = FIRST_NAMES.length * LAST_NAMES.length * 3;
  let i = 0;
  while (i < max) {
    const first = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
    const last = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
    let candidate = `${first} ${last}`;
    if (!existing.has(candidate.toLowerCase())) {
      yield candidate;
      existing.add(candidate.toLowerCase());
    }
    // fallback with middle initial if collision persists
    const initial = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    candidate = `${first} ${initial}. ${last}`;
    if (!existing.has(candidate.toLowerCase())) {
      yield candidate;
      existing.add(candidate.toLowerCase());
    }
    // last resort: add a number
    const num = 10 + Math.floor(Math.random() * 89);
    candidate = `${first} ${last} ${num}`;
    if (!existing.has(candidate.toLowerCase())) {
      yield candidate;
      existing.add(candidate.toLowerCase());
    }
    i++;
  }
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
  const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
    return new Response(JSON.stringify({ error: 'Missing Supabase env vars' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

  try {
    const { data: allProfiles, error } = await supabase
      .from('profiles')
      .select('id, username, is_bot')
      .order('username');

    if (error) throw error;

    const existingLower = new Set<string>();
    for (const p of allProfiles || []) {
      if (p.username) existingLower.add(String(p.username).trim().toLowerCase());
    }

    // group bot usernames by normalized value
    const groups = new Map<string, string[]>();
    for (const p of allProfiles || []) {
      if (!p.is_bot) continue;
      const uname = (p.username || '').toString();
      const norm = uname.trim().toLowerCase();
      if (!norm) continue;
      if (!groups.has(norm)) groups.set(norm, []);
      groups.get(norm)!.push(p.id);
    }

    let duplicatesFound = 0;
    const updates: { id: string; username: string }[] = [];
    const gen = nameGenerator(existingLower);

    for (const [, ids] of groups) {
      if (ids.length <= 1) continue;
      duplicatesFound += ids.length - 1;
      // keep first as-is; reassign the rest
      for (let i = 1; i < ids.length; i++) {
        const next = gen.next();
        if (next.done) break;
        const newName = titleCase(next.value);
        updates.push({ id: ids[i], username: newName });
      }
    }

    // perform updates
    let updated = 0;
    for (const u of updates) {
      const { error: upErr } = await supabase
        .from('profiles')
        .update({ username: u.username })
        .eq('id', u.id);
      if (!upErr) updated++;
    }

    const result = { duplicatesFound, updated };
    return new Response(JSON.stringify(result), {
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
});
