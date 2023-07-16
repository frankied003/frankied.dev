import React, { useEffect, useRef } from "react";
import Image from "next/image";

/**
 * Icon imports.
 */
import { BsArrowRight } from "react-icons/bs";

export default function Project(props) {
  const cardRef = useRef(null);

  /**
   * UseEffect hook for running titling card GSAP effect.
   */
  useEffect(() => {
    const handleMouseMove = (event) => {
      const tl = gsap.timeline();
      const rect = cardRef.current.getBoundingClientRect();
      const xPos = ((event.clientX - rect.left) / rect.width - 0.5) * 50; // -25 to 25
      const yPos = ((event.clientY - rect.top) / rect.height - 0.5) * 50; // -25 to 25

      tl.to(cardRef.current, 0.6, {
        rotationY: xPos / 3,
        rotationX: yPos / 3,
        ease: "Power1.easeOut",
        transformPerspective: 900,
        transformOrigin: "center",
      });
    };

    const handleMouseLeave = (event) => {
      const tl = gsap.timeline();

      tl.to(cardRef.current, 0.6, {
        rotationY: 0,
        rotationX: 0,
        ease: "Power1.easeOut",
        transformPerspective: 900,
        transformOrigin: "center",
      });
    };

    cardRef.current.addEventListener("mousemove", handleMouseMove);
    cardRef.current.addEventListener("mouseleave", handleMouseLeave);

    // Clean up the event listener on component unmount
    return () => {
      cardRef.current.removeEventListener("mousemove", handleMouseMove);
      cardRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="project-container" ref={cardRef}>
      <div className="image-container">
        <Image src={props.src} fill alt="Frankied Project" className="image" />
      </div>
      <div className="content-container">
        <div className="details-container">
          <p className="title">{props.title}</p>
          <p className="role">{props.role}</p>
        </div>
        <BsArrowRight className="icon" />
      </div>
    </div>
  );
}
