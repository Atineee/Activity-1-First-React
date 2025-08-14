import React from "react";
import justine from "../assets/justine.jpg"; // import from assets

export default function ProfilePicture() {
  return (
    <div className="profile-picture">
      <img src={justine} alt="Justine" />
    </div>
  );
}
