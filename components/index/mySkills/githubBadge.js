import React, { useState, useEffect, useRef } from "react";

/**
 * Icon imports.
 */
import { AiFillGithub } from "react-icons/ai";

export default function GithubBadge() {
  /**
   * State and references to dynamically change the size of the SVG container.
   */
  const [containerSize, setContainerSize] = useState(125); // default value
  const [hovered, setHovered] = useState(false);
  const badgeContainerRef = useRef(null);

  /**
   * UseEffect for resize.
   */
  useEffect(() => {
    const handleResize = () => {
      if (badgeContainerRef.current) {
        setContainerSize(badgeContainerRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    // Call the function once initially to set the size
    handleResize();

    return () => {
      // Cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /**
   * Function for SVG size.
   * Center is always half of size of container.
   * Radius can be full width or a little less than center.
   */
  const generatePath = (size) => {
    const center = size / 2;
    const radius = center - center * 0.25;
    return `M ${center}, ${center} m -${radius}, 0 a ${radius},${radius} 0 0,1 ${
      2 * radius
    },0 a ${radius},${radius} 0 0,1 -${2 * radius},0`;
  };

  /**
   * Hover effect.
   * Increase the icon width with gsap.
   */

  const onHover = () => {
    const tl = gsap.timeline();
    tl.to(badgeContainerRef.current.querySelector(".icon"), {
      width: "95%",
      ease: "back.out(1.7)",
    }).to(
      badgeContainerRef.current.querySelector(".circle"),
      { opacity: 0, duration: 0.2 },
      "<"
    );
  };

  const onLeave = () => {
    const tl = gsap.timeline();
    tl.to(badgeContainerRef.current.querySelector(".icon"), {
      width: "65%",
      ease: "back.out(1.7)",
    }).to(
      badgeContainerRef.current.querySelector(".circle"),
      { opacity: 1, duration: 0.2 },
      "<"
    );
  };

  return (
    <a
      className="github-badge-container"
      ref={badgeContainerRef}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      href="https://github.com/frankied003"
      target="#"
    >
      <svg version="1.1" className="circle">
        <defs>
          <path id="circlePath" d={generatePath(containerSize)} />
        </defs>
        <g>
          <text fill="#000">
            <textPath xlinkHref="#circlePath" className="circleText">
              This website's code is now on GitHub! ━ ━ ━ ━ ━ ━
            </textPath>
          </text>
        </g>
      </svg>
      <div className="github-icon-container">
        <AiFillGithub className="icon" />
      </div>
    </a>
  );
}
