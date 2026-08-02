import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";

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
      className="fixed top-0 w-full z-50
      bg-[#0a192f]/70
      backdrop-blur-xl
      border-b border-[#233554]"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo - Added shrink-0 and right margin for spacing */}
        <a
          href="#hero"
          className="flex items-center gap-3 shrink-0 mr-4 lg:mr-8"
        >
          <div
            className="w-10 h-10 rounded-lg
            border border-[#64ffda]/40
            bg-[#112240]
            flex items-center justify-center
            text-[#64ffda]
            font-bold text-lg"
          >
            PS
          </div>

          <div className="hidden sm:block">
            <h2 className="text-[#ccd6f6] font-semibold leading-none">
              Parul Singh
            </h2>

            <p className="text-xs text-gray-500 mt-1">AI • ML Engineer</p>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navItems.map((item) => {
            const section = item.name.toLowerCase();

            return (
              <a
                key={item.id}
                href={`#${section}`}
                className={`relative text-sm xl:text-lg font-medium transition duration-300 ${
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
                    className="absolute -bottom-2 left-0 h-[2px] w-full bg-[#64ffda] rounded-full"
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden text-[#64ffda]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden mx-5 mb-5
          rounded-xl
          border border-[#233554]
          bg-[#112240]
          p-5"
        >
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.name.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className={`transition ${
                  active === item.name.toLowerCase()
                    ? "text-[#64ffda]"
                    : "text-gray-300"
                }`}
              >
                <span className="text-[#64ffda] mr-2">{item.id}.</span>

                {item.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2
              mt-2
              rounded-lg
              border border-[#64ffda]
              py-3
              text-[#64ffda]
              hover:bg-[#64ffda]/10
              transition"
            >
              <FiDownload />
              Download Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
