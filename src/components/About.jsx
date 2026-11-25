import { motion } from "framer-motion";
import { Target, BookOpen, Rocket, CheckCircle2 } from "lucide-react";

const quickFacts = [
  { label: "Education", value: "B.Tech CSE (CPI: 8.62 / 10)" },
  { label: "Location", value: "India" },
  { label: "Open To", value: "Python Dev • AI/ML • Data Eng • Data Science • Data Analyst" },
];

const learningAreas = [
  "Synthetic Data Generation",
  "Model Training & Tuning",
  "Backtesting (Finance, Health, Mfg)",
  "Non-Technical Reporting",
  "LLMs & RAG",
];

const About = () => {
  return (
    <section id="about" className="bg-[#07070f] px-6 sm:px-12 md:px-24 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-xs font-mono text-[#64ffda] uppercase tracking-wider font-semibold">
            01. Background & Profile
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display mt-1">
            About Me
          </h2>
          <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-[#64ffda] to-purple-500 mt-3" />
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          {/* Left Column: Short Bio & Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Greeting & Intro Paragraphs */}
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                Hi, I'm <span className="text-[#64ffda]">Parul Singh</span>.
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Computer Science graduate with completed AI/ML and research internships and
                current Data Analyst internship experience. Hands-on experience building
                Python applications, data-processing and synthetic-data pipelines, Django
                automation systems, and LLM/RAG solutions. Skilled in data validation,
                statistical checks, semantic retrieval, model workflows, Python, SQL, and
                exploratory data analysis (EDA).
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-4">
                Experienced in translating specifications into working applications and automated
                workflows. Having designed and shipped platforms like{" "}
                <a
                  href="https://joinglitchroom.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#64ffda] font-medium hover:underline"
                >
                  The Glitch Room
                </a>
                , I also author technical deep dives on Medium, demystifying AI and Machine
                Learning fundamentals for a community of over 150+ articles.
              </p>
            </div>

            {/* Quick Facts Grid */}
            <div className="pt-2">
              <h4 className="text-xs uppercase tracking-wider text-gray-400 font-mono font-semibold mb-4">
                Quick Facts
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="bg-[#0d0d1a] border border-white/10 rounded-xl p-4 transition-all duration-300 hover:border-[#64ffda]/40 hover:-translate-y-0.5"
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

          {/* Right Column: Currently Learning & Career Goal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Currently Learning Card */}
            <div className="bg-[#0d0d1a] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-[#64ffda]/30 shadow-xl">
              <h3 className="text-[#64ffda] font-semibold text-base flex items-center gap-2">
                <BookOpen size={18} />
                <span>Currently Learning & Building</span>
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mt-3">
                I generate synthetic datasets from scratch, train ML models on them, perform
                hyperparameter tuning, execute thorough backtesting across the financial,
                healthcare, and manufacturing sectors, and translate technical metrics into
                actionable non-technical business reports, alongside advancing LLM and agentic
                runtimes.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {learningAreas.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 text-xs text-gray-200 bg-[#16172e] border border-white/10 px-3 py-1.5 rounded-lg font-mono"
                  >
                    <CheckCircle2 size={13} className="text-[#64ffda]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Career Goal Card */}
            <div className="bg-[#0d0d1a] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-purple-400/30 shadow-xl">
              <h3 className="text-purple-400 font-semibold text-base flex items-center gap-2">
                <Rocket size={18} />
                <span>Career Goal</span>
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mt-2.5">
                Seeking Python Developer, AI/ML Engineer, Data Engineer, Data Science, or
                Data Analyst opportunities that value analytical rigor, statistical data
                integrity, and reliable production-grade engineering.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
