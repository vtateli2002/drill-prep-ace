import Navbar from '@/components/Navbar';
import { Seo } from '@/components/Seo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, Briefcase, Sparkles, Building2, ChevronRight } from 'lucide-react';

const TierCard = ({
  id,
  icon: Icon,
  title,
  description,
}: {
  id: string;
  icon: any;
  title: string;
  description: string;
}) => (
  <a href={`#${id}`} className="block group focus:outline-none">
    <Card className="transition-shadow group-hover:shadow-lg border-border bg-card">
      <CardContent className="p-5 flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
          <Icon size={22} />
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
              icon={Calculator}
              title="Tier 1 · Analyst"
              description="Common achievements to kickstart momentum."
            />
            <TierCard
              id="associate"
              icon={Briefcase}
              title="Tier 2 · Associate"
              description="Intermediate goals for consistent progress."
            />
            <TierCard
              id="rainmaker"
              icon={Sparkles}
              title="Tier 3 · Rainmaker"
              description="Expert‑level achievements with real challenge."
            />
            <TierCard
              id="boardroom"
              icon={Building2}
              title="Tier 4 · Boardroom"
              description="Legendary, rare, and sometimes mysterious."
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
