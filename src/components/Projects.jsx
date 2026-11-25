import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FolderKanban, ArrowUpRight } from "lucide-react";

const projects = [
  {
    category: "WEB SCRAPING & AUTOMATION",
    title: "ERC Tracker",
    desc: "A Django-based automation platform that monitors Electricity Regulatory Commission (ERC) websites, scrapes newly published documents, and centralizes them for efficient search and management.",
    tech: ["Python", "Django", "BeautifulSoup", "MySQL", "Automation"],
    github: "https://github.com/Parul077/ERC-Tracker",
  },
  {
    category: "NATURAL LANGUAGE PROCESSING",
    title: "Fake News Detection",
    desc: "NLP-based fake news classification using TF-IDF vectorization and supervised machine learning algorithms.",
    tech: ["Python", "Scikit-learn", "NLP", "TF-IDF"],
    github: "https://github.com/Parul077/Fake_news_prediction",
  },
  {
    category: "RECOMMENDATION SYSTEM",
    title: "Book Recommender System",
    desc: "Recommendation engine built using collaborative filtering and similarity-based recommendations for personalized book suggestions.",
    tech: ["Python", "Pandas", "Scikit-learn", "Cosine Similarity"],
    github: "https://github.com/Parul077/Book_recommender_system",
  },
  {
    category: "TIME SERIES FORECASTING",
    title: "Energy Demand Forecasting",
    desc: "Time-series forecasting system combining SARIMAX, XGBoost, and LSTM models to predict energy demand and solar power generation.",
    tech: ["SARIMAX", "XGBoost", "LSTM", "Python"],
    github: "https://github.com/Parul077/Energy_demand---solar_forecasting",
  },
  {
    category: "MACHINE LEARNING",
    title: "Calories Burn Prediction",
    desc: "Regression model for estimating calorie expenditure from physiological and activity-based features.",
    tech: ["Python", "Regression", "Random Forest"],
    github: "https://github.com/Parul077/Calories_Burnt_Prediction",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#07070f] px-6 sm:px-12 md:px-24 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-xs font-mono text-[#64ffda] uppercase tracking-wider font-semibold">
            05. Notable Implementations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display mt-1">
            Other Projects
          </h2>
          <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-[#64ffda] to-purple-500 mt-3" />
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-[#0d0d1a] border border-white/10 rounded-2xl p-6 hover:border-[#64ffda]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#16172e] border border-white/10 text-[#64ffda]">
                    <FolderKanban size={22} />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#64ffda]">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white font-display leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mt-2.5">
                  {project.desc}
                </p>
              </div>

              <div>
                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg border border-white/10 bg-[#16172e] text-gray-300 text-[11px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="border-t border-white/5 mt-5 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#64ffda] hover:text-white transition"
                  >
                    <FaGithub size={14} />
                    <span>Source Code</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div className="flex justify-center mt-14">
          <a
            href="https://github.com/Parul077"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-white/20 bg-[#0d0d1a] text-white px-6 py-3 rounded-xl hover:border-[#64ffda] hover:text-[#64ffda] text-xs sm:text-sm font-mono transition-all duration-200"
          >
            <FaGithub size={16} />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
