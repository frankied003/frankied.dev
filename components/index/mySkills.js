import React from "react";
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

  return (
    <div className="my-skills-container">
      <div className="content">
        <div className="top-flex-row">
          <p className="title">My Skills.</p>
        </div>
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
  );
}
