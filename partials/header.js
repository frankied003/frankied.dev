import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

/**
 * Icon imports.
 */
import { BsArrowDownShort } from "react-icons/bs";

export default function Header(props) {
  const headerContainerRef = useRef();
  const [lastScrollY, setLastScrollY] = useState(0); // State to track last scroll position

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

  /**
   * GSAP animations for showing and hiding the header.
   */
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     /**
  //      * Scrolled up vs. scrolled down.
  //      */
  //     if (currentScrollY > lastScrollY && currentScrollY > 2000) {
  //       gsap.to(headerContainerRef.current, {
  //         y: "-100%",
  //         duration: 1,
  //       });
  //     } else {
  //       gsap.to(headerContainerRef.current, {
  //         y: "0%",
  //         duration: 1,
  //       });
  //     }

  //     // Update the last scroll position
  //     setLastScrollY(currentScrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [lastScrollY]);

  return (
    <div className="header-container" ref={headerContainerRef}>
      <Link className="title-container" href="/" target="#">
        <p className="title">Frankied.dev</p>
      </Link>
      <div className="right-content">
        <BsArrowDownShort
          className="icon"
          onClick={() => props.setMenuOpen()}
        />
      </div>
    </div>
  );
}
