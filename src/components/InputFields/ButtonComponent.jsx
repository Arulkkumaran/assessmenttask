import { PrimaryButton } from "@fluentui/react";
import React from "react";

function ButtonComponent(props) {
  return (
    <div className="btnc-contanier">
      {props?.buttonName ? (
        <PrimaryButton className="btnc-btn" onClick={props?.onClick}>
          {props?.buttonName}
        </PrimaryButton>
      ) : null}
    </div>
  );
}

export default ButtonComponent;
