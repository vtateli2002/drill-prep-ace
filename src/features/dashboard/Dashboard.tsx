import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useProfile } from '@/hooks/useProfile';
import { useLoginDailyChallenge } from '@/hooks/useLoginDailyChallenge';
import { useRealProgress } from '@/hooks/useRealProgress';
import { Track } from '@/types/drill';
import { RivalCard } from '@/features/rivals';
import { getRivalInfo } from '@/features/rivals/utils/rivals';
import DashboardHeader from '@/features/dashboard/components/DashboardHeader';
import UserXPCard from '@/features/dashboard/components/UserXPCard';
import TracksGrid from '@/features/dashboard/components/TracksGrid';
import RivalMotivationModal from '@/components/RivalMotivationModal';
import DailyChallengeModal from '@/components/DailyChallengeModal';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { profile, loading } = useProfile();
  const { trackStats, loading: progressLoading } = useRealProgress();
  const [showRivalModal, setShowRivalModal] = useState(false);
  const [showDailyChallengeModal, setShowDailyChallengeModal] = useState(false);
  const [hasShownLoginModal, setHasShownLoginModal] = useState(false);
  const { shouldShowModal: shouldShowLoginChallenge, hideDailyChallengeModal } = useLoginDailyChallenge();

  const rivalMeta = getRivalInfo(profile?.rival_id);
  const aiRival = profile ? {
    name: rivalMeta.name,
    totalXP: profile.rival_xp || 0,
    dailyXPGoal: 300,
    daysRemaining: profile.interview_deadline 
      ? Math.ceil((new Date(profile.interview_deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
      : 0
  } : null;

  useEffect(() => {
    if (profile && aiRival && !hasShownLoginModal) {
      const lastModalDate = localStorage.getItem('lastRivalModalDate');
      const today = new Date().toDateString();
      const isRivalAhead = aiRival.totalXP > profile.xp;
      const shouldShowModal = lastModalDate !== today || (isRivalAhead && localStorage.getItem('rivalEverAhead') !== 'true');
      if (shouldShowModal) {
        setShowRivalModal(true);
        setHasShownLoginModal(true);
        localStorage.setItem('lastRivalModalDate', today);
        if (isRivalAhead) localStorage.setItem('rivalEverAhead', 'true');
      }
    }
  }, [profile, aiRival, hasShownLoginModal]);

  useEffect(() => {
    if (shouldShowLoginChallenge && profile) {
      setShowDailyChallengeModal(true);
      hideDailyChallengeModal();
    }
  }, [shouldShowLoginChallenge, profile, hideDailyChallengeModal]);

  const allTracks: Track[] = ['accounting', 'valuation', 'lbo', 'ma'];

  const handleStartTrack = (track: Track) => navigate(`/problems?track=${track}`);
  const handleDailyChallenge = () => setShowDailyChallengeModal(true);

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
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">Please complete your profile setup.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-6 space-y-6">
        <DashboardHeader onDailyChallenge={handleDailyChallenge} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UserXPCard currentXP={profile.xp} level={profile.level} streak={profile.streak} />
          {aiRival && (
            <RivalCard rival={aiRival} userXP={profile.xp} rivalId={profile.rival_id} />
          )}
        </div>

        <TracksGrid tracks={allTracks} trackStats={trackStats} onStart={handleStartTrack} />
      </div>

      {showRivalModal && aiRival && (
        <RivalMotivationModal
          userXP={profile.xp}
          rivalXP={aiRival.totalXP}
          interviewDeadline={profile.interview_deadline}
          isRivalAhead={aiRival.totalXP > profile.xp}
          onClose={() => setShowRivalModal(false)}
        />
      )}

      <DailyChallengeModal isOpen={showDailyChallengeModal} onClose={() => setShowDailyChallengeModal(false)} />
    </div>
  );
};

export default Dashboard;
