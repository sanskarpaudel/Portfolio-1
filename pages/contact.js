import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);

  const handleEmailClick = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen w-full transition-colors duration-300">
      <Navbar />

      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          I’d love to connect! Feel free to reach out via email or check out my
          work on social platforms.
        </p>

        {/* Email Button with Popup */}
        <div className="mb-6">
          <button
            onClick={handleEmailClick}
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Email Me
          </button>

          {showPopup && (
            <div className="mt-2 animate-fade-in-out px-4 py-2 bg-gray-800 text-white text-sm rounded shadow-lg inline-block">
              📧 sanskarpaudel151@gmail.com
            </div>
          )}
        </div>

        <div className="flex justify-center gap-10 mt-8">
          {/* GitHub Button */}
          <div className="group relative">
            <a
              href="https://github.com/sanskarpaudel"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-blue-600 dark:text-blue-400 hover:scale-125 duration-200"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white dark:bg-gray-800 py-1.5 text-xs font-semibold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
              GitHub
            </span>
          </div>

          {/* LinkedIn Button */}
          <div className="group relative">
            <a
              href="https://www.linkedin.com/in/sanskarpaudel10/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-blue-600 dark:text-blue-400 hover:scale-125 duration-200"
              >
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v14H0V8zm7.5 0h4.8v1.9h.1c.67-1.3 2.3-2.7 4.7-2.7 5 0 5.9 3.3 5.9 7.6V22h-5v-6.6c0-1.6-.03-3.6-2.2-3.6s-2.6 1.7-2.6 3.5V22h-5V8z" />
              </svg>
            </a>
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white dark:bg-gray-800 py-1.5 text-xs font-semibold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
              LinkedIn
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
