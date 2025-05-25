import { useState, useCallback } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import ResumeUploader from "./ResumeUploader";
import CircularProgress from "./CircularProgress";
import SkillsRadarChart from "./SkillsRadarChart";
import SkillsSphere from "./SkillsSphere";
import { Copy, Loader2, RefreshCcw, Search, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { searchJobs, analyzeResume, JobSearchResult } from "@/services/jobsApiService";
import { enhanceResumeWithAI, ResumeEnhancementResult } from "@/services/openaiService";
import useSettingsStore from "@/stores/settingsStore";
import ResumeEnhancement from "./ResumeEnhancement";
import ResumeTemplates from "./ResumeTemplates";

export default function ResumeAnalyzer() {
  const { googleJobsApiKey, openAiApiKey, useLocalJobData } = useSettingsStore();
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeText, setResumeText] = useState<string | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [result, setResult] = useState<any | null>(null);
  const [enhancementResult, setEnhancementResult] = useState<ResumeEnhancementResult | null>(null);
  const [selectedJob, setSelectedJob] = useState("");
  const [jobSearchQuery, setJobSearchQuery] = useState("");
  const [isSearchingJobs, setIsSearchingJobs] = useState(false);
  const [jobSearchResults, setJobSearchResults] = useState<JobSearchResult[]>([]);
  const [showEnhancement, setShowEnhancement] = useState(false);
  const [activeTab, setActiveTab] = useState("paste");

  // Debounced job search
  const debouncedSearch = useCallback(
    debounce(async (query: string) => {
      if (query.trim() === "") {
        setJobSearchResults([]);
        return;
      }

      setIsSearchingJobs(true);
      try {
        const results = await searchJobs(query, useLocalJobData ? undefined : googleJobsApiKey);
        setJobSearchResults(results);
      } catch (error) {
        console.error("Job search error:", error);
        toast.error("Failed to search for jobs. Please try again.");
      } finally {
        setIsSearchingJobs(false);
      }
    }, 300),
    [useLocalJobData, googleJobsApiKey]
  );

  // Handle job search input change
  const handleJobSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setJobSearchQuery(query);
    debouncedSearch(query);
  };

  // Handle job selection from search results
  const handleSelectJob = (job: JobSearchResult) => {
    setJobDescription(job.description);
    setSelectedJob(job.description);
    setResult(null);
    setJobSearchResults([]);
    setJobSearchQuery(job.title);
    setActiveTab("paste");
  };

  // Handle file upload
  const handleFileUpload = async (file: File) => {
    setResumeFile(file);
    
    // Extract text from the resume file
    try {
      const text = await readFileAsText(file);
      setResumeText(text);
    } catch (error) {
      console.error("Error reading file:", error);
      toast.error("Failed to read the resume file");
    }
    
    // Reset results when a new file is uploaded
    setResult(null);
    setEnhancementResult(null);
    setShowEnhancement(false);
  };

  // Handle job description input
  const handleJobDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJobDescription(e.target.value);
    // Reset results when job description changes
    setResult(null);
  };

  // Analyze resume against job description
  const analyzeResumeWithApi = async () => {
    if (!resumeFile) {
      toast.error("Please upload your resume");
      return;
    }

    if (jobDescription.trim() === "") {
      toast.error("Please enter a job description");
      return;
    }

    setIsAnalyzing(true);

    try {
      // Read file contents
      const fileContent = await readFileAsText(resumeFile);
      
      // Call the resume analysis API
      const analysisResult = await analyzeResume(fileContent, jobDescription, googleJobsApiKey);
      
      setResult(analysisResult);
      
      // Show success toast based on the score
      if (analysisResult.score >= 80) {
        toast.success("Great match! Your resume is well-aligned with this job.");
      } else if (analysisResult.score >= 60) {
        toast.success("Good match! Some improvements suggested.");
      } else {
        toast("Analysis complete. Significant improvements suggested.");
      }
    } catch (error) {
      console.error("Analysis error:", error);
      toast.error("Error analyzing your resume. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Enhance resume with AI
  const enhanceResumeWithOpenAI = async () => {
    if (!resumeText) {
      toast.error("No resume text available");
      return;
    }

    setIsEnhancing(true);
    
    try {
      const enhancementData = await enhanceResumeWithAI(resumeText);
      setEnhancementResult(enhancementData);
      setShowEnhancement(true);
      
      if (!openAiApiKey) {
        toast.warning("Using mock data. Add your OpenAI API key for real analysis.");
      } else {
        toast.success("Resume enhancement complete!");
      }
    } catch (error) {
      console.error("Enhancement error:", error);
      toast.error("Error enhancing your resume. Please try again.");
    } finally {
      setIsEnhancing(false);
    }
  };

  // Utility function to read file as text
  const readFileAsText = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject(new Error('FileReader did not return text content'));
        }
      };
      reader.onerror = reject;
      reader.readAsText(file);
    });
  };

  // Copy text to clipboard
  const copyToClipboard = (text: string, successMessage: string = "Copied to clipboard") => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast.success(successMessage);
      },
      (err) => {
        toast.error("Failed to copy text");
        console.error("Failed to copy text: ", err);
      }
    );
  };

  return (
    <div id="resume-analyzer" className="w-full py-16">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            Resume Analyzer & Job Matcher
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Upload your resume and enter a job description to get AI-powered insights 
            on how well your resume matches the job requirements
          </p>
        </div>

        <ResumeTemplates />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Input Section */}
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Upload Your Resume</CardTitle>
              </CardHeader>
              <CardContent>
                <ResumeUploader onFileUpload={handleFileUpload} />
                
                {resumeFile && !showEnhancement && (
                  <div className="mt-4">
                    <Button 
                      onClick={enhanceResumeWithOpenAI} 
                      variant="outline" 
                      className="w-full"
                      disabled={isEnhancing}
                    >
                      {isEnhancing ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Enhancing Resume...
                        </>
                      ) : (
                        <>
                          <Lightbulb className="mr-2 h-4 w-4 text-yellow-500" />
                          Enhance Resume with AI
                        </>
                      )}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {showEnhancement && enhancementResult && (
              <ResumeEnhancement 
                enhancementData={enhancementResult} 
                isLoading={isEnhancing} 
              />
            )}

            <Card>
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="mb-4">
                    <TabsTrigger value="paste">Paste Description</TabsTrigger>
                    <TabsTrigger value="search">Search Jobs</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="paste">
                    <Textarea
                      placeholder="Paste the job description here..."
                      className="min-h-[200px] mb-4"
                      value={jobDescription}
                      onChange={(e) => {
                        setJobDescription(e.target.value);
                        setResult(null);
                      }}
                    />
                  </TabsContent>
                  
                  <TabsContent value="search">
                    <div className="mb-4">
                      <Label htmlFor="job-search" className="mb-2 block">
                        Search for a job
                      </Label>
                      <div className="flex gap-2">
                        <Input
                          id="job-search"
                          placeholder="Search job titles, keywords..."
                          value={jobSearchQuery}
                          onChange={handleJobSearchInputChange}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && jobSearchResults.length > 0) {
                              handleSelectJob(jobSearchResults[0]);
                            }
                          }}
                        />
                        <Button 
                          onClick={() => debouncedSearch(jobSearchQuery)} 
                          disabled={isSearchingJobs}
                          className="min-w-[100px]"
                        >
                          {isSearchingJobs ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Search className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div className="max-h-[300px] overflow-y-auto border rounded-md">
                      {jobSearchResults.length > 0 ? (
                        jobSearchResults.map((job) => (
                          <div
                            key={job.id}
                            className={`p-3 border-b last:border-b-0 hover:bg-secondary/10 cursor-pointer ${
                              selectedJob === job.description ? 'bg-secondary/20 border-l-4 border-l-primary' : ''
                            }`}
                            onClick={() => handleSelectJob(job)}
                          >
                            <div className="font-medium">{job.title}</div>
                            <div className="text-sm text-muted-foreground">
                              {job.company}
                            </div>
                            {job.location && (
                              <div className="text-xs text-muted-foreground mt-1">
                                {job.location}
                              </div>
                            )}
                          </div>
                        ))
                      ) : isSearchingJobs ? (
                        <div className="text-center py-4 text-muted-foreground">
                          <Loader2 className="h-4 w-4 animate-spin mx-auto mb-2" />
                          Searching jobs...
                        </div>
                      ) : jobSearchQuery ? (
                        <div className="text-center py-4 text-muted-foreground">
                          No jobs found. Try different keywords.
                        </div>
                      ) : (
                        <div className="text-center py-4 text-muted-foreground">
                          Start typing to search for jobs...
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>

                <Button 
                  onClick={analyzeResumeWithApi} 
                  className="w-full mt-4"
                  disabled={isAnalyzing || !resumeFile || !jobDescription.trim()}
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    "Analyze My Resume"
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div>
            {isAnalyzing ? (
              <Card className="flex items-center justify-center h-full">
                <CardContent className="py-12 text-center">
                  <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Analyzing Your Resume</h3>
                  <p className="text-muted-foreground">
                    Our AI is comparing your resume with the job description...
                  </p>
                </CardContent>
              </Card>
            ) : result ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="mb-6">
                  <CardHeader className="pb-0 flex flex-row items-center justify-between">
                    <CardTitle>Resume Analysis Results</CardTitle>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        setResult(null);
                        setIsAnalyzing(false);
                      }}
                    >
                      <RefreshCcw className="h-4 w-4 mr-2" />
                      New Analysis
                    </Button>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-6">
                      <CircularProgress score={result.score} />
                    </div>

                    <Separator className="my-6" />

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Missing Skills</h3>
                        <div className="flex flex-wrap gap-2">
                          {result.missingSkills.map((skill, index) => (
                            <div
                              key={index}
                              className="bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300 px-3 py-1 rounded-full text-sm"
                            >
                              {skill}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-2">Keywords to Add</h3>
                        <div className="flex flex-wrap gap-2">
                          {result.keywordsToAdd.map((keyword, index) => (
                            <div
                              key={index}
                              className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm"
                            >
                              {keyword}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-semibold">Skills Analysis</h3>
                        </div>
                        <SkillsRadarChart data={result.skillsRadarData} className="mb-4" />
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-semibold">Optimized Summary</h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(
                              result.optimizedSummary,
                              "Summary copied to clipboard"
                            )}
                          >
                            <Copy className="h-4 w-4 mr-2" />
                            Copy
                          </Button>
                        </div>
                        <div className="bg-secondary/10 p-4 rounded-lg text-sm">
                          {result.optimizedSummary}
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-semibold">Improved Bullet Points</h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(
                              result.improvedBulletPoints.join('\n'),
                              "Bullet points copied to clipboard"
                            )}
                          >
                            <Copy className="h-4 w-4 mr-2" />
                            Copy All
                          </Button>
                        </div>
                        <ul className="list-disc pl-5 space-y-2">
                          {result.improvedBulletPoints.map((point, index) => (
                            <li key={index} className="text-sm">{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Skills Visualization</CardTitle>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <SkillsSphere skills={[
                      ...result.keywordsToAdd,
                      ...result.missingSkills,
                      ...result.skillsRadarData.map(skill => skill.name)
                    ]} />
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <Card className="h-full flex items-center justify-center">
                <CardContent className="py-12 text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Search className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Ready to Analyze</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Upload your resume and enter a job description to get AI-powered recommendations
                    and insights to improve your chances of landing the job.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Debounce utility function
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
