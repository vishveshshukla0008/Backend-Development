import React from "react";
import "../styles/components/rightSidebar.scss";
import SuggestAccount from "./suggestAccount";

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <SuggestAccount />

      <div className="heading">
        <p>Suggested for you</p>
        <p className="right">see all</p>
      </div>

      <SuggestAccount />
      <SuggestAccount />
      <SuggestAccount />
      <SuggestAccount />
      <SuggestAccount />

      <footer>
    
          <p>
            About • Help • Press • API • Jobs • Privacy • Terms • Locations •
            Language • Meta Verified
          </p>
      

        <div className="last">© 2026 Instagram from Meta</div>
      </footer>
    </div>
  );
};

export default RightSidebar;
