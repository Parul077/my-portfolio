import { motion } from "framer-motion";
import aiCoachImg from "../assets/ai-career-coach.png";
import queryPdfImg from "../assets/queryPDF.png";
import solarImg from "../assets/solar.png";

const featuredProjects = [
  {
    title: "AI Career Coach",
    desc: "A RAG-based AI application that provides personalized career guidance, resume evaluation, and skill gap analysis using LLMs and vector search for context-aware responses.",
    tech: ["Flask", "LangChain", "FAISS", "Groq API", "LLM", "Render"],
    github: "https://github.com/Parul077/AI-Career-Coach",
    live: "https://ai-career-coach-1-5e5m.onrender.com/",
    image: aiCoachImg,
  },
  {
    title: "QueryPDF – AI Document Assistant",
    desc: "An AI-powered system that allows users to query PDF documents using natural language through a RAG pipeline with semantic search and LLM-based responses.",
    tech: ["Flask", "LangChain", "FAISS", "Groq API", "Embeddings"],
    github:
      "https://github.com/Parul077/QueryPDF-AI-Powered-Document-Assistant",
    image: queryPdfImg,
  },
  {
    title: "Solar Panel Defect Classification",
    desc: "A deep learning-based system that detects and classifies solar panel defects using CNNs, with a Streamlit interface for real-time predictions.",
    tech: ["TensorFlow", "CNN", "Streamlit", "Computer Vision"],
    github: "https://github.com/Parul077/Solar_panel_defect_classifier",
    image: solarImg,
  },
];

const FeaturedProjects = () => {
  return (
    <section
      id="featured-projects"
      className="px-6 md:px-20 py-20 bg-[#0a192f]"
    >
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6] mb-4">
        Featured Projects
      </h2>
      <div className="w-16 h-[2px] bg-[#64ffda] mb-12"></div>

      <div className="flex flex-col gap-24">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="md:w-1/2">
              <div className="bg-[#112240]/80 backdrop-blur-md rounded-lg overflow-hidden shadow-lg group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            {/* Content */}
            <div className="md:w-1/2">
              <p className="text-[#64ffda] text-sm mb-2">Featured Project</p>

              <h3 className="text-2xl font-bold text-[#ccd6f6]">
                {project.title}
              </h3>

              <div className="bg-[#112240] p-4 rounded-lg mt-4 text-gray-400 text-sm leading-relaxed">
                {project.desc}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-[#64ffda]/10 text-[#64ffda] rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-6">
                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-[#64ffda] text-[#64ffda] text-sm rounded-md hover:bg-[#64ffda]/10 transition"
                >
                  GitHub
                </a>

                {/* Live Demo */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#64ffda] text-[#0a192f] text-sm rounded-md hover:bg-[#52e0c4] transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
