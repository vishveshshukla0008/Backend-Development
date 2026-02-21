import "./styles/button.scss";
import { TbLoader3 } from "react-icons/tb";

const Button = ({
  children,
  variant = "primary",
  size = "full",
  type = "button",
  isDisabled = false,
  isLoading = false,
  onClick,
  className = "",
}) => {
  return (
    <button
      type={type}
      disabled={isDisabled || isLoading}
      onClick={onClick}
      className={`btn btn-${variant} btn-${size} ${className}`}>
      {isLoading ? <TbLoader3 className="spin" /> : children}
    </button>
  );
};

export default Button;
