
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CircularProgressProps {
  score: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  score,
  size = 200,
  strokeWidth = 12,
  className = '',
}) => {
  const [displayScore, setDisplayScore] = useState(0);
  
  // Animation to count up to the score
  useEffect(() => {
    if (score > 0) {
      let start = 0;
      const end = Math.min(score, 100);
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setDisplayScore(Math.round(end));
          clearInterval(timer);
        } else {
          setDisplayScore(Math.round(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [score]);

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const dash = (circumference * displayScore) / 100;
  const gapDash = circumference - dash;
  const colorClass = 
    score >= 80 ? "stroke-green-500" : 
    score >= 60 ? "stroke-blue-500" : 
    score >= 40 ? "stroke-yellow-500" : 
    "stroke-red-500";

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Background circle */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="opacity-10"
        />
        
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={gapDash}
          strokeLinecap="round"
          className={colorClass}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: gapDash }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </svg>
      
      {/* Score text */}
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-4xl font-bold">{displayScore}</span>
        <span className="text-sm text-muted-foreground">Match Score</span>
      </div>
    </div>
  );
};

export default CircularProgress;
