import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi";
import { FaMedium } from "react-icons/fa";

const contacts = [
  {
    title: "Email",
    value: "parulsingh1074@gmail.com",
    icon: <FiMail size={22} />,
    link: "mailto:parulsingh1074@gmail.com",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/parulsingh1074",
    icon: <FiLinkedin size={22} />,
    link: "https://www.linkedin.com/in/parulsingh1074/",
  },
  {
    title: "Medium",
    value: "medium.com/@parulsingh1074",
    icon: <FaMedium size={22} />,
    link: "https://medium.com/@parulsingh1074",
  },
  {
    title: "GitHub",
    value: "github.com/Parul077",
    icon: <FiGithub size={22} />,
    link: "https://github.com/Parul077",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="bg-[#07070f] px-6 sm:px-12 md:px-24 py-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-xs font-mono text-[#64ffda] uppercase tracking-wider font-semibold">
            08. What's Next?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-display mt-2">
            Let's Build Something Together
          </h2>
          <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-[#64ffda] to-purple-500 mt-4 mx-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-gray-300 text-sm sm:text-base leading-relaxed"
        >
          I'm currently seeking entry-level / fresher opportunities in Artificial Intelligence,
          Machine Learning, Data Engineering, and Data Science. Whether it's a full-time role,
          an internship, or simply a conversation about modern AI architectures, I'd love to
          connect.
        </motion.p>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {contacts.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.link}
              target={item.title !== "Email" ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-[#0d0d1a] border border-white/10 rounded-2xl p-6 hover:border-[#64ffda]/40 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex flex-col items-center group"
            >
              <div className="p-3 rounded-xl bg-[#16172e] border border-white/10 text-[#64ffda] mb-3 group-hover:scale-110 group-hover:border-[#64ffda]/30 transition-all">
                {item.icon}
              </div>

              <h3 className="text-base font-bold text-white font-display">
                {item.title}
              </h3>

              <p className="text-xs text-gray-400 font-mono mt-1 break-all">
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <a
            href="mailto:parulsingh1074@gmail.com"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-[#64ffda] text-[#07070f] font-mono font-bold text-sm shadow-[0_0_20px_rgba(100,255,218,0.25)] hover:scale-[1.02] transition-all duration-200"
          >
            <span>Say Hello / Send an Email</span>
            <FiArrowRight size={16} />
          </a>
        </motion.div>

        {/* Footer */}
        <div className="mt-24 border-t border-white/5 pt-8 text-xs font-mono text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            Designed & Engineered by{" "}
            <span className="text-[#64ffda] font-medium">Parul Singh</span>
          </p>
          <p className="text-gray-400">
            Hand-coded in React & Tailwind. No templates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
