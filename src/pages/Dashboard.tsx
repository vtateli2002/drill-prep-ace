import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import XPProgress from '@/components/XPProgress';
import TrackCard from '@/components/TrackCard';
import RivalProgress from '@/components/RivalProgress';
import RivalMotivationModal from '@/components/RivalMotivationModal';
import DailyChallengeModal from '@/components/DailyChallengeModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Calendar, Loader2, Bot } from 'lucide-react';
import { Track, AIRival, TRACK_NAMES } from '@/types/drill';
import { useProfile } from '@/hooks/useProfile';
import { useAuth } from '@/hooks/useAuth';
import { useLoginDailyChallenge } from '@/hooks/useLoginDailyChallenge';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { profile, loading } = useProfile();
  const [showRivalModal, setShowRivalModal] = useState(false);
  const [showDailyChallengeModal, setShowDailyChallengeModal] = useState(false);
  const [hasShownLoginModal, setHasShownLoginModal] = useState(false);
  const { shouldShowModal: shouldShowLoginChallenge, hideDailyChallengeModal } = useLoginDailyChallenge();

  // Create AI rival object from profile data
  const aiRival = profile ? {
    name: "FinanceBot",
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

  // Always show all 4 tracks
  const allTracks: Track[] = ['accounting', 'valuation', 'lbo', 'ma'];
  const trackProgress = profile?.track_progress || {};

  if (loading) {
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
    navigate('/daily-challenge');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome back to Drill
            </h1>
            <p className="text-muted-foreground">
              Keep grinding to beat your AI rival and ace those interviews.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={handleDailyChallenge} className="px-6">
              <Target className="mr-2" size={16} />
              Daily Challenge
            </Button>
            <Button variant="outline" onClick={() => navigate('/library')}>
              <Calendar className="mr-2" size={16} />
              Study Library
            </Button>
          </div>
        </div>

        {/* Progress Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <XPProgress 
              currentXP={profile.xp} 
              levelXP={0} // Not used anymore - calculated internally
              level={profile.level}
              streak={profile.streak}
            />
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{profile.xp}</div>
                    <div className="text-sm text-muted-foreground">Total XP</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{profile.streak}</div>
                    <div className="text-sm text-muted-foreground">Day Streak</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-2">
            {aiRival && (
              <RivalProgress rival={aiRival} userXP={profile.xp} />
            )}
            
            {/* AI Rival Explanation */}
            <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
              <Bot className="h-4 w-4 text-primary" />
              <p className="text-sm text-muted-foreground">
                This AI rival is custom-built for your interview timeline. Your goal: beat FinanceBot before your interview date.
              </p>
            </div>
          </div>
        </div>

        {/* Tracks Section - Always show all 4 tracks */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Your Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allTracks.map((track) => {
              const progress = trackProgress[track] || { completed: 0, total: 4 };
              return (
                <TrackCard
                  key={track}
                  track={track}
                  completed={progress.completed}
                  total={progress.total}
                  xp={profile.difficulty_xp?.[track] || 0}
                  onStart={() => handleStartTrack(track)}
                />
              );
            })}
          </div>
        </div>
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