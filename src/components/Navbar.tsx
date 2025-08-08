import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Trophy, User, Code } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: Home },
    { path: '/problems', label: 'Problems', icon: Code },
    { path: '/leaderboard', label: 'Leaderboard', icon: Trophy },
    { path: '/profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">D</span>
            </div>
            <span className="text-xl font-bold text-foreground">Drill</span>
          </Link>
          
          <div className="flex items-center space-x-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Button
                key={path}
                variant={location.pathname === path ? "secondary" : "ghost"}
                size="sm"
                asChild
              >
                <Link to={path} className="flex items-center space-x-2">
                  <Icon size={16} />
                  <span className="hidden sm:inline">{label}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;