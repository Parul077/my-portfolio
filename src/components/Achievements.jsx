import { motion } from "framer-motion";
import {
  GraduationCap,
  Cloud,
  BookOpen,
  Rocket,
  Lightbulb,
  Medal,
} from "lucide-react";

const achievements = [
  {
    icon: <GraduationCap size={20} />,
    title: "SURGE Research Program",
    highlight: "IIT Kanpur · Stipend Recipient",
    description:
      "Awarded institute-funded stipend at IIT Kanpur for automated regulatory scraping & tracking systems.",
  },
  {
    icon: <Rocket size={20} />,
    title: "Unstop Playstorm & PitchFest",
    highlight: "Round 1 Selection",
    description:
      "Presented The Glitch Room at Playstorm & Startup PitchFest 1.0; selected for Round 1.",
  },
  {
    icon: <BookOpen size={20} />,
    title: "154+ Technical Articles",
    highlight: "Medium Contributor",
    description:
      "Published 154+ educational deep dives on AI, ML, NLP, and Deep Learning architectures.",
  },
  {
    icon: <Cloud size={20} />,
    title: "Google Cloud Arcade",
    highlight: "Novice Milestone",
    description:
      "Completed hands-on cloud infrastructure challenges across Google Cloud Platform.",
  },
  {
    icon: <Lightbulb size={20} />,
    title: "Product Hackathons",
    highlight: "Competitive Problem Solving",
    description:
      "Active participant in technical challenges, rapid prototyping, and system design.",
  },
  {
    icon: <Medal size={20} />,
    title: "Academic Excellence",
    highlight: "CPI: 8.62 / 10",
    description:
      "Maintained strong academic performance throughout B.Tech Computer Science Engineering.",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="bg-[#07070f] px-6 sm:px-12 md:px-24 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="text-xs font-mono text-[#64ffda] uppercase tracking-wider font-semibold">
            06. Key Milestones
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display mt-1">
            Achievements
          </h2>
          <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-[#64ffda] to-purple-500 mt-3" />
        </motion.div>

        {/* Clean, Simple 3-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="bg-[#0d0d1a] border border-white/10 rounded-xl p-5 hover:border-[#64ffda]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[#64ffda] p-2 rounded-lg bg-[#16172e] border border-white/10">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-mono text-[#64ffda] bg-[#16172e] px-2 py-0.5 rounded border border-white/5">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white font-display">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-xs leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
