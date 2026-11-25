import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  Library,
  Database,
  BarChart3,
  ShieldCheck,
  Globe,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: <Code2 size={20} className="text-[#64ffda]" />,
    skills: [
      "Python",
      "SQL",
      "Object-Oriented Programming (OOP)",
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: <BrainCircuit size={20} className="text-purple-400" />,
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing (NLP)",
      "Computer Vision",
      "Large Language Models (LLMs)",
      "Generative AI",
      "Retrieval-Augmented Generation (RAG)",
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: <Library size={20} className="text-cyan-400" />,
    skills: [
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "LangChain",
      "FAISS",
      "Django",
      "Flask",
      "Streamlit",
    ],
  },
  {
    title: "Data & Analytics",
    icon: <BarChart3 size={20} className="text-amber-400" />,
    skills: [
      "Excel",
      "Power BI",
      "Data Cleaning",
      "Exploratory Data Analysis (EDA)",
      "Data Visualization",
      "Pandas",
      "NumPy",
      "SciPy",
      "Matplotlib",
      "NLTK",
      "Feature Engineering",
      "Model Evaluation",
      "Statistical Validation",
      "Synthetic Data Generation",
      "Dashboard Development",
      "Data Reporting",
    ],
  },
  {
    title: "Testing & Data Quality",
    icon: <ShieldCheck size={20} className="text-emerald-400" />,
    skills: [
      "Pytest",
      "Automated Validation",
      "Data Integrity Checks",
      "Range/Distribution/Correlation Checks",
      "Bounded Repair",
    ],
  },
  {
    title: "Web, Tools & Databases",
    icon: <Globe size={20} className="text-blue-400" />,
    skills: [
      "React",
      "Tailwind CSS",
      "Docker",
      "Git",
      "GitHub",
      "Vercel",
      "Netlify",
      "Render",
      "MySQL",
      "Supabase / PostgreSQL",
      "Claude API",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#07070f] px-6 sm:px-12 md:px-24 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-xs font-mono text-[#64ffda] uppercase tracking-wider font-semibold">
            03. Technical Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display mt-1">
            Skills & Stack
          </h2>
          <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-[#64ffda] to-purple-500 mt-3" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#0d0d1a] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-[#64ffda]/40 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/5">
                  <div className="p-2 rounded-xl bg-[#16172e] border border-white/10">
                    {cat.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-display">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg border border-white/10 bg-[#16172e] text-gray-300 text-xs font-mono hover:border-[#64ffda]/50 hover:text-[#64ffda] transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
