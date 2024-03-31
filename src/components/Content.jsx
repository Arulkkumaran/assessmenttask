import { Persona, PersonaSize } from "@fluentui/react";
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";

function Content(props) {
  const { isAuthenticated, userData } = useSelector((state) => state.user);
  const profileData = {
    imageUrl: userData?.picture,
    text: userData?.name,
    secondaryText: userData?.updated_at
      ? `Updated At: ${moment(userData.updated_at).format(
          "MMMM Do YYYY, h:mm:ss a"
        )}`
      : null,
    tertiaryText: userData?.sub ? `Subscried: ${userData.sub}` : null,
  };

  return (
    <div className="content-container">
      {isAuthenticated && (
        <>
          <Persona
            className="profile-container"
            {...profileData}
            size={PersonaSize.size120}
            imageAlt="Annie Lindqvist, status is offline"
          />
        </>
      )}
    </div>
  );
}

export default Content;
