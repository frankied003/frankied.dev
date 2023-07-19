import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

/**
 * Component imports.
 */
import ScrollAnimationCta from "./introduction/scrollAnimationsCta";
import LearnMoreButton from "./introduction/learnMoreButton";

export default function Introduction() {
  /**
   * Reference for gsap animations.
   */
  const introductionContainerRef = useRef(null);

  useEffect(() => {
    // Scroll animation
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: introductionContainerRef.current,
          pin: true,
          scrub: 1,
          start: "15% 15%",
          end: "bottom 15%",
          markers: true,
        },
      });
      scrollTl.fromTo(
        introductionContainerRef.current.querySelector(".image-container"),
        { rotate: 0 },
        { rotate: 90 }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="introduction-container" ref={introductionContainerRef}>
      <div className="content">
        <p className="intro">
          <strong className="what-up">What&apos;s up!</strong>{" "}
          <span className="title-rest">
            My name is Frankie DiGiacomo and I am a{" "}
          </span>
        </p>
        <p className="position">Full-Stack Developer.</p>
        <LearnMoreButton />
      </div>
      <div className="image-container">
        <Image
          src="/assets/logo.png"
          fill
          alt="Frankied.dev logo"
          className="image"
        />
      </div>
      <ScrollAnimationCta />
    </div>
  );
}
