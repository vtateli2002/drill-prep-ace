import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy, X } from 'lucide-react';

interface BadgeUnlockedModalProps {
  badge: {
    id: string;
    name: string;
    emoji: string;
    description: string;
  } | null;
  onClose: () => void;
}

const BadgeUnlockedModal = ({ badge, onClose }: BadgeUnlockedModalProps) => {
  const [isOpen, setIsOpen] = useState(!!badge);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  if (!badge) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-center justify-center">
            <Trophy className="h-5 w-5 text-yellow-500" />
            Badge Unlocked!
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-6xl mb-4">{badge.emoji}</div>
            <h3 className="text-xl font-bold text-foreground mb-2">{badge.name}</h3>
            <p className="text-muted-foreground">{badge.description}</p>
          </div>

          <div className="flex justify-center">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Trophy className="h-4 w-4 mr-2" />
              Achievement Unlocked
            </Badge>
          </div>

          <div className="text-center text-sm text-muted-foreground bg-primary/10 p-3 rounded-lg">
            🎉 <strong>Congratulations!</strong> Keep solving problems to unlock more badges and climb the leaderboard!
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <Button onClick={handleClose} className="px-8">
            <X className="mr-2 h-4 w-4" />
            Continue Grinding
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BadgeUnlockedModal;