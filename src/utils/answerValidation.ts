/**
 * Validates decimal answers with flexible rounding tolerance
 * Accepts answers rounded to whole numbers, tenths, hundredths, etc.
 */
export function validateDecimalAnswer(userAnswer: string, correctAnswer: number): boolean {
  const numericAnswer = parseFloat(userAnswer.trim());
  
  if (isNaN(numericAnswer)) {
    return false;
  }
  
  // Allow exact match
  if (numericAnswer === correctAnswer) {
    return true;
  }
  
  // Check if user answer matches when both are rounded to various decimal places
  const roundingLevels = [0, 1, 2, 3, 4]; // whole, tenth, hundredth, thousandth, ten-thousandth
  
  for (const decimals of roundingLevels) {
    const roundedCorrect = Number(correctAnswer.toFixed(decimals));
    const roundedUser = Number(numericAnswer.toFixed(decimals));
    
    if (roundedUser === roundedCorrect) {
      return true;
    }
  }
  
  // Also allow small floating point tolerance for very close answers
  return Math.abs(numericAnswer - correctAnswer) < 0.001;
}

/**
 * Validates any answer - string or number with flexible decimal tolerance
 */
export function validateAnswer(userAnswer: string, correctAnswer: string | number): boolean {
  if (typeof correctAnswer === 'string') {
    return userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase();
  }
  
  return validateDecimalAnswer(userAnswer, correctAnswer);
}