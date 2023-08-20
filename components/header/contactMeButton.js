import React, { useState, useEffect, useRef } from "react";

export default function ContactMeButton(props) {
  const contactMeButtonRef = useRef(null);

  const [hovered, setHovered] = useState(false);

  /**
   * UseEffect to perform the gsap animation.
   */
  useEffect(() => {
    const tl = gsap.timeline();
    if (hovered) {
      tl.to(contactMeButtonRef.current, {
        scale: 1.1,
        ease: "back.out(1.7)",
      });
    } else {
      tl.to(contactMeButtonRef.current, {
        scale: 1,
        ease: "back.out(1.7)",
      });
    }
  }, [hovered]);

  return (
    <div
      className="contact-me-button-container"
      ref={contactMeButtonRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => props.onClick()}
    >
      <p className="text">{props.contactOpened ? "close" : "Contact Me"}</p>
    </div>
  );
}
