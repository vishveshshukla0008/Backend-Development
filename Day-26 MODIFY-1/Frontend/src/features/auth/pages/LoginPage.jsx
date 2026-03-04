import { FormGroup } from "../../shared/components/FormGroup";
import "../styles/Form.scss";
import Button from "../../shared/components/Button";
const LoginPage = () => {
  function onSubmit(e) {
    e.preventDefault();
    console.log(data);
  }

  return (
    <div className="form-outer ">
      <div className="form-inner">
        <div className="header">
          <i class="ri-arrow-left-line"></i>
          <span>Login</span>
        </div>

        <div className="dummy-img">
          <img src="images/dummy.jpg" alt="" />
        </div>

        <div className="text-part">
          <h1>Welcome Back</h1>
          <p>Sign in to your account to continue</p>
        </div>
        <form onSubmit={onSubmit}>
          <div className="both">
            <FormGroup
              label="Fullname"
              type="text"
              placeholder="Enter your fullname"
            />
            <FormGroup
              label="Username"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <FormGroup
            label="Email"
            type="email"
            placeholder="Enter your email"
          />
          <FormGroup
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
          <Button content={"Login"} />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
