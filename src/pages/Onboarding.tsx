import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowRight, Target, BookOpen } from 'lucide-react';
import { Track, TRACK_NAMES } from '@/types/drill';

type OnboardingStep = 'welcome' | 'timeline' | 'tracks' | 'complete';
type Goal = 'interview' | 'learning';
type Timeline = '1-week' | '2-weeks' | '1-month' | '3-months' | 'more';

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<OnboardingStep>('welcome');
  const [goal, setGoal] = useState<Goal | null>(null);
  const [timeline, setTimeline] = useState<Timeline | null>(null);
  const [selectedTracks, setSelectedTracks] = useState<Track[]>([]);

  const handleGoalSelect = (selectedGoal: Goal) => {
    setGoal(selectedGoal);
    setStep('timeline');
  };

  const handleTimelineSelect = (selectedTimeline: Timeline) => {
    setTimeline(selectedTimeline);
    setStep('tracks');
  };

  const toggleTrack = (track: Track) => {
    setSelectedTracks(prev => 
      prev.includes(track) 
        ? prev.filter(t => t !== track)
        : [...prev, track]
    );
  };

  const handleComplete = () => {
    // Save onboarding data to localStorage or API
    localStorage.setItem('drillOnboarding', JSON.stringify({
      goal,
      timeline,
      tracks: selectedTracks,
      completedAt: new Date().toISOString()
    }));
    
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
            <CardTitle className="text-3xl mb-2">Welcome to Drill</CardTitle>
            <p className="text-muted-foreground text-lg">
              Your gamified investment banking interview prep platform
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