import Image from "next/image";
import Link from "next/link";
import React from "react";

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
  return (
    <div className="header-container">
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
