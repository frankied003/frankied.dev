import React, { useEffect, useRef } from "react";

export default function ScrollText() {
  /**
   * Reference for centerImageContainer for animations.
   */
  const scrollTextContainerRef = useRef(null);

  /**
   * GSAP animations for scrolling into the section.
   */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollTextContainerRef.current,
          scrub: 1,
          start: "top bottom",
          end: "bottom top",
          //   markers: true,
        },
      });

      /**
       * Top of section scroll effect.
       */
      scrollTl
        .to(scrollTextContainerRef.current.querySelector(".left-scroll-text"), {
          x: "-5%",
          ease: "none",
        })
        .to(
          scrollTextContainerRef.current.querySelector(".right-scroll-text"),
          {
            x: "5%",
            ease: "none",
          },
          "<"
        );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="scroll-text-container" ref={scrollTextContainerRef}>
      <p className="left-scroll-text">
        My Projects - My Work - My Projects - My Work - My Projects -
      </p>
      <p className="right-scroll-text">
        My Skills • My Hobbies • My Skills • My Hobbies • My Skills •
      </p>
    </div>
  );
}
