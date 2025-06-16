import { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function About() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true), []);
  if (!hasMounted) return null;

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen w-full transition-colors duration-300">
      <Head>
        <title>About | Sanskar Paudel</title>
        <meta name="description" content="About Sanskar Paudel" />
      </Head>

      <Navbar />

      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg leading-relaxed mb-6 text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          I’m Sanskar Paudel, a BSc (Hons) Computing student at The British
          College, Kathmandu. I currently work at CloudFactory as a 3D image
          annotator helping build future AI systems.
        </motion.p>

        <a
          href="/Sanskar_Paudel_Resume.pdf"
          download
          className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          📄 Download Resume
        </a>

        <motion.div
          className="text-left space-y-6 mt-12"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Education */}
          <motion.div
            className="bg-white dark:bg-gray-800 border-l-4 border-blue-600 p-4 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 className="font-semibold text-gray-800 dark:text-white">
              🎓 Education
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              BSc (Hons) Computing – The British College, Kathmandu
            </p>
          </motion.div>

          {/* Work */}
          <motion.div
            className="bg-white dark:bg-gray-800 border-l-4 border-blue-600 p-4 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-semibold text-gray-800 dark:text-white">
              💼 Work
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              3D Image Annotator at CloudFactory – working with AI data
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="bg-white dark:bg-gray-800 border-l-4 border-blue-600 p-4 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-semibold text-gray-800 dark:text-white">
              🛠 Skills
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              HTML, CSS, JavaScript, React (intermediate), Next.js (learning)
            </p>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
