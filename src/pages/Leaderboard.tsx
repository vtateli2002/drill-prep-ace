import Navbar from '@/components/Navbar';
import { LeaderboardContent } from '@/features/leaderboard';

const LeaderboardPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <LeaderboardContent />
    </div>
  );
};

export default LeaderboardPage;