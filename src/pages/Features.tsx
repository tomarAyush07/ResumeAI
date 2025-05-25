import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  FileText, 
  CheckCircle2, 
  Zap, 
  Star, 
  Shield, 
  BarChart, 
  Users, 
  Clock, 
  ArrowRight 
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI-Powered Analysis",
      description: "Get instant feedback and suggestions to improve your resume using advanced AI technology.",
      benefits: [
        "Smart content suggestions",
        "Grammar and style improvements",
        "Keyword optimization",
        "Format consistency checks"
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Professional Templates",
      description: "Choose from a wide range of professionally designed templates for your industry.",
      benefits: [
        "Industry-specific layouts",
        "Modern and clean designs",
        "Easy customization",
        "Mobile-responsive formats"
      ]
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "ATS Optimization",
      description: "Ensure your resume passes through Applicant Tracking Systems with our optimization tools.",
      benefits: [
        "Keyword analysis",
        "Format compatibility",
        "Content optimization",
        "Real-time feedback"
      ]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Smart Formatting",
      description: "Automatically format your resume with smart tools and suggestions.",
      benefits: [
        "One-click formatting",
        "Consistent styling",
        "Section organization",
        "Spacing optimization"
      ]
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Career Insights",
      description: "Get valuable insights about your career path and industry trends.",
      benefits: [
        "Industry benchmarks",
        "Salary insights",
        "Skill gap analysis",
        "Career path suggestions"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy & Security",
      description: "Your data is protected with enterprise-grade security measures.",
      benefits: [
        "End-to-end encryption",
        "Secure storage",
        "Privacy controls",
        "Regular backups"
      ]
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Performance Tracking",
      description: "Track your resume's performance and application success rate.",
      benefits: [
        "Application analytics",
        "Response tracking",
        "Success metrics",
        "Improvement suggestions"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Support",
      description: "Get help from our team of career experts and resume specialists.",
      benefits: [
        "24/7 support",
        "Expert reviews",
        "Personalized feedback",
        "Career guidance"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="container relative mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 mb-6">
            Powerful Features for Your Career Success
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover how our AI-powered platform can help you create a standout resume and advance your career.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-primary/10 backdrop-blur-sm bg-background/80 hover:border-primary/20 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto bg-primary/5 rounded-lg p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of professionals who have transformed their careers with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/pricing">
                  View Pricing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 