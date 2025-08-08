import { useEffect, useState } from "react";
import { Question, QuestionSchema } from "../types";

export function useQuestionLoader(path: string) {
  const [data, setData] = useState<Question | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetch(path)
      .then(async (res) => {
        if (!res.ok) throw new Error(`Failed to load: ${res.status}`);
        const json = await res.json();
        const parsed = QuestionSchema.parse(json);
        if (active) setData(parsed);
      })
      .catch((e: any) => active && setError(e.message))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, [path]);

  return { data, loading, error };
}
