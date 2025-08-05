import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import DrawingCanvas from './DrawingCanvas';
import Calculator from './Calculator';

const NotesUtility = () => {
  const [notes, setNotes] = useState('');

  return (
    <div className="space-y-4">
      {/* Text Notes */}
      <div>
        <div className="text-sm font-medium text-muted-foreground mb-2">Text Notes</div>
        <Textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Write your notes, calculations, or thoughts here..."
          className="min-h-[80px] text-sm resize-none"
        />
      </div>

      <Separator />

      {/* Scribble Notes */}
      <div>
        <div className="text-sm font-medium text-muted-foreground mb-2">Scribble Notes</div>
        <DrawingCanvas />
      </div>

      <Separator />

      {/* Calculator */}
      <div>
        <div className="text-sm font-medium text-muted-foreground mb-2">Quick Calculator</div>
        <Calculator />
      </div>
    </div>
  );
};

export default NotesUtility;