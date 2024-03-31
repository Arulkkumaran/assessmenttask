import React from "react";
import { TextField, Label } from "@fluentui/react";

function TextFieldComponent(props) {
  return (
    <div className="txtfc-contanier">
      {props.label ? (
        <Label className="txtfc-label">{props.label}</Label>
      ) : null}
      <TextField
        type={props.isMasked ? "password" : "text"}
        canRevealPassword={props?.showPassword}
      />
    </div>
  );
}

export default TextFieldComponent;
