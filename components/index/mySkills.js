import React, { useEffect, useRef } from "react";
import Skill from "./mySkills/skill";

export default function MySkills() {
  /**
   * List variables.
   */
  const skillsObj = [
    "React.JS",
    "JavaScript",
    "Python",
    "Solidity",
    "Java",
    "React Native",
    "SQL",
    "Git",
    "HTML/CSS",
  ];

  const softwareObj = [
    "VScode",
    "Postman",
    "Remix",
    "Dataiku",
    "Jupyter Note",
    "LabView",
    "Digital Ocean",
    "Vercel",
    "AWS",
  ];

  /**
   * Reference for gsap animations.
   */
  const mySkillsContainerRef = useRef(null);

  // /**
  //  * GSAP animations.
  //  */
  // useEffect(() => {
  //   // Scroll animation
  //   gsap.registerPlugin(ScrollTrigger);

  //   let ctx = gsap.context(() => {
  //     const topRowScrollTl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: mySkillsContainerRef.current,
  //         scrub: 1,
  //         start: "top bottom",
  //         end: "+=4000",
  //         markers: true,
  //       },
  //     });

  //     topRowScrollTl
  //       .fromTo(
  //         mySkillsContainerRef.current.querySelector(".title"),
  //         {
  //           width: 0,
  //         },
  //         {
  //           width: "100%",
  //           duration: 2,
  //           delay: 2,
  //         }
  //       )
  //       .fromTo(
  //         mySkillsContainerRef.current.querySelector(".title"),
  //         {
  //           "border-right-color": "rgba(0,0,0,0.75)",
  //         },
  //         {
  //           "border-right-color": "rgba(0,0,0,0)",
  //           duration: 0.5,
  //           repeat: 4,
  //           ease: "none",
  //           yoyo: true,
  //         },
  //         "<"
  //       )
  //       .fromTo(
  //         mySkillsContainerRef.current.querySelectorAll(
  //           ".skill-section .title"
  //         ),
  //         {
  //           autoAlpha: 0,
  //           x: -50,
  //         },
  //         {
  //           autoAlpha: 1,
  //           x: 0,
  //           duration: 2,
  //           stagger: 0.2,
  //         },
  //         "<"
  //       );
  //   });
  //   return () => ctx.revert();
  // }, []);

  return (
    <div className="my-skills-container" ref={mySkillsContainerRef}>
      <div className="content">
        <div className="top-flex-row">
          <div className="title-container">
            <p className="title my-skills-title">My Skills.</p>
          </div>
        </div>
        <div className="skill-section-container">
          <div className="skill-section">
            <p className="title">Languages</p>
            <div className="skills-container">
              {skillsObj.map((skill) => (
                <Skill title={skill} />
              ))}
            </div>
          </div>
          <div className="skill-section">
            <p className="title">Software</p>
            <div className="skills-container">
              {softwareObj.map((skill) => (
                <Skill title={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
