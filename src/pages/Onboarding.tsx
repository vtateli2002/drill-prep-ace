import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowRight, Target, BookOpen } from 'lucide-react';
import { Track, TRACK_NAMES } from '@/types/drill';
import { useProfile } from '@/hooks/useProfile';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import RivalSelect from '@/components/RivalSelect';

type OnboardingStep = 'welcome' | 'timeline' | 'rival' | 'tracks' | 'complete';
type Goal = 'interview' | 'learning';
type Timeline = '1-week' | '2-weeks' | '1-month' | '3-months' | 'more';
type RivalId = 'constance' | 'chadson' | 'chartreuse';

const TIMELINE_DAYS: Record<Timeline, number> = {
  '1-week': 7,
  '2-weeks': 14,
  '1-month': 30,
  '3-months': 90,
  'more': 120
};

const RIVAL_TAUNTS: Record<RivalId, string[]> = {
  constance: [
    'You’re falling behind. I just ran a 13-tab LBO before breakfast.',
    'You haven’t solved anything today. How cute.'
  ],
  chadson: [
    'Haha bro you’re studying? I just got fast-tracked without doing the HireVue.',
    'Chadson already solved 15 problems today. Did you blink or something?'
  ],
  chartreuse: [
    'I calculated your obsolescence in NPV. Spoiler: It’s negative.',
    'You sleep. I compound.'
  ]
};

const getRandomTaunt = (id: RivalId | null): string => {
  if (!id) return '';
  const list = RIVAL_TAUNTS[id];
  return list[Math.floor(Math.random() * list.length)];
};

const Onboarding = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { updateProfile } = useProfile();
  const isEdit = new URLSearchParams(location.search).get('edit') === 'true';

  const [step, setStep] = useState<OnboardingStep>('welcome');
  const [goal, setGoal] = useState<Goal | null>(null);
  const [timeline, setTimeline] = useState<Timeline | null>(null);
  const [selectedTracks, setSelectedTracks] = useState<Track[]>([]);
  const [selectedRival, setSelectedRival] = useState<RivalId | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleGoalSelect = (selectedGoal: Goal) => {
    setGoal(selectedGoal);
    setStep('timeline');
  };

  const handleTimelineSelect = (selectedTimeline: Timeline) => {
    setTimeline(selectedTimeline);
    setStep('rival');
  };

  const toggleTrack = (track: Track) => {
    setSelectedTracks(prev => 
      prev.includes(track) 
        ? prev.filter(t => t !== track)
        : [...prev, track]
    );
  };

  const handleChooseRival = (r: RivalId) => {
    setSelectedRival(r);
    setConfirmOpen(true);
  };

  const completeRival = () => {
    setConfirmOpen(false);
    setStep('tracks');
  };

  const handleComplete = async () => {
    localStorage.setItem('drillOnboarding', JSON.stringify({
      goal,
      timeline,
      tracks: selectedTracks,
      rival_id: selectedRival,
      completedAt: new Date().toISOString()
    }));

    try {
      const timelineDays = timeline ? TIMELINE_DAYS[timeline] : 30;
      await updateProfile?.({
        rival_id: selectedRival as any,
        onboarding_plan: {
          goal,
          timeline,
          tracks: selectedTracks,
          timeline_days: timelineDays
        } as any,
        onboarding_started_at: new Date().toISOString().slice(0, 10)
      });
    } catch (_) {
      // swallow errors to avoid blocking onboarding UX
    }
    
    navigate('/dashboard');
  };

  const getTimelineOptions = () => {
    if (goal === 'interview') {
      return [
        { value: '1-week', label: '1 Week', description: 'Intense prep mode' },
        { value: '2-weeks', label: '2 Weeks', description: 'Solid preparation' },
        { value: '1-month', label: '1 Month', description: 'Thorough coverage' },
        { value: '3-months', label: '3 Months', description: 'Deep mastery' },
        { value: 'more', label: 'More than 3 Months', description: 'Long-term prep' }
      ];
    } else {
      return [
        { value: '2-weeks', label: '2 Weeks', description: 'Quick overview' },
        { value: '1-month', label: '1 Month', description: 'Steady learning' },
        { value: '3-months', label: '3 Months', description: 'Comprehensive study' },
        { value: 'more', label: 'More than 3 Months', description: 'In-depth mastery' }
      ];
    }
  };

  if (step === 'welcome') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-foreground font-bold text-2xl">D</span>
            </div>
            <CardTitle className="text-3xl mb-2">{isEdit ? 'Adjust Your Plan' : 'Welcome to Drill'}</CardTitle>
            <p className="text-muted-foreground text-lg">
              {isEdit ? 'Update your goal, timeline and rival.' : 'Your gamified investment banking interview prep platform'}
            </p>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <h3 className="text-xl font-semibold text-center mb-6">What brings you here?</h3>
            
            <div className="grid gap-4">
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleGoalSelect('interview')}
                className="p-6 h-auto flex flex-col items-center space-y-2 hover:border-primary"
              >
                <Target size={24} className="text-primary" />
                <span className="font-semibold">I'm preparing for an interview</span>
                <span className="text-sm text-muted-foreground">Get interview-ready fast</span>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleGoalSelect('learning')}
                className="p-6 h-auto flex flex-col items-center space-y-2 hover:border-primary"
              >
                <BookOpen size={24} className="text-primary" />
                <span className="font-semibold">I want to learn core finance concepts</span>
                <span className="text-sm text-muted-foreground">Build knowledge systematically</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (step === 'timeline') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              {goal === 'interview' ? 'When is your interview?' : 'How fast do you want to learn?'}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {getTimelineOptions().map((option) => (
              <Button
                key={option.value}
                variant="outline"
                size="lg"
                onClick={() => handleTimelineSelect(option.value as Timeline)}
                className="w-full p-4 h-auto flex justify-between items-center hover:border-primary"
              >
                <div className="flex flex-col items-start">
                  <span className="font-semibold">{option.label}</span>
                  <span className="text-sm text-muted-foreground">{option.description}</span>
                </div>
                <ArrowRight size={20} />
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>
    );
  }

  if (step === 'rival') {
    const timelineDays = timeline ? TIMELINE_DAYS[timeline] : 30;
    const displayName = selectedRival ? `${selectedRival.charAt(0).toUpperCase()}${selectedRival.slice(1)}` : '';
    const taunt = getRandomTaunt(selectedRival);
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-5xl space-y-4">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Choose Your AI Rival</h1>
            <p className="text-muted-foreground mt-1">Pick your opponent. XP pace adapts to your timeline.</p>
          </div>

          <RivalSelect
            selectedRival={selectedRival}
            timelineDays={timelineDays}
            onChoose={handleChooseRival}
          />
        </div>

        <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center text-xl sm:text-2xl">
                {selectedRival ? `🔥 ${displayName.toUpperCase()} HAS ENTERED THE CHAT 🔥` : 'Confirm Rival'}
              </DialogTitle>
              <DialogDescription className="text-center mt-2">
                {taunt && <div className="mb-2 italic">“{taunt}”</div>}
                Your journey begins now. Keep up, or get left behind.
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-center gap-2">
              <Button variant="ghost" onClick={() => setConfirmOpen(false)}>Change</Button>
              <Button onClick={completeRival}>Continue</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  if (step === 'tracks') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Choose your focus areas</CardTitle>
            <p className="text-muted-foreground">Select the tracks you want to master</p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="grid gap-4">
              {Object.entries(TRACK_NAMES).map(([track, name]) => (
                <div key={track} className="flex items-center space-x-3">
                  <Checkbox
                    id={track}
                    checked={selectedTracks.includes(track as Track)}
                    onCheckedChange={() => toggleTrack(track as Track)}
                  />
                  <label
                    htmlFor={track}
                    className="text-lg font-medium cursor-pointer flex-1"
                  >
                    {name}
                  </label>
                </div>
              ))}
            </div>
            
            <Button
              onClick={() => setStep('complete')}
              disabled={selectedTracks.length === 0}
              className="w-full"
              size="lg"
            >
              Continue
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (step === 'complete') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-4">You're all set!</CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6 text-center">
            <div className="bg-muted rounded-lg p-6">
              <p className="text-foreground leading-relaxed">
                Your AI rival has been assigned a training timeline that matches yours. 
                It earns XP daily and is already completing tracks. Beat it by solving faster, 
                staying consistent, and mastering the material.
              </p>
              <p className="text-primary font-semibold mt-4">
                If you do, you won't just be interview-ready — you'll walk in sharper than 90% of candidates.
              </p>
            </div>
            
            <Button onClick={handleComplete} size="lg" className="w-full">
              Enter Drill
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
};

export default Onboarding;
