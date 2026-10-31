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
    <section id="achievements" className="bg-[#0a192f] px-8 md:px-24 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-[#ccd6f6]"
        >
          Achievements
        </motion.h2>

        <div className="w-10 h-[2.5px] rounded-full bg-[#64ffda] mt-2 mb-10"></div>

        {/* 2-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="bg-[#112240]/60 border border-[#233554] rounded-xl p-5 transition-all duration-300 hover:border-[#64ffda]/30 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Horizontal Header (Icon + Title Side-by-Side) */}
                <div className="flex items-start gap-3.5 mb-2.5">
                  <div className="text-[#64ffda] p-2.5 rounded-lg bg-[#64ffda]/10 border border-[#64ffda]/20 shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#ccd6f6] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[#64ffda] text-xs font-medium mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed mt-3">
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