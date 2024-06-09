import React, { useEffect, useRef } from "react";
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
  const menuContainerRef = useRef(null);

  /**
   * UseEffect for menu animation with GSAP.
   */
  useEffect(() => {
    const tl = gsap.timeline();
    if (props.menuOpen) {
      tl.to(menuContainerRef.current, {
        height: "100vh",
      })
        .fromTo(
          menuContainerRef.current.querySelectorAll(".social-media-link"),
          {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            y: 50,
            skewY: 3,
          },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            y: 0,
            skewY: 0,
            duration: 1,
            stagger: 0.1,
          },
          "<0.2"
        )
        .to(menuContainerRef.current.querySelector(".copyright"), {
          autoAlpha: 1,
        });
    } else {
      tl.to(menuContainerRef.current.querySelectorAll(".social-media-link"), {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        y: -50,
        stagger: 0.1,
      })
        .to(
          menuContainerRef.current.querySelector(".copyright"),
          {
            autoAlpha: 0,
          },
          "<0.5"
        )
        .to(
          menuContainerRef.current,
          {
            height: "0vh",
          },
          "<"
        );
    }
  }, [props.menuOpen]);

  return (
    <div className="menu-container" ref={menuContainerRef}>
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
          link={"https://twitter.com/frankiedigiac"}
          text={"Twitter"}
        />
        <SocialMediaLink
          icon={<AiFillMediumSquare className="icon" />}
          link={"https://medium.com/@frankied3030"}
          text={"Medium"}
        />
        <SocialMediaLink
          icon={<BsDiscord className="icon" />}
          link={"https://discordapp.com/users/463030182064685056"}
          text={"Discord"}
        />
        <SocialMediaLink
          icon={<FaEthereum className="icon" />}
          link={
            "https://etherscan.io/address/0xbD169b118063c577e8Bba6F3600e547fE950A456"
          }
          text={"Wallet"}
        />
      </div>
      <div className="close">
        <BsArrowUpShort
          className="icon"
          onClick={() => props.setMenuClosed()}
        />
      </div>
      <p className="copyright">Created by Frankied.dev</p>
    </div>
  );
}
