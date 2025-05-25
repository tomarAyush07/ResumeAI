import { useEffect } from "react";
import { motion } from "framer-motion";
import { Bot, Sparkles } from "lucide-react";

export default function Chat() {
  useEffect(() => {
    // Add custom styles to hide Botpress branding
    const style = document.createElement('style');
    style.textContent = `
      .bp-powered-by,
      .bp-powered-by *,
      .bp-powered-by a,
      .bp-powered-by span,
      .bp-powered-by div {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        height: 0 !important;
        width: 0 !important;
        margin: 0 !important;
        padding: 0 !important;
        position: absolute !important;
        pointer-events: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="container relative mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Bot className="w-8 h-8 text-primary" />
            <Sparkles className="w-6 h-6 text-primary/60" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 mb-6">
            CodeProof AI Assistant
          </h1>
          <p className="text-xl text-muted-foreground">
            Your intelligent coding companion for resume optimization and career guidance.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          {/* Botpress Chat Container */}
          <div className="relative w-full h-[700px] rounded-xl overflow-hidden bg-white border border-slate-200 shadow-lg">
            <iframe
              src="https://cdn.botpress.cloud/webchat/v2.4/shareable.html?configUrl=https://files.bpcontent.cloud/2025/05/23/05/20250523052403-JMEL25Y7.json&theme=light&lightTheme=true&containerStyle=%7B%22backgroundColor%22%3A%22white%22%2C%22color%22%3A%22black%22%7D&composerStyle=%7B%22backgroundColor%22%3A%22white%22%2C%22color%22%3A%22black%22%7D&messageStyle=%7B%22backgroundColor%22%3A%22white%22%2C%22color%22%3A%22black%22%7D&hideWidget=true&showBotInfoPage=false&showConversationsButton=false&showPoweredBy=false&showTimestamp=false&showUserAvatar=false&showBotAvatar=false&hideBranding=true"
              className="w-full h-full"
              allow="microphone"
              title="CodeProof AI Chat"
              style={{
                backgroundColor: 'white',
                colorScheme: 'light'
              }}
            />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </div>
  );
} 