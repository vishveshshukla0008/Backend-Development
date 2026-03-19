import "../styles/Form.scss";
import { FormGroup } from "../../shared/components/FormGroup";
import Button from "../../shared/components/Button";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();

  const { handleLogin, loading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onSubmit",
  });

  async function onSubmit(data) {
    await handleLogin(data);
    navigate("/");
  }

  return (
    <div className="form-outer">
      <div className="form-inner">
        <div className="header">
          <i className="ri-arrow-left-line"></i>
          <span>Login</span>
        </div>

        <div className="dummy-img">
          <img src="images/blackMat.jpg" alt="" />
        </div>

        <div className="text-part">
          <h1>Join our community</h1>
          <p>Sign in to your account to continue</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="both">
            <FormGroup
              label="Username"
              name="username"
              type="text"
              placeholder="Enter your username"
              register={register}
              errors={errors}
              rules={{
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters",
                },
                pattern: {
                  value: /^[a-zA-Z0-9_]+$/,
                  message: "Only letters, numbers and underscore allowed",
                },
              }}
            />
          </div>

          <FormGroup
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            isPasswordInput
            register={register}
            errors={errors}
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            }}
          />

          <Button content="Login" isLoading={isSubmitting || loading} />
        </form>

        <p className="link-p">
          Not have an account ?{" "}
          <Link className="link" to="/register">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
