import { BsPencilSquare } from "react-icons/bs";
import "./style/Navbar.scss";
import { useNavigate } from "react-router";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="left">Instagram</div>
      <div className="right">
        <BsPencilSquare
          onClick={() => navigate("/createpost")}
          className="createBtn"
        />
      </div>
    </nav>
  );
};

export default Navbar;
