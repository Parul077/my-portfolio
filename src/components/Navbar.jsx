import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

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
      className="fixed top-0 w-full z-50 bg-[#07070f]/80 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3 shrink-0 mr-4 group"
        >
          <div
            className="w-10 h-10 rounded-lg
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

          <div className="hidden sm:block">
            <h2 className="text-[#ccd6f6] font-semibold leading-none text-base">
              Parul Singh
            </h2>
            <p className="text-xs text-gray-400 mt-1 font-mono">AI • ML Engineer</p>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => {
            const section = item.name.toLowerCase();

            return (
              <a
                key={item.id}
                href={`#${section}`}
                className={`relative text-sm font-medium transition duration-300 font-mono ${
                  active === section
                    ? "text-[#64ffda]"
                    : "text-gray-300 hover:text-[#64ffda]"
                }`}
              >
                <span className="text-[#64ffda] mr-1">{item.id}.</span>
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

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden text-[#64ffda] p-2 rounded-lg bg-[#0d0d1a] border border-white/10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
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
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
