import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 md:px-20 pt-24 overflow-hidden bg-[#0a192f]"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(100,255,218,0.08),transparent_40%)] pointer-events-none"></div>
      <div className="max-w-4xl">
        {/* Small Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#64ffda] text-sm mb-4"
        >
          Hi, my name is
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold text-[#ccd6f6]"
        >
          Parul Singh.
        </motion.h1>

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl md:text-5xl font-bold text-gray-400 mt-2"
        >
          I build intelligent systems & modern web experiences.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 mt-6 max-w-xl"
        >
          I’m a developer focused on building AI-powered applications and
          scalable web solutions. I enjoy turning complex problems into simple,
          beautiful, and intuitive systems.
        </motion.p>

        {/* Button */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          href="#featured-projects"
          className="inline-block mt-8 border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded hover:bg-[#64ffda]/10 transition"
        >
          View My Work
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
