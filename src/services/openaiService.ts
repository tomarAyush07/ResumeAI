
import useSettingsStore from "@/stores/settingsStore";

interface EnhancementSuggestion {
  section: string;
  suggestions: string[];
  rationale: string;
}

export interface ResumeEnhancementResult {
  overallScore: number;
  summary: string;
  enhancementSuggestions: EnhancementSuggestion[];
  formattingIssues: string[];
  keywordSuggestions: string[];
  aiGeneratedVersion: string;
}

export const enhanceResumeWithAI = async (
  resumeText: string
): Promise<ResumeEnhancementResult> => {
  const { openAiApiKey } = useSettingsStore.getState();
  
  if (!openAiApiKey) {
    // Return mock data if no API key is provided
    return getMockEnhancementData();
  }
  
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openAiApiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: "You are a professional resume consultant who helps people improve their resumes for job applications. Analyze the resume and provide detailed feedback on how to enhance it. Format your response as JSON."
          },
          {
            role: "user",
            content: `Analyze this resume and provide enhancement suggestions. Return your analysis as a valid JSON with the following structure:
            {
              "overallScore": [number between 0-100],
              "summary": [brief 1-2 sentence summary],
              "enhancementSuggestions": [array of objects with "section", "suggestions" (array of strings), and "rationale"],
              "formattingIssues": [array of formatting issues as strings],
              "keywordSuggestions": [array of keywords or phrases to add],
              "aiGeneratedVersion": [improved version of the resume as text]
            }
            
            Here's the resume:
            ${resumeText}`
          }
        ],
        response_format: { type: "json_object" }
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    return JSON.parse(data.choices[0].message.content);
  } catch (error) {
    console.error("Error analyzing resume with OpenAI:", error);
    return getMockEnhancementData();
  }
};

const getMockEnhancementData = (): ResumeEnhancementResult => {
  return {
    overallScore: 65,
    summary: "Your resume has good content but needs improvement in quantifying achievements and optimizing keywords for ATS systems.",
    enhancementSuggestions: [
      {
        section: "Professional Summary",
        suggestions: [
          "Be more specific about your expertise and value proposition",
          "Include 2-3 key achievements with metrics",
          "Tailor it to the specific job you're applying for"
        ],
        rationale: "Your summary is too generic and doesn't quickly communicate your unique value to employers."
      },
      {
        section: "Work Experience",
        suggestions: [
          "Add quantifiable metrics to your achievements",
          "Focus more on results rather than responsibilities",
          "Use strong action verbs at the beginning of each bullet point"
        ],
        rationale: "Your experience lacks impact without measurable achievements."
      },
      {
        section: "Skills",
        suggestions: [
          "Organize skills by category",
          "Match keywords from job descriptions",
          "Remove outdated or irrelevant skills"
        ],
        rationale: "Your skills section needs better organization and relevance to target jobs."
      }
    ],
    formattingIssues: [
      "Inconsistent date formatting",
      "Too many different fonts/styles",
      "Resume exceeds one page"
    ],
    keywordSuggestions: [
      "project management",
      "cross-functional collaboration",
      "stakeholder communication",
      "data analysis",
      "process optimization"
    ],
    aiGeneratedVersion: "This would be a completely rewritten resume incorporating all the suggested improvements."
  };
};
