import { Card, CardContent } from "@/components/ui/card";
import { Upload, Search, FileText, Target, CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="w-12 h-12 text-primary" />,
      title: "Upload Your Resume",
      description: "Start by uploading your current resume in any common format (PDF, DOCX, TXT). Our system will automatically extract and analyze your content.",
      details: [
        "Supports multiple file formats",
        "Secure file upload",
        "Instant content extraction",
        "Privacy-focused processing"
      ]
    },
    {
      icon: <Search className="w-12 h-12 text-primary" />,
      title: "Job Matching",
      description: "Enter your desired job role or let our AI suggest matches based on your skills and experience. Browse through relevant job opportunities.",
      details: [
        "Smart job recommendations",
        "Industry-specific matches",
        "Location-based filtering",
        "Real-time job updates"
      ]
    },
    {
      icon: <FileText className="w-12 h-12 text-primary" />,
      title: "Resume Analysis",
      description: "Our AI analyzes your resume against the job requirements, providing detailed feedback and suggestions for improvement.",
      details: [
        "Keyword optimization",
        "Format analysis",
        "Skills gap identification",
        "ATS compatibility check"
      ]
    },
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Get Recommendations",
      description: "Receive personalized recommendations to enhance your resume, including content improvements and formatting suggestions.",
      details: [
        "Content enhancement tips",
        "Format optimization",
        "Keyword suggestions",
        "Industry best practices"
      ]
    },
    {
      icon: <CheckCircle2 className="w-12 h-12 text-primary" />,
      title: "Apply with Confidence",
      description: "Use your optimized resume to apply for jobs with confidence, knowing it's been tailored to maximize your chances of success.",
      details: [
        "Optimized for ATS systems",
        "Industry-standard formatting",
        "Keyword-rich content",
        "Professional presentation"
      ]
    }
  ];

  return (
    <div className="container max-w-7xl mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">How It Works</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Follow these simple steps to optimize your resume and land your dream job
        </p>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block" />

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <Card className="flex-1">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-muted-foreground mb-8">
          Join thousands of professionals who have already improved their career prospects
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
        >
          Start Your Journey
        </a>
      </div>
    </div>
  );
} 