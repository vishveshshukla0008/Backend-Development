import "../styles/form.scss";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import Button from "../../../components/ui/Button";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { handleLogin, loading } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const [showPass, setShowPass] = useState(false);

  function toggleShowPass() {
    setShowPass((prev) => !prev);
  }

  async function onSubmit(data) {
    await handleLogin(data);
    reset();
  }

  return (
    <main>
      <div className="uiImage">
        <img src="images/insta.png" alt="" />
      </div>

      <div className="form-container">
        <div className="form-content-wrapper">
          <p className="heading">Instagram</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Username"
              {...register("username", { required: "username can't blank" })}
            />
            {errors.username ? (
              <p className="error-p">{errors.username.message}</p>
            ) : (
              ""
            )}

            <div className="password-div">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Password"
                {...register("password", {
                  required: "Password cant blank",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 charcters long",
                  },
                  maxLength: {
                    value: 16,
                    message:
                      "Password should not greater than 16 characters long",
                  },
                })}
              />
              <span onClick={toggleShowPass}>
                {showPass ? <IoEye /> : <FaEyeSlash />}
              </span>
            </div>
            {errors.password ? (
              <p className="error-p">{errors.password.message}</p>
            ) : (
              ""
            )}

            <Button
              children="Log in"
              isDisabled={!isValid || loading}
              type="submit"
              isLoading={loading}
            />
          </form>

          <div className="line-wrapper">
            <div className="line"></div>
            <span>OR</span>
            <div className="line"></div>
          </div>

          <p>
            <span>Don't have an account ?</span>
            <Link className="link" to="/register">
              Create
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
