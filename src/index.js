import React from "react";
import ReactDOM from "react-dom/client";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

initializeIcons(undefined);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={"dev-r63p5gihxkwi7l52.us.auth0.com"}
      clientId={"OkrOmhCtRQYNH5mUXuPS370EKJY37aiq"}
      authorizationParams={{ redirect_uri: "http://localhost:3000" }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
