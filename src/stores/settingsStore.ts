
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsState {
  googleJobsApiKey: string;
  openAiApiKey: string;
  animationsEnabled: boolean;
  enhancedVisualsEnabled: boolean;
  useLocalJobData: boolean;
  useLocalAiData: boolean;
  setGoogleJobsApiKey: (key: string) => void;
  setOpenAiApiKey: (key: string) => void;
  toggleAnimations: () => void;
  toggleEnhancedVisuals: () => void;
  toggleUseLocalJobData: () => void;
  toggleUseLocalAiData: () => void;
}

const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      googleJobsApiKey: '',
      openAiApiKey: '',
      animationsEnabled: true,
      enhancedVisualsEnabled: true,
      useLocalJobData: true, // Default to using local data
      useLocalAiData: true, // Default to using local data
      setGoogleJobsApiKey: (key) => set({ googleJobsApiKey: key }),
      setOpenAiApiKey: (key) => set({ openAiApiKey: key }),
      toggleAnimations: () => set((state) => ({ animationsEnabled: !state.animationsEnabled })),
      toggleEnhancedVisuals: () => set((state) => ({ enhancedVisualsEnabled: !state.enhancedVisualsEnabled })),
      toggleUseLocalJobData: () => set((state) => ({ useLocalJobData: !state.useLocalJobData })),
      toggleUseLocalAiData: () => set((state) => ({ useLocalAiData: !state.useLocalAiData })),
    }),
    {
      name: 'resume-analyzer-settings',
    }
  )
);

export default useSettingsStore;
