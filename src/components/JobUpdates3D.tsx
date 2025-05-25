import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const updates = [
  "AI/ML Jobs up 32%",
  "React Devs in High Demand",
  "Cloud Skills Trending",
  "Remote Work Growing",
  "Data Science Salaries Rising",
  "Full Stack Devs Wanted",
  "Cybersecurity Hot Market",
  "DevOps Skills Valued",
  "TypeScript Popularity Soaring",
  "Next.js Jobs Increasing",
  "UI/UX Designers Needed",
  "Backend Engineers in Demand",
  "Mobile Dev Jobs Growing",
  "Blockchain Skills Valued",
  "Product Managers Wanted",
  "QA Engineers Needed",
  "System Architects in Demand",
  "Database Experts Wanted",
  "Game Development Growing",
  "AR/VR Jobs Emerging",
  "Python Developers Hot",
  "Go Language Trending",
  "Rust Jobs Increasing",
  "Kubernetes Skills Valued",
  "Serverless Architecture Growing"
];

const JobUpdates3D = () => {
  const [currentUpdate, setCurrentUpdate] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);

  // Rotate through updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUpdate((prev) => (prev + 1) % updates.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Random blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      if (Math.random() < 0.1) { // 10% chance to blink
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 150);
      }
    }, 3000);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative w-[80px] h-[80px]"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        {/* Update Text - Now above the face */}
        <motion.div
          className="absolute -top-14 right-0 bg-background/95 backdrop-blur-sm px-2 py-1 rounded-lg shadow-lg border border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-[10px] font-medium text-foreground whitespace-nowrap">
            {updates[currentUpdate]}
          </p>
          {/* Thought bubble connector */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-background/95 transform rotate-45 border-r border-b border-border" />
        </motion.div>

        {/* Smiley Face Container */}
        <div className="relative w-full h-full">
          {/* Face Circle */}
          <div className="absolute w-full h-full bg-gradient-to-br from-primary/90 to-primary/70 rounded-full shadow-lg animate-float" />
          
          {/* Rosy Cheeks */}
          <div className="absolute top-[40%] left-[15%] w-[20%] h-[15%] bg-primary/20 rounded-full blur-sm" />
          <div className="absolute top-[40%] right-[15%] w-[20%] h-[15%] bg-primary/20 rounded-full blur-sm" />
          
          {/* Eyes */}
          <div 
            className={`absolute top-[25%] left-[22%] w-[20%] h-[20%] bg-black dark:bg-white rounded-full transition-transform duration-150 ${
              isBlinking ? 'scale-y-10' : 'scale-y-100'
            }`} 
          />
          <div 
            className={`absolute top-[25%] right-[22%] w-[20%] h-[20%] bg-black dark:bg-white rounded-full transition-transform duration-150 ${
              isBlinking ? 'scale-y-10' : 'scale-y-100'
            }`} 
          />
          
          {/* Super Happy Smile */}
          <div className="absolute top-[40%] left-[15%] w-[70%] h-[40%] border-b-[4px] border-black dark:border-white rounded-[50%]" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default JobUpdates3D; 