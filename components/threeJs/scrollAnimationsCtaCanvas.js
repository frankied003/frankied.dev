import React, { useEffect, useRef } from "react";

/**
 * Library imports.
 */
import Lottie from "react-lottie";

/**
 * Animation imports.
 */
import ScrollAnimationData from "../../public/assets/animations/Scroll.json";

export default function ScrollAnimationCtaCanvas(props) {
  const scrollContainerRef = useRef(null);

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
   * UseEffect to time the animation.
   */
  useEffect(() => {
    if (props.startAnimations) {
      gsap
        .timeline()
        .to(scrollContainerRef.current, { autoAlpha: 1, duration: 2 })
        .to(scrollContainerRef.current, {
          autoAlpha: 0,
          delay: 4,
          duration: 2,
        });
    }
  }, [props.startAnimations]);

  return (
    <div className={`lottie-animation`} ref={scrollContainerRef}>
      <Lottie options={defaultOptions} height={75} width={100} />
    </div>
  );
}
