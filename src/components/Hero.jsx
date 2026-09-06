import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "AI/ML Projects" },
  { value: "140+", label: "Technical Blogs" },
  { value: "15+", label: "Technologies" },
  { value: "8.62", label: "CGPA" },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center px-8 md:px-24 pt-28 pb-16 overflow-hidden bg-[#0a192f]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(100,255,218,0.06),transparent_40%)] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-[#112240] border border-[#64ffda]/20 rounded-full px-3.5 py-1.5 mb-5"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-[#64ffda] text-xs font-medium">
            Open to AI/ML Full-Time Opportunities
          </span>
        </motion.div>

        {/* Intro Tag */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-[#64ffda] text-xs sm:text-sm font-medium mb-2"
        >
          Hi, my name is
        </motion.p>

        {/* Main Name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#ccd6f6] tracking-tight"
        >
          Parul Singh
        </motion.h1>

        {/* Roles Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-400 mt-2 leading-snug"
        >
          AI Engineer • Machine Learning Engineer • Python Developer
        </motion.h2>

        {/* Description Body */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 mt-4 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed"
        >
          I build intelligent AI applications, Retrieval-Augmented Generation
          (RAG) systems, machine learning solutions, and scalable Python
          backends that solve real-world problems. Passionate about designing
          production-ready AI products with clean architecture and intuitive
          user experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-wrap gap-3.5 mt-6"
        >
          <a
            href="#featured-projects"
            className="px-5 py-2.5 rounded-lg bg-[#64ffda] text-[#0a192f] text-xs sm:text-sm font-semibold hover:bg-[#64ffda]/90 transition-all duration-200"
          >
            Explore Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg border border-[#64ffda] text-[#64ffda] text-xs sm:text-sm font-medium hover:bg-[#64ffda]/10 transition-all duration-200"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Clean Borderless Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 max-w-2xl"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#64ffda]">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
