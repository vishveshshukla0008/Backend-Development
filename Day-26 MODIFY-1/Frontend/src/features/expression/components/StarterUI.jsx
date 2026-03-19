import Button from "../../shared/components/Button";
import "../styles/Starter.scss";
import { Link } from "react-router";

const StarterUI = () => {
  return (
    <div className="wrapper">
      <div className="logo-wrapper">
        <div className="inner">
          <i className="ri-camera-ai-fill"></i>
        </div>
      </div>

      <div>
        <p className="first">Scan your mood</p>
        <p className="second">
          Let AI analyze your vibe and curate the perfect sound
        </p>
      </div>

      <Link className="start-link" to={"/expression"}>
        <Button content="Start Scanning" />
      </Link>
    </div>
  );
};

export default StarterUI;
