interface QuestionProgressProps {
  value: number;
}

const QuestionProgress = ({ value }: QuestionProgressProps) => {
  return (
    <div className="text-center">
      <div className="text-lg font-bold text-primary">+{value}</div>
      <div className="text-xs text-muted-foreground font-medium">XP</div>
    </div>
  );
};

export default QuestionProgress;
