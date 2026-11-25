import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Zap, Clock } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import logoGR from "../assets/logo_GR.png";
import aiCoachImg from "../assets/ai-career-coach.png";
import queryPdfImg from "../assets/queryPDF.png";
import solarImg from "../assets/solar.png";
import { ProjectSandboxModal } from "./ProjectSandboxes";

// Custom Futuristic Terminal Banner for Jev State Engine
const JevEngineBanner = () => {
  return (
    <div className="relative w-full h-full bg-[#071324] overflow-hidden flex flex-col justify-between p-4 border border-[#233554] rounded-xl group select-none">
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#64ffda 1px, transparent 1px), linear-gradient(90deg, #64ffda 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        }}
      />
      <div className="relative z-10 flex items-center justify-between border-b border-[#233554]/80 pb-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          <span className="text-[11px] font-mono text-gray-400 ml-2">
            jev-state-engine // fsm-runtime
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
          Deterministic Gated IoC
        </span>
      </div>

      <div className="relative z-10 my-auto py-2">
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
              className="bg-[#0f2342] border border-[#233554] rounded px-1 py-1.5"
            >
              <span className="block text-[8px] text-gray-400 uppercase">
                {stage.tag}
              </span>
              <span className="block text-[10px] font-bold text-gray-200 truncate">
                {stage.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-[#233554]/80 text-[10px] font-mono">
        <span className="text-gray-300">sqlparse: 100% pass (509 tests)</span>
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
    <div className="relative w-full h-full bg-[#081a2e] overflow-hidden flex flex-col justify-between p-4 border border-[#233554] rounded-xl group select-none">
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#64ffda 1px, transparent 1px), linear-gradient(90deg, #64ffda 1px, transparent 1px)`,
          backgroundSize: `20px 20px`,
        }}
      />
      <div className="relative z-10 flex items-center justify-between border-b border-[#233554]/80 pb-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          <span className="text-[11px] font-mono text-gray-400 ml-2">
            synthetic-data // pipeline.py
          </span>
        </div>
        <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-2 py-0.5 rounded-full">
          Bounded Self-Repair
        </span>
      </div>

      <div className="relative z-10 my-auto py-2">
        <div className="grid grid-cols-4 gap-1.5 text-center font-mono">
          {[
            { label: "Spec Parser", sub: "Excel / Rules" },
            { label: "Dist. Checks", sub: "Stat Validation" },
            { label: "Repair Engine", sub: "Bounded Fixes" },
            { label: "Multi-Export", sub: "CSV, JSON, PDF" },
          ].map((stage) => (
            <div
              key={stage.label}
              className="bg-[#0f2342] border border-[#233554] rounded px-1 py-1.5"
            >
              <span className="block text-[10px] font-bold text-gray-200 truncate">
                {stage.label}
              </span>
              <span className="block text-[8px] text-gray-400 uppercase truncate">
                {stage.sub}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-[#233554]/80 text-[10px] font-mono">
        <span className="text-gray-300">60+ Pytest Suite • Mock Offline Mode</span>
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
      className="relative w-full h-full bg-[#0a192f] overflow-hidden flex flex-col items-center justify-center border border-[#233554] rounded-xl group block cursor-pointer"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(#64ffda 1px, transparent 1px), radial-gradient(#64ffda 1px, #0a192f 1px)`,
          backgroundSize: `20px 20px`,
          backgroundPosition: `0 0, 10px 10px`,
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-2">
        <div className="w-14 h-14 transition-transform duration-300 group-hover:scale-110">
          <img
            src={logoGR}
            alt="Glitch Room Logo"
            className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(0,210,255,0.4)]"
          />
        </div>
        <h4 className="text-white font-bold text-base tracking-wider font-mono">
          GLITCH ROOM
        </h4>
        <span className="text-[10px] font-mono font-semibold text-emerald-300 px-2.5 py-0.5 rounded-full bg-[#112240] border border-emerald-500/40">
          Live Interactive Platform ↗
        </span>
      </div>
    </a>
  );
};

const featuredProjects = [
  {
    number: "01",
    category: "AUTONOMOUS AGENT RUNTIME",
    status: "Completed",
    title: "Jev State Engine",
    description:
      "A deterministic state-machine runtime for autonomous coding agents, utilizing mechanical AST/pytest checks, Git worktree isolation, and a 3-strike circuit breaker to eliminate rogue agent loops.",
    tech: ["Python", "LangGraph", "AST", "Git Worktrees", "Pytest"],
    github: "https://github.com/Parul077/jev-state-engine",
    live: null,
    isJevEngine: true,
  },
  {
    number: "02",
    category: "SYNTHETIC DATA PIPELINE",
    status: "Completed",
    title: "Synthetic Data Generator",
    description:
      "A specification-driven pipeline that converts complex domain Excel specs into multi-format synthetic datasets with an automated 12-rule statistical validation engine and bounded self-repair.",
    tech: ["Python", "Pandas", "NumPy", "SciPy", "Streamlit", "Pytest"],
    github: "https://github.com/Parul077/synthetic-data-generator",
    live: null,
    isSyntheticData: true,
  },
  {
    number: "03",
    category: "DEVELOPER LEARNING PLATFORM",
    status: "Live",
    title: "The Glitch Room",
    description:
      "A gamified developer learning platform with real-time code challenges, a 3-stage interactive debugging arena, collaborative Creator Rooms, and automated AI evaluation.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Supabase", "AI"],
    github: null,
    live: "https://joinglitchroom.com/",
    isGlitchRoom: true,
  },
  {
    number: "04",
    category: "RAG & VECTOR SEARCH",
    status: "Completed",
    title: "QueryPDF",
    description:
      "An AI-powered document knowledge assistant combining web scraping with semantic vector retrieval (FAISS) and Groq LLaMA models for low-latency, context-grounded document Q&A.",
    tech: ["Python", "Flask", "LangChain", "FAISS", "Groq API"],
    github: "https://github.com/Parul077/QueryPDF-AI-Powered-Document-Assistant",
    image: queryPdfImg,
  },
  {
    number: "05",
    category: "COMPUTER VISION",
    status: "Completed",
    title: "Solar Panel Defect Classification",
    description:
      "An EfficientNet deep learning model trained to classify solar panel anomalies across 6 defect categories, featuring real-time Streamlit inference and Plotly confidence distributions.",
    tech: ["Python", "TensorFlow", "EfficientNet", "Streamlit", "Plotly"],
    github: "https://github.com/Parul077/Solar_panel_defect_classifier",
    image: solarImg,
  },
  {
    number: "06",
    category: "AI CAREER ASSISTANT",
    status: "Live",
    title: "AI Career Coach",
    description:
      "A RAG-powered assistant that semantically analyzes resumes, identifies candidate skill gaps against target benchmarks, and generates personalized career roadmaps.",
    tech: ["Python", "Flask", "LangChain", "FAISS", "Groq API"],
    github: "https://github.com/Parul077/AI-Career-Coach",
    live: "https://ai-career-coach-1-5e5m.onrender.com/",
    image: aiCoachImg,
  },
];

const getStatusBadgeStyle = (status) => {
  switch (status.toLowerCase()) {
    case "live":
      return "bg-green-500/15 text-green-400 border-green-500/30";
    case "completed":
      return "bg-blue-500/15 text-blue-400 border-blue-500/30";
    default:
      return "bg-gray-500/15 text-gray-400 border-gray-500/30";
  }
};

const FeaturedProjects = () => {
  const [activeSandbox, setActiveSandbox] = useState(null);

  return (
    <section
      id="featured-projects"
      className="bg-[#07070f] px-6 md:px-12 py-24 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-xs font-mono text-[#64ffda] uppercase tracking-wider font-semibold">
            04. Production Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display mt-1">
            Featured Projects
          </h2>
          <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-[#64ffda] to-purple-500 mt-3" />
        </motion.div>

        {/* 2-Column Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="flex flex-col justify-between bg-[#0d0d1a] border border-white/10 rounded-2xl overflow-hidden p-6 transition-all duration-300 hover:border-[#64ffda]/30 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div>
                {/* Visual Banner */}
                <div className="group overflow-hidden rounded-xl border border-white/10 bg-[#070712] mb-4 h-48 w-full">
                  {project.isJevEngine ? (
                    <JevEngineBanner />
                  ) : project.isSyntheticData ? (
                    <SyntheticDataBanner />
                  ) : project.isGlitchRoom ? (
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
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-[11px] font-mono font-semibold tracking-wider text-[#64ffda]">
                    #{project.number} · {project.category}
                  </span>
                  <span
                    className={`text-[10px] px-2.5 py-0.5 rounded-full font-mono border ${getStatusBadgeStyle(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white font-display mb-2">
                  {project.title}
                </h3>

                {/* Clean, Simple Description */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Card Footer: Tech tags + Action buttons */}
              <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
                {/* Clean Tech Pills (Max 5) */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2.5 py-0.5 rounded-md bg-[#16172e] border border-white/10 text-gray-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Direct Action Buttons */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setActiveSandbox(project)}
                    className="flex items-center gap-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 text-xs font-mono font-semibold text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all cursor-pointer"
                  >
                    <Zap size={13} className="text-emerald-400 animate-pulse" />
                    <span>Try Sandbox</span>
                  </button>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-mono text-white hover:border-[#64ffda] hover:text-[#64ffda] transition-all"
                    >
                      <FaGithub size={13} />
                      <span>Code</span>
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 rounded-xl bg-[#64ffda] px-3.5 py-1.5 text-xs font-mono font-bold text-[#07070f] hover:bg-[#52e0c4] transition-all"
                    >
                      <ExternalLink size={13} />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Sandbox Modal */}
        {activeSandbox && (
          <ProjectSandboxModal
            project={activeSandbox}
            onClose={() => setActiveSandbox(null)}
          />
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;
