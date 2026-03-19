import "../styles/ExpressionPage.scss";
import { useEffect, useRef, useState } from "react";
import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";
import { detect, init } from "../utils/utils";
import useExpression from "../hooks/useExpression";

export default function FaceExpression() {
  const { setMood, loadingPlaylist, suggestPlaylist, mood } = useExpression();
  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const animationRef = useRef(null);
  const streamRef = useRef(null);

  const [expression, setExpression] = useState("Hey Lets test us ! 👇");

  async function getPlaylist() {
    await suggestPlaylist(mood);
  }

  useEffect(() => {
    init({ landmarkerRef, videoRef, streamRef });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      if (landmarkerRef.current) {
        landmarkerRef.current.close();
      }

      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="expression-component" style={{ textAlign: "center" }}>
      <video ref={videoRef} playsInline />
      <div>
        <span>
          <span>
            Look straight at the camera and press the detect button while we
            analyze your mood
          </span>
        </span>
        <h2>{expression}</h2>
      </div>
      <button
        onClick={() => {
          detect({
            landmarkerRef,
            videoRef,
            streamRef,
            setExpression,
            setMood,
          });
          getPlaylist();
        }}>
        Detect expression
      </button>
    </div>
  );
}
