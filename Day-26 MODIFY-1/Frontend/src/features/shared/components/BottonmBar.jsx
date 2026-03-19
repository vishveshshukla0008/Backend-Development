import React from "react";
import "../styles/BottomBar.scss";

const BottonmBar = () => {
  return (
    <div className="bottom-bar">
      <div>
        <i className="ri-home-5-line"></i>
        <span>Home</span>
      </div>
      <div>
        <i className="ri-compass-discover-line"></i>
        <span>Discover</span>
      </div>
      <div>
        <i className="ri-account-circle-line"></i>
        <span>Profile</span>
      </div>
    </div>
  );
};

export default BottonmBar;
