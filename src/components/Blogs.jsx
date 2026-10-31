import { motion } from "framer-motion";

const blogs = [
  {
    title: "Neural Language Models: Learning Language with Neural Networks",
    desc: "Explores how feedforward and recurrent neural architectures model complex linguistic structures, resolve n-gram sparsity, and learn distributed representations.",
    date: "2026-10-28",
    link: "https://medium.com/@parulsingh1074/neural-language-models-learning-language-with-neural-networks-b4acac14f78d",
  },
  {
    title: "N-Gram Language Models: How Machines Predict the Next Word",
    desc: "Deep dive into statistical language modeling with n-grams, Markov chains, perplexity metrics, and essential smoothing techniques like Laplace and Kneser-Ney.",
    date: "2026-10-23",
    link: "https://medium.com/@parulsingh1074/n-gram-language-models-how-machines-predict-the-next-word-bb4782356835",
  },
  {
    title: "GloVe and FastText: Beyond Basic Word Embeddings",
    desc: "Examines global co-occurrence matrix factorization in GloVe and subword character n-gram representations in FastText to effectively handle out-of-vocabulary terms.",
    date: "2026-10-17",
    link: "https://medium.com/@parulsingh1074/glove-and-fasttext-beyond-basic-word-embeddings-e9e7ab438100",
  },
  {
    title: "Word2Vec: Learning Word Meaning from Context",
    desc: "Breaks down Continuous Bag of Words (CBOW) and Skip-Gram neural architectures, negative sampling optimization, and semantic vector geometry.",
    date: "2026-10-13",
    link: "https://medium.com/@parulsingh1074/word2vec-learning-word-meaning-from-context-01e017e81a90",
  },
  {
    title: "Word Embeddings: Teaching Machines the Meaning of Words",
    desc: "A foundational introduction to dense vector representations, geometric word spaces, and how continuous embeddings power modern NLP pipelines.",
    date: "2026-10-11",
    link: "https://medium.com/@parulsingh1074/word-embeddings-teaching-machines-the-meaning-of-words-0f27cd6464db",
  },
  {
    title: "TF-IDF: Finding Important Words in Documents",
    desc: "Analyzes Term Frequency-Inverse Document Frequency formulation, penalizing frequent stopwords while isolating discriminative keywords across documents.",
    date: "2026-10-06",
    link: "https://medium.com/@parulsingh1074/tf-idf-finding-important-words-in-documents-d26a55b4a769",
  },
  {
    title: "Bag of Words: Representing Text as Numbers",
    desc: "Covers classic text vectorization using Bag-of-Words, count matrices, vocabulary indexing, and the trade-offs of ignoring word sequence order.",
    date: "2026-10-05",
    link: "https://medium.com/@parulsingh1074/bag-of-words-representing-text-as-numbers-9bf3f55eeea5",
  },
  {
    title: "Tokenization: How Text Becomes Machine-Readable",
    desc: "Explores text segmentation algorithms from whitespace and regex tokenizers to statistical subword tokenizers like Byte-Pair Encoding (BPE) and WordPiece.",
    date: "2026-10-01",
    link: "https://medium.com/@parulsingh1074/tokenization-how-text-becomes-machine-readable-220e0b8d3e04",
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
      {/* Section Heading */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ccd6f6]">
          Technical Writing
        </h2>

        <div className="w-16 h-[3px] rounded-full bg-[#64ffda] mt-4 mb-5"></div>

        <p className="text-[#64ffda] text-lg font-semibold">
          154+ Technical Articles on AI, Machine Learning & Deep Learning
        </p>

        <p className="mt-3 max-w-3xl text-gray-400 leading-relaxed">
          Sharing practical insights on Artificial Intelligence, Machine
          Learning, Deep Learning, and Software Development through in-depth
          technical articles, tutorials, and implementation guides.
        </p>
      </div>

      {/* Latest Blogs */}
      <h3 className="text-lg font-semibold text-[#64ffda] mb-6">
        Latest Articles
      </h3>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {recentBlogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#112240] p-6 rounded-lg hover:-translate-y-2 hover:shadow-[0_0_25px_#64ffda30] transition duration-300 flex flex-col justify-between"
          >
            <div>
              <p className="text-xs text-[#64ffda] mb-2">{blog.date}</p>

              <h3 className="text-xl font-semibold text-white">{blog.title}</h3>

              <p className="text-sm text-gray-400 mt-2">{blog.desc}</p>
            </div>

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
            className="bg-[#112240] p-5 rounded-lg hover:-translate-y-2 transition duration-300 flex flex-col justify-between"
          >
            <div>
              <h4 className="text-white font-medium">{blog.title}</h4>

              <p className="text-xs text-gray-500 mt-2">{blog.date}</p>

              <p className="text-xs text-gray-400 mt-2 line-clamp-2">
                {blog.desc}
              </p>
            </div>

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
          className="bg-[#64ffda] text-[#0a192f] px-6 py-3 rounded hover:opacity-90 transition font-medium text-sm"
        >
          Visit my Medium (154+ Articles) →
        </a>
      </div>
    </section>
  );
};

export default Blogs;
