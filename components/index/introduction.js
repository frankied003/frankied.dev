import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

/**
 * Library imports.
 */
import Lottie from "react-lottie";

/**
 * Icon imports.
 */
import { BsArrowDown } from "react-icons/bs";

/**
 * Animation imports.
 */
import ScrollAnimationData from "../../public/assets/animations/Scroll.json";

export default function Introduction() {
  /**
   * Reference for gsap animations.
   */
  const introductionContainerRef = useRef(null);
  const buttonRef = useRef(null);

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

  useEffect(() => {
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: introductionContainerRef.current,
    //     pin: true,
    //     scrub: 1,
    //     start: "top top",
    //     end: "bottom top",
    //     markers: true,
    //   },
    // });
    // tl.fromTo("");

    const buttonTl = gsap.timeline();
  }, []);

  /**
   * UseEffect hook for running titling card GSAP effect.
   */
  useEffect(() => {
    const handleMouseMove = (event) => {
      const tl = gsap.timeline();
      const rect = buttonRef.current.getBoundingClientRect();
      const xPos = ((event.clientX - rect.left) / rect.width - 0.5) * 50; // -25 to 25
      const yPos = ((event.clientY - rect.top) / rect.height - 0.5) * 50; // -25 to 25

      tl.to(buttonRef.current, 0.6, {
        rotationY: xPos / 2,
        rotationX: yPos / 2,
        ease: "Power1.easeOut",
        transformPerspective: 900,
        transformOrigin: "center",
      });
    };

    const handleMouseLeave = (event) => {
      const tl = gsap.timeline();

      tl.to(buttonRef.current, 0.6, {
        rotationY: 0,
        rotationX: 0,
        ease: "Power1.easeOut",
        transformPerspective: 900,
        transformOrigin: "center",
      });
    };

    buttonRef.current.addEventListener("mousemove", handleMouseMove);
    buttonRef.current.addEventListener("mouseleave", handleMouseLeave);

    // Clean up the event listener on component unmount
    return () => {
      buttonRef.current.removeEventListener("mousemove", handleMouseMove);
      buttonRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
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
        <div className="learn-more-container" ref={buttonRef}>
          <p className="learn-more-text">Learn More</p>
          <BsArrowDown className="icon" />
        </div>
      </div>
      <div className="image-container">
        <Image
          src="/assets/logo.png"
          fill
          alt="Frankied.dev logo"
          className="image"
        />
      </div>
      <div className="lottie-animation">
        <Lottie options={defaultOptions} height={75} width={75} />
      </div>
    </div>
  );
}
