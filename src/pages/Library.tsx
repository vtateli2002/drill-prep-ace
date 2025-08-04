import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Calculator, TrendingUp, Building } from 'lucide-react';
import { Track, TRACK_NAMES } from '@/types/drill';

const Library = () => {
  const libraryContent = {
    accounting: {
      icon: Calculator,
      color: 'tracks-accounting',
      topics: [
        {
          title: 'Financial Statements',
          concepts: ['Income Statement', 'Balance Sheet', 'Cash Flow Statement', 'Statement of Equity']
        },
        {
          title: 'Revenue Recognition',
          concepts: ['ASC 606', 'Contract Assets', 'Deferred Revenue', 'Multiple Element Arrangements']
        },
        {
          title: 'Working Capital',
          concepts: ['Current Ratio', 'Quick Ratio', 'Cash Conversion Cycle', 'Days Sales Outstanding']
        }
      ]
    },
    valuation: {
      icon: TrendingUp,
      color: 'tracks-valuation',
      topics: [
        {
          title: 'DCF Analysis',
          concepts: ['Free Cash Flow', 'Terminal Value', 'WACC', 'Present Value']
        },
        {
          title: 'Comparable Analysis',
          concepts: ['Trading Multiples', 'Transaction Multiples', 'EV/Revenue', 'EV/EBITDA']
        },
        {
          title: 'Precedent Transactions',
          concepts: ['Control Premium', 'Synergies', 'Market Conditions', 'Deal Structure']
        }
      ]
    },
    lbo: {
      icon: Building,
      color: 'tracks-lbo',
      topics: [
        {
          title: 'LBO Modeling',
          concepts: ['Sources & Uses', 'Debt Schedule', 'Cash Flow Projections', 'Returns Analysis']
        },
        {
          title: 'Capital Structure',
          concepts: ['Senior Debt', 'Subordinated Debt', 'PIK Notes', 'Equity Contribution']
        },
        {
          title: 'Exit Strategies',
          concepts: ['Strategic Sale', 'IPO', 'Dividend Recap', 'Secondary Buyout']
        }
      ]
    },
    ma: {
      icon: BookOpen,
      color: 'tracks-ma',
      topics: [
        {
          title: 'Deal Structure',
          concepts: ['Cash vs Stock', 'Earnouts', 'Collars', 'CVRs']
        },
        {
          title: 'Synergies Analysis',
          concepts: ['Revenue Synergies', 'Cost Synergies', 'Tax Benefits', 'Financial Synergies']
        },
        {
          title: 'Accretion/Dilution',
          concepts: ['Pro Forma EPS', 'Exchange Ratio', 'Cost of Capital', 'Breakeven Analysis']
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Study Library</h1>
          <p className="text-muted-foreground">
            Comprehensive reference for all investment banking concepts and formulas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Object.entries(libraryContent).map(([track, data]) => {
            const Icon = data.icon;
            return (
              <Card key={track} className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Icon className={`text-${data.color}`} size={24} />
                    <span>{TRACK_NAMES[track as Track]}</span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {data.topics.map((topic, index) => (
                    <div key={index} className="border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-3">{topic.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {topic.concepts.map((concept, conceptIndex) => (
                          <Badge key={conceptIndex} variant="secondary" className="text-xs">
                            {concept}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-12 bg-muted rounded-lg p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">📚 How to Use the Library</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-lg">📘</span>
                <span className="font-medium">Concepts</span>
              </div>
              <p className="text-muted-foreground">
                Core definitions and explanations
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-lg">📊</span>
                <span className="font-medium">Formulas</span>
              </div>
              <p className="text-muted-foreground">
                Mathematical formulas and calculations
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-lg">ℹ️</span>
                <span className="font-medium">Tips</span>
              </div>
              <p className="text-muted-foreground">
                Interview tips and best practices
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;