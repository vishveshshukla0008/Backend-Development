export const FormGroup = ({ label, type, placeholder }) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} placeholder={placeholder} />
    </div>
  );
};
