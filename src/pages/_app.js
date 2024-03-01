import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/globals.css";
import "../assets/styles/nav.css";
import "../assets/styles/form.css";
import "../assets/styles/font.css"
import MyNavbar from "../layout/navbar/navbar";
import { useEffect } from "react";
import ErrorBoundary from "./../components/errorboundry/page";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <ErrorBoundary>
      <main>
        <MyNavbar/>
        <Component {...pageProps} />
      </main>
    </ErrorBoundary>
  );
}

export default MyApp;