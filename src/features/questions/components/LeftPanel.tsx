import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Lightbulb, BookOpen, Info } from "lucide-react";

interface Props {
  title: string;
  description: string;
  hint?: string;
  explanation?: string;
  interviewAngle?: string;
  learn?: {
    coreConcept?: string;
    howItWorks?: string;
    whyItMatters?: string;
    formula?: string;
  };
}

export const LeftPanel = ({ title, description, hint, explanation, interviewAngle, learn }: Props) => {
  return (
    <Card className="p-4 space-y-4">
      <header>
        <h1 className="text-xl font-semibold text-foreground">{title}</h1>
      </header>
      <Tabs defaultValue="question">
        <TabsList>
          <TabsTrigger value="question">Question</TabsTrigger>
          <TabsTrigger value="learn">Learn</TabsTrigger>
        </TabsList>

        <TabsContent value="question" className="space-y-4">
          <section className="space-y-2">
            <p className="text-foreground/90">{description}</p>
          </section>

          {hint && (
            <section className="rounded-md border border-border p-3 bg-muted/30">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Lightbulb className="w-4 h-4" /> Hint
              </div>
              <p className="text-sm text-muted-foreground mt-1">{hint}</p>
            </section>
          )}

          {explanation && (
            <section className="rounded-md border border-border p-3 bg-muted/30">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Info className="w-4 h-4" /> Explanation
              </div>
              <p className="text-sm text-muted-foreground mt-1 whitespace-pre-line">{explanation}</p>
            </section>
          )}

          {interviewAngle && (
            <section className="rounded-md border border-border p-3 bg-muted/30">
              <div className="flex items-center gap-2 text-sm font-medium">
                <BookOpen className="w-4 h-4" /> Interview Angle
              </div>
              <p className="text-sm text-muted-foreground mt-1">{interviewAngle}</p>
            </section>
          )}
        </TabsContent>

        <TabsContent value="learn" className="space-y-4">
          {learn?.coreConcept && (
            <section>
              <h2 className="text-sm font-medium">Core Concept</h2>
              <p className="text-sm text-muted-foreground mt-1">{learn.coreConcept}</p>
            </section>
          )}
          {learn?.howItWorks && (
            <section>
              <h2 className="text-sm font-medium">How It Works</h2>
              <p className="text-sm text-muted-foreground mt-1">{learn.howItWorks}</p>
            </section>
          )}
          {learn?.whyItMatters && (
            <section>
              <h2 className="text-sm font-medium">Why It Matters</h2>
              <p className="text-sm text-muted-foreground mt-1">{learn.whyItMatters}</p>
            </section>
          )}
          {learn?.formula && (
            <section>
              <h2 className="text-sm font-medium">Formula</h2>
              <div className="text-sm rounded-md border border-border bg-muted p-3 font-mono">{learn.formula}</div>
            </section>
          )}
        </TabsContent>
      </Tabs>
    </Card>
  );
};
