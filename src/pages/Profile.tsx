import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { User, Trophy, Target, Calendar } from 'lucide-react';
import { BADGES, RANK_TITLES } from '@/types/leaderboard';
import { TRACK_NAMES } from '@/types/drill';

const Profile = () => {
  // Mock user data - in real app this would come from state/API
  const user = {
    username: 'currentuser',
    xp: 3420,
    level: 34,
    rank: 25,
    title: 'Associate',
    activityStreak: 7,
    trackProgress: {
      accounting: { completed: 8, total: 16 },
      valuation: { completed: 12, total: 16 },
      lbo: { completed: 3, total: 16 },
      ma: { completed: 6, total: 16 }
    },
    xpByDifficulty: {
      easy: 320,
      medium: 1850,
      hard: 1000,
      'interview-ready': 250
    }
  };

  const getRankIcon = (title: string) => {
    const config = RANK_TITLES[title as keyof typeof RANK_TITLES];
    return config ? config.emoji : '🎓';
  };

  const getPercentile = () => {
    return Math.round(((100 - user.rank) / 100) * 100);
  };

  const unlockedBadges = BADGES.filter((badge, index) => {
    // Mock unlock logic based on user data
    if (badge.id === 'accounting-apprentice') return user.trackProgress.accounting.completed >= 5;
    if (badge.id === 'weekend-warrior') return user.activityStreak >= 3;
    if (badge.id === 'technical-titan') return user.xp >= 5000;
    return index < 3; // Mock some unlocked badges
  });

  const lockedBadges = BADGES.filter(badge => !unlockedBadges.includes(badge));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-3 mb-8">
          <User className="text-primary" size={32} />
          <h1 className="text-3xl font-bold text-foreground">Profile</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* User Overview */}
          <Card className="lg:col-span-1 bg-card border-border">
            <div className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`} />
                  <AvatarFallback className="text-2xl bg-primary/10 text-primary font-bold">
                    {user.username.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-foreground">{user.username}</h2>
                  <Badge variant="secondary" className="mt-2">
                    {getRankIcon(user.title)} {user.title}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{user.level}</div>
                    <div className="text-sm text-muted-foreground">Level</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">#{user.rank}</div>
                    <div className="text-sm text-muted-foreground">Rank</div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Total XP</span>
                    <span className="text-foreground font-medium">{user.xp.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Top {getPercentile()}%</span>
                    <span className="text-muted-foreground">{user.activityStreak} day streak</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Track Progress & XP Breakdown */}
          <Card className="lg:col-span-2 bg-card border-border">
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center space-x-2">
                <Target className="text-primary" size={20} />
                <span>Progress Overview</span>
              </h3>

              <div className="space-y-6">
                {/* Track Progress */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Track Progress</h4>
                  <div className="space-y-4">
                    {Object.entries(user.trackProgress).map(([track, progress]) => (
                      <div key={track}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-foreground font-medium">{TRACK_NAMES[track as keyof typeof TRACK_NAMES]}</span>
                          <span className="text-muted-foreground">
                            {progress.completed}/{progress.total}
                          </span>
                        </div>
                        <Progress value={(progress.completed / progress.total) * 100} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* XP by Difficulty */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">XP by Difficulty</h4>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {Object.entries(user.xpByDifficulty).map(([difficulty, xp]) => (
                      <Card key={difficulty} className="p-4 bg-muted/50">
                        <div className="text-center">
                          <div className="text-lg font-bold text-primary">{xp}</div>
                          <div className="text-sm text-muted-foreground capitalize">
                            {difficulty.replace('-', ' ')}
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Badges */}
          <Card className="lg:col-span-3 bg-card border-border">
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center space-x-2">
                <Trophy className="text-primary" size={20} />
                <span>Badges ({unlockedBadges.length}/{BADGES.length})</span>
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Unlocked Badges */}
                {unlockedBadges.map((badge) => (
                  <Card key={badge.id} className="p-4 bg-primary/10 border-primary/20">
                    <div className="text-center space-y-2">
                      <div className="text-2xl">{badge.emoji}</div>
                      <div className="text-sm font-medium text-foreground">{badge.name}</div>
                      <div className="text-xs text-muted-foreground">{badge.description}</div>
                    </div>
                  </Card>
                ))}

                {/* Locked Badges */}
                {lockedBadges.map((badge) => (
                  <Card key={badge.id} className="p-4 bg-muted/30 border-muted opacity-60">
                    <div className="text-center space-y-2">
                      <div className="text-2xl grayscale">{badge.emoji}</div>
                      <div className="text-sm font-medium text-muted-foreground">{badge.name}</div>
                      <div className="text-xs text-muted-foreground">{badge.description}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;