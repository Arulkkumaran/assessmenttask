import React from "react";
import { Image } from "@fluentui/react";
import { Logo } from "../images/shared";
import { Login, LoginSocial } from "./shared";
import { useAuth0 } from "@auth0/auth0-react";

function Header(props) {
  const { user } = useAuth0();
  return (
    <div className="header-container">
      <div className="naviagtion-container">
        <Image className="header-logo" src={Logo} />
        {props?.isInteranlLogin ? <Login /> : <LoginSocial />}{" "}
      </div>
      {props?.textBanner ? (
        <div className="header-bgtext-container">
          <div className="header-bgtext-img" />
          <h3 className="header-bgtext-title">
            {" "}
            {`${user?.name ? "Welcome, " + user.name + "!" : "LOGIN"}`}
          </h3>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
