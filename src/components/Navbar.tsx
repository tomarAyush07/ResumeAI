import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Menu, X, Book, Bot, Sparkles } from "lucide-react";
import ApiKeyInput from "./ApiKeyInput";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

import { InitialLoader } from "./ui/initial-loader";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLogoLoading, setIsLogoLoading] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 2500); // Show loader for 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLogoLoading(true);
    // Simulate loading for 1.5 seconds
    setTimeout(() => {
      setIsLogoLoading(false);
      window.location.href = '/';
    }, 1500);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <AnimatePresence>
        {isInitialLoading && <InitialLoader />}
      </AnimatePresence>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300",
          scrolled && "shadow-lg"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <motion.button
                  onClick={handleLogoClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center group relative"
                >
                  <AnimatePresence mode="wait">
                    {isLogoLoading ? (
                      <motion.div
                        key="loader"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center space-x-1"
                      >
                        {[0, 1, 2].map((index) => (
                          <motion.div
                            key={index}
                            className="w-2 h-2 rounded-full bg-primary"
                            animate={{
                              y: ["0%", "-50%", "0%"],
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              delay: index * 0.2,
                              ease: "easeInOut",
                            }}
                          />
                        ))}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="logo"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center"
                      >
                        <Sparkles className="w-5 h-5 mr-2 text-primary group-hover:rotate-12 transition-transform duration-300" />
                        <span className="text-xl font-bold bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
                          ResumeAI
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
              <Link to="/chat">
                <Button 
                  variant={isActive("/chat") ? "default" : "link"}
                  className={cn(
                    "relative font-semibold group",
                    isActive("/chat") && "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:origin-left after:scale-x-100 after:transition-transform after:duration-300"
                  )}
                >
                  <Bot className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  CodeProof AI
                </Button>
              </Link>
              <Link to="/features">
                <Button 
                  variant={isActive("/features") ? "default" : "link"}
                  className={cn(
                    "relative group",
                    isActive("/features") && "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:origin-left after:scale-x-100 after:transition-transform after:duration-300"
                  )}
                >
                  Features
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button 
                  variant={isActive("/how-it-works") ? "default" : "link"}
                  className={cn(
                    "relative group",
                    isActive("/how-it-works") && "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:origin-left after:scale-x-100 after:transition-transform after:duration-300"
                  )}
                >
                  How It Works
                </Button>
              </Link>
              <Link to="/docs">
                <Button 
                  variant={isActive("/docs") ? "default" : "link"}
                  className={cn(
                    "relative group",
                    isActive("/docs") && "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:origin-left after:scale-x-100 after:transition-transform after:duration-300"
                  )}
                >
                  <Book className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Docs
                </Button>
              </Link>
              <Link to="/pricing">
                <Button 
                  variant={isActive("/pricing") ? "default" : "link"}
                  className={cn(
                    "relative group",
                    isActive("/pricing") && "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:origin-left after:scale-x-100 after:transition-transform after:duration-300"
                  )}
                >
                  Pricing
                </Button>
              </Link>
              <ApiKeyInput />
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center sm:hidden">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="ml-2 relative"
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="sm:hidden overflow-hidden"
            >
              <div className="space-y-1 pb-3 pt-2 px-2">
                <Link to="/chat">
                  <Button 
                    variant="ghost" 
                    className={cn(
                      "w-full justify-start font-semibold group",
                      isActive("/chat") && "bg-primary/10 text-primary"
                    )}
                  >
                    <Bot className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    CodeProof AI
                  </Button>
                </Link>
                <Link to="/features">
                  <Button 
                    variant="ghost" 
                    className={cn(
                      "w-full justify-start group",
                      isActive("/features") && "bg-primary/10 text-primary"
                    )}
                  >
                    Features
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button 
                    variant="ghost" 
                    className={cn(
                      "w-full justify-start group",
                      isActive("/how-it-works") && "bg-primary/10 text-primary"
                    )}
                  >
                    How It Works
                  </Button>
                </Link>
                <Link to="/docs">
                  <Button 
                    variant="ghost" 
                    className={cn(
                      "w-full justify-start group",
                      isActive("/docs") && "bg-primary/10 text-primary"
                    )}
                  >
                    <Book className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Docs
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button 
                    variant="ghost" 
                    className={cn(
                      "w-full justify-start group",
                      isActive("/pricing") && "bg-primary/10 text-primary"
                    )}
                  >
                    Pricing
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
