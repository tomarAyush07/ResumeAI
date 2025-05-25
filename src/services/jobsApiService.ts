
import { toast } from "sonner";

// Interface for job search results
export interface JobSearchResult {
  id: string;
  title: string;
  company: string;
  description: string;
  url?: string;
  location?: string;
  datePosted?: string;
}

// Interface for analysis result from API
export interface AnalysisResult {
  score: number;
  summary: string;
  missingSkills: string[];
  improvedBulletPoints: string[];
  keywordsToAdd: string[];
  optimizedSummary: string;
  skillsRadarData: {
    name: string;
    value: number;
    fullMark: number;
  }[];
}

const BASE_URL = "https://jobs.googleapis.com/v4";

// This function would normally use your Google Jobs API key
// You would need to store this securely in your environment
export const searchJobs = async (query: string, apiKey?: string): Promise<JobSearchResult[]> => {
  // Check if API key is provided
  if (!apiKey) {
    // For demo purposes only - if no API key is provided, return mock data
    console.log("No Google Jobs API key provided, using mock data");
    return getMockJobSearchResults(query);
  }

  try {
    // This would be the actual API call to Google Jobs API
    // const response = await fetch(`${BASE_URL}/jobs:search?key=${apiKey}`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     query: query,
    //     pageSize: 10
    //   })
    // });
    
    // if (!response.ok) {
    //   const errorData = await response.json();
    //   throw new Error(errorData.error?.message || "Failed to search for jobs");
    // }
    
    // const data = await response.json();
    // return data.jobs.map((job) => ({
    //   id: job.name,
    //   title: job.title,
    //   company: job.company.name,
    //   description: job.description,
    //   url: job.applicationInfo?.uris?.[0]?.uri || "",
    //   location: job.locations?.[0]?.displayName || "",
    //   datePosted: job.postingPublishTime
    // }));

    // For now, return mock data while user sets up their API key
    return getMockJobSearchResults(query);
  } catch (error) {
    console.error("Error searching jobs:", error);
    toast.error("Failed to search for jobs. Please check your API key and try again.");
    return [];
  }
};

// This function would analyze a resume against a job description
export const analyzeResume = async (
  resumeContent: string,
  jobDescription: string,
  apiKey?: string
): Promise<AnalysisResult> => {
  // Check if API key is provided
  if (!apiKey) {
    console.log("No Google Jobs API key provided, using mock analysis");
    return getMockAnalysisResult();
  }

  try {
    // This would be the actual API call to Google's Resume Analysis API
    // Replace with actual API endpoint when available
    // const response = await fetch("https://jobs.googleapis.com/v4/resume:analyze", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Authorization": `Bearer ${apiKey}`
    //   },
    //   body: JSON.stringify({
    //     resume: resumeContent,
    //     jobDescription: jobDescription
    //   })
    // });
    
    // if (!response.ok) {
    //   const errorData = await response.json();
    //   throw new Error(errorData.error?.message || "Failed to analyze resume");
    // }
    
    // const data = await response.json();
    // return transformAnalysisResponse(data);

    // For now, return mock analysis while user sets up their API key
    return getMockAnalysisResult();
  } catch (error) {
    console.error("Error analyzing resume:", error);
    toast.error("Failed to analyze resume. Please check your API key and try again.");
    throw error;
  }
};

// Mock data functions - these will be replaced with real API data once the key is set up
function getMockJobSearchResults(query: string): JobSearchResult[] {
  // Filter mock results based on query
  const queryLower = query.toLowerCase();
  
  const allMockResults = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "Tech Innovators Inc.",
      description: "We are looking for a skilled Frontend Developer with experience in React, TypeScript, and modern CSS frameworks. The ideal candidate should have 5+ years of experience building responsive web applications and be familiar with state management solutions like Redux or Zustand. Knowledge of modern build tools and CI/CD pipelines is a plus.",
      location: "San Francisco, CA",
      datePosted: "2023-05-10"
    },
    {
      id: "2",
      title: "Full Stack Developer",
      company: "Digital Solutions Co.",
      description: "Join our team as a Full Stack Developer with strong knowledge of both frontend (React, Angular) and backend (Node.js, Python) technologies. You should be comfortable with database design, API development, and have experience with cloud platforms like AWS or Azure.",
      location: "New York, NY",
      datePosted: "2023-05-15"
    },
    {
      id: "3",
      title: "UI/UX Developer",
      company: "Creative Design Studio",
      description: "Looking for a UI/UX Developer who can translate designs into clean, efficient code. Must have experience with modern frontend frameworks, CSS animations, and a strong eye for design details. Knowledge of Figma, Adobe XD, and design systems is required.",
      location: "Remote",
      datePosted: "2023-05-08"
    },
    {
      id: "4",
      title: "DevOps Engineer",
      company: "Cloud Infrastructure Inc.",
      description: "Seeking a DevOps Engineer to maintain and improve our cloud infrastructure. Experience with AWS, Docker, Kubernetes, and CI/CD pipelines required. The ideal candidate will have a strong background in automation and monitoring tools.",
      location: "Austin, TX",
      datePosted: "2023-05-12"
    },
    {
      id: "5",
      title: "Data Scientist",
      company: "Analytics Pro",
      description: "Join our data science team to build advanced machine learning models. Must have experience with Python, R, TensorFlow, and data visualization. PhD or Masters in Computer Science, Statistics, or related field preferred.",
      location: "Boston, MA",
      datePosted: "2023-05-05"
    }
  ];
  
  // Filter results based on query
  return allMockResults.filter(job => 
    job.title.toLowerCase().includes(queryLower) || 
    job.company.toLowerCase().includes(queryLower) || 
    job.description.toLowerCase().includes(queryLower)
  );
}

function getMockAnalysisResult(): AnalysisResult {
  return {
    score: Math.floor(Math.random() * 30) + 65, // Random score between 65-95
    summary: "Your resume partially matches the job requirements but could be improved in several key areas.",
    missingSkills: [
      "Kubernetes",
      "GraphQL",
      "CI/CD Pipelines",
      "AWS Lambda",
      "Microservices Architecture"
    ],
    improvedBulletPoints: [
      "Led development of scalable React applications using modern hooks, context API, and custom state management solutions",
      "Implemented responsive layouts with Tailwind CSS, reducing CSS bundle size by 40% and improving performance",
      "Collaborated with UX designers to implement accessibility-compliant components following WCAG 2.1 standards"
    ],
    keywordsToAdd: [
      "Infrastructure as Code",
      "Docker",
      "Jest",
      "React Testing Library",
      "TypeScript",
      "Redux Toolkit",
      "API Design"
    ],
    optimizedSummary: "Innovative frontend developer with 5+ years of experience building scalable, high-performance web applications using React, TypeScript, and modern CSS frameworks. Proficient in state management, API integration, and implementing responsive user interfaces with a focus on accessibility and performance optimization. Experienced with agile methodologies and cross-functional team collaboration.",
    skillsRadarData: [
      { name: "JavaScript", value: 80, fullMark: 100 },
      { name: "React", value: 75, fullMark: 100 },
      { name: "CSS/Tailwind", value: 70, fullMark: 100 },
      { name: "TypeScript", value: 45, fullMark: 100 },
      { name: "DevOps", value: 30, fullMark: 100 },
      { name: "Testing", value: 50, fullMark: 100 }
    ]
  };
}
