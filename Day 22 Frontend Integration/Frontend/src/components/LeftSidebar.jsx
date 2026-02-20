import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { TbSend } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoStatsChart } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaMeta } from "react-icons/fa6";

import "../styles/components/leftSidebar.scss";

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <div className="wrapper">
        <div className="link-wrapper">
          <IoLogoInstagram size={28} />
        </div>
        <div className="link-wrapper">
          <AiFillHome size={24} />
          <span>Home</span>
        </div>
        <div className="link-wrapper">
          <SiGoogledisplayandvideo360 size={24} />
          <span>Reels</span>
        </div>
        <div className="link-wrapper">
          <div className="msg-wrapper">
            <TbSend size={24} className="msg-icon" />
            <p className="message-count">12</p>
          </div>

          <span>messages</span>
        </div>
        <div className="link-wrapper">
          <FiSearch size={24} />
          <span>Search</span>
        </div>
        <div className="link-wrapper">
          <MdOutlineExplore size={24} />
          <span>Explore</span>
        </div>
        <div className="link-wrapper">
          <FaRegHeart size={24} />
          <span>Notifications</span>
        </div>
        <div className="link-wrapper">
          <FaPlus size={24} />
          <span>Create</span>
        </div>
        <div className="link-wrapper">
          <IoStatsChart size={24} />
          <span>Dashboard</span>
        </div>
        <div className="link-wrapper">
          <img className="profileImg" src="./dummy/reshu.jpg" alt="" />
          <span>Profile</span>
        </div>
        <div className="link-wrapper">
          <RxHamburgerMenu size={24} />
          <span>More</span>
        </div>
        <div className="link-wrapper">
          <FaMeta size={24} />
          <span>Also from Meta</span>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
