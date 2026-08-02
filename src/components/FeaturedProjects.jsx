import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2, Clock } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import logoGR from "../assets/logo_GR.png"; // Your Glitch Room logo
import aiCoachImg from "../assets/ai-career-coach.png";
import queryPdfImg from "../assets/queryPDF.png";
import solarImg from "../assets/solar.png";

// Custom Placeholder Component for Glitch Room / Coming Soon projects
const GlitchRoomPlaceholder = () => {
  return (
    <div className="relative w-full h-full bg-[#0a192f] overflow-hidden flex flex-col items-center justify-center border border-[#233554] rounded-lg group">
      {/* Cyber Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(#64ffda 1px, transparent 1px), radial-gradient(#64ffda 1px, #0a192f 1px)`,
          backgroundSize: `20px 20px`,
          backgroundPosition: `0 0, 10px 10px`,
        }}
      />

      {/* Neon Glow */}
      <div className="absolute w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl group-hover:bg-cyan-500/30 transition-all duration-500" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-2.5">
        <div className="w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-110">
          <img
            src={logoGR}
            alt="Glitch Room Logo"
            className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(0,210,255,0.4)]"
          />
        </div>

        <h4 className="text-white font-bold text-base md:text-lg tracking-wider font-mono">
          GLITCH ROOM
        </h4>

        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#112240] border border-cyan-500/40 shadow-[0_0_10px_rgba(0,255,218,0.15)]">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[10px] font-mono font-semibold tracking-widest text-cyan-300 uppercase">
            Coming Soon
          </span>
        </div>
      </div>
    </div>
  );
};

const featuredProjects = [
  {
    category: "INTERACTIVE LEARNING PLATFORM",
    status: "Coming Soon",
    title: "Glitch Room",
    subtitle: "Interactive Learning Platform for Developers",
    description:
      "Glitch Room is an interactive platform designed to make technical learning engaging through hands-on coding experiences and intelligent learning workflows.",
    highlights: [
      "Interactive Learning",
      "Real-world Challenges",
      "Progress Tracking",
      "Modern Responsive UI",
    ],
    tech: ["React", "Tailwind CSS", "Framer Motion", "Supabase", "JavaScript"],
    github: null,
    live: null,
    image: null, // Renders GlitchRoomPlaceholder automatically
  },
  {
    category: "RAG APPLICATION",
    status: "Live",
    title: "AI Career Coach",
    subtitle: "Resume Analysis • Skill Gap Analysis • Career Guidance",
    description:
      "RAG-powered career assistant that analyzes resumes, identifies skill gaps, and generates personalized career guidance using semantic search and LLMs.",
    highlights: [
      "Resume Parsing",
      "Skill Gap Analysis",
      "Semantic Search",
      "Career Roadmap",
    ],
    tech: ["Python", "Flask", "LangChain", "FAISS", "Groq", "Render"],
    github: "https://github.com/Parul077/AI-Career-Coach",
    live: "https://ai-career-coach-1-5e5m.onrender.com/",
    image: aiCoachImg,
  },
  {
    category: "RAG APPLICATION",
    status: "Completed",
    title: "QueryPDF",
    subtitle: "AI Document Assistant using Retrieval-Augmented Generation",
    description:
      "An AI document assistant that enables users to upload PDFs and ask natural language questions using semantic search and context-aware LLM answers.",
    highlights: [
      "PDF Upload",
      "Semantic Search",
      "Document Retrieval",
      "Vector Embeddings",
    ],
    tech: ["Python", "Flask", "LangChain", "FAISS", "Embeddings"],
    github:
      "https://github.com/Parul077/QueryPDF-AI-Powered-Document-Assistant",
    image: queryPdfImg,
  },
  {
    category: "COMPUTER VISION",
    status: "Completed",
    title: "Solar Panel Defect Classification",
    subtitle: "CNN-based Computer Vision System",
    description:
      "A deep learning application that automatically detects and classifies solar panel defects using Convolutional Neural Networks and Streamlit.",
    highlights: [
      "CNN Model",
      "Image Classification",
      "Real-time Prediction",
      "Streamlit Dashboard",
    ],
    tech: ["TensorFlow", "CNN", "Streamlit", "Computer Vision"],
    github: "https://github.com/Parul077/Solar_panel_defect_classifier",
    image: solarImg,
  },
];

// Color-coded status badge utility
const getStatusBadgeStyle = (status) => {
  switch (status.toLowerCase()) {
    case "live":
      return "bg-green-500/15 text-green-400 border-green-500/30";
    case "completed":
      return "bg-blue-500/15 text-blue-400 border-blue-500/30";
    case "coming soon":
      return "bg-amber-500/15 text-amber-400 border-amber-500/30";
    default:
      return "bg-gray-500/15 text-gray-400 border-gray-500/30";
  }
};

const FeaturedProjects = () => {
  return (
    <section
      id="featured-projects"
      className="bg-[#0a192f] px-6 md:px-12 py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#ccd6f6]"
        >
          Featured Projects
        </motion.h2>

        <div className="w-12 h-[3px] rounded-full bg-[#64ffda] mt-3 mb-12"></div>

        {/* 2-Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex flex-col justify-between bg-[#112240]/50 border border-[#233554] rounded-xl overflow-hidden p-5 transition-all duration-300 hover:border-[#64ffda]/30 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Card Main Body */}
              <div>
                {/* Banner: Image or Custom Placeholder */}
                <div className="group overflow-hidden rounded-lg border border-[#233554] bg-[#0a192f] mb-4 h-48 w-full">
                  {project.status === "Coming Soon" ? (
                    <GlitchRoomPlaceholder />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                    />
                  )}
                </div>

                {/* Category & Status */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold tracking-wider text-[#64ffda] truncate">
                    {project.category}
                  </span>
                  <span
                    className={`text-[10px] px-2.5 py-0.5 rounded-full font-medium border shrink-0 ${getStatusBadgeStyle(
                      project.status,
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-[#ccd6f6]">
                  {project.title}
                </h3>
                <p className="text-[#64ffda] text-xs mt-0.5 font-medium line-clamp-1">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-300 text-xs leading-relaxed mt-3">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mt-4 pt-3 border-t border-[#233554]/60">
                  <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                    Highlights
                  </span>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {project.highlights.slice(0, 4).map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-1.5 text-gray-300 text-xs"
                      >
                        <CheckCircle2
                          size={13}
                          className="text-[#64ffda] shrink-0"
                        />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 pt-3 border-t border-[#233554]/60">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 max-w-[60%]">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded bg-[#0a192f] border border-[#233554] text-[#64ffda] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-2 shrink-0">
                  {project.status === "Coming Soon" ? (
                    <span className="flex items-center gap-1.5 rounded bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 text-xs font-semibold text-amber-400 cursor-not-allowed">
                      <Clock size={13} />
                      <span>Coming Soon</span>
                    </span>
                  ) : (
                    <>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 rounded border border-[#64ffda] px-3 py-1.5 text-xs font-medium text-[#64ffda] transition-all duration-200 hover:bg-[#64ffda]/10"
                        >
                          <FaGithub size={13} />
                          <span>Source Code</span>
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 rounded bg-[#64ffda] px-3 py-1.5 text-xs font-semibold text-[#0a192f] transition-all duration-200 hover:bg-[#52e0c4]"
                        >
                          <ExternalLink size={13} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
