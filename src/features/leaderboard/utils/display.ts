export const getRankIcon = (title: string) => {
  const map: Record<string, string> = {
    CEO: '👑',
    CFO: '💼',
    CIO: '🖥️',
    Partner: '🤝',
    'Managing Director': '🏛️',
    Director: '📈',
    'Vice President': '🎯',
    Associate: '📚',
    Analyst: '🧮',
    Intern: '📝',
  };
  return map[title] ?? '🎓';
};

export const getRankChangeDisplay = (change?: number) => {
  if (!change || change === 0) return { text: '–', color: 'text-muted-foreground' };
  if (change > 0) return { text: `🔼 +${change}`, color: 'text-green-500' };
  return { text: `🔽 ${change}`, color: 'text-red-500' };
};
