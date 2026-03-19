import FaceExpression from "../components/FaceExpression";
import useExpression from "../hooks/useExpression";
import "../styles/ExpressionPage.scss";
import React from "react";

const ExpressionPage = () => {
  const { mood, playlist, loadingPlaylist } = useExpression();
  return (
    <div className="expression-wrapper">
      <FaceExpression />
      <div className="playlist-section">
        <h1>Suggested Playlist - {mood ?? null}</h1>

        {loadingPlaylist ? (
          <h2>suggesting playlist.. Please wait</h2>
        ) : (
          playlist && (
            <div className="playlist">
              <div className="card">
                <img
                  src={
                    mood == "surprised"
                      ? "images/surprised.jpg"
                      : mood == "sad"
                        ? "images/sad.jpg"
                        : "images/happy.jpg"
                  }
                  alt=""
                />

                <div className="overlay">Listen Now</div>

                <div className="play-btn">
                  <i className="ri-play-large-line"></i>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ExpressionPage;
