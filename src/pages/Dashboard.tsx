import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import XPProgress from '@/components/XPProgress';
import RivalMotivationModal from '@/components/RivalMotivationModal';
import DailyChallengeModal from '@/components/DailyChallengeModal';
import { Loader2 } from 'lucide-react';
import { RivalCard } from '@/features/rivals';
import { getRivalInfo } from '@/features/rivals/utils/rivals';
import { DashboardHeader, QuickStats, TracksGrid } from '@/features/dashboard';
import { Track, AIRival, TRACK_NAMES } from '@/types/drill';
import { useProfile } from '@/hooks/useProfile';
import { useAuth } from '@/hooks/useAuth';
import { useLoginDailyChallenge } from '@/hooks/useLoginDailyChallenge';
import { useRealProgress } from '@/hooks/useRealProgress';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { profile, loading } = useProfile();
  const { trackStats, loading: progressLoading } = useRealProgress();
  const [showRivalModal, setShowRivalModal] = useState(false);
  const [showDailyChallengeModal, setShowDailyChallengeModal] = useState(false);
  const [hasShownLoginModal, setHasShownLoginModal] = useState(false);
  const { shouldShowModal: shouldShowLoginChallenge, hideDailyChallengeModal } = useLoginDailyChallenge();

  // Create AI rival object from profile data
  const rivalMeta = getRivalInfo(profile?.rival_id);
  const aiRival = profile ? {
    name: rivalMeta.name,
    totalXP: profile.rival_xp || 0,
    dailyXPGoal: 300,
    daysRemaining: profile.interview_deadline 
      ? Math.ceil((new Date(profile.interview_deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
      : 0
  } : null;

  // Check if should show rival modal (once per day)
  useEffect(() => {
    if (profile && aiRival && !hasShownLoginModal) {
      const lastModalDate = localStorage.getItem('lastRivalModalDate');
      const today = new Date().toDateString();
      
      // Show modal once per day or when rival passes user for first time
      const isRivalAhead = aiRival.totalXP > profile.xp;
      const shouldShowModal = lastModalDate !== today || 
        (isRivalAhead && localStorage.getItem('rivalEverAhead') !== 'true');
      
      if (shouldShowModal) {
        setShowRivalModal(true);
        setHasShownLoginModal(true);
        localStorage.setItem('lastRivalModalDate', today);
        
        if (isRivalAhead) {
          localStorage.setItem('rivalEverAhead', 'true');
        }
      }
    }
  }, [profile, aiRival, hasShownLoginModal]);

  // Show daily challenge on login
  useEffect(() => {
    if (shouldShowLoginChallenge && profile) {
      setShowDailyChallengeModal(true);
      hideDailyChallengeModal();
    }
  }, [shouldShowLoginChallenge, profile, hideDailyChallengeModal]);

  // Always show all 4 tracks with real data
  const allTracks: Track[] = ['accounting', 'valuation', 'lbo', 'ma'];

  if (loading || progressLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-muted-foreground">Please complete your profile setup.</p>
          </div>
        </div>
      </div>
    );
  }

  const handleStartTrack = (track: Track) => {
    navigate(`/problems?track=${track}`);
  };

  const handleDailyChallenge = () => {
    setShowDailyChallengeModal(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6 space-y-6">
        <DashboardHeader onDailyChallenge={handleDailyChallenge} />

        {/* Progress Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <XPProgress 
              currentXP={profile.xp} 
              levelXP={0} // Not used anymore - calculated internally
              level={profile.level}
              streak={profile.streak}
            />
            
            <QuickStats xp={profile.xp} streak={profile.streak} />
          </div>
          
          <div className="space-y-2">
            {aiRival && (
              <RivalCard rival={aiRival} userXP={profile.xp} rivalId={profile.rival_id} />
            )}
            
          </div>
        </div>

        <TracksGrid tracks={allTracks} trackStats={trackStats} onStart={handleStartTrack} />
      </div>

      {/* Modals */}
      {showRivalModal && aiRival && (
        <RivalMotivationModal
          userXP={profile.xp}
          rivalXP={aiRival.totalXP}
          interviewDeadline={profile.interview_deadline}
          isRivalAhead={aiRival.totalXP > profile.xp}
          onClose={() => setShowRivalModal(false)}
        />
      )}

      <DailyChallengeModal
        isOpen={showDailyChallengeModal}
        onClose={() => setShowDailyChallengeModal(false)}
      />
    </div>
  );
};

export default Dashboard;