import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Cpu, Database } from "lucide-react";

const quickFacts = [
  { label: "Education", value: "B.Tech CSE (CPI: 8.62 / 10)" },
  { label: "Current Role", value: "Data Analyst Intern @ Bluestock" },
  { label: "Target Roles", value: "AI/ML • Data Science • Python Dev" },
];

const pillars = [
  {
    icon: <Cpu size={18} className="text-[#64ffda]" />,
    title: "Deterministic Agent Runtimes",
    desc: "Mechanical AST syntax checks & Git worktree isolation to safely gate untrusted code-generation agents.",
  },
  {
    icon: <Database size={18} className="text-emerald-400" />,
    title: "Statistical Data Pipelines",
    desc: "Specification-driven synthetic datasets with automated 12-rule statistical validation and bounded repair.",
  },
  {
    icon: <ShieldCheck size={18} className="text-purple-400" />,
    title: "End-to-End System Delivery",
    desc: "From web-scraping ETL and RAG vector search to full-stack platforms like The Glitch Room.",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-[#07070f] px-6 sm:px-12 md:px-24 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="text-xs font-mono text-[#64ffda] uppercase tracking-wider font-semibold">
            01. Background & Profile
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display mt-1">
            About Me
          </h2>
          <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-[#64ffda] to-purple-500 mt-3" />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-start">
          {/* Left Column: Short Bio & Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-3 font-display">
                Hi, I'm <span className="text-[#64ffda]">Parul Singh</span>.
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Computer Science graduate with internship experience spanning data analytics at{" "}
                <span className="text-white font-medium">Bluestock Fintech</span>, AI agent error
                mitigation at <span className="text-white font-medium">FAC Infosec</span>, and
                regulatory automation at <span className="text-white font-medium">IIT Kanpur</span>.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mt-3">
                I focus on engineering reliable systems—bridging raw ML models with deterministic
                scaffolding, statistical validation, and production-ready automated workflows.
              </p>
            </div>

            {/* Quick Facts Grid */}
            <div className="pt-2">
              <h4 className="text-xs uppercase tracking-wider text-gray-400 font-mono font-semibold mb-3">
                Quick Facts
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="bg-[#0d0d1a] border border-white/10 rounded-xl p-3.5 transition-all duration-300 hover:border-[#64ffda]/40"
                  >
                    <p className="text-[11px] text-[#64ffda] font-mono font-medium uppercase tracking-wider">
                      {fact.label}
                    </p>
                    <p className="text-xs text-white font-semibold mt-1 leading-snug">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Engineering Philosophy Card (Concise, Non-Repeating) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0d0d1a] border border-white/10 rounded-2xl p-6 shadow-xl space-y-4"
          >
            <h3 className="text-white font-bold text-base font-display flex items-center justify-between pb-3 border-b border-white/5">
              <span>Core Engineering Principles</span>
              <span className="text-[10px] font-mono text-[#64ffda] bg-[#16172e] px-2 py-0.5 rounded border border-white/5">
                Production Mindset
              </span>
            </h3>

            <div className="space-y-3.5">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#16172e] border border-white/10 shrink-0 mt-0.5">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white font-display">
                      {pillar.title}
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed mt-0.5">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
              {["LangGraph", "Synthetic Data", "AST Gates", "FAISS RAG", "Pytest"].map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[#16172e] border border-white/10 text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
