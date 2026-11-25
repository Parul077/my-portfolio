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
    subtitle: "IIT Kanpur · Institute-Funded Stipend Recipient",
    description:
      "Selected for IIT Kanpur's prestigious SURGE Program 2024; awarded the competitive Institute-Funded Category (stipend recipient) for automated document scraping and tracking systems.",
  },
  {
    icon: <Rocket size={20} />,
    title: "Unstop Playstorm & PitchFest",
    subtitle: "Presented The Glitch Room • Round 1 Selection",
    description:
      "Presented The Glitch Room at Unstop Playstorm and Buddha Startup PitchFest 1.0; selected for Round 1 of Unstop Playstorm for product vision and gamified learning architecture.",
  },
  {
    icon: <BookOpen size={20} />,
    title: "154+ Technical Blogs",
    subtitle: "AI • ML • Deep Learning • NLP",
    description:
      "Published 154+ educational blogs covering Artificial Intelligence, Machine Learning, Deep Learning, and NLP on Medium to simplify complex engineering concepts.",
  },
  {
    icon: <Cloud size={20} />,
    title: "Google Cloud Arcade",
    subtitle: "Novice Milestone Achiever",
    description:
      "Successfully completed Google Cloud Arcade challenges and achieved the Novice Milestone while gaining hands-on cloud experience.",
  },
  {
    icon: <Lightbulb size={20} />,
    title: "Innovation & Product Challenges",
    subtitle: "Competitive Problem Solving",
    description:
      "Regularly participate in technical and product hackathons, building prototypes and refining problem-solving and systems architecture skills.",
  },
  {
    icon: <Medal size={20} />,
    title: "Academic Excellence",
    subtitle: "CPI: 8.62 / 10 • CS Engineering",
    description:
      "Maintained a strong academic record with a CPI of 8.62/10 throughout the B.Tech Computer Science and Engineering program (2021–2025).",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="bg-[#07070f] px-6 sm:px-12 md:px-24 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-xs font-mono text-[#64ffda] uppercase tracking-wider font-semibold">
            07. Honors & Highlights
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display mt-1">
            Achievements
          </h2>
          <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-[#64ffda] to-purple-500 mt-3" />
        </motion.div>

        {/* 2-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.35 }}
              className="bg-[#0d0d1a] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-[#64ffda]/30 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start gap-3.5 mb-3">
                  <div className="text-[#64ffda] p-2.5 rounded-xl bg-[#16172e] border border-white/10 shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[#64ffda] text-xs font-mono font-medium mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mt-2.5">
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
