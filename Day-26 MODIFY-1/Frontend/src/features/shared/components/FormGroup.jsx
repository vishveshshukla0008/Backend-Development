import { useState } from "react";

export const FormGroup = ({
  label,
  name,
  type = "text",
  placeholder,
  isPasswordInput = false,
  register,
  errors,
  rules,
}) => {
  const [showPass, setShowPass] = useState(false);

  function toggle() {
    setShowPass((prev) => !prev);
  }

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>

      <div className="input-wrapper">
        <input
          id={name}
          type={isPasswordInput ? (showPass ? "text" : "password") : type}
          placeholder={placeholder}
          {...register(name, rules)}
        />
        {isPasswordInput && (
          <div className="eye-toggle" onClick={toggle}>
            {showPass ? (
              <i className="ri-eye-off-fill"></i>
            ) : (
              <i className="ri-eye-fill"></i>
            )}
          </div>
        )}
      </div>

      {errors[name] && <span className="error">{errors[name].message}</span>}
    </div>
  );
};
