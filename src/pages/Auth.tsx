import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, Mail, Lock, User, Linkedin } from 'lucide-react';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';

  useEffect(() => {
    // Check if user is already logged in and route based on onboarding status
    const routeAfterAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const localOnboarded = !!localStorage.getItem('drillOnboarding');
      if (localOnboarded) {
        navigate('/dashboard');
        return;
      }

      try {
        const { data } = await supabase
          .from('profiles')
          .select('onboarding_plan,onboarding_started_at')
          .eq('id', session.user.id)
          .single();

        const hasOnboarded = !!(data?.onboarding_plan || data?.onboarding_started_at);
        navigate(hasOnboarded ? '/dashboard' : '/onboarding');
      } catch {
        // Fallback: if profile missing, send to onboarding
        navigate('/onboarding');
      }
    };

    routeAfterAuth();
  }, [navigate]);

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
            options: {
              emailRedirectTo: `${window.location.origin}/auth`,
              data: {
                full_name: username || email.split('@')[0],
              }
            }
        });
        
        if (error) throw error;
        setError('Check your email for the confirmation link!');
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password
        });
        
        if (error) throw error;
        // Decide destination based on onboarding status
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          const localOnboarded = !!localStorage.getItem('drillOnboarding');
          if (localOnboarded) {
            navigate('/dashboard');
          } else {
            try {
              const { data } = await supabase
                .from('profiles')
                .select('onboarding_plan,onboarding_started_at')
                .eq('id', session.user.id)
                .single();
              const hasOnboarded = !!(data?.onboarding_plan || data?.onboarding_started_at);
              navigate(hasOnboarded ? '/dashboard' : '/onboarding');
            } catch {
              navigate('/onboarding');
            }
          }
        }
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLinkedInAuth = async () => {
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'linkedin_oidc',
        options: {
          redirectTo: `${window.location.origin}/auth`
        }
      });
      
      if (error) throw error;
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth`,
          queryParams: { prompt: 'select_account' },
        },
      });
      if (error) throw error;
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-card border-border">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-foreground">
            {isSignUp ? 'Join Drill' : 'Welcome Back'}
          </CardTitle>
          <p className="text-muted-foreground">
            {isSignUp 
              ? 'Start your investment banking prep journey' 
              : 'Continue your learning journey'
            }
          </p>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {error && (
            <Alert variant={error.includes('Check your email') ? 'default' : 'destructive'}>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <div className="space-y-2">
            <Label className="text-foreground">Current Site URL</Label>
            <div className="flex gap-2">
              <Input readOnly value={siteUrl} />
              <Button type="button" variant="secondary" onClick={() => navigator.clipboard.writeText(siteUrl)}>
                Copy
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">Use this in Supabase Site URL and Google Authorized JavaScript origin.</p>
          </div>
          
          <form onSubmit={handleEmailAuth} className="space-y-4">
            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="username" className="text-foreground">Username</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                  minLength={6}
                />
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full" 
              disabled={loading}
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isSignUp ? 'Create Account' : 'Sign In'}
            </Button>
          </form>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or</span>
            </div>
          </div>
          
          <Button
            variant="outline"
            className="w-full"
            onClick={handleGoogleAuth}
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <span className="mr-2 inline-flex items-center">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
                  <path fill="#EA4335" d="M12 10.2v3.6h5.1c-.2 1.2-.9 2.3-2 3.1l3.2 2.5c1.9-1.8 3-4.3 3-7.3 0-.7-.1-1.4-.2-2H12z"/>
                  <path fill="#34A853" d="M12 22c2.7 0 5-0.9 6.6-2.5l-3.2-2.5c-.9.6-2 .9-3.4.9-2.6 0-4.8-1.7-5.6-4.1H2.9v2.6C4.5 19.8 8 22 12 22z"/>
                  <path fill="#4285F4" d="M6.4 13.8c-.2-.6-.4-1.3-.4-1.8s.1-1.2.3-1.8V6.6H2.9C2.3 7.9 2 9.4 2 12s.3 4.1.9 5.4l3.5-2.6z"/>
                  <path fill="#FBBC05" d="M12 5.5c1.5 0 2.8.5 3.9 1.5l2.9-2.9C16.9 2.4 14.7 1.6 12 1.6 8 1.6 4.5 3.8 2.9 6.6L6.3 9C7.1 7.2 9.4 5.5 12 5.5z"/>
                </svg>
              </span>
            )}
            <span>Continue with Google</span>
          </Button>

          <Button 
            variant="outline" 
            className="w-full" 
            onClick={handleLinkedInAuth}
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Linkedin className="mr-2 h-4 w-4" aria-hidden="true" />
            )}
            <span>Continue with LinkedIn</span>
          </Button>
          
          <div className="text-center">
            <Button
              variant="link"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-primary"
            >
              {isSignUp 
                ? 'Already have an account? Sign in' 
                : "Don't have an account? Sign up"
              }
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;