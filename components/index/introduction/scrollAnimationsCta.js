import React, { useEffect, useState, useRef } from "react";

/**
 * Library imports.
 */
import Lottie from "react-lottie";

/**
 * Animation imports.
 */
import ScrollAnimationData from "../../../public/assets/animations/Scroll.json";

export default function ScrollAnimationCta() {
  const scrollContainerRef = useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);

  /**
   * Lottie animation data
   */
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ScrollAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  /**
   * UseEffect to check if the page is scrolling.
   * If scrolling, this will remove the lottie animation.
   */
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY != 0 && !isScrolled) {
        gsap.to(scrollContainerRef.current, { opacity: 0 });
      }
      setIsScrolled(true);
    };

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <div className="lottie-animation" ref={scrollContainerRef}>
      <Lottie options={defaultOptions} height={75} width={75} />
    </div>
  );
}
