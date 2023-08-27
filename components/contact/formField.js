import React, { useEffect, useRef } from "react";

/**
 * Icons imports.
 */
import { BsFillSendFill, BsFillSendCheckFill } from "react-icons/bs";

export default function FormField(props) {
  const submitIconContainerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    if (props.success) {
      tl.fromTo(
        submitIconContainerRef.current,
        {
          rotate: -90,
          scale: 0,
        },
        {
          rotate: 0,
          scale: 1,
          ease: "back.out(1.7)",
        }
      );
    }
  }, [props.success]);

  return (
    <div className="form-field-container">
      <p className="form-title">{props.title}</p>
      {props.multiline ? (
        <div className="flex-row">
          <textarea
            className={props.disabled ? "textarea disabled" : "textarea"}
            placeholder={props.placeholder}
            onChange={(event) => props.setValue(event.target.value)}
            disabled={props.disabled}
          />
          <div
            className={`submit-button ${props.success ? "success" : null} ${
              props.submitDisabled ? "disabled" : null
            }`}
            onClick={() => props.send()}
          >
            {props.sending ? (
              <div className="sending">
                <p>.</p>
                <p>.</p>
                <p>.</p>
              </div>
            ) : props.success ? (
              <div ref={submitIconContainerRef}>
                <BsFillSendCheckFill />
              </div>
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
          disabled={props.disabled}
          type={props.type}
        />
      )}
    </div>
  );
}
