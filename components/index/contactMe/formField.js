import React from "react";

export default function FormField(props) {
  return (
    <div className="form-field-container">
      <p className="title">{props.title}</p>
      {props.multiline ? (
        <textarea className="textarea" placeholder={props.placeholder} />
      ) : (
        <input className="input" placeholder={props.placeholder} />
      )}
    </div>
  );
}
