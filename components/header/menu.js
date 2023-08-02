import React from "react";
import SocialMediaLink from "./socialMediaLink";

/**
 * Social media icon imports.
 */
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillMediumSquare,
} from "react-icons/ai";
import { BsDiscord, BsArrowUpShort } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";

export default function Menu(props) {
  return (
    <div className="menu-container">
      <div className="social-media-container">
        <SocialMediaLink
          icon={<AiFillGithub className="icon" />}
          link={"https://github.com/frankied003"}
          text={"Github"}
        />
        <SocialMediaLink
          icon={<AiFillLinkedin className="icon" />}
          link={"https://www.linkedin.com/in/fdigiaco/"}
          text={"LinkedIn"}
        />
        <SocialMediaLink
          icon={<AiOutlineTwitter className="icon" />}
          link={"https://github.com/frankied003"}
          text={"Twitter"}
        />
        <SocialMediaLink
          icon={<AiFillMediumSquare className="icon" />}
          link={"https://github.com/frankied003"}
          text={"Medium"}
        />
        <SocialMediaLink
          icon={<BsDiscord className="icon" />}
          link={"https://github.com/frankied003"}
          text={"Discord"}
        />
        <SocialMediaLink
          icon={<FaEthereum className="icon" />}
          link={"https://github.com/frankied003"}
          text={"Wallet"}
        />
      </div>
      <div className="close">
        <BsArrowUpShort className="icon" />
      </div>
      <p className="copyright">Created by Frankied.dev</p>
    </div>
  );
}
