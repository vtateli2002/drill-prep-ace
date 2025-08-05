import { supabase } from '@/integrations/supabase/client';

export const populateDummyUsers = async () => {
  try {
    console.log('Calling populate-dummy-users function...');
    
    const { data, error } = await supabase.functions.invoke('populate-dummy-users', {
      body: {}
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