import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  function onSubmit(data) {
    console.log("Login Data:", data);
  }

  return (
    <main>
      <div className="uiImage">
        <img src="images/insta.png" alt="" />
      </div>

      {/* <div className="form-container">
        <div className="form-content-wrapper">
          <p className="heading">Instagram</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              {...register("username", {
                required: "Username is required!",
              })}
              placeholder="Username"
            />
            {errors.username && (
              <p className="error-p">{errors.username.message}</p>
            )}

            <input
              type="password"
              {...register("password", {
                required: "Password is required!",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                maxLength: {
                  value: 12,
                  message: "Password must not exceed 12 characters",
                },
              })}
              placeholder="Password"
            />

            {errors.password && (
              <p className="error-p">{errors.password.message}</p>
            )}

            <button disabled={!isValid}>Log in</button>
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
            </Link>
          </p>
        </div>
      </div> */}
    </main>
  );
};

export default Login;
