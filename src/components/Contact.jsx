import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi";

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
    title: "GitHub",
    value: "github.com/Parul077",
    icon: <FiGithub size={22} />,
    link: "https://github.com/Parul077",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0a192f] px-6 md:px-20 py-24">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#ccd6f6]"
        >
          Let's Build Something Together
        </motion.h2>

        <div className="w-16 h-[3px] rounded-full bg-[#64ffda] mt-4 mx-auto mb-6"></div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-gray-400 leading-8"
        >
          I'm currently seeking opportunities in Artificial Intelligence,
          Machine Learning, and Software Development. Whether it's an
          internship, full-time role, freelance project, or simply a
          conversation about technology, I'd be happy to connect.
        </motion.p>

        {/* Contact Cards */}

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {contacts.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.link}
              target={item.title !== "Email" ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#112240] border border-[#233554] rounded-xl p-6 hover:border-[#64ffda]/40 hover:-translate-y-1 transition"
            >
              <div className="flex justify-center text-[#64ffda] mb-4">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-[#ccd6f6]">
                {item.title}
              </h3>

              <p className="text-sm text-gray-400 mt-2 break-all">
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <p className="text-[#64ffda] font-semibold">
            Open to Internships • Full-Time • Freelance
          </p>

          <a
            href="mailto:parulsingh1074@gmail.com"
            className="inline-flex items-center gap-2 mt-6 px-8 py-3 rounded-lg border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 transition"
          >
            Send an Email
            <FiArrowRight />
          </a>
        </motion.div>

        {/* Footer */}

        <div className="mt-20 border-t border-[#233554] pt-8">
          <p className="text-sm text-gray-500">
            Designed & Built with <span className="text-[#64ffda]">❤</span> by{" "}
            <span className="text-[#ccd6f6] font-medium">Parul Singh</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
