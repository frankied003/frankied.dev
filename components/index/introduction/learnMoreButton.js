import React, { useEffect, useRef } from "react";

/**
 * Icon imports.
 */
import { BsArrowDown } from "react-icons/bs";

export default function LearnMoreButton() {
  const buttonRef = useRef(null);

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
    <div className="learn-more-container animate" ref={buttonRef}>
      <p className="learn-more-text">Learn More</p>
      <BsArrowDown className="icon" />
    </div>
  );
}
