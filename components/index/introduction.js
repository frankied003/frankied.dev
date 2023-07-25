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

  /**
   * GSAP animations.
   */
  useEffect(() => {
    // Scroll animation
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const loadTl = gsap.timeline();

      loadTl
        .fromTo(
          introductionContainerRef.current,
          { borderBottomColor: "rgb(0,0,0,0)" },
          { borderBottomColor: "rgb(0,0,0,0.9)", delay: 1 }
        )
        .fromTo(
          introductionContainerRef.current.querySelector(".image-container"),
          { autoAlpha: 0 },
          { autoAlpha: 1 },
          "<"
        )
        .fromTo(
          introductionContainerRef.current.querySelector(".image-container"),
          { xPercent: -100 },
          { xPercent: 0, delay: 0.5 }
        )
        .fromTo(
          introductionContainerRef.current.querySelectorAll(".animate"),
          { autoAlpha: 0, y: 50, skewY: 5 },
          { autoAlpha: 1, y: 0, skewY: 0, stagger: 0.2 }
        )
        .fromTo(
          introductionContainerRef.current.querySelector(".lottie-animation"),
          { autoAlpha: 0, y: 50 },
          { autoAlpha: 1, y: 0 },
          "<"
        );

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: introductionContainerRef.current,
          pin: true,
          scrub: 1,
          start: "15% 15%",
          end: "+=2000",
          // markers: true,
        },
      });

      const imgTl = gsap.timeline();
      imgTl.to(
        introductionContainerRef.current.querySelector(".image-container"),
        { rotate: 90, duration: 4 }
      );

      const primaryTl = gsap.timeline();
      primaryTl
        .to(
          introductionContainerRef.current.querySelector(".primary"),
          { y: "-100%", rotateX: 90, ease: "none", duration: 1 },
          "<"
        )
        .fromTo(
          introductionContainerRef.current.querySelector(".secondary"),
          { y: 0, rotateX: 90 },
          { y: "-100%", rotateX: 0, ease: "none", duration: 1 },
          "<"
        )
        .to(introductionContainerRef.current.querySelector(".secondary"), {
          y: "-100%",
          rotateX: 0,
          ease: "none",
          duration: 1,
        })
        .to(
          introductionContainerRef.current.querySelector(".third"),
          { y: "-100%", rotateX: 90, ease: "none" },
          "<"
        )
        .to(introductionContainerRef.current.querySelector(".secondary"), {
          y: "-200%",
          rotateX: 90,
          ease: "none",
          duration: 1,
        })
        .to(
          introductionContainerRef.current.querySelector(".third"),
          { y: "-200%", rotateX: 0, ease: "none", duration: 1 },
          "<"
        );

      scrollTl.add(imgTl, 0);
      scrollTl.add(primaryTl, 0);
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="introduction-container" ref={introductionContainerRef}>
      <div className="content">
        <p className="intro animate">
          <strong className="what-up">What&apos;s up!</strong>{" "}
          <span className="title-rest">
            My name is Frankie DiGiacomo and I am a{" "}
          </span>
        </p>
        <div className="animate">
          <div className="position-container">
            <p className="position primary">Full-Stack Developer.</p>
            <p className="position secondary">UI/UX Designer.</p>
            <p className="position third">Data Scientist.</p>
          </div>
        </div>
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
