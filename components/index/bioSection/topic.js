import React from "react";

export default function Topic(props) {
  return (
    <div
      className={`topic ${
        props.activeTopic == props.title ? "active" : "non-active"
      }`}
      onClick={() => props.onClick()}
    >
      <p className="title">
        <span className="number">{props.number}</span>
        {props.title}
      </p>
    </div>
  );
}
