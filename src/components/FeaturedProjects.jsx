import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  CheckCircle2,
  Clock,
  ChevronDown,
  ChevronUp,
  Cpu,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import logoGR from "../assets/logo_GR.png"; // Your Glitch Room logo
import aiCoachImg from "../assets/ai-career-coach.png";
import queryPdfImg from "../assets/queryPDF.png";
import solarImg from "../assets/solar.png";

// Custom Futuristic Terminal Banner for Jev State Engine
const JevEngineBanner = () => {
  return (
    <div className="relative w-full h-full bg-[#071324] overflow-hidden flex flex-col justify-between p-4 border border-[#233554] rounded-lg group select-none">
      {/* Background Grid & Glow */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#64ffda 1px, transparent 1px), linear-gradient(90deg, #64ffda 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        }}
      />
      <div className="absolute top-0 right-0 w-44 h-44 bg-teal-500/10 rounded-full blur-3xl group-hover:bg-teal-500/20 transition-all duration-500" />
      <div className="absolute bottom-0 left-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500" />

      {/* Terminal Title Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#233554]/80 pb-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          <span className="text-[11px] font-mono text-gray-400 ml-2">
            jev-state-engine // fsm-runtime
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Deterministic Gated IoC
        </span>
      </div>

      {/* Visual Lifecycle Pipeline */}
      <div className="relative z-10 my-auto py-2">
        <div className="text-[10px] font-mono text-[#64ffda] uppercase tracking-wider mb-2 flex items-center justify-between">
          <span>5-Stage Deterministic Lifecycle</span>
          <span className="text-gray-400 font-mono text-[9px]">LangGraph • IoC</span>
        </div>

        {/* Stages Flow */}
        <div className="grid grid-cols-5 gap-1 text-center font-mono">
          {[
            { name: "Investigate", tag: "S1" },
            { name: "Plan", tag: "S2" },
            { name: "Implement", tag: "S3" },
            { name: "Gate T0/T1", tag: "Gated" },
            { name: "Verify", tag: "Pass" },
          ].map((stage) => (
            <div
              key={stage.name}
              className="bg-[#0f2342] border border-[#233554] group-hover:border-[#64ffda]/40 rounded px-1 py-1.5 transition-all duration-300"
            >
              <span className="block text-[8px] text-gray-400 uppercase tracking-tight">
                {stage.tag}
              </span>
              <span className="block text-[10px] font-bold text-gray-200 group-hover:text-[#64ffda] truncate">
                {stage.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Terminal Telemetry Bar */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-[#233554]/80 text-[10px] font-mono">
        <div className="flex items-center gap-2 text-gray-300">
          <span className="text-[#64ffda]">&gt;</span>
          <span>sqlparse: 100% pass (509 tests, 0 reg.)</span>
        </div>
        <span className="text-cyan-300 font-semibold bg-[#112240] px-2 py-0.5 rounded border border-cyan-500/30">
          ~4x Token Efficiency
        </span>
      </div>
    </div>
  );
};

// Custom Banner Component for Synthetic Data Generator
const SyntheticDataBanner = () => {
  return (
    <div className="relative w-full h-full bg-[#081a2e] overflow-hidden flex flex-col justify-between p-4 border border-[#233554] rounded-lg group select-none">
      {/* Background Matrix/Grid */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#64ffda 1px, transparent 1px), linear-gradient(90deg, #64ffda 1px, transparent 1px)`,
          backgroundSize: `20px 20px`,
        }}
      />
      <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500" />
      <div className="absolute bottom-0 left-0 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />

      {/* Terminal Title Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#233554]/80 pb-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          <span className="text-[11px] font-mono text-gray-400 ml-2">
            synthetic-data // pipeline.py
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-2 py-0.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Bounded Repair
        </span>
      </div>

      {/* Pipeline Stages Flow */}
      <div className="relative z-10 my-auto py-2">
        <div className="text-[10px] font-mono text-[#64ffda] uppercase tracking-wider mb-2 flex items-center justify-between">
          <span>Excel Spec to Multi-Format Pipeline</span>
          <span className="text-gray-400 font-mono text-[9px]">Claude API • Pytest</span>
        </div>

        <div className="grid grid-cols-4 gap-1.5 text-center font-mono">
          {[
            { label: "Spec Parser", sub: "Excel / Rules" },
            { label: "Dist. Checks", sub: "Stat Validation" },
            { label: "Repair Engine", sub: "Bounded Fixes" },
            { label: "Multi-Export", sub: "CSV, JSON, PDF" },
          ].map((stage) => (
            <div
              key={stage.label}
              className="bg-[#0f2342] border border-[#233554] group-hover:border-[#64ffda]/40 rounded px-1 py-1.5 transition-all duration-300"
            >
              <span className="block text-[10px] font-bold text-gray-200 group-hover:text-[#64ffda] truncate">
                {stage.label}
              </span>
              <span className="block text-[8px] text-gray-400 uppercase tracking-tight truncate">
                {stage.sub}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Telemetry Bar */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-[#233554]/80 text-[10px] font-mono">
        <div className="flex items-center gap-2 text-gray-300">
          <span className="text-[#64ffda]">&gt;</span>
          <span>60+ Pytest Suite • Mock Offline Mode</span>
        </div>
        <span className="text-emerald-400 font-semibold bg-[#112240] px-2 py-0.5 rounded border border-emerald-500/30">
          Zero Leakage
        </span>
      </div>
    </div>
  );
};

// Custom Banner Component for Glitch Room
const GlitchRoomBanner = ({ liveUrl }) => {
  return (
    <a
      href={liveUrl || "https://joinglitchroom.com/"}
      target="_blank"
      rel="noreferrer"
      className="relative w-full h-full bg-[#0a192f] overflow-hidden flex flex-col items-center justify-center border border-[#233554] rounded-lg group block cursor-pointer"
    >
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
      <div className="absolute w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl group-hover:bg-cyan-500/35 transition-all duration-500" />

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

        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#112240] border border-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.15)]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-mono font-semibold tracking-widest text-emerald-300 uppercase">
            Live Platform
          </span>
        </div>
      </div>
    </a>
  );
};

const featuredProjects = [
  {
    number: "01",
    category: "AUTONOMOUS CODING RUNTIME",
    status: "Completed",
    title: "Jev State Engine",
    subtitle: "Deterministic Gated Autonomous Coding Runtime",
    description:
      "A deterministic state-machine runtime for autonomous coding tasks, using mechanical AST/pytest checks and an LLM semantic gate to control untrusted code-generation agents.",
    highlights: [
      "Deterministic State-Machine Runtime",
      "Mechanical AST & Pytest Gate",
      "Git Worktree Isolation & 3-Strike Breaker",
      "100% Test Integrity (~4x Efficiency)",
    ],
    detailedPoints: [
      {
        title: "Deterministic State-Machine Runtime",
        desc: "Built a deterministic state-machine runtime for autonomous coding tasks, using mechanical AST/pytest checks and an LLM semantic gate to control untrusted code-generation agents.",
      },
      {
        title: "Worktree Isolation & Circuit Breaker",
        desc: "Isolated code changes in Git worktrees and added a 3-strike circuit breaker with forensic post-mortems using a local Qwen 1.5B advisor.",
      },
      {
        title: "Empirical Multi-Repo Benchmarking",
        desc: "Benchmarked 17 runs on sqlparse and humanize; tasks completed in one subgoal at ~9.5k tokens, with 100% test integrity and ~75% lower token overhead versus standard ReAct agents.",
      },
    ],
    tech: [
      "Python",
      "LangGraph",
      "Git Worktrees",
      "AST",
      "SQLite",
      "Ollama (Qwen 2.5 Coder)",
      "Gemini API",
      "Pytest",
    ],
    github: "https://github.com/Parul077/jev-state-engine",
    live: null,
    isJevEngine: true,
  },
  {
    number: "02",
    category: "SYNTHETIC DATA PIPELINE",
    status: "Completed",
    title: "Synthetic Data Generator",
    subtitle: "Specification-Driven Data Synthesis & Validation",
    description:
      "A robust specification-driven workflow that converts Excel specifications into synthetic datasets and exports CSV, XLSX, JSON, DOCX, and PDF deliverables with automated validation.",
    highlights: [
      "Excel Spec to Multi-Format Export",
      "Ranges, Distributions & Correlation Checks",
      "Bounded Repair & 60+ Test Suite",
      "Offline Mock Mode & Safe Formula Eval",
    ],
    detailedPoints: [
      {
        title: "Specification-Driven Synthesis",
        desc: "Built a workflow that converts Excel specifications into synthetic datasets and exports CSV, XLSX, JSON, DOCX, and PDF deliverables.",
      },
      {
        title: "Statistical Validation & Bounded Repair",
        desc: "Added checks for row counts, unique IDs, ranges, distributions, and correlations, with bounded repair and a 60+ test suite.",
      },
      {
        title: "Offline Mock Mode & Formula Evaluation",
        desc: "Included offline mock mode and safe formula evaluation to support repeatable generation and testing without a live API dependency.",
      },
    ],
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "SciPy",
      "Streamlit",
      "Claude API",
      "Pytest",
    ],
    github: "https://github.com/Parul077/synthetic-data-generator",
    live: null,
    isSyntheticData: true,
  },
  {
    number: "03",
    category: "INTERACTIVE LEARNING PLATFORM",
    status: "Live",
    title: "The Glitch Room",
    subtitle: "Gamified Developer Learning Platform",
    description:
      "A gamified learning platform with AI-generated challenges, automated feedback, interactive dashboards, leaderboards, and collaborative Creator Rooms.",
    highlights: [
      "Gamified Learning Platform",
      "AI-Generated Challenges & Feedback",
      "Creator Rooms & Leaderboards",
      "AI-Assisted Progress Workflows",
    ],
    detailedPoints: [
      {
        title: "Gamified Challenge Engine",
        desc: "Developed a gamified learning platform with AI-generated challenges and automated feedback.",
      },
      {
        title: "Interactive Dashboards & Creator Rooms",
        desc: "Built interactive dashboards, leaderboards, and collaborative Creator Rooms using React and Supabase.",
      },
      {
        title: "AI-Assisted Evaluation Workflows",
        desc: "Added AI-assisted evaluation and progress workflows to support hands-on practice and learning consistency.",
      },
    ],
    tech: ["React", "Tailwind CSS", "Framer Motion", "Supabase", "Generative AI"],
    github: null,
    live: "https://joinglitchroom.com/",
    isGlitchRoom: true,
  },
  {
    number: "04",
    category: "RAG APPLICATION",
    status: "Completed",
    title: "QueryPDF",
    subtitle: "AI-Powered Document Assistant using Vector Search",
    description:
      "A document assistant supporting natural-language questions about PDF content using semantic vector retrieval and context-aware LLM answers.",
    highlights: [
      "Natural Language PDF QA",
      "Semantic Retrieval & Embeddings",
      "Vector Search Passage Matching",
      "Context-Aware LLM Answering",
    ],
    detailedPoints: [
      {
        title: "Document Assistant Architecture",
        desc: "Built a document assistant supporting natural-language questions about PDF content.",
      },
      {
        title: "Semantic Vector Retrieval",
        desc: "Implemented semantic retrieval using embeddings and vector search to find relevant document passages.",
      },
      {
        title: "Context-Aware LLM Integration",
        desc: "Integrated an LLM with retrieved context to generate context-aware answers.",
      },
    ],
    tech: ["Python", "LLMs", "Embeddings", "Vector Search", "LangChain", "FAISS"],
    github:
      "https://github.com/Parul077/QueryPDF-AI-Powered-Document-Assistant",
    image: queryPdfImg,
  },
  {
    number: "05",
    category: "COMPUTER VISION",
    status: "Completed",
    title: "Solar Panel Defect Classification",
    subtitle: "EfficientNet Deep-Learning Defect Classifier",
    description:
      "An EfficientNet-based deep-learning model to classify solar-panel images across six defect categories with preprocessing, augmentation, and Streamlit inference.",
    highlights: [
      "EfficientNet Deep-Learning Model",
      "6 Defect Categories Classification",
      "Image Preprocessing & Augmentation",
      "Automated Streamlit Prediction UI",
    ],
    detailedPoints: [
      {
        title: "EfficientNet Model Architecture",
        desc: "Developed an EfficientNet-based deep-learning model to classify solar-panel images across six defect categories.",
      },
      {
        title: "Data Preparation & Augmentation",
        desc: "Applied image preprocessing and augmentation to prepare image inputs and support model training.",
      },
      {
        title: "Streamlit Interface & Inference",
        desc: "Built a Streamlit interface for image upload and automated defect prediction.",
      },
    ],
    tech: ["Python", "TensorFlow", "EfficientNet", "Streamlit", "Computer Vision"],
    github: "https://github.com/Parul077/Solar_panel_defect_classifier",
    image: solarImg,
  },
  {
    number: "06",
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
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleExpand = (title) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

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
                {/* Banner: Image, JevEngineBanner, SyntheticDataBanner or GlitchRoomBanner */}
                <div className="group overflow-hidden rounded-lg border border-[#233554] bg-[#0a192f] mb-4 h-48 w-full">
                  {project.isJevEngine ? (
                    <JevEngineBanner />
                  ) : project.isSyntheticData ? (
                    <SyntheticDataBanner />
                  ) : project.isGlitchRoom ? (
                    <GlitchRoomBanner liveUrl={project.live} />
                  ) : project.status === "Coming Soon" ? (
                    <GlitchRoomBanner liveUrl={project.live} />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                    />
                  )}
                </div>

                {/* Category & Status */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-[#64ffda]/10 text-[#64ffda] border border-[#64ffda]/30">
                      #{project.number}
                    </span>
                    <span className="text-xs font-semibold tracking-wider text-[#64ffda] truncate">
                      {project.category}
                    </span>
                  </div>
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

                {/* Detailed Architectural Pillars (if present) */}
                {project.detailedPoints && (
                  <div className="mt-4 pt-3 border-t border-[#233554]/60">
                    <button
                      onClick={() => toggleExpand(project.title)}
                      className="flex items-center justify-between w-full text-xs font-medium text-[#64ffda] hover:text-[#64ffda]/80 transition-colors py-1 cursor-pointer bg-[#0a192f]/60 hover:bg-[#0a192f] border border-[#233554] rounded-lg px-3"
                    >
                      <span className="flex items-center gap-2">
                        <Cpu size={14} className="text-[#64ffda]" />
                        <span>
                          {expandedProjects[project.title]
                            ? "Hide Key Details & Architecture"
                            : "View Key Details & Technical Breakdown"}
                        </span>
                      </span>
                      {expandedProjects[project.title] ? (
                        <ChevronUp size={14} />
                      ) : (
                        <ChevronDown size={14} />
                      )}
                    </button>

                    <AnimatePresence>
                      {expandedProjects[project.title] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-3 space-y-2.5 overflow-hidden"
                        >
                          {project.detailedPoints.map((item, idx) => (
                            <div
                              key={idx}
                              className="p-3 rounded-lg bg-[#0a192f]/90 border border-[#233554] text-xs transition-all hover:border-[#64ffda]/30"
                            >
                              <p className="font-semibold text-[#ccd6f6] flex items-center gap-2 mb-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#64ffda] shrink-0" />
                                <span>{item.title}</span>
                              </p>
                              <p className="text-gray-300 text-[11px] leading-relaxed pl-3.5">
                                {item.desc}
                              </p>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
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