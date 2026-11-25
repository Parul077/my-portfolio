import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    year: "11 Nov 2026 – Present",
    title: "Data Analyst Intern",
    company: "Bluestock Fintech",
    location: "Remote",
    badge: "Current Role",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    description:
      "Conducting data handling, exploratory data analysis, and dashboard reporting as part of the data analytics team.",
    points: [
      "Revised foundational concepts in Excel, SQL, and Python for data handling and analysis as part of internship onboarding.",
      "Learned and practiced data cleaning, exploratory data analysis (EDA), and data visualization; gained introductory exposure to Power BI dashboards and reporting.",
    ],
    tech: [
      "Excel",
      "SQL",
      "Python",
      "Power BI",
      "Data Cleaning",
      "EDA",
      "Data Visualization",
      "Dashboards",
    ],
  },
  {
    year: "Aug 2026 – 10 Nov 2026",
    title: "Artificial Intelligence & Machine Learning Intern",
    company: "FAC Infosec Private Limited",
    location: "Remote",
    badge: "Completed",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    description:
      "Researched and prototyped error mitigation frameworks and trajectory verification for autonomous multi-step AI agent workflows.",
    points: [
      "Worked in a team on research and prototyping focused on error propagation and mitigation in long-horizon AI agent workflows.",
      "Contributed to a prototype for error detection, root-cause identification, corrective re-execution, and verification of agent trajectories.",
      "Conducted experiments across different execution horizons and error positions; developed an error-pattern library and experimental analysis pipeline to evaluate AI agent reliability.",
    ],
    tech: [
      "Python",
      "LangGraph",
      "AI Agents",
      "Error Mitigation",
      "Trajectory Verification",
      "AST Analysis",
      "Pytest",
    ],
  },
  {
    year: "May 2024 – Jul 2024",
    title: "Research Intern · SURGE Program",
    company: "Indian Institute of Technology, Kanpur",
    location: "IITK Campus, Kanpur",
    badge: "Institute-Funded",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    description:
      "Selected for the competitive institute-funded SURGE program to develop automated data-scraping and regulatory tracking platforms.",
    points: [
      "Developed a Django-based automation system integrating regulatory sources, eliminating manual document search and saving approximately 20 hours per week.",
      "Built web-scraping pipelines to fetch, process, and store regulatory documents from 6+ Electricity Regulatory Commission websites.",
      "Designed automated update/comparison workflows and collaborated with a team to deliver a practical regulatory tracking solution.",
    ],
    tech: [
      "Python",
      "Django",
      "MySQL",
      "Web Scraping",
      "Automation",
      "ETL Pipelines",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-[#07070f] px-6 sm:px-12 md:px-24 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-xs font-mono text-[#64ffda] uppercase tracking-wider font-semibold">
            02. Career Timeline
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display mt-1">
            Work Experience
          </h2>
          <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-[#64ffda] to-purple-500 mt-3" />
        </motion.div>

        {/* Timeline Stream */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-8 sm:pl-10"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[9px] top-2 w-[18px] h-[18px] rounded-full bg-[#07070f] border-2 border-[#64ffda] shadow-[0_0_10px_#64ffda] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#64ffda] animate-ping" />
              </div>

              {/* Experience Card */}
              <div className="bg-[#0d0d1a] border border-white/10 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:border-[#64ffda]/30 hover:shadow-2xl hover:-translate-y-0.5">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      {exp.title}
                    </h3>
                    <p className="text-[#64ffda] text-sm sm:text-base font-semibold mt-0.5 flex items-center gap-2">
                      <Briefcase size={15} />
                      <span>{exp.company}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto flex-wrap">
                    <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${exp.badgeColor}`}>
                      {exp.badge}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-400 font-mono bg-[#16172e] border border-white/10 px-3 py-1 rounded-full">
                      <Calendar size={12} />
                      <span>{exp.year}</span>
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-6">
                  {exp.points.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex items-start gap-2.5 text-gray-300 text-xs sm:text-sm leading-relaxed"
                    >
                      <span className="text-[#64ffda] mt-1 shrink-0 font-bold">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#16172e] border border-white/10 text-gray-300"
                    >
                      {t}
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
