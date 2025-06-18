import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen w-full transition-colors duration-300">
      <Head>
        <title>Sanskar Paudel | Portfolio</title>
        <meta
          name="description"
          content="Sanskar Paudel's modern portfolio website — BSc (Hons) Computing student & development enthusiast."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main className="flex items-center justify-center px-4 py-20">
        <motion.div
          className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Profile Image */}
          <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-blue-500/30 dark:ring-blue-400/40 shadow-lg">
            <Image
              src="/Profile.jpg"
              alt="Sanskar Paudel"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          {/* Hero Text Content */}
          <div className="max-w-xl">
            <motion.h1
              className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Hi, I’m{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Sanskar Paudel
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl mb-4 text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              3D Image Annotator & Software Development Enthusiast
            </motion.p>

            <motion.p
              className="text-gray-600 dark:text-gray-400 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              I’m a BSc (Hons) Computing student at The British College,
              Kathmandu. Passionate about AI, software development, and building
              things that solve real problems. Currently working at CloudFactory
              on data annotation for AI systems.
            </motion.p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-500 transition-transform"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
