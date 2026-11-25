import { motion } from "framer-motion";
import { BookOpen, ExternalLink, ArrowRight } from "lucide-react";
import { FaMedium } from "react-icons/fa";

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
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  const recentBlogs = sortedBlogs.slice(0, 2);
  const otherBlogs = sortedBlogs.slice(2);

  return (
    <section id="blogs" className="px-6 sm:px-12 md:px-24 py-24 bg-[#07070f] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-xs font-mono text-[#64ffda] uppercase tracking-wider font-semibold">
            06. Publications & Research
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display mt-1">
            Technical Writing
          </h2>
          <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-[#64ffda] to-purple-500 mt-3 mb-4" />

          <p className="text-[#64ffda] text-base sm:text-lg font-semibold font-mono">
            154+ Technical Articles on AI, Machine Learning & Deep Learning
          </p>
          <p className="mt-2 max-w-3xl text-gray-300 text-xs sm:text-sm leading-relaxed">
            Sharing practical insights on Artificial Intelligence, Machine Learning, Deep
            Learning, and Software Architecture through in-depth technical breakdowns,
            mathematical intuitions, and production implementation guides.
          </p>
        </motion.div>

        {/* Featured Latest Articles */}
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-wider text-gray-400 uppercase">
            Latest Deep Dives
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {recentBlogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0d0d1a] border border-white/10 p-6 sm:p-7 rounded-2xl hover:border-[#64ffda]/40 hover:-translate-y-1 hover:shadow-2xl transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#64ffda] mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#64ffda] animate-pulse" />
                  <span>{blog.date}</span>
                </div>

                <h3 className="text-xl font-bold text-white font-display leading-snug">
                  {blog.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mt-2.5">
                  {blog.desc}
                </p>
              </div>

              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-xs font-mono font-medium text-[#64ffda] hover:text-white transition"
              >
                <span>Read Article</span>
                <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* More Articles */}
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-wider text-gray-400 uppercase">
            More Selected Deep Dives
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherBlogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-[#0d0d1a] border border-white/10 p-6 rounded-2xl hover:border-purple-400/40 hover:-translate-y-1 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-gray-400 block mb-2">
                  {blog.date}
                </span>

                <h4 className="text-base font-bold text-white font-display leading-snug">
                  {blog.title}
                </h4>

                <p className="text-xs text-gray-300 leading-relaxed mt-2 line-clamp-3">
                  {blog.desc}
                </p>
              </div>

              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-400 hover:text-white mt-5 transition"
              >
                <span>Read Deep Dive</span>
                <ExternalLink size={12} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Medium Profile CTA */}
        <div className="flex justify-center mt-14">
          <a
            href="https://medium.com/@parulsingh1074"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-purple-500 to-[#64ffda] text-[#07070f] font-mono font-bold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-[0_0_20px_rgba(100,255,218,0.2)] hover:scale-[1.02] transition-all duration-200"
          >
            <FaMedium size={18} />
            <span>Explore All 154+ Articles on Medium</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
