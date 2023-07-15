import React from "react";
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

  return (
    <div className="introduction-container">
      <div className="content">
        <p className="intro">
          <strong>What&apos;s up!</strong> My name is Frankie DiGiacomo and I am
          a{" "}
        </p>
        <p className="position">Full-Stack Developer.</p>
        <div className="learn-more-container">
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
