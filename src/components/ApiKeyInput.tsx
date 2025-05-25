
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Settings, CheckCircle2, Sun, Moon, Sparkles, Zap } from "lucide-react";
import useSettingsStore from "@/stores/settingsStore";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Label } from "@/components/ui/label";

export default function ApiKeyInput() {
  const { 
    animationsEnabled,
    enhancedVisualsEnabled,
    useLocalJobData,
    useLocalAiData,
    toggleAnimations,
    toggleEnhancedVisuals,
    toggleUseLocalJobData,
    toggleUseLocalAiData
  } = useSettingsStore();
  
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    toast.success("Visual settings saved successfully", {
      description: "Your preferences have been updated.",
      icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity" />
                <Settings className="h-[1.2rem] w-[1.2rem] group-hover:rotate-45 transition-transform duration-300" />
                <span className="sr-only">Settings</span>
              </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Visual Settings</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" /> 
            <span>Visual Settings</span>
          </DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="animations" className="mt-4">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="animations" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Animations
            </TabsTrigger>
            <TabsTrigger value="visuals" className="data-[state=active]:bg-secondary data-[state=active]:text-white">
              3D Effects
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="animations" className="space-y-4 py-4">
            <motion.div 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between space-x-2 px-1">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <Label htmlFor="animations" className="text-sm">Enhanced animations</Label>
                </div>
                <Switch 
                  id="animations" 
                  checked={animationsEnabled}
                  onCheckedChange={toggleAnimations}
                />
              </div>
              
              <div className="p-4 bg-primary/5 border border-primary/10 rounded-lg">
                <h4 className="font-medium text-sm mb-2">Animation Effects</h4>
                <p className="text-xs text-muted-foreground">
                  Enable smooth transitions, parallax scrolling, and interactive hover effects throughout the application.
                </p>
              </div>

              <div className="flex items-center justify-between space-x-2 px-1">
                <div className="flex items-center gap-2">
                  <Sun className="h-4 w-4 text-amber-500" />
                  <Label htmlFor="local-jobs" className="text-sm">Interactive job matching</Label>
                </div>
                <Switch 
                  id="local-jobs" 
                  checked={useLocalJobData}
                  onCheckedChange={toggleUseLocalJobData}
                />
              </div>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="visuals" className="space-y-4 py-4">
            <motion.div 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between space-x-2 px-1">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-secondary" />
                  <Label htmlFor="enhanced-visuals" className="text-sm">3D visualizations</Label>
                </div>
                <Switch 
                  id="enhanced-visuals" 
                  checked={enhancedVisualsEnabled}
                  onCheckedChange={toggleEnhancedVisuals}
                />
              </div>
              
              <div className="p-4 bg-secondary/5 border border-secondary/10 rounded-lg">
                <h4 className="font-medium text-sm mb-2">3D Visual Effects</h4>
                <p className="text-xs text-muted-foreground">
                  Enable interactive 3D elements, advanced visual effects, and dynamic UI components for a more engaging experience.
                </p>
              </div>

              <div className="flex items-center justify-between space-x-2 px-1">
                <div className="flex items-center gap-2">
                  <Moon className="h-4 w-4 text-indigo-400" />
                  <Label htmlFor="local-ai" className="text-sm">Advanced resume analysis</Label>
                </div>
                <Switch 
                  id="local-ai" 
                  checked={useLocalAiData}
                  onCheckedChange={toggleUseLocalAiData}
                />
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-end mt-6">
          <Button 
            onClick={handleSave}
            className="relative overflow-hidden group"
          >
            <span className="relative z-10">Save Settings</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
