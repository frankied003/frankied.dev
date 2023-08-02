import React from "react";

/**
 * Icon imports.
 */

export default function SocialMediaLink(props) {
  const { icon, link } = props;

  return (
    <a className="social-media-link" href={link} target="#">
      <div className="left-container">
        {icon}
        <p className="social-text">{props.text}</p>
      </div>
    </a>
  );
}
