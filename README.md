# ResumeAI - AI-Powered Resume Analysis & Job Matching

<div align="center">
  <img src="public/logo.png" alt="ResumeAI Logo" width="200"/>
  
  [![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-5.4.1-purple)](https://vitejs.dev/)
  [![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)
</div>

ResumeAI is a modern web application that leverages artificial intelligence to analyze resumes, provide job matching insights, and offer personalized suggestions for career advancement. Built with cutting-edge technologies and a focus on user experience, ResumeAI helps job seekers optimize their resumes and find better career opportunities.

## ✨ Features

### 🤖 AI-Powered Resume Analysis
- Instant feedback on resume strengths and weaknesses
- Skills analysis with interactive radar charts
- Personalized optimization suggestions
- ATS compatibility checking
- Keyword optimization recommendations
- Format and structure analysis

### 🎯 Smart Job Matching
- Resume-to-job description matching
- Skills gap analysis
- Job compatibility scoring
- Industry-specific recommendations
- Career path suggestions
- Salary range insights

### 💬 AI Chat Assistant
- Interactive resume improvement suggestions
- Career guidance and advice
- Interview preparation tips
- Industry-specific insights
- Real-time Q&A support

### 🎨 Modern UI/UX
- Beautiful, responsive design
- Smooth animations and transitions
- Dark/Light mode support
- Interactive 3D skills visualization
- Mobile-first approach
- Accessible design patterns

### 🔒 Security & Privacy
- Local API key management
- Secure file handling
- Privacy-focused design
- Data encryption
- No data storage
- GDPR compliance

## 🛠️ Technology Stack

### Frontend
- **Core Framework**
  - React 18.3.1
  - TypeScript 5.5.3
  - Vite 5.4.1

- **UI Components**
  - Tailwind CSS 3.4.11
  - Framer Motion
  - Radix UI
  - Lucide Icons
  - Three.js (3D visualizations)
  - Shadcn/ui

- **State Management**
  - Zustand 4.5.2
  - React Query

- **Routing & Navigation**
  - React Router v6.26.2
  - React Hook Form 7.53.0

### Development Tools
- **Code Quality**
  - ESLint 9.9.0
  - Prettier
  - TypeScript
  - Husky (pre-commit hooks)

- **Build & Development**
  - Vite
  - SWC
  - PostCSS
  - Autoprefixer

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- OpenAI API key
- Google Jobs API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/resume-ai.git
   cd resume-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_OPENAI_API_KEY=your_openai_api_key
   VITE_GOOGLE_JOBS_API_KEY=your_google_jobs_api_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## 📁 Project Structure

```
src/
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   └── ...            # Feature-specific components
├── contexts/          # React contexts
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── pages/             # Page components
├── stores/            # Zustand stores
└── types/             # TypeScript type definitions
```

## 🎯 Key Components

### Core Features
- **ResumeAnalyzer**: Core component for resume analysis
- **SkillsSphere**: Interactive 3D visualization of skills
- **SkillsRadarChart**: Radar chart for skills analysis
- **ResumeUploader**: File upload and processing
- **JobMatcher**: Job matching and compatibility analysis
- **AIChat**: Interactive AI assistant

### UI Components
- **Navbar**: Responsive navigation with theme toggle
- **Hero**: Landing page hero section
- **Features**: Feature showcase section
- **Footer**: Site footer with links and information

## 🔧 Configuration

The application can be configured through the settings store:

### API Configuration
- OpenAI API key management
- Google Jobs API key management
- API endpoint configuration

### User Preferences
- Theme preferences (light/dark mode)
- Enhanced visuals toggle
- Local job data usage
- Animation preferences
- Language settings

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and formatting
- Write meaningful commit messages
- Add appropriate tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PRs
- Follow the TypeScript best practices
- Maintain accessibility standards

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenAI for providing the AI capabilities
- Google Jobs API for job matching
- All the amazing open-source libraries used in this project
- The development team and contributors who have helped shape this project

## 📞 Support

For support, please:
- Open an issue in the GitHub repository
- Contact the development team
- Check the documentation
- Join our community Discord

## 🔄 Updates

Stay updated with the latest changes:
- Follow our GitHub repository
- Subscribe to our newsletter
- Join our Discord community
- Follow us on social media

---

<div align="center">
  Made with ❤️ by the ResumeAI Team
</div>
