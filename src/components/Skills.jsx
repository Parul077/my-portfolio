import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  Library,
  Database,
  Wrench,
  CheckCircle2,
  BarChart3,
  Bot,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: <Code2 size={22} />,
    skills: [
      "Python",
      "SQL",
      "JavaScript",
      "Object-Oriented Programming (OOP)",
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: <BrainCircuit size={22} />,
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing (NLP)",
      "Large Language Models (LLMs)",
      "Generative AI",
      "Retrieval-Augmented Generation (RAG)",
      "Computer Vision",
      "Autonomous AI Agents",
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: <Library size={22} />,
    skills: [
      "LangGraph",
      "LangChain",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "FAISS",
      "Django",
      "Flask",
      "Streamlit",
    ],
  },
  {
    title: "Data & Analytics",
    icon: <BarChart3 size={22} />,
    skills: [
      "Pandas",
      "NumPy",
      "SciPy",
      "Matplotlib",
      "NLTK",
      "Synthetic Data Generation",
      "Statistical Validation",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    title: "Testing & Data Quality",
    icon: <CheckCircle2 size={22} />,
    skills: [
      "Pytest",
      "Automated Validation",
      "Data Integrity Checks",
      "Range/Distribution/Correlation Checks",
      "Bounded Repair",
      "AST Analysis",
    ],
  },
  {
    title: "Web, Cloud & Databases",
    icon: <Database size={22} />,
    skills: [
      "React",
      "Tailwind CSS",
      "MySQL",
      "SQLite",
      "Supabase / PostgreSQL",
      "Docker",
      "Git & Git Worktrees",
      "GitHub",
      "Vercel",
      "Netlify",
      "Render",
    ],
  },
  {
    title: "AI APIs & Platforms",
    icon: <Bot size={22} />,
    skills: [
      "Claude API",
      "Gemini API",
      "Ollama",
      "Google AI Studio",
      "Groq",
      "Hugging Face",
      "OpenRouter",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0a192f] px-6 md:px-20 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#ccd6f6]"
        >
          Technical Skills
        </motion.h2>

        <div className="w-16 h-[3px] rounded-full bg-[#64ffda] mt-4 mb-14"></div>

        {/* Cards */}

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-[#112240]/80 border border-[#233554] rounded-2xl p-5 hover:border-[#64ffda]/40 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Header */}

              <div className="flex items-center gap-3 mb-4">
                <div className="text-[#64ffda]">{category.icon}</div>

                <h3 className="text-base font-semibold text-[#ccd6f6]">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-md border border-[#233554] bg-[#0a192f] text-gray-300 text-xs font-medium hover:border-[#64ffda]/50 hover:text-[#64ffda] transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;