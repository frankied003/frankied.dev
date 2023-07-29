import React from "react";

export default function Skill(props) {
  return (
    <div className={`skill-container ${props.mini ? "mini" : null}`}>
      <p className="skill-title">{props.title}</p>
    </div>
  );
}
