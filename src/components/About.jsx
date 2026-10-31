import { motion } from "framer-motion";
import { Target, BookOpen, Rocket, CheckCircle2 } from "lucide-react";

const quickFacts = [
  { label: "Education", value: "Computer Science Engineering" },
  { label: "Location", value: "India" },
  { label: "Open To", value: "AI/ML • Data Science (Fresher Roles)" },
];

const learningAreas = [
  "ML Modeling & Hyperparameter Tuning",
  "Synthetic Data Backtesting",
  "Financial, Healthcare & Manufacturing ML",
  "LLMs",
];

const About = () => {
  return (
    <section id="about" className="bg-[#0a192f] px-8 md:px-24 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-[#ccd6f6]"
        >
          About Me
        </motion.h2>

        <div className="w-10 h-[2.5px] rounded-full bg-[#64ffda] mt-2 mb-10"></div>

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
              <h3 className="text-xl font-bold text-[#64ffda] mb-3">
                Hi, I'm Parul Singh.
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Computer Science graduate passionate about Artificial
                Intelligence, Machine Learning, Deep Learning, and backend
                engineering. I enjoy building intelligent applications that
                solve real-world problems using modern AI technologies.
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-4">
                Having built and launched{" "}
                <a
                  href="https://joinglitchroom.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#64ffda] font-medium hover:underline"
                >
                  Glitch Room
                </a>
                , I work as a freelance Software Developer while writing
                technical articles on AI and Machine Learning and continuously
                exploring emerging technologies through hands-on projects.
              </p>
            </div>

            {/* Quick Facts Grid */}
            <div className="pt-2">
              <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-4">
                Quick Facts
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="bg-[#112240]/60 border border-[#233554] rounded-xl p-3.5 transition-all duration-300 hover:border-[#64ffda]/30"
                  >
                    <p className="text-[11px] text-[#64ffda] font-medium uppercase tracking-wider">
                      {fact.label}
                    </p>
                    <p className="text-xs text-[#ccd6f6] font-semibold mt-1 leading-snug">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Focus, Currently Learning & Goal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Currently Learning Card */}
            <div className="bg-[#112240]/60 border border-[#233554] rounded-xl p-5 transition-all duration-300 hover:border-[#64ffda]/30">
              <h3 className="text-[#64ffda] font-semibold text-base flex items-center gap-2">
                <BookOpen size={18} />
                <span>Currently Learning & Building</span>
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mt-2.5">
                I am learning and building ML models, doing hyperparameter tuning,
                and performing backtesting using synthetic datasets from scratch for
                the financial, healthcare, and manufacturing sectors, as well as LLMs.
              </p>
              <div className="flex flex-wrap gap-2 mt-3.5">
                {learningAreas.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 text-xs text-gray-200 bg-[#0a192f] border border-[#233554] px-2.5 py-1 rounded-lg"
                  >
                    <CheckCircle2 size={13} className="text-[#64ffda]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Career Goal Card */}
            <div className="bg-[#112240]/60 border border-[#233554] rounded-xl p-5 transition-all duration-300 hover:border-[#64ffda]/30">
              <h3 className="text-[#64ffda] font-semibold text-base flex items-center gap-2">
                <Rocket size={18} />
                <span>Career Goal</span>
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mt-2">
                Seeking entry-level / fresher roles in AI/ML and Data Science to
                build production-grade intelligent applications and scalable
                software that solve meaningful real-world problems.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;