// CSS
import "./Input.css";

export default function Input({ placeholder, value, callback, type = "text" }) {
  return (
    <div className="form-child">
      <input
        type={type}
        className="input"
        placeholder={placeholder}
        value={value}
        onChange={callback}
      />
    </div>
  );
}
