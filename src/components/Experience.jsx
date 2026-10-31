import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    year: "Aug 2026 - Present",
    title: "Artificial Intelligence & Machine Learning Intern",
    company: "FAC Infosec Private Limited (Remote)",
    description:
      "Developing a deterministic runtime for autonomous software-engineering agents with multi-stage lifecycle orchestration, two-tier gating, and worktree isolation.",
    points: [
      "Collaborating in a team of three to develop a LangGraph-based runtime for autonomous software-engineering tasks, with structured investigation, planning, implementation, and verification.",
      "Building two-tier validation using AST/Python syntax checks, file-scope enforcement, repository tests, and an LLM-based semantic gate before accepting code changes.",
      "Implementing isolated Git worktrees, bounded retry/strike limits, SQLite checkpointing, and failure analysis to improve recovery and execution traceability.",
    ],
    tech: [
      "LangGraph",
      "Python",
      "Git Worktrees",
      "AST Analysis",
      "SQLite",
      "Ollama",
      "Gemini API",
      "Pytest",
    ],
  },
  {
    year: "Jan 2026 – Present",
    title: "Founder & Developer",
    company: "The Glitch Room",
    link: "https://joinglitchroom.com/",
    description:
      "Engineered an interactive, gamified developer learning platform with real-world coding challenges and automated AI evaluation.",
    points: [
      "Developed a gamified learning platform with AI-generated challenges and automated feedback.",
      "Built interactive dashboards, leaderboards, and collaborative Creator Rooms using React and Supabase.",
      "Added AI-assisted evaluation and progress workflows to support hands-on practice and learning consistency.",
    ],
    tech: ["React", "Tailwind CSS", "Framer Motion", "Supabase", "Generative AI"],
  },
  {
    year: "May 2024 - July 2024",
    title: "Research Intern · SURGE Program",
    company: "Indian Institute of Technology, Kanpur",
    description:
      "Engineered the ERC Tracker platform to automate monitoring and structured management of Electricity Regulatory Commission documentation.",
    points: [
      "Developed a Django-based automation system integrating regulatory sources, eliminating manual document search and saving approximately 20 hours per week.",
      "Built web-scraping pipelines to fetch, process, and store regulatory documents from 6+ Electricity Regulatory Commission websites.",
      "Designed automated update/comparison workflows and collaborated with a team to deliver a practical regulatory tracking solution.",
    ],
    tech: ["Python", "Django", "MySQL", "Web Scraping", "Automation"],
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