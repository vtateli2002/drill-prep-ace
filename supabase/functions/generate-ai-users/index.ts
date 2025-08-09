import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-edge-secret',
}

// Realistic username patterns
const REALISTIC_USERNAMES = [
  'emilyNY', 'wizard101', 'tokyoSkier', 'jackson_17', 'HedgeKing', 'sloan.capital',
  'elToro', 'TaraMidwest', 'brooklynTrader', 'alphaCapital', 'dealMaker', 'wallStWolf',
  'techAnalyst', 'valueHunter', 'riskMgmt', 'portfolioAce', 'financeNinja', 'marketMaven',
  'bullishBear', 'cashFlowKing', 'equityQueen', 'bondTrader', 'debtKiller', 'yieldSeeker',
  'leverageLord', 'hedgeFund', 'privateEquity', 'ventureCap', 'ibanking', 'consulting',
  'mAndAmaster', 'lboExpert', 'dcfGuru', 'valuationPro', 'dealJunkie', 'spreadsheet',
  'excelWizard', 'modelMaster', 'pitchPerfect', 'dueDigger', 'synergyStar', 'irr_hunter',
  'npvNinja', 'waccWarrior', 'betaBuster', 'sharpeShooter', 'volTrader', 'optionsPro'
];

const generateRealisticUsername = (): string => {
  const patterns = [
    () => REALISTIC_USERNAMES[Math.floor(Math.random() * REALISTIC_USERNAMES.length)],
    () => `${['alex', 'sam', 'jordan', 'taylor', 'casey', 'riley'][Math.floor(Math.random() * 6)]}${Math.floor(Math.random() * 100)}`,
    () => `${['finance', 'deal', 'equity', 'bond', 'trade'][Math.floor(Math.random() * 5)]}_${['pro', 'ace', 'king', 'master', 'guru'][Math.floor(Math.random() * 5)]}`,
    () => `${['ny', 'sf', 'london', 'tokyo', 'chicago'][Math.floor(Math.random() * 5)]}${['trader', 'analyst', 'banker'][Math.floor(Math.random() * 3)]}`,
    () => `${['bull', 'bear', 'alpha', 'beta', 'gamma'][Math.floor(Math.random() * 5)]}.${['capital', 'fund', 'investments'][Math.floor(Math.random() * 3)]}`,
    () => `${['warren', 'peter', 'carl', 'ray', 'bill'][Math.floor(Math.random() * 5)]}${Math.floor(Math.random() * 1000)}`,
  ];
  
  const pattern = patterns[Math.floor(Math.random() * patterns.length)];
  return pattern();
};

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

  // Soft secret check: only enforce if header is sent
  const provided = req.headers.get('x-edge-secret')?.trim();
  const expected = (Deno.env.get('EDGE_CALLER_SECRET') ?? '').trim();
  if (provided !== undefined) {
    if (!expected || provided !== expected) {
      return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // First, check how many AI users already exist
    const { data: existingAI, error: checkError } = await supabase
      .from('profiles')
      .select('id')
      .eq('is_bot', true);

    if (checkError) {
      console.error('Error checking existing AI users:', checkError);
      return new Response(
        JSON.stringify({ error: 'Failed to check existing AI users' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const existingCount = existingAI?.length || 0;
    const usersToCreate = Math.max(0, 1000 - existingCount);

    if (usersToCreate === 0) {
      return new Response(
        JSON.stringify({ message: 'Already have 1000 AI users', existingCount }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Creating ${usersToCreate} new AI users (existing: ${existingCount})`);

    // Get current top 20 to ensure AI users stay below them
    const { data: topUsers, error: topError } = await supabase
      .from('profiles')
      .select('xp')
      .eq('is_bot', false)
      .order('xp', { ascending: false })
      .limit(20);

    if (topError) {
      console.error('Error fetching top users:', topError);
      return new Response(
        JSON.stringify({ error: 'Failed to fetch top users' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const minTopXP = topUsers && topUsers.length > 0 ? topUsers[topUsers.length - 1].xp : 3000;
    const maxAIXP = Math.max(100, minTopXP - 100); // Keep AI users at least 100 XP below top 20

    // Generate AI users in batches
    const batchSize = 100;
    const batches = Math.ceil(usersToCreate / batchSize);

    for (let batch = 0; batch < batches; batch++) {
      const currentBatchSize = Math.min(batchSize, usersToCreate - (batch * batchSize));
      const aiUsers = [];

      for (let i = 0; i < currentBatchSize; i++) {
        const xp = Math.floor(Math.random() * maxAIXP / 10) * 10; // Multiple of 10
        const level = Math.floor(xp / 100) + 1;
        const rank = calculateRank(level);
        
        aiUsers.push({
          id: crypto.randomUUID(),
          username: generateRealisticUsername(),
          xp,
          level,
          rank,
          profile_pic: `https://api.dicebear.com/7.x/avataaars/svg?seed=${crypto.randomUUID()}`,
          badges: [],
          streak: Math.floor(Math.random() * 10),
          track_progress: {
            accounting: { completed: Math.floor(Math.random() * 4), total: 4 },
            valuation: { completed: Math.floor(Math.random() * 4), total: 4 },
            lbo: { completed: Math.floor(Math.random() * 4), total: 4 },
            ma: { completed: Math.floor(Math.random() * 4), total: 4 }
          },
          difficulty_xp: {
            easy: Math.floor(xp * 0.3),
            medium: Math.floor(xp * 0.3),
            hard: Math.floor(xp * 0.2),
            interview_ready: Math.floor(xp * 0.2)
          },
          is_bot: true,
          rival_xp: 0,
          interview_deadline: null,
          rank_change: 0
        });
      }

      // Insert batch
      const { error: insertError } = await supabase
        .from('profiles')
        .insert(aiUsers);

      if (insertError) {
        console.error(`Error inserting batch ${batch + 1}:`, insertError);
        return new Response(
          JSON.stringify({ error: `Failed to insert batch ${batch + 1}` }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      console.log(`Inserted batch ${batch + 1}/${batches} (${currentBatchSize} users)`);
    }

    console.log(`Successfully created ${usersToCreate} AI users`);
    
    return new Response(
      JSON.stringify({ 
        message: `Successfully created ${usersToCreate} AI users`,
        totalAIUsers: existingCount + usersToCreate 
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in generate-ai-users function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
})