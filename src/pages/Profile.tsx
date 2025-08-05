import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Trophy, Zap, Target, Award, Loader2, User, LogOut } from 'lucide-react';
import { useProfile } from '@/hooks/useProfile';
import { useAuth } from '@/hooks/useAuth';
import { useQuestions } from '@/hooks/useQuestions';
import { BADGES, RANK_TITLES } from '@/types/leaderboard';

const Profile = () => {
  const { profile, loading, calculatePercentile } = useProfile();
  const { signOut } = useAuth();
  const [percentile, setPercentile] = useState<number>(50);

  const getRankIcon = (title: string) => {
    const config = RANK_TITLES[title as keyof typeof RANK_TITLES];
    return config ? config.emoji : '🎓';
  };

  // Get real badges from profile
  const unlockedBadges = (profile?.badges || []).filter((badge: any) => badge.unlocked);
  const lockedBadges = BADGES.filter(badge => 
    !(profile?.badges || []).some((userBadge: any) => userBadge.id === badge.id && userBadge.unlocked)
  );

  // Calculate real percentile
  useEffect(() => {
    if (profile?.xp !== undefined) {
      calculatePercentile(profile.xp).then(setPercentile);
    }
  }, [profile?.xp, calculatePercentile]);

  const handleSignOut = async () => {
    await signOut();
  };

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
            <p className="text-muted-foreground">Profile not found</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <User className="text-primary" size={32} />
            <h1 className="text-3xl font-bold text-foreground">Profile</h1>
          </div>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* User Overview */}
          <Card className="lg:col-span-1 bg-card border-border">
            <div className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={profile.profile_pic || `https://api.dicebear.com/7.x/avataaars/svg?seed=${profile.username}`} />
                  <AvatarFallback className="text-2xl bg-primary/10 text-primary font-bold">
                    {profile.username.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold text-foreground">{profile.username}</h2>
                  <Badge variant="secondary" className="text-sm">
                    {getRankIcon(profile.rank)} {profile.rank}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4 w-full text-center">
                  <div className="bg-muted/50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-foreground">{profile.level}</div>
                    <div className="text-sm text-muted-foreground">Level</div>
                  </div>
                   <div className="bg-muted/50 rounded-lg p-3">
                     <div className="text-2xl font-bold text-foreground">{percentile}%</div>
                     <div className="text-sm text-muted-foreground">Percentile</div>
                   </div>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-foreground">{profile.xp.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Total XP</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-foreground flex items-center justify-center">
                      <Zap className="h-5 w-5 text-primary mr-1" />
                      {profile.streak}
                    </div>
                    <div className="text-sm text-muted-foreground">Day Streak</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Track Progress & XP Breakdown */}
          <Card className="lg:col-span-2 bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center">
                <Target className="mr-2" size={20} />
                Progress Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Track Progress */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">Track Progress</h3>
                  {['accounting', 'valuation', 'lbo', 'ma'].map((track) => {
                    const progress = profile.track_progress?.[track] || { completed: 0, total: 4 };
                    const displayName = track === 'ma' ? 'M&A' : track === 'lbo' ? 'LBO' : track.charAt(0).toUpperCase() + track.slice(1);
                    return (
                      <div key={track} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-foreground">{displayName}</span>
                          <span className="text-muted-foreground">{progress.completed || 0}/{progress.total || 4}</span>
                        </div>
                        <Progress value={((progress.completed || 0) / (progress.total || 1)) * 100} />
                      </div>
                    );
                  })}
                </div>

                {/* XP by Difficulty */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">XP by Difficulty</h3>
                  {['easy', 'medium', 'hard', 'interview_ready'].map((difficulty) => {
                    const xp = profile.difficulty_xp?.[difficulty] || 0;
                    const displayName = difficulty === 'interview_ready' ? 'Interview Ready' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
                    return (
                      <div key={difficulty} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="text-foreground">{displayName}</span>
                        <span className="font-semibold text-foreground">{xp} XP</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Badges */}
          <Card className="lg:col-span-3 bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center">
                <Award className="mr-2" size={20} />
                Badge Collection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Unlocked Badges */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Unlocked ({unlockedBadges.length})</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {unlockedBadges.map((badge) => (
                      <div key={badge.id} className="text-center p-4 bg-muted/50 rounded-lg border border-primary/20">
                        <div className="text-3xl mb-2">{badge.emoji}</div>
                        <div className="text-sm font-medium text-foreground mb-1">{badge.name}</div>
                        <div className="text-xs text-muted-foreground">{badge.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Locked Badges */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Locked ({lockedBadges.length})</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {lockedBadges.map((badge) => (
                      <div key={badge.id} className="text-center p-4 bg-muted/30 rounded-lg opacity-60">
                        <div className="text-3xl mb-2 grayscale">{badge.emoji}</div>
                        <div className="text-sm font-medium text-muted-foreground mb-1">{badge.name}</div>
                        <div className="text-xs text-muted-foreground">{badge.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;