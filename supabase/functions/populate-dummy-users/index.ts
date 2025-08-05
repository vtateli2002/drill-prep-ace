import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface DummyUser {
  username: string;
  xp: number;
  level: number;
  rank: string;
  is_bot: boolean;
  streak: number;
  badges: any[];
  track_progress: any;
  difficulty_xp: any;
  rival_xp: number;
}

// Human-like usernames with variety
const generateUsername = (): string => {
  const patterns = [
    // Name + number patterns
    'emily123', 'michael_87', 'sarah.finance', 'david_trader', 'jessica99',
    'andrew_cfa', 'rachel_mba', 'kevin_wall', 'nicole.inv', 'brandon42',
    
    // Word combinations
    'wizardof_wall', 'financeflex', 'stealtheagle', 'cashflow_king', 'dealmaker',
    'valuation_pro', 'merger_master', 'excel_ninja', 'hedge_hunter', 'buyout_boss',
    'equity_ace', 'debt_destroyer', 'model_monster', 'pitch_perfect', 'goldman_girl',
    
    // Tech-style names
    'quantjock', 'fintech_fan', 'algo_trader', 'data_dude', 'code_crusher',
    'byte_banker', 'crypto_cat', 'blockchain_bro', 'ai_analyst', 'tech_titan',
    
    // Finance-themed
    'irr_calculator', 'dcf_master', 'ebitda_expert', 'wacc_warrior', 'beta_boss',
    'pe_predator', 'vc_victor', 'hedge_hero', 'credit_crusher', 'risk_ruler',
    
    // Creative combinations
    'moonshot_mike', 'rocket_rachel', 'stellar_steve', 'cosmic_cathy', 'orbit_oscar',
    'galaxy_grace', 'nebula_nick', 'meteor_mary', 'saturn_sam', 'venus_victor',
    
    // Professional vibes
    'suit_steve', 'tie_tommy', 'brief_betty', 'deck_david', 'pivot_paul',
    'synergy_sue', 'growth_gary', 'scale_sally', 'lean_leo', 'agile_amy'
  ];
  
  const randomPattern = patterns[Math.floor(Math.random() * patterns.length)];
  const randomSuffix = Math.random() < 0.3 ? Math.floor(Math.random() * 9999) : '';
  
  return randomPattern + randomSuffix;
};

const calculateRank = (userRank: number, totalUsers: number): string => {
  // Special titles for top 3
  if (userRank === 1) return 'CEO';
  if (userRank === 2) return 'CFO';
  if (userRank === 3) return 'CIO';
  
  // Calculate percentile (higher rank = lower percentile)
  const percentile = (1.0 - (userRank - 1.0) / totalUsers) * 100;
  
  // Assign titles based on percentile
  if (percentile >= 99.9) return 'Partner';
  if (percentile >= 99) return 'Managing Director';
  if (percentile >= 95) return 'Vice President';
  if (percentile >= 90) return 'Associate';
  if (percentile >= 80) return 'Analyst';
  return 'Intern';
};

const calculateLevelFromXP = (xp: number): number => {
  let level = 1;
  let cumulativeXPRequired = 0;
  
  while (true) {
    const levelXPRequired = (100 * level) + (level * level * 5);
    cumulativeXPRequired += levelXPRequired;
    
    if (xp < cumulativeXPRequired) {
      return level;
    }
    
    level++;
    
    if (level > 100) return 100;
  }
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    console.log('Starting dummy user population...');

    // First, delete existing dummy users
    await supabase
      .from('profiles')
      .delete()
      .eq('is_bot', true);

    console.log('Deleted existing dummy users');

    // Generate 1000 dummy users
    const dummyUsers: DummyUser[] = [];
    const usedUsernames = new Set<string>();

    for (let i = 0; i < 1000; i++) {
      let username = generateUsername();
      
      // Ensure unique usernames
      while (usedUsernames.has(username)) {
        username = generateUsername() + Math.floor(Math.random() * 999);
      }
      usedUsernames.add(username);

      // Random XP between 50 and 2980 (below 3000 as requested)
      const xp = Math.floor(Math.random() * 2930) + 50;
      const level = calculateLevelFromXP(xp);

      const user: DummyUser = {
        username,
        xp,
        level,
        rank: 'Intern', // Will be updated after sorting
        is_bot: true,
        streak: Math.floor(Math.random() * 30),
        badges: [],
        track_progress: {
          accounting: { completed: Math.floor(Math.random() * 5), total: 4 },
          valuation: { completed: Math.floor(Math.random() * 5), total: 4 },
          lbo: { completed: Math.floor(Math.random() * 5), total: 4 },
          ma: { completed: Math.floor(Math.random() * 5), total: 4 }
        },
        difficulty_xp: {
          easy: Math.floor(Math.random() * (xp * 0.3)),
          medium: Math.floor(Math.random() * (xp * 0.3)),
          hard: Math.floor(Math.random() * (xp * 0.3)),
          interview_ready: Math.floor(Math.random() * (xp * 0.2))
        },
        rival_xp: 0
      };

      dummyUsers.push(user);
    }

    // Sort by XP and assign ranks
    dummyUsers.sort((a, b) => b.xp - a.xp);
    dummyUsers.forEach((user, index) => {
      user.rank = calculateRank(index + 1, dummyUsers.length);
    });

    console.log('Generated and sorted dummy users');

    // Insert dummy users in batches to avoid timeout
    const batchSize = 100;
    for (let i = 0; i < dummyUsers.length; i += batchSize) {
      const batch = dummyUsers.slice(i, i + batchSize);
      
      const { error } = await supabase
        .from('profiles')
        .insert(batch.map(user => ({
          id: crypto.randomUUID(),
          username: user.username,
          xp: user.xp,
          level: user.level,
          rank: user.rank,
          is_bot: user.is_bot,
          streak: user.streak,
          badges: user.badges,
          track_progress: user.track_progress,
          difficulty_xp: user.difficulty_xp,
          rival_xp: user.rival_xp,
          profile_pic: `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`
        })));

      if (error) {
        console.error(`Error inserting batch ${i / batchSize + 1}:`, error);
        throw error;
      }

      console.log(`Inserted batch ${i / batchSize + 1}/${Math.ceil(dummyUsers.length / batchSize)}`);
    }

    // Now update ranks for all real users too
    const { data: allUsers, error: fetchError } = await supabase
      .from('profiles')
      .select('id, xp, is_bot')
      .order('xp', { ascending: false });

    if (fetchError) throw fetchError;

    const totalUsers = allUsers.length;
    
    // Update ranks for all users (including real users)
    for (let i = 0; i < allUsers.length; i++) {
      const user = allUsers[i];
      const newRank = calculateRank(i + 1, totalUsers);
      
      await supabase
        .from('profiles')
        .update({ rank: newRank })
        .eq('id', user.id);
    }

    console.log('Updated ranks for all users');

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `Successfully populated ${dummyUsers.length} dummy users and updated all ranks`
      }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    );
  }
});