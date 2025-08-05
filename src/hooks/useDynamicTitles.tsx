import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useDynamicTitles = () => {
  const [isUpdating, setIsUpdating] = useState(false);

  const updateAllUserTitles = async () => {
    if (isUpdating) return;
    
    setIsUpdating(true);
    try {
      // Get all users ordered by XP
      const { data: users, error } = await supabase
        .from('profiles')
        .select('id, xp')
        .order('xp', { ascending: false });

      if (error || !users) {
        console.error('Error fetching users for title update:', error);
        return;
      }

      const totalUsers = users.length;
      const updates: { id: string; rank: string }[] = [];

      users.forEach((user, index) => {
        const userRank = index + 1;
        let title: string;

        // Special titles for top 3
        if (userRank === 1) {
          title = 'CEO';
        } else if (userRank === 2) {
          title = 'CFO';
        } else if (userRank === 3) {
          title = 'CIO';
        } else {
          // Calculate percentile-based title
          const percentile = (1.0 - (userRank - 1.0) / totalUsers) * 100;
          
          if (percentile >= 99.9) {
            title = 'Partner';
          } else if (percentile >= 99) {
            title = 'Managing Director';
          } else if (percentile >= 95) {
            title = 'Vice President';
          } else if (percentile >= 90) {
            title = 'Associate';
          } else if (percentile >= 80) {
            title = 'Analyst';
          } else {
            title = 'Intern';
          }
        }

        updates.push({ id: user.id, rank: title });
      });

      // Batch update all user titles
      for (const update of updates) {
        await supabase
          .from('profiles')
          .update({ rank: update.rank })
          .eq('id', update.id);
      }

    } catch (error) {
      console.error('Error updating user titles:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  return {
    updateAllUserTitles,
    isUpdating
  };
};