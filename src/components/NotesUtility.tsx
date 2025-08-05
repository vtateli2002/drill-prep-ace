import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';

const NotesUtility = () => {
  const [notes, setNotes] = useState('');

  return (
    <div className="space-y-2">
      <Textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Write your notes, calculations, or thoughts here..."
        className="min-h-[200px] text-sm resize-none"
      />
    </div>
  );
};

export default NotesUtility;