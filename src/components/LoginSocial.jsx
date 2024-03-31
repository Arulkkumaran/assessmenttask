import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { ButtonComponent } from "./InputFields/shared";

function LoginSocial(props) {
  const { loginWithRedirect, logout } = useAuth0();
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      {!isAuthenticated ? (
        <ButtonComponent
          buttonName="Sign In"
          onClick={() => loginWithRedirect()}
        />
      ) : (
        <ButtonComponent
          buttonName="Sign Out"
          onClick={() =>
            logout({ logoutParams: { returnTo: "http://localhost:3000" } })
          }
        />
      )}
    </>
  );
}

export default LoginSocial;
