import React, { useState, useEffect, useRef } from "react";

/**
 * Components import.
 */
import FormField from "./contactMe/formField";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");

  /**
   * Reference for gsap animations.
   */
  const contactMeContainerRef = useRef(null);

  /**
   * GSAP animations.
   */
  useEffect(() => {
    // Scroll animation
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const topRowScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: contactMeContainerRef.current.querySelector(".top-flex-row"),
          scrub: 1,
          start: "top bottom",
          end: "bottom 35%",
          // markers: true,
        },
      });

      topRowScrollTl
        .fromTo(
          contactMeContainerRef.current.querySelector(".title"),
          {
            width: 0,
          },
          {
            width: "100%",
            duration: 2,
          }
        )
        .fromTo(
          contactMeContainerRef.current.querySelector(".title"),
          {
            "border-right-color": "rgba(0,0,0,0.75)",
          },
          {
            "border-right-color": "rgba(0,0,0,0)",
            duration: 0.5,
            repeat: 4,
            ease: "none",
            yoyo: true,
          },
          "<"
        );

      const bottomScrollTL = gsap.timeline({
        scrollTrigger: {
          trigger:
            contactMeContainerRef.current.querySelector(".form-container"),
          start: "50% bottom",
          // markers: true,
        },
      });

      bottomScrollTL.fromTo(
        contactMeContainerRef.current.querySelectorAll(".form-field-container"),
        {
          autoAlpha: 0,
        },
        { autoAlpha: 1, stagger: 0.2, duration: 0.5 }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="contact-me-container" ref={contactMeContainerRef}>
      <div className="content">
        <div className="top-flex-row">
          <div className="title-container">
            <p className="title">Contact Me.</p>
          </div>
        </div>
        <div className="form-container">
          <div className="left-container">
            <FormField title="Full Name or Business Name" placeholder="Name" />
            <FormField
              title="Email Address"
              placeholder="youareawesome@gmail.com"
            />
            <FormField title="Phone Number" placeholder="123-123-1234" />
          </div>
          <div className="right-container">
            <FormField
              title="Description"
              placeholder="Description"
              multiline
              submit={() => console.log("submit")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
