import "../styles/Form.scss";
import { FormGroup } from "../../shared/components/FormGroup";
import Button from "../../shared/components/Button";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from "react-router";

const Registration = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onSubmit",
  });

  const { handleRegister, loading } = useAuth();

  async function onSubmit(data) {
    console.log(data);
    await handleRegister(data);
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
          <img src="images/dummy.jpg" alt="" />
        </div>

        <div className="text-part">
          <h1>Join our community</h1>
          <p>Sign up to your account to continue</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="both">
            <FormGroup
              label="Fullname"
              name="fullname"
              type="text"
              placeholder="Enter your fullname"
              register={register}
              errors={errors}
              rules={{
                required: "Fullname is required",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters required",
                },
              }}
            />

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
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            register={register}
            errors={errors}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            }}
          />

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

          <Button content="Register now" isLoading={isSubmitting || loading} />
        </form>

        <p className="link-p">
          Already have an account?{" "}
          <Link className="link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
