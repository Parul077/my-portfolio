import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FolderKanban } from "lucide-react";

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
    <section id="projects" className="bg-[#0a192f] px-6 md:px-20 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#ccd6f6]"
        >
          Other Projects
        </motion.h2>

        <div className="w-16 h-[3px] rounded-full bg-[#64ffda] mt-4 mb-14"></div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-[#112240]/80 border border-[#233554] rounded-xl p-6 hover:border-[#64ffda]/40 hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              {/* Header */}

              <div className="flex items-center justify-between mb-5">
                <FolderKanban size={26} className="text-[#64ffda]" />

                <span className="text-[10px] uppercase tracking-widest text-[#64ffda]">
                  {project.category}
                </span>
              </div>

              {/* Title */}

              <h3 className="text-xl font-semibold text-[#ccd6f6] leading-snug">
                {project.title}
              </h3>

              {/* Description */}

              <p className="text-gray-400 text-sm leading-7 mt-3 flex-grow">
                {project.desc}
              </p>

              {/* Tech */}

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md border border-[#233554] bg-[#0a192f] text-[#64ffda] text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Footer */}

              <div className="border-t border-[#233554] mt-6 pt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#64ffda] hover:text-white transition"
                >
                  <FaGithub size={18} />

                  <span className="text-sm font-medium">Source Code</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}

        <div className="flex justify-center mt-16">
          <a
            href="https://github.com/Parul077"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded-lg hover:bg-[#64ffda]/10 transition"
          >
            <FaGithub size={18} />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
