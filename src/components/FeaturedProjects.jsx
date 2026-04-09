import { motion } from "framer-motion";
import chatbotImg from "../assets/ai-course-chatbot-image.png";
import aiCoachImg from "../assets/ai-career-coach.png";

const featuredProjects = [
  {
    title: "AI Career Coach",
    desc: "AI Career Coach is an intelligent, RAG-powered web application designed to transform your professional journey. By leveraging Large Language Models (LLMs) and advanced document retrieval, it provides instant resume evaluations, skill gap analysis, and expert career coaching tailored to your profile.",
    tech: ["Flask", "LangChain", "FAISS", "Groq API"],
    github: "https://github.com/Parul077/AI-Career-Coach",
    live: "https://ai-career-coach-1-5e5m.onrender.com/",
    image: aiCoachImg, // add image later
  },
  {
    title: "AI Course Chatbot",
    desc: "A smart chatbot designed to assist students with course queries using NLP and OpenAI. Includes session memory, analytics dashboard, and modern UI.",
    tech: ["Flask", "OpenRouter", "NLP", "LLM"],
    github: "https://github.com/Parul077/ai-course-chatbot",
    // live: "https://your-live-link.com",
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

                {/* Live Link (only if exists) */}
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
