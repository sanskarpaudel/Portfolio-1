export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center py-6 mt-12 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <p>
          &copy; {new Date().getFullYear()} Sanskar Paudel. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center gap-4 text-blue-600 dark:text-blue-400">
          <a
            href="https://github.com/sanskarpaudel"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sanskarpaudel10/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sanskarpaudel151@gmail.com"
            className="hover:underline"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
