import { useForm } from "react-hook-form";
import "../styles/forms.scss";
import Button from "../../../components/shared/Button";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const { handleLogin, loading } = useAuth();

  function onSubmit(data) {
    handleLogin(data);
  }

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

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
            <Button content="Log in" isDisabled={!isValid || loading} />
          </form>
          <div className="line-wrapper">
            <div className="line"></div>
            <span>OR</span>
            <div className="line"></div>
          </div>
          <p>
            Don't have an account ?{" "}
            <Link className="link" to="/signup">
              Sign up
            </Link>{" "}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
