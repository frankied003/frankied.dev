import "../styles/config.scss";

import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useRef } from "react";
import Home from ".";
import Header from "../partials/header";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const firstMount = useRef(false);

  useEffect(() => {
    if (!firstMount.current) {
      console.log("Frankied developer portfolio, made with ❤️");
    }
    firstMount.current = true;
  }, [router.asPath]);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/Flip.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollToPlugin.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/TextPlugin.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
