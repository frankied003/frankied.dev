import React, { useState, useEffect, useRef } from "react";

/**
 * Components import.
 */
import FormField from "./contact/formField";

export default function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  /**
   * Function to send email to nextJS route.
   */
  const sendEmail = async () => {
    setSending(true);
    const sendReq = await fetch("/api/writes/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        number,
        description,
      }),
    });
    if (sendReq.status == 200) {
      setSuccess(true);
    }
    setSending(false);
  };

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
        <div className="form-container">
          <div className="left-container">
            <FormField
              title="Full Name or Business"
              placeholder="Name"
              sending={sending}
              success={success}
              setValue={setName}
            />
            <FormField
              title="Email Address"
              placeholder="youareawesome@gmail.com"
              sending={sending}
              success={success}
              setValue={setEmail}
            />
            <FormField
              title="Phone Number"
              placeholder="123-123-1234"
              sending={sending}
              success={success}
              setValue={setNumber}
            />
          </div>
          <div className="right-container">
            <FormField
              title="Description"
              placeholder="Description"
              multiline
              sending={sending}
              success={success}
              setValue={setDescription}
              send={() => sendEmail()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
