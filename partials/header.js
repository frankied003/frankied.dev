import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

/**
 * Icon imports.
 */
import { MdMenu } from "react-icons/md";

export default function Header() {
  const headerContainerRef = useRef();

  /**
   * GSAP animations.
   */
  useEffect(() => {
    const leftTl = gsap.timeline();
    const rightTl = gsap.timeline();

    // Left header animation frankied.dev.
    leftTl
      .fromTo(
        headerContainerRef.current,
        { borderBottomColor: "rgb(0,0,0,0)" },
        { borderBottomColor: "rgb(0,0,0,0.9)", delay: 0.5 }
      )
      .fromTo(
        headerContainerRef.current.querySelector(".title"),
        {
          autoAlpha: 0,
          width: 0,
        },
        {
          autoAlpha: 1,
          width: "100%",
          duration: 2,
        },
        "<"
      )
      .fromTo(
        headerContainerRef.current.querySelector(".title"),
        {
          "border-right-color": "rgba(0,0,0,0.75)",
        },
        {
          "border-right-color": "rgba(0,0,0,0)",
          duration: 0.5,
          repeat: 5,
          ease: "none",
          yoyo: true,
        },
        "<"
      );

    rightTl.fromTo(
      headerContainerRef.current.querySelector(".right-content"),
      {
        autoAlpha: 0,
        xPercent: 150,
      },
      {
        autoAlpha: 1,
        xPercent: 0,
        duration: 0.5,
        delay: 1.5,
      }
    );
  }, []);

  return (
    <div className="header-container" ref={headerContainerRef}>
      <Link className="title-container" href="/" target="#">
        <p className="title">Frankied.dev</p>
      </Link>
      <div className="right-content">
        <MdMenu className="icon" />
      </div>
    </div>
  );
}
