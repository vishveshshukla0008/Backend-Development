import React from "react";
import LeftSidebar from "../components/shared/LeftSidebar";
import Feed from "../features/post/pages/Feed";
import RightSidebar from "../components/shared/RightSidebar";

const MainPage = () => {
  return (
    <div className="main-page">
      <LeftSidebar />
      <Feed />
      <RightSidebar />
    </div>
  );
};

export default MainPage;
