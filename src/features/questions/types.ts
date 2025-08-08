import { z } from "zod";

export const QuestionSchema = z.object({
  id: z.string(),
  track: z.string(),
  difficulty: z.string(),
  title: z.string(),
  description: z.string(),
  answer: z.number(),
  unit: z.string().optional(),
  hint: z.string().optional(),
  explanation: z.string().optional(),
  interviewAngle: z.string().optional(),
  learnContent: z.object({
    coreConcept: z.string().optional(),
    howItWorks: z.string().optional(),
    whyItMatters: z.string().optional(),
    formula: z.string().optional()
  }),
  metadata: z.object({
    version: z.number(),
    tags: z.array(z.string()).optional(),
    retries: z.number().optional()
  })
});

export type Question = z.infer<typeof QuestionSchema>;
