const Skills = () => {
  const skills = {
    Programming: ["Python", "JavaScript", "SQL", "HTML5", "CSS3"],

    "ML / AI": [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "CNN",
      "Feature Engineering",
      "RAG (Retrieval-Augmented Generation)",
      "Prompt Engineering",
      "LLM Integration",
    ],

    "Data & Visualization": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA"],

    "Frameworks & Libraries": [
      "Scikit-learn",
      "TensorFlow / Keras",
      "LangChain",
      "NLTK",
    ],

    "Backend, Tools & Deployment": [
      "Django",
      "Flask",
      "Streamlit",
      "Git & GitHub",
      "Render",
      "Web Scraping",
      "FAISS (Vector DB)",
    ],
  };

  return (
    <section id="skills" className="px-6 md:px-20 py-20 bg-[#0a192f]">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6]">Skills</h2>

      <div className="w-16 h-[2px] bg-[#64ffda] mt-2 mb-12"></div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {Object.entries(skills).map(([category, items], index) => (
          <div key={index}>
            {/* Category Title */}
            <h3 className="text-[#64ffda] text-lg font-semibold mb-4">
              {category}
            </h3>

            {/* Chips */}
            <div className="flex flex-wrap gap-3">
              {items.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#112240] text-gray-300 rounded-full text-sm 
                  hover:bg-[#64ffda]/10 hover:text-[#64ffda] transition duration-300 cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
