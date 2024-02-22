import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/globals.css";
import "../assets/styles/font.css"
import { useEffect } from "react";
import ErrorBoundary from "./../components/errorboundry/page";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <ErrorBoundary>
      <main>
        <Component {...pageProps} />
      </main>
    </ErrorBoundary>
  );
}

export default MyApp;