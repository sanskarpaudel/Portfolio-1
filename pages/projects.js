import { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Projects() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true), []);
  if (!hasMounted) return null;

  const projectList = [
    {
      title: "AI Blog Platform",
      description:
        "A dynamic blog platform that leverages AI for content creation and publishing.",
      github: "https://github.com/sanskarpaudel",
      live: "https://ai-blog-platform-d968.vercel.app/",
    },
    {
      title: "Weather App",
      description:
        "A sleek weather forecast app with real-time data and location features.",
      github: "https://github.com/sanskarpaudel",
      live: "https://sanskarpaudel.github.io/weather-app/",
    },
    {
      title: "Quiz App",
      description:
        "An interactive multiple-choice quiz application with timer and score tracking.",
      github: "https://github.com/sanskarpaudel",
      live: "https://sanskarpaudel.github.io/quiz-app/",
    },
    {
      title: "Tesla Clone UI",
      description:
        "A clean, responsive Tesla landing page clone built with modern web technologies.",
      github: "https://github.com/sanskarpaudel",
      live: "https://sanskarpaudel.github.io/tesla-clone-ui/",
    },
    {
      title: "Student Department App",
      description:
        "A C++ app to manage student and department records for academic institutions.",
      github: "https://github.com/sanskarpaudel",
    },
  ];

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen w-full transition-colors duration-300">
      <Head>
        <title>Projects | Sanskar Paudel</title>
        <meta name="description" content="Projects by Sanskar Paudel" />
      </Head>

      <Navbar />

      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-xl shadow-md p-6 text-left border border-gray-200 dark:border-gray-700 hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
