import { motion } from "framer-motion";

const projects = [
  {
    title: "Fake News Detection",
    desc: "Built a machine learning model to classify news articles as fake or real using NLP techniques and text preprocessing.",
    tech: ["Python", "Scikit-learn", "NLP", "TF-IDF"],
    github: "https://github.com/Parul077/Fake_news_prediction",
  },
  {
    title: "Book Recommender System",
    desc: "Developed a recommendation system using collaborative filtering to suggest books based on user preferences and similarity scores.",
    tech: ["Python", "Pandas", "Scikit-learn", "Cosine Similarity"],
    github: "https://github.com/Parul077/Book_recommender_system",
  },
  {
    title: "Energy Demand Forecasting",
    desc: "Built a time-series forecasting system using SARIMAX, XGBoost, and LSTM to predict energy demand and solar power generation.",
    tech: ["Time Series", "XGBoost", "LSTM", "SARIMAX"],
    github: "https://github.com/Parul077/Energy_demand---solar_forecasting",
  },
  {
    title: "Calories Burn Prediction",
    desc: "Developed a regression model to predict calories burned using physiological and activity-based features.",
    tech: ["Python", "Regression", "Random Forest"],
    github: "https://github.com/Parul077/Calories_Burnt_Prediction",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 md:px-20 py-20 bg-[#0a192f]">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6] mb-4">
        Projects
      </h2>
      <div className="w-16 h-[2px] bg-[#64ffda] mb-12"></div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#112240] p-6 rounded-lg hover:-translate-y-2 hover:shadow-[0_0_20px_#64ffda20] transition duration-300"
          >
            {/* Top */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-[#64ffda] text-xl">📁</span>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#64ffda]"
              >
                🔗
              </a>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-white">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
              {project.desc}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs text-[#64ffda] bg-[#64ffda]/10 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="flex justify-center mt-12">
        <a
          href="https://github.com/Parul077"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-[#64ffda] text-[#64ffda] rounded-md hover:bg-[#64ffda]/10 transition"
        >
          View All Projects →
        </a>
      </div>
    </section>
  );
};

export default Projects;
