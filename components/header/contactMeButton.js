import React from "react";

export default function ContactMeButton(props) {
  return (
    <div
      className="contact-me-button-container"
      onClick={() => props.onClick()}
    >
      <p className="text">{props.contactOpened ? "Close" : "Contact Me"}</p>
    </div>
  );
}
