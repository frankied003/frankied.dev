import React, { useEffect, useRef } from "react";

/**
 * Components imports.
 */
import Skill from "./mySkills/skill";
import GithubBadge from "./mySkills/githubBadge";

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
    "Digital Ocean",
    "Vercel",
    "AWS",
  ];

  /**
   * Reference for gsap animations.
   */
  const mySkillsContainerRef = useRef(null);

  useEffect(() => {
    // Scroll animation
    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();
    mm.add("(min-width: 912px)", () => {
      let ctx = gsap.context(() => {
        const topRowScrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: mySkillsContainerRef.current,
            start: "25% bottom",
          },
        });

        topRowScrollTl
          .fromTo(
            mySkillsContainerRef.current.querySelector(".my-skills-title"),
            {
              width: 0,
            },
            {
              width: "100%",
              duration: 2,
            },
            "<"
          )
          .fromTo(
            mySkillsContainerRef.current.querySelector(".my-skills-title"),
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
            mySkillsContainerRef.current.querySelectorAll(
              ".skill-section .title"
            ),
            {
              autoAlpha: 0,
            },
            {
              autoAlpha: 1,
              duration: 2,
              stagger: 0.2,
            },
            "<"
          )
          .fromTo(
            mySkillsContainerRef.current.querySelectorAll(".skills-container"),
            {
              autoAlpha: 0,
            },
            {
              autoAlpha: 1,
              duration: 0.5,
              stagger: 0.1,
            },
            "<0.5"
          );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="my-skills-container" ref={mySkillsContainerRef}>
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
              <Skill title={skill} key={skillsObj.indexOf(skill)} />
            ))}
          </div>
        </div>
        <div className="skill-section">
          <p className="title">Software</p>
          <div className="skills-container">
            {softwareObj.map((skill) => (
              <Skill title={skill} key={softwareObj.indexOf(skill)} />
            ))}
          </div>
        </div>
      </div>
      <GithubBadge />
    </div>
  );
}
