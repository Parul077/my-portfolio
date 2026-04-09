import { motion } from "framer-motion";

const blogs = [
  {
    title:
      "Machine Learning Pipelines: Automating Workflow and Preventing Data Leakage",
    desc: "Machine Learning Pipelines automate the end-to-end workflow while ensuring data is processed correctly at each stage, helping prevent data leakage and improving model reliability.",
    date: "2026-04-07",
    link: "https://medium.com/@parulsingh1074/machine-learning-pipelines-automating-workflow-and-preventing-data-leakage-6b1f6bd6f92b",
  },
  {
    title:
      "Handling Imbalanced Datasets: Techniques for Better Model Performance",
    desc: "Handling imbalanced datasets involves applying techniques like resampling, class weighting, and specialized algorithms to ensure models learn fairly from all classes and improve overall performance.",
    date: "2026-04-03",
    link: "https://medium.com/@parulsingh1074/handling-imbalanced-datasets-techniques-for-better-model-performance-c99bbab7ccde",
  },
  {
    title:
      "Cross-Validation Techniques: Building Reliable Machine Learning Models",
    desc: "Explains different cross-validation methods like K-Fold and Stratified K-Fold to build reliable and generalizable machine learning models.",
    date: "2026-03-25",
    link: "https://medium.com/@parulsingh1074/cross-validation-techniques-building-reliable-machine-learning-models-933b9ce68cc7",
  },
  {
    title:
      "Stacking & Blending: Combining Multiple Models for Maximum Performance",
    desc: "Breaks down advanced ensemble techniques like stacking and blending to combine multiple models and boost predictive performance.",
    date: "2026-03-23",
    link: "https://medium.com/@parulsingh1074/stacking-blending-combining-multiple-models-for-maximum-performance-4c5fc0b655e7",
  },
  {
    title: "Advanced Boosting Algorithms: XGBoost, LightGBM & CatBoost",
    desc: "Compares powerful boosting algorithms like XGBoost, LightGBM, and CatBoost, explaining their working, advantages, and real-world usage.",
    date: "2026-03-20",
    link: "https://medium.com/@parulsingh1074/advanced-boosting-algorithms-xgboost-lightgbm-catboost-d8d207138918",
  },
  {
    title: "Gradient Boosting: Learning from Residual Errors",
    desc: "Explains how gradient boosting improves model performance by learning from residual errors step-by-step.",
    date: "2026-03-18",
    link: "https://medium.com/@parulsingh1074/gradient-boosting-learning-from-residual-errors-bb35e93df219",
  },
  {
    title: "Dimensionality Reduction with PCA",
    desc: "Explains how PCA reduces dimensionality while preserving important features to improve model efficiency.",
    date: "2026-03-15",
    link: "https://medium.com/@parulsingh1074/dimensionality-reduction-with-principal-component-analysis-pca-6f14cd8c7af5",
  },
  {
    title: "Random Forests: Power of Ensemble Learning",
    desc: "Explores how Random Forest combines multiple decision trees to improve accuracy and reduce overfitting.",
    date: "2026-02-28",
    link: "https://medium.com/@parulsingh1074/random-forests-power-of-ensemble-learning-db5f92625255",
  },
];

const Blogs = () => {
  // 🔥 Sort blogs by latest date
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  // ✅ Auto split
  const recentBlogs = sortedBlogs.slice(0, 2);
  const otherBlogs = sortedBlogs.slice(2);

  return (
    <section id="blogs" className="px-6 md:px-20 py-20 bg-[#0a192f]">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6] mb-10">
        Blogs
      </h2>
      <div className="w-16 h-[2px] bg-[#64ffda] mt-2 mb-8"></div>

      {/* 🔥 Recent Blogs */}
      <h3 className="text-lg text-[#64ffda] mb-6">Recent</h3>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {recentBlogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#112240] p-6 rounded-lg hover:-translate-y-2 hover:shadow-[0_0_25px_#64ffda30] transition duration-300"
          >
            <p className="text-xs text-[#64ffda] mb-2">{blog.date}</p>

            <h3 className="text-xl font-semibold text-white">{blog.title}</h3>

            <p className="text-sm text-gray-400 mt-2">{blog.desc}</p>

            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-[#64ffda] hover:underline"
            >
              Read Article →
            </a>
          </motion.div>
        ))}
      </div>

      {/* 🧩 More Blogs */}
      <h3 className="text-lg text-gray-400 mb-6">More Articles</h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherBlogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#112240] p-5 rounded-lg hover:-translate-y-2 transition duration-300"
          >
            <h4 className="text-white font-medium">{blog.title}</h4>

            <p className="text-xs text-gray-500 mt-2">{blog.date}</p>

            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#64ffda] mt-3 inline-block hover:underline"
            >
              Read →
            </a>
          </motion.div>
        ))}
      </div>

      {/* 🚀 CTA Buttons */}
      <div className="flex flex-wrap gap-4 mt-12">
        <a
          href="https://medium.com/@parulsingh1074"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded hover:bg-[#64ffda]/10 transition"
        >
          Explore more of my writings on Medium →
        </a>

        <a
          href="https://medium.com/@parulsingh1074"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#64ffda] text-[#0a192f] px-6 py-3 rounded hover:opacity-90 transition"
        >
          Subscribe
        </a>
      </div>
    </section>
  );
};

export default Blogs;
