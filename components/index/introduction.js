import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

/**
 * Component imports.
 */
import ScrollAnimationCta from "./introduction/scrollAnimationsCta";
import LearnMoreButton from "./introduction/learnMoreButton";
import HeroImage from "./introduction/heroImage";

export default function Introduction() {
  /**
   * Reference for gsap animations.
   */
  const introductionContainerRef = useRef(null);

  /**
   * Animation progress number state.
   */
  const [animationProgress, setAnimationProgress] = useState(0);

  /**
   * GSAP animations.
   */
  useEffect(() => {
    // Scroll animation
    gsap.registerPlugin(ScrollTrigger);

    const loadTl = gsap.timeline();

    /**
     * Loading trigger.
     */
    loadTl
      .fromTo(
        introductionContainerRef.current.querySelector(".flex-image-container"),
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 1, delay: 0.5 }
      )
      .fromTo(
        introductionContainerRef.current.querySelectorAll(".animate"),
        { autoAlpha: 0, y: 50, skewY: 5 },
        { autoAlpha: 1, y: 0, skewY: 0, stagger: 0.2, delay: 0.35 },
        "<"
      )
      .fromTo(
        introductionContainerRef.current.querySelector(
          ".animation-progress-number"
        ),
        { autoAlpha: 0, x: "-50%" },
        { autoAlpha: 1, x: 0, ease: "back.out(1.7)" },
        "<"
      )
      .fromTo(
        introductionContainerRef.current.querySelector(".lottie-animation"),
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0 }
      );

    let mm = gsap.matchMedia();
    mm.add("(min-width: 912px)", () => {
      let ctx = gsap.context(() => {
        /**
         * Main box trigger.
         */
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: introductionContainerRef.current,
            pin: true,
            scrub: 1,
            start: "15% 15%",
            end: "+=2000",
            // markers: true,
            onUpdate: (self) => {
              if (self.progress > 1) {
                setAnimationProgress(0);
              } else {
                setAnimationProgress((self.progress * 100).toFixed(0));
              }
            },
          },
        });

        /**
         * For the number animation and it's container.
         */
        const numberTl = gsap.timeline();
        numberTl.to(
          introductionContainerRef.current.querySelector(
            ".animation-progress-number"
          ),
          {
            width: "35%",
            duration: 4,
          }
        );

        /**
         * For the animation of the positions.
         */
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

        scrollTl.add(numberTl, 0);
        scrollTl.add(primaryTl, 0);
      });
      return () => ctx.revert();
    });
  }, []);

  return (
    <div className="introduction-container" ref={introductionContainerRef}>
      <div className="top-content-container">
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
      </div>
      <div className="number-container">
        <p className="animation-progress-number">
          {animationProgress}
          <span>%</span>
        </p>
      </div>
      <HeroImage />
      <ScrollAnimationCta />
    </div>
  );
}
