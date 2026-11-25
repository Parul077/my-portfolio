import React, { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, FileCode, ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import ConstellationGraph from "./ConstellationGraph";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("yaml"); // 'yaml' or 'telemetry'

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#07070f] flex items-center pt-24 pb-16 px-6 sm:px-10 lg:px-16 overflow-hidden cosmic-grid"
    >
      {/* Ambient Cosmic Radial Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Headline, Bio, Interactive Spec Card & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Status Pill with Pulsing Signal */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0d0d1a] border border-[#64ffda]/30 self-start mb-5 shadow-[0_0_15px_rgba(100,255,218,0.1)]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-gray-300">
              AI/ML Engineer · Autonomous Agent Runtimes · Data Science
            </span>
          </motion.div>

          {/* Giant Dual-Layer Editorial Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="select-none leading-none mb-3"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white font-display uppercase">
              Parul
            </h1>
            <div className="flex items-baseline">
              <span className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-stroke font-display uppercase">
                Singh
              </span>
              <span className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-[#64ffda] animate-pulse ml-1">
                .
              </span>
            </div>
          </motion.div>

          {/* Crisp Point-of-View Pitch (Concise, 1 sentence) */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans mb-5"
          >
            Engineering <span className="text-[#64ffda] font-medium">deterministic AI agent runtimes</span>,{" "}
            <span className="text-white font-medium">synthetic data pipelines</span>, and production machine learning models that ship.
          </motion.p>

          {/* Interactive Engineering Spec / Telemetry Card (Concise) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="mb-7 rounded-xl bg-[#0c0d1c] border border-white/10 overflow-hidden shadow-2xl max-w-2xl"
          >
            {/* Terminal Tab Bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#090a15] border-b border-white/10 text-xs font-mono">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab("yaml")}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    activeTab === "yaml"
                      ? "bg-[#181930] text-[#64ffda] border border-[#64ffda]/30"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  <FileCode size={13} />
                  <span>engineer_spec.yaml</span>
                </button>

                <button
                  onClick={() => setActiveTab("telemetry")}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    activeTab === "telemetry"
                      ? "bg-[#181930] text-amber-400 border border-amber-400/30"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  <Terminal size={13} />
                  <span>runtime_telemetry.log</span>
                </button>
              </div>

              <span className="text-[10px] text-gray-500 hidden sm:inline">
                interactive // click tab
              </span>
            </div>

            {/* Terminal Body */}
            <div className="p-4 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto text-gray-300 bg-[#070712]/90">
              {activeTab === "yaml" ? (
                <div className="space-y-1">
                  <p className="text-gray-500"># engineer_spec.yaml</p>
                  <p>
                    <span className="text-indigo-400">profile</span>:{" "}
                    <span className="text-white font-semibold">"Parul Singh"</span>
                  </p>
                  <p>
                    <span className="text-indigo-400">architecture</span>:{" "}
                    <span className="text-[#64ffda]">[Deterministic Agents, Synthetic Pipelines, LLMs]</span>
                  </p>
                  <p>
                    <span className="text-indigo-400">core_stack</span>:{" "}
                    <span className="text-emerald-300">[Python, LangGraph, Pytest, SQL, Streamlit]</span>
                  </p>
                  <p>
                    <span className="text-indigo-400">status</span>:{" "}
                    <span className="text-amber-400">[ready_for_production, open_to_fresher_roles]</span>
                  </p>
                </div>
              ) : (
                <div className="space-y-1">
                  <p className="text-gray-400">
                    <span className="text-[#64ffda]">parul@runtime:~$</span> init_engineer --status
                  </p>
                  <p className="text-emerald-400">
                    ✔ [AST GATES] Mechanical checks & Git worktree isolation active.
                  </p>
                  <p className="text-cyan-300">
                    ✔ [SYNTH PIPELINE] 12-rule statistical engine verified (0 leakage).
                  </p>
                  <p className="text-amber-300">
                    ▶ [DEPLOY] Target: AI/ML Engineer · Data Science (Ready to Ship).
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Action CTAs & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            {/* Primary Glow CTA */}
            <a
              href="#featured-projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-[#64ffda] text-[#07070f] font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(100,255,218,0.25)] hover:shadow-[0_0_25px_rgba(167,139,250,0.4)] transition-all duration-300 hover:scale-[1.02]"
            >
              <span>Explore Featured Sandboxes ✦</span>
              <ArrowRight size={15} />
            </a>

            {/* Download Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl border border-white/20 text-gray-200 text-xs sm:text-sm font-medium hover:border-[#64ffda] hover:text-[#64ffda] hover:bg-[#64ffda]/5 transition-all duration-200"
            >
              <span>Download Resume</span>
              <ExternalLink size={14} />
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 ml-0 sm:ml-2">
              <a
                href="https://github.com/Parul077"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-[#0d0d1a] border border-white/10 text-gray-400 hover:text-white hover:border-[#64ffda]/40 transition-colors"
                title="GitHub"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/parulsingh1074/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-[#0d0d1a] border border-white/10 text-gray-400 hover:text-white hover:border-[#64ffda]/40 transition-colors"
                title="LinkedIn"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href="https://medium.com/@parulsingh1074"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-[#0d0d1a] border border-white/10 text-gray-400 hover:text-white hover:border-[#64ffda]/40 transition-colors"
                title="Medium (154 Articles)"
              >
                <FaMedium size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Interactive Constellation Graph */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full bg-[#0d0d1a]/80 border border-white/10 rounded-2xl p-2 relative shadow-2xl"
          >
            <ConstellationGraph />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
