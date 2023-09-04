import React from "react";

/**
 * Icon imports.
 */
import { BsArrowRight } from "react-icons/bs";

export default function VisitButton(props) {
  return (
    <a className="visit-button-container" href={props.link} target="#">
      <p className="visit-title">Visit</p>
      <BsArrowRight className="icon" />
    </a>
  );
}
