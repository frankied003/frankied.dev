import React, { useState, useEffect, useRef } from "react";

/**
 * Components import.
 */
import FormField from "./contactMe/formField";

export default function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");

  const contactContainerRef = useRef(null);

  /**
   * Loading animations.
   */
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(contactContainerRef.current, {
        autoAlpha: 1,
      })
        .fromTo(
          contactContainerRef.current.querySelectorAll(".top-flex-row"),
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
          },
          "<0.25"
        )
        .fromTo(
          contactContainerRef.current.querySelector(".form-container"),
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
          },
          "<"
        );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="contact-container" ref={contactContainerRef}>
      <div className="content">
        <div className="top-flex-row">
          <p className="contact-title">Contact Me.</p>
          <p className="subtitle">Want to work together?</p>
          <p className="subtitle">Don't hesitate to contact me below.</p>
        </div>
        <div
          className={`form-container ${
            props.editable ? "pointer-events" : null
          }`}
        >
          <div className="left-container">
            <FormField title="Full Name or Business" placeholder="Name" />
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
