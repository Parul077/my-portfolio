import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    year: "Aug 2026 - Present",
    title: "Artificial Intelligence & Machine Learning Intern",
    company: "FAC Infosec Private Limited",
    description:
      "Worked on the ERC Tracker platform to automate monitoring of Electricity Regulatory Commission websites and streamline regulatory document management.",
    points: [
      "Researching long-horizon error propagation and mitigation in AI agents, focusing on error detection and recovery.",
      "Building a prototype for error detection, root-cause identification, corrective re-execution, and trajectory verification.",
      "Integrated MySQL for structured document storage and retrieval.",
      "Conducting experiments across different horizons and error positions to evaluate baseline and mitigation performance.",
    ],
    tech: [
      "AI Agents",
      "Error Detection & Recovery",
      "Root Cause Analysis",
      "Experimental Analysis",
      "AI/ML Model Evaluation",
    ],
  },
  {
    year: "July 2026 – Aug 2026",
    title: "Freelance Software Developer",
    company: "Self-Employed",
    description:
      "Developing responsive and scalable web applications for clients, focusing on modern frontend development, backend architecture, authentication systems, and maintainable software solutions.",
    points: [
      "Develop responsive web interfaces using HTML5, CSS3, JavaScript (ES6+) and Tailwind CSS.",
      "Build modular backend applications using Python and Flask Blueprint Architecture.",
      "Implement user authentication and session management with Flask-Login.",
      "Design relational databases and optimize data operations using SQLAlchemy and SQL.",
      "Develop dynamic server-rendered interfaces using Jinja2 and Python Markdown.",
      "Manage version control and collaborative workflows using Git and GitHub.",
    ],
    tech: [
      "Python",
      "Flask",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "SQLAlchemy",
      "SQL",
      "Jinja2",
      "Git",
      "GitHub",
    ],
  },
  {
    year: "May 2024 - July 2024 ",
    title: "Research Intern",
    company: "SURGE Research Internship, Indian Institute of Technology Kanpur",
    description:
      "Worked on the ERC Tracker platform to automate monitoring of Electricity Regulatory Commission websites and streamline regulatory document management.",
    points: [
      "Developed features for a Django-based web application.",
      "Automated document collection from multiple ERC websites.",
      "Integrated MySQL for structured document storage and retrieval.",
      "Reduced manual effort through automated monitoring.",
      "Collaborated in a research-driven software development environment.",
    ],
    tech: ["Python", "Django", "MySQL", "Web Scraping"],
  },
  {
    year: "Jan 2026 – Present",
    title: "Founder & Developer",
    company: "Glitch Room",
    link: "https://joinglitchroom.com/",
    description:
      "Leading the design and development of an interactive learning platform focused on building practical technical skills through modern web technologies and scalable software engineering.",
    points: [
      "Designing and developing the platform architecture from the ground up.",
      "Building responsive and intuitive user interfaces with modern frontend technologies.",
      "Developing scalable backend systems and database architecture.",
      "Implementing secure authentication and efficient data management.",
      "Continuously improving performance, usability, and overall user experience.",
    ],
    tech: ["React", "Tailwind CSS", "Framer Motion", "Supabase", "JavaScript"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-[#0a192f] px-6 md:px-20 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#ccd6f6]"
        >
          Experience
        </motion.h2>

        <div className="w-16 h-[3px] rounded-full bg-[#64ffda] mt-4 mb-16"></div>

        <div className="relative border-l border-[#233554] ml-3">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative mb-16 pl-10"
            >
              {/* Timeline Dot */}

              <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-[#64ffda] border-4 border-[#0a192f]" />

              {/* Year */}

              <p className="text-[#64ffda] text-sm font-medium mb-2">
                {exp.year}
              </p>

              {/* Card */}

              <div className="bg-[#112240]/80 border border-[#233554] rounded-2xl p-6 transition-all duration-300 hover:border-[#64ffda]/40 hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-[#ccd6f6]">
                  {exp.title}
                </h3>

                <p className="text-[#64ffda] mt-1 mb-4 flex items-center gap-2">
                  {exp.link ? (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline inline-flex items-center gap-1.5"
                    >
                      <span>{exp.company}</span>
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    exp.company
                  )}
                </p>

                <p className="text-gray-400 leading-7 text-[15px]">
                  {exp.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start text-gray-400 text-[15px]"
                    >
                      <span className="text-[#64ffda] mr-3 mt-1">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}

                <div className="flex flex-wrap gap-2 mt-6">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-[#0a192f] border border-[#233554] text-[#64ffda] text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;