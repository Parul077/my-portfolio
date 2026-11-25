import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { Sparkles, ExternalLink } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "01", name: "About" },
    { id: "02", name: "Experience" },
    { id: "03", name: "Skills" },
    { id: "04", name: "Projects" },
    { id: "05", name: "Blogs" },
    { id: "06", name: "Achievements" },
    { id: "07", name: "Contact" },
  ];

  useEffect(() => {
    const sections = [
      "about",
      "experience",
      "skills",
      "projects",
      "blogs",
      "achievements",
      "contact",
    ];

    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const top = element.offsetTop - 120;
          const height = element.offsetHeight;

          if (window.scrollY >= top && window.scrollY < top + height) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-[#07070f]/85 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex justify-between items-center">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3 shrink-0 mr-4 group"
        >
          <div
            className="w-10 h-10 rounded-xl
            border border-[#64ffda]/40
            bg-[#0d0d1a]
            flex items-center justify-center
            text-[#64ffda]
            font-mono font-bold text-base
            shadow-[0_0_12px_rgba(100,255,218,0.15)]
            group-hover:border-[#64ffda] transition-all duration-300"
          >
            PS
          </div>

          <div>
            <h2 className="text-white font-bold tracking-tight text-sm sm:text-base font-display">
              PARUL SINGH
            </h2>
            <p className="text-[10px] font-mono text-[#64ffda]">AI/ML · Data Science</p>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navItems.map((item) => {
            const section = item.name.toLowerCase();

            return (
              <a
                key={item.id}
                href={`#${section}`}
                className={`relative text-xs xl:text-sm font-medium font-mono transition duration-300 ${
                  active === section
                    ? "text-[#64ffda]"
                    : "text-gray-300 hover:text-[#64ffda]"
                }`}
              >
                <span className="text-[#64ffda]/70 mr-1">{item.id}.</span>
                {item.name}

                {active === section && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute -bottom-2 left-0 h-[2px] w-full bg-[#64ffda] rounded-full shadow-[0_0_8px_#64ffda]"
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop Right CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#featured-projects"
            className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0d0d1a] border border-[#64ffda]/30 text-xs font-mono text-[#64ffda] hover:bg-[#64ffda]/10 transition-colors"
          >
            <Sparkles size={13} className="text-[#64ffda] animate-pulse" />
            <span>Sandboxes</span>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg border border-white/20 bg-white/5 text-xs font-mono text-white hover:border-[#64ffda] hover:text-[#64ffda] transition-all"
          >
            <span>Resume</span>
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden text-[#64ffda] p-1.5 rounded-lg bg-[#0d0d1a] border border-white/10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden mx-5 mb-5 rounded-2xl border border-white/10 bg-[#0d0d1a]/95 backdrop-blur-2xl p-6 shadow-2xl"
        >
          <div className="flex flex-col gap-4 font-mono text-sm">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.name.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className={`transition ${
                  active === item.name.toLowerCase()
                    ? "text-[#64ffda] font-bold"
                    : "text-gray-300"
                }`}
              >
                <span className="text-[#64ffda] mr-2">{item.id}.</span>
                {item.name}
              </a>
            ))}

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href="#featured-projects"
                onClick={() => setMenuOpen(false)}
                className="flex justify-center items-center gap-2 rounded-xl bg-[#16172e] border border-[#64ffda]/40 py-2.5 text-[#64ffda] text-xs font-bold"
              >
                <Sparkles size={14} />
                Explore Featured Sandboxes
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 rounded-xl border border-white/20 py-2.5 text-white hover:border-[#64ffda] text-xs font-medium"
              >
                <FiDownload size={14} />
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
