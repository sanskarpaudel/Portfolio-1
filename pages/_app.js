// Inside _app.js
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        #__vercel,
        .vercel-feedback-button,
        .vercel-insights-button,
        [data-vercel-insights-button] {
          display: none !important;
          visibility: hidden !important;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
