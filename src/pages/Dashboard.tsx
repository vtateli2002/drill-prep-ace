import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import XPProgress from '@/components/XPProgress';
import TrackCard from '@/components/TrackCard';
import RivalProgress from '@/components/RivalProgress';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Calendar, Loader2 } from 'lucide-react';
import { Track, AIRival } from '@/types/drill';
import { useProfile } from '@/hooks/useProfile';
import { useAuth } from '@/hooks/useAuth';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { profile, loading } = useProfile();
  
  const [aiRival] = useState<AIRival>({
    name: "FinanceBot",
    totalXP: Math.max(0, (profile?.xp || 0) - 150 + Math.random() * 300),
    dailyXPGoal: 300,
    daysRemaining: 12
  });

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
              levelXP={(profile.level + 1) * 100} 
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
          
          <RivalProgress rival={aiRival} userXP={profile.xp} />
        </div>

        {/* Tracks Section */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Your Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(profile.track_progress || {}).map(([track, progress]: [string, any]) => (
              <TrackCard
                key={track}
                track={track as Track}
                completed={progress?.completed || 0}
                total={progress?.total || 4}
                xp={profile.difficulty_xp?.[track] || 0}
                onStart={() => handleStartTrack(track as Track)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;