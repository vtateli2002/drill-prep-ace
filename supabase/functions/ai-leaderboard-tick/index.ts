import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Level calculation consistent with DB function calculate_level_from_xp
const calculateLevelFromXP = (totalXP: number): number => {
  let level = 1
  let cumulative = 0
  while (true) {
    const levelXP = (100 * level) + (level * level * 5)
    cumulative += levelXP
    if (totalXP < cumulative) return level
    level += 1
    if (level > 100) return 100
  }
}

// Title calculation consistent with DB function calculate_title_from_rank
const calculateTitleFromRank = (userRank: number, totalUsers: number): string => {
  if (userRank === 1) return 'CEO'
  if (userRank === 2) return 'CFO'
  if (userRank === 3) return 'CIO'
  const percentile = (1 - (userRank - 1) / totalUsers) * 100
  if (percentile >= 99.9) return 'Partner'
  if (percentile >= 99) return 'Managing Director'
  if (percentile >= 95) return 'Vice President'
  if (percentile >= 90) return 'Associate'
  if (percentile >= 80) return 'Analyst'
  return 'Intern'
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // 1) Snapshot previous rankings (across ALL users)
    const { data: prevList, error: prevErr } = await supabase
      .from('profiles')
      .select('id, xp')
      .order('xp', { ascending: false })

    if (prevErr) {
      console.error('Failed to fetch previous rankings:', prevErr)
      return new Response(JSON.stringify({ error: 'Failed to fetch previous rankings' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const prevRankMap = new Map<string, number>()
    prevList?.forEach((u, idx) => prevRankMap.set(u.id, idx + 1))

    // 2) Fetch AI users (bots) and increment XP by +10..+30 only
    const { data: bots, error: botsErr } = await supabase
      .from('profiles')
      .select('id, xp')
      .eq('is_bot', true)

    if (botsErr) {
      console.error('Failed to fetch AI users:', botsErr)
      return new Response(JSON.stringify({ error: 'Failed to fetch AI users' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const nowISO = new Date().toISOString()
    const botUpdates = (bots ?? []).map((b) => {
      const inc = 10 + Math.floor(Math.random() * 21) // 10..30
      const newXP = Math.max(0, (b.xp ?? 0) + inc)
      const newLevel = calculateLevelFromXP(newXP)
      return { id: b.id as string, xp: newXP, level: newLevel, updated_at: nowISO }
    })

    // 3) Persist bot XP/level updates in batches
    const batchSize = 100
    for (let i = 0; i < botUpdates.length; i += batchSize) {
      const batch = botUpdates.slice(i, i + batchSize)
      for (const u of batch) {
        const { error: upErr } = await supabase
          .from('profiles')
          .update({ xp: u.xp, level: u.level, updated_at: u.updated_at })
          .eq('id', u.id)
        if (upErr) console.error('Failed to update bot', u.id, upErr)
      }
    }

    // 4) Compute new rankings and rank changes (all users)
    const { data: currList, error: currErr } = await supabase
      .from('profiles')
      .select('id, xp')
      .order('xp', { ascending: false })

    if (currErr) {
      console.error('Failed to fetch current rankings:', currErr)
      return new Response(JSON.stringify({ error: 'Failed to fetch current rankings' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const totalUsers = currList?.length ?? 0
    const rankUpdates = (currList ?? []).map((u, idx) => {
      const currentRank = idx + 1
      const prevRank = prevRankMap.get(u.id as string) ?? currentRank
      const rankChange = prevRank - currentRank // + => improved
      const newTitle = calculateTitleFromRank(currentRank, totalUsers)
      return { id: u.id as string, rank_change: rankChange, rank: newTitle }
    })

    for (let i = 0; i < rankUpdates.length; i += batchSize) {
      const batch = rankUpdates.slice(i, i + batchSize)
      for (const u of batch) {
        const { error: upErr } = await supabase
          .from('profiles')
          .update({ rank_change: u.rank_change, rank: u.rank, updated_at: nowISO })
          .eq('id', u.id)
        if (upErr) console.error('Failed to update rank change', u.id, upErr)
      }
    }

    console.log(`Updated ${botUpdates.length} AI users; recalculated rank changes for ${rankUpdates.length} users`)

    return new Response(
      JSON.stringify({ success: true, botsUpdated: botUpdates.length, ranksRecalculated: rankUpdates.length }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (e) {
    console.error('ai-leaderboard-tick error:', e)
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})