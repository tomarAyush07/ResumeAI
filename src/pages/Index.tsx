import { useEffect } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ResumeAnalyzer from "@/components/ResumeAnalyzer";
import JobUpdates3D from "@/components/JobUpdates3D";
import { motion, useScroll, useTransform } from "framer-motion";
import useSettingsStore from "@/stores/settingsStore";

const Index = () => {
  const { animationsEnabled, enhancedVisualsEnabled } = useSettingsStore();
  const { scrollY } = useScroll();
  
  // Transform values for parallax effects
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.2]);
  const heroY = useTransform(scrollY, [0, 300], [0, 100]);
  const featuresY = useTransform(scrollY, [300, 600], [100, 0]);
  
  useEffect(() => {
    // Update page title
    document.title = "Resume AI | Smart Resume Analyzer";
    
    // Add scroll listener for animations
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll(".scroll-animate");
      
      scrollElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementHeight = element.getBoundingClientRect().height;
        
        if (elementTop < window.innerHeight - elementHeight / 3) {
          element.classList.add("animate-fade-in");
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-background/90">
      <main className="flex-grow">
        {/* Hero section with parallax effect */}
        {animationsEnabled ? (
          <motion.div style={{ opacity: heroOpacity, y: heroY }}>
            <Hero />
          </motion.div>
        ) : (
          <Hero />
        )}
        
        {/* Job Updates 3D Section */}
        <section className="py-12 flex justify-center items-center">
          <JobUpdates3D />
        </section>
        
        {/* Features section with scroll animations */}
        {animationsEnabled ? (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ y: featuresY }}
            className="scroll-animate relative z-10"
          >
            <Features />
          </motion.section>
        ) : (
          <section className="scroll-animate">
            <Features />
          </section>
        )}
        
        {/* Resume Analyzer section with enhanced 3D animations */}
        {animationsEnabled ? (
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="scroll-animate relative z-20"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/5 pointer-events-none" />
            <ResumeAnalyzer />
          </motion.section>
        ) : (
          <section className="scroll-animate relative z-20">
            <ResumeAnalyzer />
          </section>
        )}
        
        {/* Enhanced background decorative elements */}
        {enhancedVisualsEnabled && (
          <>
            <div className="fixed top-20 -left-28 w-56 h-56 bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
            <div className="fixed bottom-32 -right-28 w-72 h-72 bg-secondary/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
            <div className="fixed top-1/3 right-1/4 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl pointer-events-none animate-float" />
            <div className="fixed bottom-1/4 left-1/3 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none animate-rotate-slow" />
          </>
        )}
      </main>
    </div>
  );
};

export default Index;
