import Navbar from "@/components/Navbar";
import { Seo } from "@/components/Seo";
import { useMemo } from "react";
import { QuestionLayout } from "@/features/questions/components/QuestionLayout";
import { useQuestionLoader } from "@/features/questions/hooks/useQuestionLoader";
import { useSearchParams } from "react-router-dom";

const CleanQuestion = () => {
  const [params] = useSearchParams();
  const track = params.get("track") || "accounting";
  const difficulty = params.get("difficulty") || "easy";
  const id = params.get("id") || "acct_001";

  const path = useMemo(
    () => `/questions/${track}/${difficulty}/${id}.json`,
    [track, difficulty, id]
  );

  const { data, loading, error } = useQuestionLoader(path);

  const title = data?.title || "Question";
  const desc = data?.description?.slice(0, 150) || "Question practice";

  return (
    <>
      <Seo title={`${title} | Drill`} description={desc} canonical={window.location.href} />
      <Navbar />
      {loading && <div className="container mx-auto py-6">Loading…</div>}
      {error && <div className="container mx-auto py-6 text-destructive">{error}</div>}
      {data && (
        <QuestionLayout
          left={{
            title: data.title,
            description: data.description,
            hint: data.hint,
            explanation: data.explanation,
            interviewAngle: data.interviewAngle,
            learn: data.learnContent,
          }}
          right={{
            correctAnswer: data.answer,
            unit: data.unit,
          }}
        />
      )}
    </>
  );
};

export default CleanQuestion;
