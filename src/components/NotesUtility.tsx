import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';

const NotesUtility = () => {
  const [notes, setNotes] = useState('');

  return (
    <div className="space-y-2">
      <div className="text-sm font-medium text-muted-foreground">Notes</div>
      <Textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Write your notes, calculations, or thoughts here..."
        className="min-h-[120px] text-sm resize-none"
      />
    </div>
  );
};

export default NotesUtility;