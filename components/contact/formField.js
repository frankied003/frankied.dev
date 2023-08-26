import React from "react";

/**
 * Icons imports.
 */
import { BsFillSendFill, BsFillSendCheckFill } from "react-icons/bs";

export default function FormField(props) {
  return (
    <div className="form-field-container">
      <p className="form-title">{props.title}</p>
      {props.multiline ? (
        <div className="flex-row">
          <textarea
            className="textarea"
            placeholder={props.placeholder}
            onChange={(event) => props.setValue(event.target.value)}
            disabled={props.sending || props.success}
          />
          <div
            className={`submit-button ${props.success ? "success" : null}`}
            disabled={props.sending || props.success}
            onClick={() => props.send()}
          >
            {props.sending ? (
              "..."
            ) : props.success ? (
              <BsFillSendCheckFill />
            ) : (
              <BsFillSendFill />
            )}
          </div>
        </div>
      ) : (
        <input
          className="input"
          onChange={(event) => props.setValue(event.target.value)}
          placeholder={props.placeholder}
          disabled={props.sending || props.success}
        />
      )}
    </div>
  );
}
