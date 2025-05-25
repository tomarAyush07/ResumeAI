import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, Briefcase, Copy, CheckCircle2, Download, FileDown } from "lucide-react";
import { toast } from "sonner";

interface Template {
  id: string;
  title: string;
  description: string;
  content: string;
  category: "resume" | "job";
  format: "text" | "markdown" | "html";
}

const templates: Template[] = [
  {
    id: "resume-1",
    title: "Professional Resume",
    description: "A clean and professional resume template suitable for most industries",
    content: `PROFESSIONAL SUMMARY
Experienced professional with a proven track record in [industry]. Skilled in [key skills] with a focus on delivering high-quality results.

WORK EXPERIENCE
[Company Name] | [Position] | [Dates]
• Led and managed [specific project/initiative]
• Increased [metric] by [percentage]
• Collaborated with cross-functional teams to [achievement]

EDUCATION
[Degree] in [Field]
[University Name] | [Graduation Year]

SKILLS
• [Skill 1]
• [Skill 2]
• [Skill 3]`,
    category: "resume",
    format: "text"
  },
  {
    id: "resume-2",
    title: "Technical Resume",
    description: "Perfect for software developers and technical roles",
    content: `TECHNICAL SKILLS
• Programming Languages: [Languages]
• Frameworks: [Frameworks]
• Tools & Technologies: [Tools]

PROFESSIONAL EXPERIENCE
[Company] | [Role] | [Duration]
• Developed and maintained [project/feature]
• Implemented [technology] resulting in [improvement]
• Collaborated with team to [achievement]

PROJECTS
[Project Name]
• Built [description] using [technologies]
• Achieved [result/impact]

EDUCATION
[Degree] in Computer Science
[University] | [Year]`,
    category: "resume",
    format: "text"
  },
  {
    id: "resume-3",
    title: "Executive Resume",
    description: "Designed for senior management and executive positions",
    content: `EXECUTIVE PROFILE
Strategic leader with [X] years of experience driving organizational growth and transformation. Proven track record in [key achievements].

CAREER HIGHLIGHTS
• Led [major initiative] resulting in [significant impact]
• Transformed [department/process] leading to [measurable results]
• Established [new program/strategy] that [outcome]

PROFESSIONAL EXPERIENCE
[Company] | [Executive Position] | [Duration]
• Spearheaded [major project/initiative]
• Managed [budget/team size] with [results]
• Developed and executed [strategy] leading to [outcome]

EDUCATION & CERTIFICATIONS
• [Advanced Degree] in [Field]
• [Professional Certification]
• [Additional Relevant Training]`,
    category: "resume",
    format: "text"
  },
  {
    id: "resume-4",
    title: "Creative Professional Resume",
    description: "Ideal for designers, artists, and creative professionals",
    content: `CREATIVE PORTFOLIO
[Your Name]
[Portfolio Website] | [Email] | [Phone]

PROFESSIONAL SUMMARY
Creative professional with expertise in [specific creative field]. Passionate about [creative focus] with a strong portfolio of [type of work].

SELECTED WORKS
[Project Name]
• Role: [Your Role]
• Description: [Brief project description]
• Impact: [Results/Recognition]

SKILLS & EXPERTISE
• Design Tools: [List relevant tools]
• Creative Software: [List software]
• Technical Skills: [List technical skills]

EDUCATION & TRAINING
[Degree/Certification] in [Field]
[Institution] | [Year]`,
    category: "resume",
    format: "text"
  },
  {
    id: "resume-5",
    title: "Academic Resume",
    description: "Tailored for academic and research positions",
    content: `CURRICULUM VITAE
[Your Name]
[Department] | [Institution] | [Email]

EDUCATION
[Degree] in [Field]
[University] | [Year]
• Thesis: [Thesis Title]
• Advisor: [Advisor Name]

RESEARCH EXPERIENCE
[Position] | [Institution] | [Duration]
• Research Focus: [Area of Research]
• Key Findings: [Major Discoveries]
• Publications: [List relevant papers]

TEACHING EXPERIENCE
[Course Name] | [Institution] | [Duration]
• Role: [Teaching Role]
• Responsibilities: [Key Duties]

PUBLICATIONS
• [Publication 1]
• [Publication 2]
• [Publication 3]`,
    category: "resume",
    format: "text"
  },
  {
    id: "job-1",
    title: "Software Developer",
    description: "Standard job description for a software developer position",
    content: `Position: Software Developer
Location: [Location]
Type: Full-time
Experience Level: Mid to Senior
Salary Range: [Range]

About the Role:
We are seeking a skilled Software Developer to join our team. The ideal candidate will be responsible for developing and maintaining high-quality software solutions.

Key Responsibilities:
• Design and implement software solutions
• Write clean, maintainable, and efficient code
• Collaborate with cross-functional teams
• Participate in code reviews and technical discussions
• Troubleshoot and debug complex issues
• Contribute to architectural decisions

Required Qualifications:
• Bachelor's degree in Computer Science or related field
• [X] years of experience in software development
• Proficiency in [programming languages]
• Experience with [frameworks/tools]
• Strong problem-solving skills
• Experience with version control systems

Preferred Qualifications:
• Experience with [additional technologies]
• Knowledge of [specific domain]
• Contributions to open-source projects
• Experience with cloud platforms
• Understanding of CI/CD practices

Benefits:
• Competitive salary and benefits package
• Flexible work arrangements
• Professional development opportunities
• Collaborative work environment
• Health and wellness programs`,
    category: "job",
    format: "text"
  },
  {
    id: "job-2",
    title: "Frontend Developer",
    description: "Job description template for frontend development roles",
    content: `Position: Frontend Developer
Location: [Location]
Type: Full-time
Experience Level: Mid to Senior
Salary Range: [Range]

About the Role:
We're looking for a Frontend Developer to create beautiful and functional user interfaces. You'll work closely with our design and backend teams to deliver exceptional user experiences.

Key Responsibilities:
• Develop responsive and interactive web applications
• Implement modern UI/UX designs
• Optimize application performance
• Write clean, maintainable code
• Collaborate with backend developers
• Ensure cross-browser compatibility
• Implement accessibility standards

Required Qualifications:
• Strong experience with HTML, CSS, and JavaScript
• Proficiency in React or similar frameworks
• Understanding of responsive design principles
• Experience with version control systems
• Knowledge of web performance optimization
• Experience with modern build tools

Preferred Qualifications:
• Experience with TypeScript
• Knowledge of testing frameworks
• Understanding of accessibility standards
• Experience with design tools
• Experience with state management libraries
• Knowledge of GraphQL

Benefits:
• Competitive salary and benefits
• Remote work options
• Professional development budget
• Modern development environment
• Collaborative team culture`,
    category: "job",
    format: "text"
  },
  {
    id: "job-3",
    title: "Product Manager",
    description: "Comprehensive job description for product management roles",
    content: `Position: Product Manager
Location: [Location]
Type: Full-time
Experience Level: Mid to Senior
Salary Range: [Range]

About the Role:
We are seeking an experienced Product Manager to drive the development and success of our products. You will be responsible for defining product strategy, gathering requirements, and working with cross-functional teams to deliver exceptional products.

Key Responsibilities:
• Define product vision, strategy, and roadmap
• Gather and analyze user feedback and market data
• Write detailed product requirements and user stories
• Collaborate with engineering, design, and business teams
• Track and analyze product metrics
• Prioritize features and improvements
• Conduct market research and competitive analysis

Required Qualifications:
• Bachelor's degree in Business, Computer Science, or related field
• [X] years of product management experience
• Strong analytical and problem-solving skills
• Excellent communication and leadership abilities
• Experience with agile methodologies
• Data-driven decision making

Preferred Qualifications:
• Experience in [specific industry]
• Technical background or understanding
• Experience with product analytics tools
• MBA or relevant certification
• Experience with user research
• Knowledge of UX principles

Benefits:
• Competitive compensation package
• Health and wellness benefits
• Professional development opportunities
• Flexible work arrangements
• Collaborative work environment`,
    category: "job",
    format: "text"
  },
  {
    id: "job-4",
    title: "UX/UI Designer",
    description: "Job description for user experience and interface design roles",
    content: `Position: UX/UI Designer
Location: [Location]
Type: Full-time
Experience Level: Mid to Senior
Salary Range: [Range]

About the Role:
We're looking for a talented UX/UI Designer to create intuitive and engaging user experiences. You'll work closely with product and development teams to design beautiful and functional interfaces.

Key Responsibilities:
• Create user-centered designs
• Develop wireframes and prototypes
• Conduct user research and testing
• Design responsive interfaces
• Create design systems and guidelines
• Collaborate with developers
• Present design solutions to stakeholders

Required Qualifications:
• Bachelor's degree in Design or related field
• [X] years of UX/UI design experience
• Proficiency in design tools (Figma, Sketch, etc.)
• Strong portfolio demonstrating UX/UI work
• Understanding of user-centered design principles
• Experience with responsive design

Preferred Qualifications:
• Experience with [specific industry]
• Knowledge of front-end development
• Experience with design systems
• Understanding of accessibility standards
• Experience with user research
• Motion design skills

Benefits:
• Competitive salary and benefits
• Creative work environment
• Professional development opportunities
• Flexible work arrangements
• Collaborative team culture`,
    category: "job",
    format: "text"
  },
  {
    id: "job-5",
    title: "Data Scientist",
    description: "Job description for data science and analytics roles",
    content: `Position: Data Scientist
Location: [Location]
Type: Full-time
Experience Level: Mid to Senior
Salary Range: [Range]

About the Role:
We are seeking a Data Scientist to help us extract insights from complex data sets and build predictive models. You'll work with cross-functional teams to drive data-informed decisions.

Key Responsibilities:
• Develop and implement machine learning models
• Analyze large datasets to identify patterns
• Create data visualizations and reports
• Collaborate with business teams
• Design and conduct experiments
• Present findings to stakeholders
• Maintain and improve data pipelines

Required Qualifications:
• Master's or PhD in Statistics, Computer Science, or related field
• [X] years of experience in data science
• Strong programming skills (Python, R)
• Experience with machine learning frameworks
• Knowledge of statistical analysis
• Experience with SQL and databases

Preferred Qualifications:
• Experience in [specific industry]
• Knowledge of deep learning
• Experience with big data technologies
• Published research papers
• Experience with cloud platforms
• Knowledge of MLOps

Benefits:
• Competitive compensation
• Research and development opportunities
• Professional development budget
• Collaborative work environment
• Health and wellness benefits`,
    category: "job",
    format: "text"
  }
];

export default function ResumeTemplates() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [activeTab, setActiveTab] = useState<"resume" | "job">("resume");

  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template);
  };

  const handleUseTemplate = () => {
    if (selectedTemplate) {
      toast.success("Template selected! You can now customize it.");
    }
  };

  const handleDownload = () => {
    if (!selectedTemplate) return;

    const blob = new Blob([selectedTemplate.content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedTemplate.title.toLowerCase().replace(/\s+/g, '-')}.txt`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
    toast.success("Template downloaded successfully!");
  };

  return (
    <div className="w-full py-8">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Resume & Job Templates</h2>
          <p className="text-muted-foreground">
            Choose from our professionally designed templates to get started quickly
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Available Templates</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "resume" | "job")}>
                <TabsList className="mb-4">
                  <TabsTrigger value="resume">
                    <FileText className="w-4 h-4 mr-2" />
                    Resume Templates
                  </TabsTrigger>
                  <TabsTrigger value="job">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Job Templates
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="resume">
                  <ScrollArea className="h-[400px] pr-4">
                    <div className="space-y-4">
                      {templates
                        .filter(t => t.category === "resume")
                        .map(template => (
                          <Card
                            key={template.id}
                            className={`cursor-pointer transition-all ${
                              selectedTemplate?.id === template.id
                                ? "border-primary shadow-md"
                                : "hover:border-primary/50"
                            }`}
                            onClick={() => handleTemplateSelect(template)}
                          >
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h3 className="font-semibold">{template.title}</h3>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    {template.description}
                                  </p>
                                </div>
                                {selectedTemplate?.id === template.id && (
                                  <CheckCircle2 className="w-5 h-5 text-primary" />
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                    </div>
                  </ScrollArea>
                </TabsContent>

                <TabsContent value="job">
                  <ScrollArea className="h-[400px] pr-4">
                    <div className="space-y-4">
                      {templates
                        .filter(t => t.category === "job")
                        .map(template => (
                          <Card
                            key={template.id}
                            className={`cursor-pointer transition-all ${
                              selectedTemplate?.id === template.id
                                ? "border-primary shadow-md"
                                : "hover:border-primary/50"
                            }`}
                            onClick={() => handleTemplateSelect(template)}
                          >
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h3 className="font-semibold">{template.title}</h3>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    {template.description}
                                  </p>
                                </div>
                                {selectedTemplate?.id === template.id && (
                                  <CheckCircle2 className="w-5 h-5 text-primary" />
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                    </div>
                  </ScrollArea>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Template Preview</CardTitle>
            </CardHeader>
            <CardContent>
              {selectedTemplate ? (
                <div className="space-y-4">
                  <ScrollArea className="h-[400px] pr-4">
                    <div className="bg-secondary/10 p-6 rounded-lg">
                      <div className="prose prose-sm dark:prose-invert max-w-none">
                        {selectedTemplate.content.split('\n').map((line, index) => {
                          if (line.startsWith('Position:')) {
                            return <h1 key={index} className="text-xl font-bold mb-4">{line}</h1>;
                          }
                          if (line.startsWith('About the Role:') || 
                              line.startsWith('Key Responsibilities:') || 
                              line.startsWith('Required Qualifications:') ||
                              line.startsWith('Preferred Qualifications:') ||
                              line.startsWith('Benefits:')) {
                            return <h2 key={index} className="text-lg font-semibold mt-4 mb-2">{line}</h2>;
                          }
                          if (line.startsWith('•')) {
                            return <li key={index} className="ml-4">{line}</li>;
                          }
                          if (line.trim() === '') {
                            return <br key={index} />;
                          }
                          return <p key={index}>{line}</p>;
                        })}
                      </div>
                    </div>
                  </ScrollArea>
                  <div className="flex justify-end space-x-2">
                    <Button
                      variant="outline"
                      onClick={() => {
                        navigator.clipboard.writeText(selectedTemplate.content);
                        toast.success("Template copied to clipboard!");
                      }}
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Template
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleDownload}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button onClick={handleUseTemplate}>
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Use Template
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                  Select a template to preview its content
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 