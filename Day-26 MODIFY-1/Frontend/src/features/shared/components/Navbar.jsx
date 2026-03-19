import React from "react";
import "../styles/Navbar.scss";
import useAuth from "../../auth/hooks/useAuth";

const Navbar = () => {
  const { handleLogout } = useAuth();

  async function logoutToggle() {
    await handleLogout();
  }

  return (
    <nav>
      <div className="left">
        <i className="ri-sparkling-line"></i>
        <span>Moodify</span>
      </div>
      <div className="right">
        <i className="ri-notification-3-fill"></i>
        <i onClick={logoutToggle} className="ri-logout-circle-r-line"></i>
      </div>
    </nav>
  );
};

export default Navbar;
