// Utility to clean asterisks from questions
export const cleanExplanation = (explanation: string): string => {
  return explanation
    .replace(/\*\*([^*]+)\*\*/g, '$1') // Remove bold formatting
    .replace(/\*([^*]+)\*/g, '$1')     // Remove italic formatting
    .replace(/\*\*/g, '')             // Remove any remaining double asterisks
    .replace(/\*/g, '')               // Remove any remaining single asterisks
}