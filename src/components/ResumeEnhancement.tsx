
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Lightbulb, Check, X } from "lucide-react";
import { toast } from "sonner";
import { ResumeEnhancementResult } from "@/services/openaiService";
import CircularProgress from "./CircularProgress";
import { motion } from "framer-motion";

interface ResumeEnhancementProps {
  enhancementData: ResumeEnhancementResult | null;
  isLoading: boolean;
}

export default function ResumeEnhancement({ enhancementData, isLoading }: ResumeEnhancementProps) {
  const [copied, setCopied] = useState(false);

  if (isLoading) {
    return (
      <Card>
        <CardContent className="py-6 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent mb-4"></div>
            <p>Analyzing your resume with AI...</p>
            <p className="text-sm text-muted-foreground mt-2">This may take a moment</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!enhancementData) {
    return null;
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center">
            <Lightbulb className="mr-2 h-5 w-5 text-yellow-500" />
            AI Resume Enhancement
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center mb-4">
            <CircularProgress score={enhancementData.overallScore} />
          </div>
          
          <p className="text-center mb-6">{enhancementData.summary}</p>
          
          <Separator className="my-4" />
          
          <Tabs defaultValue="suggestions">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
              <TabsTrigger value="keywords">Keywords</TabsTrigger>
              <TabsTrigger value="improved">Improved Version</TabsTrigger>
            </TabsList>
            
            <TabsContent value="suggestions">
              <div className="space-y-4">
                {enhancementData.enhancementSuggestions.map((suggestion, index) => (
                  <div key={index} className="bg-secondary/10 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">{suggestion.section}</h4>
                    <ul className="list-disc pl-5 space-y-1 mb-3">
                      {suggestion.suggestions.map((item, i) => (
                        <li key={i} className="text-sm">{item}</li>
                      ))}
                    </ul>
                    <p className="text-xs text-muted-foreground italic">{suggestion.rationale}</p>
                  </div>
                ))}
                
                {enhancementData.formattingIssues.length > 0 && (
                  <div className="bg-red-100 dark:bg-red-900/20 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-red-800 dark:text-red-300">Formatting Issues</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {enhancementData.formattingIssues.map((issue, i) => (
                        <li key={i} className="text-sm text-red-800 dark:text-red-300">{issue}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="keywords">
              <div className="bg-secondary/10 p-4 rounded-lg">
                <h4 className="font-medium mb-3">Recommended Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {enhancementData.keywordSuggestions.map((keyword, index) => (
                    <div
                      key={index}
                      className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm"
                    >
                      {keyword}
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="improved">
              <div className="relative bg-secondary/10 p-4 rounded-lg">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="absolute top-2 right-2"
                  onClick={() => copyToClipboard(enhancementData.aiGeneratedVersion)}
                >
                  {copied ? (
                    <Check className="h-4 w-4 mr-2" />
                  ) : (
                    <Copy className="h-4 w-4 mr-2" />
                  )}
                  Copy
                </Button>
                <h4 className="font-medium mb-3">AI-Enhanced Version</h4>
                <div className="whitespace-pre-line text-sm mt-6">
                  {enhancementData.aiGeneratedVersion}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  );
}
