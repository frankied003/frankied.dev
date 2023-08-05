import React from "react";

/**
 * Icons imports.
 */
import { BsFillSendFill } from "react-icons/bs";

export default function FormField(props) {
  return (
    <div className="form-field-container">
      <p className="form-title">{props.title}</p>
      {props.multiline ? (
        <div className="flex-row">
          <textarea className="textarea" placeholder={props.placeholder} />
          <div className="submit-button">
            <BsFillSendFill />
          </div>
        </div>
      ) : (
        <input className="input" placeholder={props.placeholder} />
      )}
    </div>
  );
}
