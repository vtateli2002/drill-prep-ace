import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Bot, Target, Zap } from 'lucide-react';

interface RivalMotivationModalProps {
  userXP: number;
  rivalXP: number;
  interviewDeadline?: string;
  isRivalAhead: boolean;
  onClose: () => void;
}

const RivalMotivationModal = ({ 
  userXP, 
  rivalXP, 
  interviewDeadline, 
  isRivalAhead, 
  onClose 
}: RivalMotivationModalProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const xpDifference = Math.abs(userXP - rivalXP);
  const daysUntilInterview = interviewDeadline 
    ? Math.ceil((new Date(interviewDeadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    : null;

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  const getMotivationalMessage = () => {
    if (isRivalAhead) {
      return {
        title: "FinanceBot Just Passed You!",
        message: `FinanceBot is now ahead by ${xpDifference} XP. ${
          daysUntilInterview 
            ? `You've got ${daysUntilInterview} days to reclaim your lead before your interview.` 
            : 'Time to step up your game!'
        }`,
        emoji: "🚨",
        color: "text-destructive"
      };
    } else {
      return {
        title: "Stay Ahead of FinanceBot!",
        message: `You're currently ${xpDifference} XP ahead of FinanceBot. ${
          daysUntilInterview 
            ? `Keep grinding - only ${daysUntilInterview} days until your interview!` 
            : 'Keep up the momentum!'
        }`,
        emoji: "🔥",
        color: "text-primary"
      };
    }
  };

  const motivation = getMotivationalMessage();

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Bot className={`h-5 w-5 ${motivation.color}`} />
            {motivation.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-4xl mb-2">{motivation.emoji}</div>
            <p className="text-muted-foreground">{motivation.message}</p>
          </div>

          <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Your XP</div>
              <div className="text-lg font-bold text-primary">{userXP.toLocaleString()}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground">FinanceBot XP</div>
              <div className="text-lg font-bold text-orange-500">{rivalXP.toLocaleString()}</div>
            </div>
          </div>

          {daysUntilInterview && (
            <div className="flex items-center justify-center gap-2 p-2 bg-primary/10 rounded-lg">
              <Target className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">
                {daysUntilInterview} days until interview
              </span>
            </div>
          )}

          <div className="text-center text-sm text-muted-foreground">
            <p>
              <strong>Tip:</strong> Solve daily challenges for 2x XP and stay ahead of the competition!
            </p>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <Button onClick={handleClose} className="px-8">
            <Zap className="mr-2 h-4 w-4" />
            Let's Go!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RivalMotivationModal;