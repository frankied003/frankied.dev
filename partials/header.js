import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

/**
 * Components imports.
 */
import SocialMediaLink from "../components/header/socialMediaLink";

/**
 * Icon imports.
 */
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillMediumSquare,
} from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";

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

    rightTl
      .fromTo(
        headerContainerRef.current.querySelector(".location"),
        {
          autoAlpha: 0,
          xPercent: 150,
        },
        {
          autoAlpha: 1,
          xPercent: 0,
          duration: 0.5,
          delay: 2.5,
        }
      )
      .fromTo(
        headerContainerRef.current.querySelectorAll(".social-media-link"),
        {
          autoAlpha: 0,
          xPercent: 100,
        },
        {
          autoAlpha: 1,
          xPercent: 0,
          duration: 0.5,
          stagger: 0.1,
        },
        "<0.2"
      );
  }, []);

  return (
    <div className="header-container" ref={headerContainerRef}>
      <Link className="title-container" href="/" target="#">
        <p className="title">Frankied.dev</p>
      </Link>
      <div className="right-content">
        <Link href={"https://google.com"}>
          <p className="location">New York, NY</p>
        </Link>
        <div className="social-media-links-container">
          <SocialMediaLink
            icon={<AiFillGithub className="icon" />}
            link={"https://github.com/frankied003"}
          />
          <SocialMediaLink
            icon={<AiFillLinkedin className="icon" />}
            link={"https://www.linkedin.com/in/fdigiaco/"}
          />
          <SocialMediaLink
            icon={<AiOutlineTwitter className="icon" />}
            link={"https://github.com/frankied003"}
          />
          <SocialMediaLink
            icon={<AiFillMediumSquare className="icon" />}
            link={"https://github.com/frankied003"}
          />
          <SocialMediaLink
            icon={<BsDiscord className="icon" />}
            link={"https://github.com/frankied003"}
          />
          <SocialMediaLink
            icon={<FaEthereum className="icon" />}
            link={"https://github.com/frankied003"}
          />
        </div>
      </div>
    </div>
  );
}
