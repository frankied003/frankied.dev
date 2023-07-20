import React, { useState, useEffect, useRef } from "react";
import WorkTogether from "./myProjects/workTogether";
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
          trigger: projectsContainerRef.current.querySelector(".top-flex-row"),
          scrub: 1,
          start: "top bottom",
          end: "bottom 25%",
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
            duration: 2,
          }
        )
        .fromTo(
          projectsContainerRef.current.querySelector(".title"),
          {
            "border-right-color": "rgba(0,0,0,0.75)",
          },
          {
            "border-right-color": "rgba(0,0,0,0)",
            duration: 0.5,
            repeat: 4,
            ease: "none",
            yoyo: true,
          },
          "<"
        )
        .fromTo(
          projectsContainerRef.current.querySelector(".description"),
          { autoAlpha: 0, xPercent: 50 },
          { autoAlpha: 1, xPercent: 0, ease: "none", duration: 2 },
          "<"
        );

      const bottomScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: projectsContainerRef.current,
          scrub: 1,
          pin: true,
          start: "top 15%",
          end: "+=1000",
          // markers: true,
        },
      });

      bottomScrollTl.fromTo(
        projectsContainerRef.current.querySelectorAll(".project-container"),
        { autoAlpha: 0, xPercent: -25, skewX: -5, skewY: 5 },
        { autoAlpha: 1, xPercent: 0, skewX: 0, skewY: 0, stagger: 0.2 }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="my-projects-container" ref={projectsContainerRef}>
      <div className="content">
        <div className="top-flex-row">
          <div className="title-container">
            <p className="title">My Projects.</p>
          </div>
          <p className="description">
            I have built innovative mobile, Web2, and Web3 applications across
            multiple industries, mastering the art of creating user-friendly
            solutions.
          </p>
        </div>
        <div className="projects-container">
          <Project
            title="Isekai Meta"
            role={"Co-founder & CTO"}
            src="/assets/projects/isekaiMeta.png"
            projectClass="project-1"
          />
          <Project
            title="Voleious"
            role={"Founder"}
            src="/assets/projects/voleious.png"
            projectClass="project-2"
          />
          <Project
            title="DigiSevn Delivery"
            role={"Mobile Developer"}
            src="/assets/projects/digiSevn.png"
            projectClass="project-3"
          />
          <Project
            title="onBoard"
            role={"Full-Stack Developer"}
            src="/assets/projects/onBoard.png"
            projectClass="project-4"
          />
        </div>
        <WorkTogether />
      </div>
    </div>
  );
}
