import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';

export const useLoginDailyChallenge = () => {
  const { user } = useAuth();
  const [shouldShowModal, setShouldShowModal] = useState(false);

  useEffect(() => {
    if (user) {
      const lastLoginDate = localStorage.getItem('lastLoginDate');
      const today = new Date().toDateString();
      
      // Show daily challenge modal once per day on login
      if (lastLoginDate !== today) {
        setShouldShowModal(true);
        localStorage.setItem('lastLoginDate', today);
      }
    }
  }, [user]);

  const hideDailyChallengeModal = () => {
    setShouldShowModal(false);
  };

  return {
    shouldShowModal,
    hideDailyChallengeModal
  };
};