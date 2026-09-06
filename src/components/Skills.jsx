import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  Library,
  Server,
  Database,
  Wrench,
  Bot,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 size={22} />,
    skills: ["Python", "JavaScript", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "AI & Machine Learning",
    icon: <BrainCircuit size={22} />,
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Retrieval-Augmented Generation (RAG)",
      "LLM Application Development",
      "Prompt Engineering",
      "Feature Engineering",
    ],
  },
  {
    title: "Libraries",
    icon: <Library size={22} />,
    skills: [
      "Scikit-learn",
      "TensorFlow / Keras",
      "LangChain",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "NLTK",
    ],
  },
  {
    title: "Frameworks",
    icon: <Server size={22} />,
    skills: ["Flask", "Django", "Streamlit", "Jinja2"],
  },
  {
    title: "Databases",
    icon: <Database size={22} />,
    skills: ["MySQL", "FAISS (Vector Database)", "Supabase"],
  },
  {
    title: "Tools & Deployment",
    icon: <Wrench size={22} />,
    skills: [
      "Docker",
      "Git",
      "GitHub",
      "Render",
      "Vercel",
      "Web Scraping & Automation",
    ],
  },
  {
    title: "AI Platforms & APIs",
    icon: <Bot size={22} />,
    skills: ["OpenRouter", "Google AI Studio", "Groq", "Hugging Face"],
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

              <div className="flex flex-wrap gap-3">
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
