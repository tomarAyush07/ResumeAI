import { Github, Twitter, Mail, Heart, Linkedin, Facebook, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer() {
  return (
    <footer className="border-t bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent"
              >
                ResumeAI
              </motion.span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering job seekers with AI-powered resume analysis and career guidance.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="sr-only">Github</span>
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, x: 5 }}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Resume Analysis
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, x: 5 }}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Job Matching
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, x: 5 }}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Career Insights
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, x: 5 }}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Pricing
              </motion.a>
            </nav>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-lg">Resources</h3>
            <nav className="flex flex-col gap-2">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, x: 5 }}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Blog
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, x: 5 }}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Help Center
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, x: 5 }}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Resume Templates
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, x: 5 }}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Career Guide
              </motion.a>
            </nav>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-lg">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest career tips and updates.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background"
              />
              <Button size="icon" className="shrink-0">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-primary/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 ResumeAI. All rights reserved.
            </p>
            <nav className="flex gap-6 text-sm">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </motion.a>
            </nav>
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500" /> by the ResumeAI team
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
