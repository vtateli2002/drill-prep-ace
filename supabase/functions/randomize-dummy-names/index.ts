import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-edge-secret',
};

// Enhanced realistic username generation
const generateRealisticUsername = (): string => {
  const firstNames = [
    'alex', 'taylor', 'jordan', 'morgan', 'casey', 'riley', 'jamie', 'sage', 'blake', 'drew',
    'chris', 'sam', 'quinn', 'dana', 'lane', 'remy', 'sage', 'kai', 'devon', 'emery',
    'sarah', 'mike', 'emily', 'david', 'jessica', 'john', 'amanda', 'ryan', 'lisa', 'kevin',
    'lauren', 'jason', 'nicole', 'brian', 'maria', 'steve', 'jenny', 'mark', 'anna', 'paul',
    'rachel', 'tim', 'sophia', 'luke', 'nina', 'noah', 'ivy', 'leo', 'zoe', 'max'
  ];
  
  const lastNames = [
    'smith', 'johnson', 'brown', 'davis', 'miller', 'wilson', 'garcia', 'martinez', 'lopez',
    'anderson', 'taylor', 'thomas', 'moore', 'martin', 'lee', 'walker', 'hall', 'allen',
    'young', 'king', 'wright', 'scott', 'green', 'baker', 'adams', 'nelson', 'carter',
    'mitchell', 'perez', 'roberts', 'turner', 'phillips', 'campbell', 'parker', 'evans'
  ];
  
  const locations = [
    'ny', 'london', 'tokyo', 'la', 'sf', 'chicago', 'miami', 'boston', 'austin', 'seattle',
    'denver', 'atlanta', 'vegas', 'phoenix', 'dallas', 'houston', 'paris', 'berlin', 'hk'
  ];
  
  const financeTerms = [
    'trader', 'analyst', 'quant', 'funds', 'equity', 'bond', 'forex', 'hedge', 'alpha',
    'beta', 'cap', 'bull', 'bear', 'vol', 'risk', 'yield', 'debt', 'cash', 'flow'
  ];
  
  const patterns = [
    // Name + Location
    () => `${firstNames[Math.floor(Math.random() * firstNames.length)]}${locations[Math.floor(Math.random() * locations.length)]}`,
    
    // FirstName + LastName
    () => `${firstNames[Math.floor(Math.random() * firstNames.length)]}_${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
    
    // Finance term + Name
    () => `${financeTerms[Math.floor(Math.random() * financeTerms.length)]}${firstNames[Math.floor(Math.random() * firstNames.length)]}`,
    
    // Name + Finance term
    () => `${firstNames[Math.floor(Math.random() * firstNames.length)]}${financeTerms[Math.floor(Math.random() * financeTerms.length)]}`,
    
    // Creative combinations
    () => `${firstNames[Math.floor(Math.random() * firstNames.length)]}.${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
    
    // Professional style
    () => `${firstNames[Math.floor(Math.random() * firstNames.length)]}${Math.floor(Math.random() * 99) + 1}`,
    
    // Finance themed
    () => `${financeTerms[Math.floor(Math.random() * financeTerms.length)]}${financeTerms[Math.floor(Math.random() * financeTerms.length)]}`,
    
    // Location + term
    () => `${locations[Math.floor(Math.random() * locations.length)]}${financeTerms[Math.floor(Math.random() * financeTerms.length)]}`
  ];
  
  const selectedPattern = patterns[Math.floor(Math.random() * patterns.length)];
  return selectedPattern();
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
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    console.log('Starting dummy name randomization...');

    // Get all bot users
    const { data: botUsers, error: fetchError } = await supabaseClient
      .from('profiles')
      .select('id, username')
      .eq('is_bot', true);

    if (fetchError) {
      throw fetchError;
    }

    if (!botUsers || botUsers.length === 0) {
      return new Response(
        JSON.stringify({ message: 'No bot users found' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Found ${botUsers.length} bot users to update`);

    // Generate new unique usernames
    const usedNames = new Set<string>();
    const updates = [];

    for (const user of botUsers) {
      let newUsername;
      let attempts = 0;
      
      // Generate unique username
      do {
        newUsername = generateRealisticUsername();
        attempts++;
      } while (usedNames.has(newUsername) && attempts < 50);
      
      usedNames.add(newUsername);
      updates.push({
        id: user.id,
        username: newUsername
      });
    }

    // Update usernames in batches
    const batchSize = 100;
    let updatedCount = 0;

    for (let i = 0; i < updates.length; i += batchSize) {
      const batch = updates.slice(i, i + batchSize);
      
      for (const update of batch) {
        const { error: updateError } = await supabaseClient
          .from('profiles')
          .update({ username: update.username })
          .eq('id', update.id);

        if (updateError) {
          console.error(`Error updating user ${update.id}:`, updateError);
        } else {
          updatedCount++;
        }
      }
    }

    console.log(`Successfully updated ${updatedCount} usernames`);

    return new Response(
      JSON.stringify({ 
        message: `Successfully randomized ${updatedCount} dummy user names`,
        updated: updatedCount,
        total: botUsers.length
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in randomize-dummy-names function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});