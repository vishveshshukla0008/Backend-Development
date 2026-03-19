import React from "react";
import "../styles/Home.scss";
import StarterUI from "../../expression/components/StarterUI";

const Home = () => {
  return (
    <div className="home-page-wrapper">
      <StarterUI />
      <div className="card-wrapper">
        <span>Current Mood</span>
        <div className="card">
          <i class="ri-emotion-happy-fill"></i>
          <div>
            <span>Detected Vibe</span>
            <span>Radiant Joy</span>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <span>Music for Your Mood</span>

        <div className="music-card-wrapper">
          <div className="img-wrapper">
            <img src="images/music1.jpg" alt="" />
          </div>
          <div className="img-wrapper">
            <img src="images/music2.jpg" alt="" />
          </div>
          <div className="img-wrapper">
            <img className="third" src="images/music3.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
