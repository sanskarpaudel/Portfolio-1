import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); // Prevents hydration mismatch

  // Scroll styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On mount, check stored theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (saved === "dark" || (!saved && prefersDark)) {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDark(false);
    }

    setHasMounted(true);
  }, []);

  // When toggling theme
  const toggleDark = () => {
    const nextDark = !dark;
    setDark(nextDark);
    localStorage.setItem("theme", nextDark ? "dark" : "light");

    if (nextDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!hasMounted) return null;

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-md transition duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/70 shadow-md"
          : "bg-transparent dark:bg-gray-900/30"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {"<S />"}
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center space-x-6 text-sm sm:text-base font-medium">
          {[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/projects" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="relative group text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}

          {/* Toggle */}
          <label className="switch ml-2">
            <input type="checkbox" checked={dark} onChange={toggleDark} />
            <span className="slider">
              <span className="star star_1"></span>
              <span className="star star_2"></span>
              <span className="star star_3"></span>
              <svg
                className="cloud"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                width="20"
                height="20"
                fill="white"
              >
                <path d="M48.6 28.1C47.1 18.6 39.4 12 30.1 12c-7.5 0-14.1 4.5-16.9 11.2C5.8 24.6 0 30.8 0 38.4 0 46.6 6.8 53.4 15 53.4H49c8.3 0 15-6.7 15-15 0-7.3-5.2-13.4-12.1-14.3z" />
              </svg>
            </span>
          </label>
        </div>
      </div>
    </nav>
  );
}
