import React, { useState } from "react";

/**
 * Components import.
 */
import FormField from "./contactMe/formField";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="contact-me-container">
      <div className="content">
        <div className="top-flex-row">
          <p className="title">Contact Me.</p>
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
