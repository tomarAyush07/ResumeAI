import { Check, FileText, Search, Star, BarChart3, Edit } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      name: "Resume Analysis",
      description:
        "Get detailed insights about how well your resume matches specific job descriptions with our advanced AI analysis.",
      icon: FileText,
    },
    {
      name: "Job Search Integration",
      description:
        "Search and analyze job listings in real-time to find the perfect match for your skills and experience.",
      icon: Search,
    },
    {
      name: "Skill Gap Analysis",
      description:
        "Identify missing skills and experience that may be holding you back from landing your dream job.",
      icon: BarChart3,
    },
    {
      name: "Resume Optimization",
      description:
        "Receive AI-generated suggestions to improve your resume content, format, and keywords for better ATS performance.",
      icon: Edit,
    },
    {
      name: "Keyword Recommendations",
      description:
        "Get tailored keyword suggestions to help your resume pass through Applicant Tracking Systems (ATS).",
      icon: Star,
    },
    {
      name: "Interactive Visualizations",
      description:
        "View your skills, experience, and job match potential through beautiful interactive 3D visualizations.",
      icon: Check,
    },
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-secondary/5 to-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base font-semibold leading-7 text-primary"
          >
            Land Your Dream Job
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Everything you need to optimize your resume
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-lg leading-8 text-muted-foreground"
          >
            Our AI-powered resume analyzer helps you stand out from the crowd by
            ensuring your resume matches what employers are looking for.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-16 group"
              >
                <dt className="text-base font-semibold leading-7 text-foreground">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-purple-500 shadow-lg group-hover:shadow-xl transition-all duration-300"
                  >
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </motion.div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  {feature.description}
                </dd>
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  whileHover={{ scale: 1.02 }}
                />
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
}
