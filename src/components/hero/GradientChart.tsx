import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const GradientChart = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate smooth curve path
  const generatePath = () => {
    const points = [
      { x: 0, y: 80 },
      { x: 15, y: 75 },
      { x: 30, y: 60 },
      { x: 45, y: 65 },
      { x: 60, y: 45 },
      { x: 75, y: 35 },
      { x: 90, y: 25 },
      { x: 100, y: 20 },
    ];

    let path = `M ${points[0].x} ${points[0].y}`;
    
    for (let i = 0; i < points.length - 1; i++) {
      const current = points[i];
      const next = points[i + 1];
      const controlX = (current.x + next.x) / 2;
      
      path += ` Q ${controlX} ${current.y}, ${next.x} ${next.y}`;
    }
    
    return path;
  };

  const pathData = generatePath();

  return (
    <div className="relative w-full h-[300px] rounded-xl overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 border border-border">
      {/* Grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Chart SVG */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          {/* Gradient for the line */}
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#14b8a6" stopOpacity="1" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.9" />
          </linearGradient>
          
          {/* Gradient for the fill area */}
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
          </linearGradient>

          {/* Glow effect */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Fill area below the line */}
        <motion.path
          d={`${pathData} L 100 100 L 0 100 Z`}
          fill="url(#areaGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: mounted ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Main line */}
        <motion.path
          d={pathData}
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: mounted ? 1 : 0, opacity: mounted ? 1 : 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />

        {/* Animated dot at the end */}
        <motion.circle
          cx="100"
          cy="20"
          r="1.5"
          fill="#06b6d4"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: mounted ? [1, 1.5, 1] : 0,
            opacity: mounted ? [0.5, 1, 0.5] : 0 
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </svg>

      {/* Stats overlay */}
      <div className="absolute top-4 left-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-card/80 backdrop-blur-sm border border-border rounded-lg px-4 py-2"
        >
          <div className="flex items-center gap-3">
            <div>
              <div className="text-xs text-muted-foreground">Your Progress</div>
              <div className="text-lg font-bold text-emerald-500">+247%</div>
            </div>
            <div className="text-xs text-emerald-500">↗</div>
          </div>
        </motion.div>
      </div>

      {/* XP indicator */}
      <div className="absolute bottom-4 right-4 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-card/80 backdrop-blur-sm border border-border rounded-lg px-4 py-2"
        >
          <div className="text-xs text-muted-foreground mb-1">Total XP Earned</div>
          <div className="text-xl font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
            12,450
          </div>
        </motion.div>
      </div>
    </div>
  );
};
