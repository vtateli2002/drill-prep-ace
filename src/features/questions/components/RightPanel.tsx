import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import Calculator from "@/components/Calculator";
import DrawingCanvas from "@/components/DrawingCanvas";
import { CheckCircle2, XCircle } from "lucide-react";

interface Props {
  correctAnswer: number;
  unit?: string;
  onSubmitAttempt?: (payload: { submitted: number; correct: boolean }) => void;
}

export const RightPanel = ({ correctAnswer, unit, onSubmitAttempt }: Props) => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<null | { correct: boolean; submitted: number }>(null);
  const [notes, setNotes] = useState("");

  const handleSubmit = () => {
    const submitted = Number(value);
    const correct = Number.isFinite(submitted) && Math.abs(submitted - correctAnswer) < 1e-6;
    setResult({ correct, submitted });
    onSubmitAttempt?.({ submitted, correct });
  };

  return (
    <div className="space-y-4">
      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Input
            type="number"
            inputMode="decimal"
            placeholder={`Enter answer${unit ? ` (${unit})` : ''}`}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          {unit && <span className="text-sm text-muted-foreground min-w-8 text-center">{unit}</span>}
          <Button onClick={handleSubmit}>Check</Button>
        </div>

        {result && (
          <div className={`flex items-center gap-2 text-sm ${result.correct ? 'text-success' : 'text-destructive'}`}>
            {result.correct ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
            {result.correct ? 'Correct!' : `Incorrect. Submitted: ${result.submitted}`}
          </div>
        )}
      </Card>

      <Card className="p-4">
        <Tabs defaultValue="notes">
          <TabsList>
            <TabsTrigger value="notes">Notes</TabsTrigger>
            <TabsTrigger value="draw">Draw</TabsTrigger>
            <TabsTrigger value="calc">Calculator</TabsTrigger>
          </TabsList>
          <TabsContent value="notes">
            <Textarea
              placeholder="Write notes..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="min-h-[140px]"
            />
          </TabsContent>
          <TabsContent value="draw">
            <DrawingCanvas />
          </TabsContent>
          <TabsContent value="calc">
            <Calculator />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};
