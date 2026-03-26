import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-6 md:px-20 py-24 bg-[#0a192f] text-center"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold text-[#ccd6f6]"
      >
        <span className="text-[#64ffda]"></span> Get In Touch
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 mt-6 max-w-xl mx-auto"
      >
        I’m currently open to opportunities in machine learning, AI, and web
        development. If you have a project, opportunity, or just want to
        connect, feel free to reach out!
      </motion.p>

      {/* Email Button */}
      <motion.a
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        href="mailto:parulsingh1074@gmail.com"
        className="inline-block mt-8 border border-[#64ffda] text-[#64ffda] px-8 py-3 rounded hover:bg-[#64ffda]/10 transition"
      >
        Say Hello 👋
      </motion.a>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex justify-center gap-6 mt-10 text-xl text-gray-400"
      >
        <a
          href="https://github.com/Parul077"
          target="_blank"
          className="hover:text-[#64ffda] transition"
        >
          <FiGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/parulsingh1074/"
          target="_blank"
          className="hover:text-[#64ffda] transition"
        >
          <FiLinkedin />
        </a>

        <a
          href="mailto:parulsingh1074@gmail.com"
          className="hover:text-[#64ffda] transition"
        >
          <FiMail />
        </a>
      </motion.div>
      <p className="text-gray-500 text-sm mt-12">
        Designed & Built by{" "}
        <a
          href="https://github.com/Parul077"
          target="_blank"
          className="text-[#64ffda] hover:underline"
        >
          Parul Singh
        </a>{" "}
        💻
      </p>
    </section>
  );
};

export default Contact;
