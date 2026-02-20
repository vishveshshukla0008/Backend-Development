import { useForm } from "react-hook-form";
import "../styles/forms.scss";
import Button from "../../../components/shared/Button";
import { Link } from "react-router";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const { handleRegister, loading } = useAuth();

  function onSubmit(data) {
    handleRegister(data);
  }

  return (
    <main>
      <div className="uiImage">
        <img src="dummy/insta.png" alt="" />
      </div>
      <div className="form-container">
        <div className="form-content-wrapper">
          <p className="heading">Instagram</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("fullName", {
                required: { value: true, message: "Full name is required!" },
                minLength: {
                  value: 3,
                  message: "Full name should be atleast 3 characters long!",
                },
              })}
              type="text"
              placeholder="Full Name"
            />
            {errors.fullName && (
              <p className="error-p">{errors.fullName.message}</p>
            )}
            <input
              type="email"
              {...register("email", {
                required: { value: true, message: "Email is required!" },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address!",
                },
              })}
              placeholder="Email Address"
            />

            {errors.email && <p className="error-p">{errors.email.message}</p>}
            <input
              type="text"
              {...register("username", {
                required: { value: true, message: "Username is required !" },
              })}
              placeholder="Username"
            />
            {errors.username && (
              <p className="error-p">{errors.username.message}</p>
            )}

            <input
              type="password"
              {...register("password", {
                required: { value: true, message: "Password is required!" },
                minLength: {
                  value: 8,
                  message: "Password should be at least 8 characters long!",
                },
                maxLength: {
                  value: 12,
                  message:
                    "Password should not be more than 12 characters long!",
                },
              })}
              placeholder="Password"
            />
            {errors.password && (
              <p className="error-p">{errors.password.message}</p>
            )}

            <Button
              content="create an account"
              isDisabled={!isValid || loading}
            />
          </form>
          <div className="line-wrapper">
            <div className="line"></div>
            <span>OR</span>
            <div className="line"></div>
          </div>
          <p>
            Already have an account ?{" "}
            <Link className="link" to="/login">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Register;
