import React from "react";

import "./Avatar.scss";
import myPhoto from "../assets/photos/avatar_mountains.jpg";

const avatar = () => {
  return (
    <div className="avatar_wrapper">
      <img className="avatar_photo" src={myPhoto} alt="My Profile img"></img>{" "}
    </div>
  );
};

export default avatar;
