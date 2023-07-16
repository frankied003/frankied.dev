import React, { useState } from "react";

/**
 * Icon imports.
 */
import { BsArrowRight } from "react-icons/bs";

export default function WorkTogether() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="work-together-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p className="title">
        Work together? <br /> Contact me.
      </p>
      <BsArrowRight className={`icon ${hovered ? "hovered" : null}`} />
    </div>
  );
}
