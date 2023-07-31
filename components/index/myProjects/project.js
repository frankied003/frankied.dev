import React, { useRef } from "react";
import Image from "next/image";

/**
 * Icon imports.
 */
import Skill from "../mySkills/skill";

export default function Project(props) {
  const cardRef = useRef(null);

  return (
    <div className={`project-container ${props.classIndex}`} ref={cardRef}>
      <div className="content-container">
        <div className="details-container">
          <p className="number">0{props.index + 1}.</p>
          <p className="title">{props.title}</p>
          <p className="description">{props.description}</p>
        </div>
        <div className="bottom-skills-container">
          {props.skills.map((skill) => (
            <Skill mini title={skill} key={skill} />
          ))}
        </div>
      </div>
      <div className="image-container">
        <Image
          src={props.imageSrc}
          fill
          alt="Frankied Project"
          className={`image ${props.contain ? "contain" : null}`}
        />
      </div>
    </div>
  );
}
