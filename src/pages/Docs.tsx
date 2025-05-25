import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, Book, GraduationCap, Briefcase, Code, Award, Download, CheckCircle2, ArrowRight, Sparkles, Star, Zap, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function Docs() {
  const categories = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: <Sparkles className="w-5 h-5" />,
      content: [
        {
          title: "Quick Start Guide",
          description: "Learn how to get started with ResumeAI in minutes",
          content: "Follow these simple steps to begin optimizing your resume and boost your career prospects.",
          steps: [
            "Create your account and set up your profile",
            "Upload your existing resume or start from scratch",
            "Get AI-powered suggestions for improvements",
            "Download your optimized resume in multiple formats",
            "Track your application success rate"
          ],
          tips: [
            "Keep your profile information up to date",
            "Regularly update your skills and achievements",
            "Use the AI suggestions as a guide, not a replacement"
          ]
        },
        {
          title: "Account Setup",
          description: "Set up your account and preferences for the best experience",
          content: "Configure your account to match your career goals and preferences.",
          features: [
            "Profile customization with professional details",
            "Notification preferences for updates and tips",
            "Privacy settings to control your data",
            "API key management for developers",
            "Resume template preferences",
            "Career goal tracking"
          ],
          tips: [
            "Enable notifications for important updates",
            "Set your preferred resume format",
            "Connect your LinkedIn profile for easy import"
          ]
        },
        {
          title: "Resume Builder Guide",
          description: "Master the art of creating a perfect resume",
          content: "Learn how to use our powerful resume builder effectively.",
          steps: [
            "Choose the right template for your industry",
            "Add your professional experience with impact",
            "Highlight your key skills and achievements",
            "Include relevant certifications and education",
            "Add a compelling professional summary"
          ],
          tips: [
            "Use action verbs to start bullet points",
            "Quantify your achievements with numbers",
            "Keep your resume concise and focused"
          ]
        }
      ]
    },
    {
      id: "resume-examples",
      title: "Resume Examples",
      icon: <Star className="w-5 h-5" />,
      content: [
        {
          title: "Software Engineer Resume",
          description: "Professional resume example for software engineering roles",
          pdf: "/resumes/pdfs/software-engineer.pdf",
          highlights: [
            "Clean, modern design",
            "Skills-focused layout",
            "Project highlights",
            "Technical achievements"
          ],
          tags: ["Technical", "ATS-Friendly", "Modern"]
        },
        {
          title: "Product Manager Resume",
          description: "Effective resume example for product management",
          pdf: "/resumes/pdfs/product-manager.pdf",
          highlights: [
            "Impact-driven format",
            "Metrics and KPIs",
            "Product launches",
            "Team leadership"
          ],
          tags: ["Strategic", "Results-Oriented", "Leadership"]
        },
        {
          title: "Data Scientist Resume",
          description: "Professional resume for data science positions",
          pdf: "/resumes/pdfs/data-scientist.pdf",
          highlights: [
            "Technical skills section",
            "Research highlights",
            "Data projects",
            "Publications"
          ],
          tags: ["Analytical", "Research-Focused", "Technical"]
        }
      ]
    },
    {
      id: "best-practices",
      title: "Best Practices",
      icon: <Zap className="w-5 h-5" />,
      content: [
        {
          title: "Resume Writing Tips",
          description: "Essential tips for writing an effective resume",
          content: "Learn the best practices for crafting a compelling resume that stands out to employers.",
          tips: [
            "Use strong action verbs to start bullet points",
            "Quantify achievements with specific numbers and metrics",
            "Keep content concise and focused on relevant experience",
            "Highlight relevant skills and certifications",
            "Use industry-specific keywords",
            "Maintain consistent formatting throughout",
            "Proofread thoroughly for errors",
            "Customize for each job application"
          ],
          commonMistakes: [
            "Including irrelevant work experience",
            "Using generic descriptions",
            "Making the resume too long",
            "Including personal information",
            "Using unprofessional email addresses"
          ]
        },
        {
          title: "ATS Optimization",
          description: "How to make your resume ATS-friendly",
          content: "Optimize your resume for Applicant Tracking Systems to increase your chances of getting noticed.",
          tips: [
            "Use standard formatting and fonts",
            "Include relevant keywords from the job description",
            "Avoid graphics, tables, and complex layouts",
            "Keep the file size small and use standard formats",
            "Use clear section headings",
            "Avoid headers and footers",
            "Use simple bullet points",
            "Save as PDF or Word document"
          ],
          keywords: [
            "Industry-specific terminology",
            "Technical skills and tools",
            "Certifications and qualifications",
            "Soft skills and competencies",
            "Action verbs and power words"
          ]
        },
        {
          title: "Career Development",
          description: "Strategies for long-term career growth",
          content: "Learn how to continuously improve your resume and career prospects.",
          strategies: [
            "Regularly update your skills and certifications",
            "Track and document your achievements",
            "Build a strong professional network",
            "Stay current with industry trends",
            "Seek feedback from mentors and peers"
          ],
          tips: [
            "Set specific career goals",
            "Create a professional development plan",
            "Maintain an updated portfolio",
            "Engage in continuous learning",
            "Build your personal brand"
          ]
        },
        {
          title: "Interview Preparation",
          description: "Prepare for interviews using your optimized resume",
          content: "Learn how to leverage your resume during interviews and follow-ups.",
          tips: [
            "Review your resume before each interview",
            "Prepare stories for key achievements",
            "Practice explaining career transitions",
            "Research the company and role",
            "Prepare questions for the interviewer"
          ],
          followUp: [
            "Send a thank-you email after interviews",
            "Update your resume based on feedback",
            "Keep track of application status",
            "Maintain professional relationships",
            "Follow up appropriately"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="container max-w-7xl mx-auto py-16 px-4 relative">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
              Documentation & Examples
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
              Learn how to create the perfect resume with our comprehensive guides and examples
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 backdrop-blur-sm bg-background/80 border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Sparkles className="w-5 h-5" />
                  Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[600px] pr-4">
                  <nav className="space-y-2">
                    {categories.map((category) => (
                      <motion.a
                        key={category.id}
                        href={`#${category.id}`}
                        className="flex items-center gap-2 p-3 rounded-md hover:bg-primary/10 transition-colors group"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {category.icon}
                        <span className="group-hover:text-primary transition-colors">
                          {category.title}
                        </span>
                      </motion.a>
                    ))}
                  </nav>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="getting-started" className="space-y-8">
              <TabsList className="w-full justify-start bg-background/80 backdrop-blur-sm border-primary/10">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id} 
                    className="flex items-center gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                  >
                    {category.icon}
                    <span>{category.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="space-y-8">
                  {category.content.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="overflow-hidden border-primary/10 backdrop-blur-sm bg-background/80">
                        <CardHeader className="border-b border-primary/10 bg-primary/5">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-2xl text-primary">{item.title}</CardTitle>
                              <CardDescription className="text-base mt-2">
                                {item.description}
                              </CardDescription>
                            </div>
                            {item.tags && (
                              <div className="flex gap-2">
                                {item.tags.map((tag, idx) => (
                                  <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                        </CardHeader>
                        <CardContent className="p-6">
                          {item.pdf ? (
                            <div className="space-y-6">
                              <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold text-primary">Resume Preview</h3>
                                <Button asChild className="bg-primary hover:bg-primary/90">
                                  <a href={item.pdf} download className="flex items-center gap-2">
                                    <Download className="w-4 h-4" />
                                    Download PDF
                                  </a>
                                </Button>
                              </div>
                              <div className="relative w-full aspect-[3/4] max-w-2xl mx-auto bg-muted rounded-lg overflow-hidden shadow-lg border border-primary/10">
                                <iframe
                                  src={`${item.pdf}#toolbar=0&navpanes=0`}
                                  className="absolute inset-0 w-full h-full"
                                  title={item.title}
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-4 mt-6">
                                {item.highlights?.map((highlight, idx) => (
                                  <motion.div
                                    key={idx}
                                    className="flex items-center gap-2"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                  >
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    <span>{highlight}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-6">
                              <p className="text-muted-foreground">{item.content}</p>
                              
                              {/* Steps Section */}
                              {item.steps && (
                                <div className="space-y-4">
                                  <h4 className="text-lg font-semibold text-primary">Steps</h4>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {item.steps.map((step, idx) => (
                                      <motion.div
                                        key={idx}
                                        className="flex items-center gap-2"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                      >
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                                          {idx + 1}
                                        </div>
                                        <span>{step}</span>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Tips Section */}
                              {item.tips && (
                                <div className="space-y-4">
                                  <h4 className="text-lg font-semibold text-primary">Tips</h4>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {item.tips.map((tip, idx) => (
                                      <motion.div
                                        key={idx}
                                        className="flex items-center gap-2"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                      >
                                        <ArrowRight className="w-4 h-4 text-primary" />
                                        <span>{tip}</span>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Features Section */}
                              {item.features && (
                                <div className="space-y-4">
                                  <h4 className="text-lg font-semibold text-primary">Features</h4>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {item.features.map((feature, idx) => (
                                      <motion.div
                                        key={idx}
                                        className="flex items-center gap-2"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                      >
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                        <span>{feature}</span>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Common Mistakes Section */}
                              {item.commonMistakes && (
                                <div className="space-y-4">
                                  <h4 className="text-lg font-semibold text-primary">Common Mistakes to Avoid</h4>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {item.commonMistakes.map((mistake, idx) => (
                                      <motion.div
                                        key={idx}
                                        className="flex items-center gap-2 text-destructive"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                      >
                                        <X className="w-4 h-4" />
                                        <span>{mistake}</span>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Keywords Section */}
                              {item.keywords && (
                                <div className="space-y-4">
                                  <h4 className="text-lg font-semibold text-primary">Important Keywords</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {item.keywords.map((keyword, idx) => (
                                      <Badge key={idx} variant="outline" className="bg-primary/5">
                                        {keyword}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Strategies Section */}
                              {item.strategies && (
                                <div className="space-y-4">
                                  <h4 className="text-lg font-semibold text-primary">Strategies</h4>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {item.strategies.map((strategy, idx) => (
                                      <motion.div
                                        key={idx}
                                        className="flex items-center gap-2"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                      >
                                        <Zap className="w-4 h-4 text-primary" />
                                        <span>{strategy}</span>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Follow-up Section */}
                              {item.followUp && (
                                <div className="space-y-4">
                                  <h4 className="text-lg font-semibold text-primary">Follow-up Actions</h4>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {item.followUp.map((action, idx) => (
                                      <motion.div
                                        key={idx}
                                        className="flex items-center gap-2"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                      >
                                        <ArrowRight className="w-4 h-4 text-primary" />
                                        <span>{action}</span>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
} 