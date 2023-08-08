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
      <GithubBadge />
    </div>
  );
}
