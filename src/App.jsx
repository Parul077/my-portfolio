import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import FeaturedProjects from "./components/FeaturedProjects";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import About from "./components/About";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";

function App() {
  return (
    <div className="bg-[#0a192f] min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <FeaturedProjects />
      <Projects />
      <Blogs />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;
