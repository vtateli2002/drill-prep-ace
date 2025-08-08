import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Trophy, Zap, Target, Award, Loader2, User, LogOut, Bot, CalendarDays, Timer, Flame, Flag } from 'lucide-react';
import { useProfile } from '@/hooks/useProfile';
import { useAuth } from '@/hooks/useAuth';
import { useQuestions } from '@/hooks/useQuestions';
import { useRealProgress } from '@/hooks/useRealProgress';
import { BADGES, RANK_TITLES } from '@/types/leaderboard';

const Profile = () => {
  const { profile, loading, calculatePercentile } = useProfile();
  const { signOut } = useAuth();
  const { trackStats, difficultyXP, loading: progressLoading } = useRealProgress();
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

  type OnboardingData = {
    goal: 'interview' | 'learning' | null;
    timeline: '1-week' | '2-weeks' | '1-month' | '3-months' | 'more' | null;
    tracks: string[];
    completedAt?: string;
  };
  const [onboarding, setOnboarding] = useState<OnboardingData | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('drillOnboarding');
      if (raw) setOnboarding(JSON.parse(raw));
    } catch (_) {
      // ignore
    }
  }, []);

  const rivalDailyXP = (() => {
    const deadlineStr = profile?.interview_deadline ?? null;
    const createdStr = profile?.created_at ?? null;
    const totalTargetXP = 800;
    const defaultDaily = 100;
    if (deadlineStr && createdStr) {
      const deadline = new Date(deadlineStr);
      const created = new Date(createdStr);
      const daysTotal = Math.max(1, Math.ceil((deadline.getTime() - created.getTime()) / (1000 * 60 * 60 * 24)) + 1);
      const val = Math.round((totalTargetXP / daysTotal) / 10) * 10;
      return Math.max(10, val);
    }
    return defaultDaily;
  })();

  const timelineLabels = {
    '1-week': '1 Week',
    '2-weeks': '2 Weeks',
    '1-month': '1 Month',
    '3-months': '3 Months',
    'more': 'More than 3 Months'
  } as const;
  const displayGoal = onboarding?.goal ? (onboarding.goal === 'interview' ? 'Interview Prep' : 'Learning') : '—';
  const prettyTimeline = onboarding?.timeline ? timelineLabels[onboarding.timeline] : '—';
  const startedAt = onboarding?.completedAt
    ? new Date(onboarding.completedAt)
    : (profile?.created_at ? new Date(profile.created_at) : null);
  const timelineDaysMap = {
    '1-week': 7,
    '2-weeks': 14,
    '1-month': 30,
    '3-months': 90,
    'more': 120
  } as const;
  const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
  const computedTargetDate = profile?.interview_deadline
    ? new Date(profile.interview_deadline)
    : (onboarding?.timeline && startedAt
      ? addDays(startedAt, timelineDaysMap[onboarding.timeline])
      : null);
  const goalReminder = computedTargetDate
    ? `Beat FinanceBot before ${computedTargetDate.toLocaleDateString()}`
    : 'Set your goal to get a Rival deadline';

  const handleSignOut = async () => {
    await signOut();
  };

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
                    const stats = trackStats[track as keyof typeof trackStats];
                    const displayName = track === 'ma' ? 'M&A' : track === 'lbo' ? 'LBO' : track.charAt(0).toUpperCase() + track.slice(1);
                    return (
                      <div key={track} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-foreground">{displayName}</span>
                          <span className="text-muted-foreground">{stats.completed}/{stats.total}</span>
                        </div>
                        <Progress value={stats.total > 0 ? (stats.completed / stats.total) * 100 : 0} />
                      </div>
                    );
                  })}
                </div>

                {/* XP by Difficulty */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">XP by Difficulty</h3>
                  {['easy', 'medium', 'hard'].map((difficulty) => {
                    const xp = difficultyXP[difficulty as keyof typeof difficultyXP] || 0;
                    const displayName = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
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

          {/* Your Plan & AI Rival */}
          <Card className="lg:col-span-3 bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center">
                <Target className="mr-2" size={20} />
                Your Plan & AI Rival
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Your Plan */}
                <div className="rounded-xl border border-border bg-muted/40 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="text-primary" size={16} />
                    <h3 className="text-sm font-semibold text-foreground">Your Plan</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Trophy className="w-4 h-4" /> Goal
                      </div>
                      <div className="text-sm font-medium text-foreground">{displayGoal}</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Timer className="w-4 h-4" /> Timeline
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-foreground">{prettyTimeline}</div>
                        {startedAt && (
                          <div className="text-xs text-muted-foreground">Started: {startedAt.toLocaleDateString()}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Rival */}
                <div className="rounded-xl border border-border bg-muted/40 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Bot className="text-primary" size={16} />
                    <h3 className="text-sm font-semibold text-foreground">AI Rival: FinanceBot</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Timer className="w-4 h-4" /> Daily XP Pace
                      </div>
                      <div className="text-sm font-semibold text-foreground">{rivalDailyXP} XP/day</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Flame className="w-4 h-4" /> Rival XP to Date
                      </div>
                      <div className="text-sm font-semibold text-foreground">{(profile.rival_xp || 0).toLocaleString()} XP</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Flag className="w-4 h-4" /> Your Goal
                      </div>
                      <div className="text-sm font-medium text-foreground text-right">{goalReminder}</div>
                    </div>
                  </div>
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