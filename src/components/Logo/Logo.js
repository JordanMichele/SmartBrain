// Logo Component
import React from "react";
import Tilt from "react-tilt";
import GoBlue from "./michigan.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 50 }}
        style={{ height: 250, width: 250 }}
      >
        <div className="Tilt-inner pa2">
          <img style={{ paddingTop: "35px" }} src={GoBlue} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
