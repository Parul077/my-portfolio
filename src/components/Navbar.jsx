import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "01", name: "About" },
    { id: "02", name: "Skills" },
    { id: "03", name: "Projects" },
    { id: "04", name: "Blogs" },
    { id: "05", name: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "blogs", "contact"];

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const top = element.offsetTop - 100;
          const height = element.offsetHeight;

          if (window.scrollY >= top && window.scrollY < top + height) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full top-0 z-50 bg-[#0a192f]/80 backdrop-blur-md shadow-md"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-[#64ffda] text-xl font-bold">PS</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.name.toLowerCase()}`}
              className={`text-sm transition ${
                active === item.name.toLowerCase()
                  ? "text-[#64ffda]"
                  : "text-gray-300 hover:text-[#64ffda]"
              }`}
            >
              <span className="text-[#64ffda] mr-1">{item.id}.</span>
              {item.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#64ffda] text-[#64ffda] px-4 py-2 rounded hover:bg-[#64ffda]/10 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-[#64ffda] text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a192f] px-6 pb-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.name.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-300 hover:text-[#64ffda]"
            >
              {item.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            className="block mt-4 border border-[#64ffda] text-[#64ffda] px-4 py-2 rounded text-center"
          >
            Resume
          </a>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
