import React, { useState, useEffect, useRef } from "react";
import Project from "./myProjects/project";

export default function MyProjects() {
  /**
   * Reference for gsap animations.
   */
  const projectsContainerRef = useRef(null);

  /**
   * GSAP animations.
   */
  useEffect(() => {
    // Scroll animation
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const topRowScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: projectsContainerRef.current,
          scrub: 1,
          start: "top bottom",
          end: "80% bottom",
          // markers: true,
        },
      });

      topRowScrollTl
        .fromTo(
          projectsContainerRef.current.querySelector(".title"),
          {
            width: 0,
          },
          {
            width: "100%",
            duration: 3,
          },
          "<"
        )
        .fromTo(
          projectsContainerRef.current.querySelector(".title"),
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

      // const bottomScrollTl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: projectsContainerRef.current,
      //     scrub: 1,
      //     pin: true,
      //     start: "-20% top",
      //     end: "80% top",
      //     markers: true,
      //   },
      // });

      // bottomScrollTl.fromTo(
      //   projectsContainerRef.current.querySelectorAll(".project-container"),
      //   { autoAlpha: 0, xPercent: -25, skewX: -5, skewY: 5 },
      //   { autoAlpha: 1, xPercent: 0, skewX: 0, skewY: 0, stagger: 0.2 }
      // );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="my-projects-container" ref={projectsContainerRef}>
      <div className="title-container">
        <p className="title">My Projects.</p>
      </div>
      <div className="flex-container">
        <div className="projects-scroll-container">
          <Project
            index={0}
            title={"Isekai Meta / Studio Sekai"}
            description={
              "Isekai Meta is a story and community-driven, hand-drawn NFT collection and metaverse brand that has been summoned on the Ethereum blockchain."
            }
          />
        </div>
        <div className="contributions-container">
          <div className="contributions-title-container">
            <p className="title">Contributions.</p>
          </div>
          <div className="scroll-container">
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at
              rutrum justo, non porta diam. Vestibulum vel diam finibus est.
              Proin at rutrum justo, non porta diam.
            </p>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at
              rutrum justo, non porta diam. Vestibulum vel diam finibus est.
              Proin at rutrum justo, non porta diam.
            </p>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at
              rutrum justo, non porta diam. Vestibulum vel diam finibus est.
              Proin at rutrum justo, non porta diam.
            </p>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at
              rutrum justo, non porta diam. Vestibulum vel diam finibus est.
              Proin at rutrum justo, non porta diam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
