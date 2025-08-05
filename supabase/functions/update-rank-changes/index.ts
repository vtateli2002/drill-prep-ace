import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Store previous rankings
    const { data: previousRankings, error: prevError } = await supabase
      .from('profiles')
      .select('id, xp')
      .order('xp', { ascending: false });

    if (prevError) {
      console.error('Error fetching previous rankings:', prevError);
      return new Response(
        JSON.stringify({ error: 'Failed to fetch previous rankings' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Create mapping of user ID to previous rank
    const prevRankMap = new Map();
    previousRankings?.forEach((user, index) => {
      prevRankMap.set(user.id, index + 1);
    });

    // Get current rankings after AI updates
    const { data: currentRankings, error: currError } = await supabase
      .from('profiles')
      .select('id, xp')
      .order('xp', { ascending: false });

    if (currError) {
      console.error('Error fetching current rankings:', currError);
      return new Response(
        JSON.stringify({ error: 'Failed to fetch current rankings' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Calculate rank changes and update
    const updates = [];
    currentRankings?.forEach((user, index) => {
      const currentRank = index + 1;
      const previousRank = prevRankMap.get(user.id) || currentRank;
      const rankChange = previousRank - currentRank; // Positive = moved up, negative = moved down

      updates.push({
        id: user.id,
        rank_change: rankChange
      });
    });

    // Update rank changes in batches
    const batchSize = 50;
    const batches = Math.ceil(updates.length / batchSize);

    for (let i = 0; i < batches; i++) {
      const batch = updates.slice(i * batchSize, (i + 1) * batchSize);
      
      for (const update of batch) {
        const { error: updateError } = await supabase
          .from('profiles')
          .update({ rank_change: update.rank_change })
          .eq('id', update.id);

        if (updateError) {
          console.error(`Error updating rank change for ${update.id}:`, updateError);
        }
      }
    }

    console.log(`Updated rank changes for ${updates.length} users`);
    
    return new Response(
      JSON.stringify({ 
        message: `Updated rank changes for ${updates.length} users`,
        updatesProcessed: updates.length
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in update-rank-changes function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
})