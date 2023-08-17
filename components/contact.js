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

  return (
    <div className="contact-container">
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
