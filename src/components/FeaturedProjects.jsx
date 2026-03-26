import { motion } from "framer-motion";
import chatbotImg from "../assets/ai-course-chatbot-image.png";
import solarImg from "../assets/solar-panel.png";

const featuredProjects = [
  {
    title: "Solar Panel Defect Classifier",
    desc: "An AI-powered web application that detects defects in solar panels using deep learning. Upload an image and get instant predictions with confidence scores and detailed insights.",
    tech: ["TensorFlow", "CNN", "Streamlit", "Pillow"],
    github: "https://github.com/Parul077/Solar_panel_defect_classifier",
    image: solarImg, // add image later
  },
  {
    title: "AI Course Chatbot",
    desc: "A smart chatbot designed to assist students with course queries using NLP and OpenAI. Includes session memory, analytics dashboard, and modern UI.",
    tech: ["Flask", "OpenRouter", "NLP", "LLM"],
    github: "https://github.com/Parul077/ai-course-chatbot",
    image: chatbotImg,
  },
];

const FeaturedProjects = () => {
  return (
    <section
      id="featured-projects"
      className="px-6 md:px-20 py-20 bg-[#0a192f]"
    >
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6] mb-16">
        <span className="text-[#64ffda]"></span> Featured Projects
      </h2>
      <div className="w-16 h-[2px] bg-[#64ffda] mt-2 mb-8"></div>

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
              <div className="bg-[#112240]/80 backdrop-blur-md rounded-lg overflow-hidden shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            {/* Content */}
            <div className="md:w-1/2">
              <p className="text-[#64ffda] text-sm mb-2">Featured Project</p>

              <h3 className="text-2xl font-bold text-[#ccd6f6]">
                {project.title}
              </h3>

              <div className="bg-[#112240] p-4 rounded-lg mt-4 text-gray-400 text-sm">
                {project.desc}
              </div>

              {/* Tech */}
              <div className="flex flex-wrap gap-3 mt-4 text-xs text-gray-500">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-4 text-gray-300">
                <a href={project.github}>🔗 GitHub</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
