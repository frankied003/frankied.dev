import React, { useState, useEffect, useRef } from "react";

/**
 * Icon imports.
 */

export default function SocialMediaLink(props) {
  const { icon, link } = props;
  const socialMediaContainerRef = useRef();

  /**
   * State for hover management.
   */
  const [hovered, setHovered] = useState(false);

  return (
    <a
      className="social-media-link"
      ref={socialMediaContainerRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      href={link}
      target="#"
    >
      <div className="left-container">
        <div className={`icon-container ${hovered ? "hovered" : null}`}>
          {icon}
        </div>
        <p className="social-text">{props.text}</p>
      </div>
    </a>
  );
}
