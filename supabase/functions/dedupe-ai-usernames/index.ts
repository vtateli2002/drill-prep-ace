// Normalize bot usernames to one word (letters only) with optional numeric suffix for uniqueness.
// Ensures no duplicates among bots and avoids collisions with human usernames.
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.53.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

function lettersOnly(input: string) {
  return (input || '').toLowerCase().replace(/[^a-z]/g, '')
}

function pickBaseFromUsername(username: string): string {
  const raw = (username || '').toLowerCase()
  // Split on non-letters and pick the longest token >=3; fallback to first token
  const tokens = raw.split(/[^a-z]+/).filter(Boolean)
  if (tokens.length === 0) return ''
  const long = [...tokens].sort((a, b) => b.length - a.length)[0]
  const candidate = lettersOnly(long)
  return candidate.length >= 3 ? candidate : lettersOnly(tokens[0])
}

const FALLBACK_NAMES = [
  'alex','sam','taylor','jordan','casey','quinn','riley','parker','avery','morgan','cameron','drew','jamie','reese','blake','emerson','hayden','rowan','sage','elliot','micah','logan','skyler','finley','harper','mason','ella','leo','nora','chase','ryan','carter','luca','miles','felix','river','phoenix','wren','nova','kai','aria','sloan','jude','lena','zara','reed','jett','lena','piper','remy'
]

function* fallbackNameGen(used: Set<string>) {
  let i = 0
  while (true) {
    const base = FALLBACK_NAMES[i % FALLBACK_NAMES.length]
    let name = base
    if (used.has(name)) {
      // Find smallest available numeric suffix starting from 2
      let n = 2
      while (used.has(`${base}${n}`)) n++
      name = `${base}${n}`
    }
    used.add(name)
    yield name
    i++
  }
}

function uniqueName(base: string, used: Set<string>): string {
  const b = lettersOnly(base)
  const validBase = b && b.length >= 3 ? b : ''
  if (validBase) {
    if (!used.has(validBase)) {
      used.add(validBase)
      return validBase
    }
    // Find smallest available numeric suffix starting at 2
    let n = 2
    while (used.has(`${validBase}${n}`)) n++
    const candidate = `${validBase}${n}`
    used.add(candidate)
    return candidate
  }
  // Fallback pool
  const gen = fallbackNameGen(used)
  return gen.next().value as string
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders })

  const SUPABASE_URL = Deno.env.get('SUPABASE_URL')
  const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
  if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
    return new Response(JSON.stringify({ error: 'Missing Supabase env vars' }), { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } })
  }

  const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)

  try {
    // Load ALL usernames to avoid collisions with humans
    const { data: allProfiles, error: allErr } = await supabase
      .from('profiles')
      .select('id, username, is_bot')
    if (allErr) throw allErr

    const used = new Set<string>()
    for (const p of allProfiles || []) {
      const uname = (p.username || '').toString().trim()
      if (!uname) continue
      used.add(uname.toLowerCase())
    }

    // Prepare updates for bots only
    const updates: { id: string; username: string }[] = []
    for (const p of allProfiles || []) {
      if (!p.is_bot) continue
      const current = (p.username || '').toString().trim().toLowerCase()
      const base = pickBaseFromUsername(current)
      let next = uniqueName(base, used)
      // If current already equals next and follows one-word-with-optional-number rule, skip
      const isOneWord = /^[a-z]+[0-9]*$/.test(current)
      if (isOneWord && current === next) continue
      // Ensure we don't set to empty by accident
      if (!next) continue
      updates.push({ id: p.id as string, username: next })
    }

    // Batch updates to avoid timeouts
    let updated = 0
    const batchSize = 200
    for (let i = 0; i < updates.length; i += batchSize) {
      const batch = updates.slice(i, i + batchSize)
      const promises = batch.map((u) =>
        supabase.from('profiles').update({ username: u.username }).eq('id', u.id)
      )
      const results = await Promise.all(promises)
      results.forEach((r) => { if (!r.error) updated++ })
    }

    return new Response(
      JSON.stringify({ processed: allProfiles?.length ?? 0, updated, note: 'Bot usernames normalized to one word with numeric suffix if needed.' }),
      { headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    )
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } })
  }
})
