import { motion } from "framer-motion";

const projects = [
  {
    title: "Solar Panel Defect Classifier",
    desc: "An AI-powered web application that detects defects in solar panels using deep learning. Upload an image and get instant predictions with confidence scores and detailed insights.",
    tech: ["TensorFlow", "CNN", "Streamlit", "Pillow"],
    github: "https://github.com/Parul077/Solar_panel_defect_classifier",
    // live: "#"
  },
  {
    title: "Fake News Detection",
    desc: "Detects fake news using machine learning and NLP techniques.",
    tech: ["Python", "Scikit-learn", "NLP"],
    github: "https://github.com/Parul077/Fake_news_prediction",
    // live: "#",
  },
  {
    title: "Book Recommender System",
    desc: "A personalized book recommendation system that suggests books based on user preferences using collaborative filtering techniques.",
    tech: ["Flask", "Cosine similarity", "Bootstrap"],
    github: "https://github.com/Parul077/Book_recommender_system",
    // live: "#",
  },
  {
    title: "Energy Demand Forecasting",
    desc: "Predicts energy demand using SARIMAX, XGBoost, and LSTM.",
    tech: ["Time Series", "XGBoost", "LSTM", "SARIMAX"],
    github: "https://github.com/Parul077/Energy_demand---solar_forecasting",
    // live: "#",
  },
  {
    title: "Calories Burn Prediction",
    desc: "Predicts calories burned using physiological data.",
    tech: ["Regression", "ML", "Random Forest"],
    github: "https://github.com/Parul077/Calories_Burnt_Prediction",
    // live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 md:px-20 py-20 bg-[#0a192f]">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6] mb-10">
        <span className="text-[#64ffda]"></span> Projects
      </h2>
      <div className="w-16 h-[2px] bg-[#64ffda] mt-2 mb-8"></div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 hover:scale-[1.02] transition duration-300">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#112240] p-6 rounded-lg hover:-translate-y-2 hover:shadow-[0_0_20px_#64ffda20] transition duration-300"
          >
            {/* Icons */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-[#64ffda] text-xl">📁</span>

              <div className="flex gap-3 text-gray-400">
                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗
                </a>

                {/* Live Link */}
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#64ffda]"
                  >
                    🚀
                  </a>
                ) : (
                  <span className="opacity-40 cursor-not-allowed">🚀</span>
                )}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-white">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-400 mt-2">{project.desc}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4 text-xs text-gray-500">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
