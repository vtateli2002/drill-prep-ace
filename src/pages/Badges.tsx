import Navbar from '@/components/Navbar';
import { Seo } from '@/components/Seo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, LineChart, Trophy, Crown, ChevronRight } from 'lucide-react';

const TierCard = ({
  id,
  icon: Icon,
  title,
  description,
  variant,
}: {
  id: string;
  icon: any;
  title: string;
  description: string;
  variant: 'analyst' | 'associate' | 'rainmaker' | 'boardroom';
}) => {
  const styles = {
    analyst: {
      text: 'text-success',
      bg: 'bg-success/10',
      ring: 'ring-success/40',
      grad: 'from-success/70 to-transparent',
    },
    associate: {
      text: 'text-primary',
      bg: 'bg-primary/10',
      ring: 'ring-primary/40',
      grad: 'from-primary/70 to-transparent',
    },
    rainmaker: {
      text: 'text-tracks-lbo',
      bg: 'bg-tracks-lbo/10',
      ring: 'ring-tracks-lbo/40',
      grad: 'from-tracks-lbo/70 to-transparent',
    },
    boardroom: {
      text: 'text-accent',
      bg: 'bg-accent/10',
      ring: 'ring-accent/40',
      grad: 'from-accent/70 to-transparent',
    },
  } as const;
  const s = styles[variant];

  return (
    <a href={`#${id}`} className="block group focus:outline-none">
      <Card className="transition-all group-hover:shadow-lg border-border bg-card">
        <CardContent className="p-5 flex items-start gap-4">
          <div className="shrink-0">
            <div className={`p-[2px] rounded-full bg-gradient-to-b ${s.grad} transition-transform duration-300 group-hover:scale-105`}>
              <div className={`w-12 h-12 rounded-full ${s.bg} ${s.text} grid place-items-center ring-1 ${s.ring}`}>
                <Icon size={22} />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <CardTitle className="text-foreground text-lg">{title}</CardTitle>
              <ChevronRight className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};

const Badges = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/badges` : undefined;
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Badges – Finance mastery rewards | Drill"
        description="Earn unique, finance‑themed badges as you master investment banking technicals on Drill."
        canonical={canonical}
      />
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">🏆 Badges</h1>
          <p className="text-muted-foreground mt-2">Earn rewards as you master investment banking technicals.</p>
        </header>

        {/* Tier icons grid */}
        <section aria-labelledby="tiers" className="space-y-6">
          <h2 id="tiers" className="sr-only">Badge tiers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <TierCard
              id="analyst"
              icon={Briefcase}
              variant="analyst"
              title="Analyst Badges"
              description="Common beginnings. Quick wins to get momentum."
            />
            <TierCard
              id="associate"
              icon={LineChart}
              variant="associate"
              title="Associate Badges"
              description="Uncommon milestones. Consistency and focus."
            />
            <TierCard
              id="rainmaker"
              icon={Trophy}
              variant="rainmaker"
              title="Rainmaker Badges"
              description="Rare achievements. Track mastery and long streaks."
            />
            <TierCard
              id="boardroom"
              icon={Crown}
              variant="boardroom"
              title="Boardroom Badges"
              description="Legendary. Only a few ever unlock these."
            />
          </div>
        </section>

        {/* Sections (anchors) */}
        <section id="analyst" className="mt-10">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Tier 1 · Analyst</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Coming soon: beginner achievements tied to streaks and first wins.</p>
            </CardContent>
          </Card>
        </section>

        <section id="associate" className="mt-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Tier 2 · Associate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Coming soon: milestones for topic progress and skill growth.</p>
            </CardContent>
          </Card>
        </section>

        <section id="rainmaker" className="mt-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Tier 3 · Rainmaker</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Coming soon: tough achievements for top performers.</p>
            </CardContent>
          </Card>
        </section>

        <section id="boardroom" className="mt-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Tier 4 · Boardroom</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Coming soon: legendary badges, some hidden until earned.</p>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Badges;
