import { supabase } from '@/integrations/supabase/client';
import { featureFlags } from '@/config/featureFlags';

export const populateDummyUsers = async () => {
  try {
    console.log('Calling populate-dummy-users function...');

    // Optional: send edge secret header when locally configured and flag is on
    const headers: Record<string, string> = {};
    try {
      if (featureFlags.ENABLE_EDGE_SECRET_HEADER && typeof localStorage !== 'undefined') {
        const s = localStorage.getItem('EDGE_CALLER_SECRET');
        if (s) headers['x-edge-secret'] = s;
      }
    } catch {}
    
    const { data, error } = await supabase.functions.invoke('populate-dummy-users', {
      body: {},
      headers: Object.keys(headers).length ? headers : undefined
    });

    if (error) {
      console.error('Error calling function:', error);
      throw error;
    }

    console.log('Function response:', data);
    return data;
  } catch (error) {
    console.error('Failed to populate dummy users:', error);
    throw error;
  }
};

// Auto-execute when this file is imported
populateDummyUsers()
  .then((result) => {
    console.log('✅ Successfully populated dummy users:', result);
  })
  .catch((error) => {
    console.error('❌ Failed to populate dummy users:', error);
  });