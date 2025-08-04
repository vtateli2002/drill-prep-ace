import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import XPProgress from '@/components/XPProgress';
import TrackCard from '@/components/TrackCard';
import RivalProgress from '@/components/RivalProgress';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Calendar } from 'lucide-react';
import { Track, UserProgress, AIRival } from '@/types/drill';

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Mock data - would come from API/state management
  const [userProgress] = useState<UserProgress>({
    totalXP: 1250,
    level: 3,
    streak: 5,
    trackProgress: {
      accounting: { completed: 4, total: 10, xp: 300 },
      valuation: { completed: 2, total: 8, xp: 150 },
      lbo: { completed: 0, total: 12, xp: 0 },
      ma: { completed: 1, total: 6, xp: 100 }
    }
  });
  
  const [aiRival] = useState<AIRival>({
    name: "FinanceBot",
    totalXP: 1100,
    dailyXPGoal: 300,
    daysRemaining: 12
  });

  const handleStartTrack = (track: Track) => {
    navigate(`/practice/${track}`);
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
              currentXP={userProgress.totalXP} 
              levelXP={2000} 
              level={userProgress.level}
              streak={userProgress.streak}
            />
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{userProgress.totalXP}</div>
                    <div className="text-sm text-muted-foreground">Total XP</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{userProgress.streak}</div>
                    <div className="text-sm text-muted-foreground">Day Streak</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <RivalProgress rival={aiRival} userXP={userProgress.totalXP} />
        </div>

        {/* Tracks Section */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Your Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(userProgress.trackProgress).map(([track, progress]) => (
              <TrackCard
                key={track}
                track={track as Track}
                completed={progress.completed}
                total={progress.total}
                xp={progress.xp}
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