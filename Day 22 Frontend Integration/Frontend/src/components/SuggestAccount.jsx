import React from "react";
import "../styles/components/suggestAccount.scss";

const SuggestAccount = ({ user }) => {
  return (
    <div className="module-wrapper">
      <div className="image-section">
        <img src="/dummy/reshu.jpg" alt="" />
      </div>
      <div className="user-details">
        <p className="username">astik._.shukla</p>
        <p className="desc">{user ? "Astik Shukla" : "Following you"}</p>
      </div>
      <span className="switch-btn">Switch</span>
    </div>
  );
};

export default SuggestAccount;
