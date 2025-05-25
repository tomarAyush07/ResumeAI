import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles, ArrowRight, Star, Zap, CheckCircle2, Rocket, Target, Users } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0.3]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.95]);
  const navigate = useNavigate();

  const scrollToAnalyzer = () => {
    const analyzerSection = document.getElementById("resume-analyzer");
    if (analyzerSection) {
      analyzerSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLearnMore = () => {
    navigate("/how-it-works");
  };

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-background to-background/90 min-h-screen">
      <div className="absolute inset-0 -z-10">
        <div className="relative h-full w-full">
          <div
            className="absolute -top-48 left-0 -z-10 transform-gpu blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-purple-500 to-blue-500 opacity-30"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div
            className="absolute -bottom-40 right-0 -z-10 transform-gpu blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-blue-500 to-purple-500 opacity-30"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/10 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-purple-500/10 rounded-full blur-lg"
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-blue-500/10 rounded-full blur-lg"
          animate={{
            y: [0, -15, 0],
            x: [0, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="mx-auto max-w-4xl text-center px-6 py-16 sm:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
          style={{ 
            opacity,
            scale,
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-primary/20 to-purple-500/20 text-primary ring-1 ring-inset ring-primary/20 hover:ring-primary/30 transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            AI-Powered Resume Analysis
          </motion.div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500">
              AI-Powered
            </span>{" "}
            Resume Analysis &<br />
            Job Matching
          </h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Upload your resume and get AI-powered insights to improve your chances of landing 
            your dream job. Analyze how well your resume matches specific job descriptions and 
            receive personalized suggestions.
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white group relative overflow-hidden px-8"
              onClick={scrollToAnalyzer}
            >
              <span className="relative z-10 flex items-center">
                Try It Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="group relative overflow-hidden px-8"
              onClick={handleLearnMore}
            >
              <span className="relative z-10">Learn More</span>
              <motion.div
                className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gradient-to-b from-primary/5 to-transparent border border-primary/10 hover:border-primary/20 transition-all duration-300"
            >
              <Rocket className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Fast Analysis</h3>
              <p className="text-sm text-muted-foreground">Get instant feedback on your resume's strengths and areas for improvement</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gradient-to-b from-primary/5 to-transparent border border-primary/10 hover:border-primary/20 transition-all duration-300"
            >
              <Target className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Job Matching</h3>
              <p className="text-sm text-muted-foreground">See how well your resume matches specific job descriptions</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gradient-to-b from-primary/5 to-transparent border border-primary/10 hover:border-primary/20 transition-all duration-300"
            >
              <Users className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Expert Tips</h3>
              <p className="text-sm text-muted-foreground">Receive personalized suggestions from our AI-powered system</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 grid grid-cols-3 gap-6 border-t border-primary/10 pt-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-lg bg-gradient-to-b from-primary/5 to-transparent"
            >
              <div className="text-3xl font-bold text-primary flex items-center justify-center gap-2">
                98%
                <Star className="w-5 h-5 text-yellow-500" />
              </div>
              <div className="text-sm text-muted-foreground mt-1">Success Rate</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-lg bg-gradient-to-b from-primary/5 to-transparent"
            >
              <div className="text-3xl font-bold text-primary flex items-center justify-center gap-2">
                10k+
                <Zap className="w-5 h-5 text-blue-500" />
              </div>
              <div className="text-sm text-muted-foreground mt-1">Resumes Analyzed</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-lg bg-gradient-to-b from-primary/5 to-transparent"
            >
              <div className="text-3xl font-bold text-primary flex items-center justify-center gap-2">
                24/7
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              </div>
              <div className="text-sm text-muted-foreground mt-1">AI Support</div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Button 
            variant="ghost" 
            onClick={scrollToAnalyzer}
            className="animate-bounce hover:bg-primary/10"
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
