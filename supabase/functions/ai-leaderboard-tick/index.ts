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

// Build baseline XP targets for Top 20 as requested
function buildBaselineTargets(): number[] {
  const targets: number[] = [10000, 9000, 8000]
  // 17 values between 5000 and 7000 (inclusive), ensure some spread to avoid ties
  for (let i = 0; i < 17; i++) {
    const val = 5000 + Math.floor(Math.random() * 2001) // 5000-7000
    targets.push(val)
  }
  return targets
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

    // 1) Fetch AI rivals (bots)
    const { data: bots, error: botsError } = await supabase
      .from('profiles')
      .select('id, xp')
      .eq('is_bot', true)

    if (botsError) {
      console.error('Error fetching AI rivals:', botsError)
      return new Response(JSON.stringify({ error: 'Failed to fetch AI rivals' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    if (!bots || bots.length === 0) {
      return new Response(JSON.stringify({ message: 'No AI rivals found' }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // 2) Determine baseline targets for shaping Top 20 (non-decreasing only)
    const baselineTargets = buildBaselineTargets()

    // Sort bots by current XP desc to assign baseline to top N bots
    const sortedBots = [...bots].sort((a, b) => b.xp - a.xp)

    const nowISO = new Date().toISOString()
    const updates = sortedBots.map((bot, idx) => {
      const baseIncrease = 10 + Math.floor(Math.random() * 21) // 10-30
      // Seed target for top 20 bots only; others just get incremental gains
      const seedTarget = idx < 20 ? baselineTargets[idx] : undefined
      const targetXP = seedTarget !== undefined ? Math.max(bot.xp + baseIncrease, seedTarget) : bot.xp + baseIncrease
      const newXP = Math.max(bot.xp, targetXP) // never decrease
      const newLevel = calculateLevelFromXP(newXP)
      return { id: bot.id, xp: newXP, level: newLevel, updated_at: nowISO }
    })

    // 3) Persist updates in batches
    const batchSize = 50
    for (let i = 0; i < updates.length; i += batchSize) {
      const batch = updates.slice(i, i + batchSize)
      for (const u of batch) {
        const { error: upErr } = await supabase
          .from('profiles')
          .update({ xp: u.xp, level: u.level, updated_at: u.updated_at })
          .eq('id', u.id)
        if (upErr) {
          console.error('Failed to update bot', u.id, upErr)
        }
      }
    }

    // 4) Trigger rank change recalculation (existing edge function)
    try {
      // Using functions.invoke keeps everything within Supabase infra
      const { error: invokeErr } = await supabase.functions.invoke('update-rank-changes', { body: {} })
      if (invokeErr) console.error('Failed to invoke update-rank-changes:', invokeErr)
    } catch (e) {
      console.error('Error invoking update-rank-changes:', e)
    }

    return new Response(
      JSON.stringify({ success: true, updated: updates.length }),
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
