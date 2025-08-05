import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const calculateRank = (level: number): string => {
  if (level >= 50) return 'Partner';
  if (level >= 40) return 'Managing Director';
  if (level >= 30) return 'Vice President';
  if (level >= 20) return 'Associate';
  if (level >= 10) return 'Analyst';
  return 'Intern';
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Get all AI users
    const { data: aiUsers, error: fetchError } = await supabase
      .from('profiles')
      .select('id, xp, level, rank')
      .eq('is_bot', true);

    if (fetchError) {
      console.error('Error fetching AI users:', fetchError);
      return new Response(
        JSON.stringify({ error: 'Failed to fetch AI users' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!aiUsers || aiUsers.length === 0) {
      return new Response(
        JSON.stringify({ message: 'No AI users found' }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get current top 20 real users to ensure AI stays below
    const { data: topRealUsers, error: topError } = await supabase
      .from('profiles')
      .select('xp')
      .eq('is_bot', false)
      .order('xp', { ascending: false })
      .limit(20);

    if (topError) {
      console.error('Error fetching top real users:', topError);
      return new Response(
        JSON.stringify({ error: 'Failed to fetch top real users' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const minTopXP = topRealUsers && topRealUsers.length > 0 ? topRealUsers[topRealUsers.length - 1].xp : 3000;
    const maxAIXP = Math.max(100, minTopXP - 50); // Keep AI users at least 50 XP below top 20

    // Randomly select 50-100 AI users to update
    const usersToUpdate = Math.floor(Math.random() * 51) + 50; // 50-100
    const shuffledUsers = aiUsers.sort(() => 0.5 - Math.random()).slice(0, usersToUpdate);

    const updates = shuffledUsers.map(user => {
      // Small XP increase (10-50, multiple of 10)
      const xpIncrease = (Math.floor(Math.random() * 5) + 1) * 10; // 10, 20, 30, 40, or 50
      const newXP = Math.min(user.xp + xpIncrease, maxAIXP);
      const newLevel = Math.floor(newXP / 100) + 1;
      const newRank = calculateRank(newLevel);

      return {
        id: user.id,
        xp: newXP,
        level: newLevel,
        rank: newRank,
        updated_at: new Date().toISOString()
      };
    });

    // Update users in batches
    const batchSize = 50;
    const batches = Math.ceil(updates.length / batchSize);

    for (let i = 0; i < batches; i++) {
      const batch = updates.slice(i * batchSize, (i + 1) * batchSize);
      
      for (const update of batch) {
        const { error: updateError } = await supabase
          .from('profiles')
          .update({
            xp: update.xp,
            level: update.level,
            rank: update.rank,
            updated_at: update.updated_at
          })
          .eq('id', update.id);

        if (updateError) {
          console.error(`Error updating user ${update.id}:`, updateError);
        }
      }
    }

    console.log(`Updated ${updates.length} AI users`);
    
    return new Response(
      JSON.stringify({ 
        message: `Updated ${updates.length} AI users`,
        usersUpdated: updates.length
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in update-ai-leaderboard function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
})