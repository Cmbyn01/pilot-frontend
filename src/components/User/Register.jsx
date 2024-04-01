import React, { useState } from "react";
import '../../css/Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import registerImage from "../../images/register.jpg"

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    status: "Student", // Default value set to "Student"
    password: "",
    confirmPassword: "",
    otp: "",
  });
  const [msg, setMsg] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePassword = () => {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return pattern.test(formData.password);
  };

  const validateConfirmPassword = () => {
    return formData.password === formData.confirmPassword;
  };

  const sendOtp = () => {
    // Simulate sending OTP (you can implement the actual API call here)
    // For demonstration, here we'll just log the form data
    console.log("Sending OTP:", formData);
    // Simulate OTP sent successfully
    setOtpSent(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword()) {
      setMsg(
        "Password must contain at least 8 characters, including at least 1 lowercase letter, 1 uppercase letter, and 1 number."
      );
      return;
    }
    if (!validateConfirmPassword()) {
      setMsg("Passwords do not match.");
      return;
    }
    

    // Submit the form (you can implement the actual form submission logic here)
    console.log("Form Submitted:", formData);
    setMsg(""); // Clear error message
  };

  return (
    <div className="mx-5 mb-5">
      {msg && <div className="alert alert-danger" role="alert">{msg}</div>}
      <div className="d-flex justify-content-between gap-2 align-items-center my-5">
        <div className="h-75 w-50 d-flex justify-content-center">
        <img
            src={registerImage} 
            width="80%"
            height="80%"
            alt="register"
          />
        </div>
        <div
          className="card w-50 my-0"
          style={{
            boxShadow:
              "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)",
          }}
        >
          <h2 className="card-header text-danger">Sign Up</h2>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-1">
                <label htmlFor="name" className="form-label text-danger">
                  Full Name*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-1">
                <label htmlFor="email" className="form-label text-danger">
                  Email address*
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-describedby="emailHelp"
                  required
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-1">
                <label htmlFor="phone" className="form-label text-danger">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-1">
                <label htmlFor="status" className="form-label text-danger">
                  Status*
                </label>
                <select
                  className="form-select"
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                >
                  <option value="Student">Student</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Organization">Organization</option>
                </select>
              </div>
              <div className="mb-1">
                <label htmlFor="password" className="form-label text-danger">
                  Password*
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <div className="form-text">
                  Password must contain at least 8 characters, including at least one lowercase letter, one uppercase letter, and one number.
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor="confirmPassword" className="form-label text-danger">
                  Confirm Password*
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Add similar input fields for other form fields */}
              {otpSent ? (
                <div className="mb-1" id="otpField">
                  <label htmlFor="otp" className="form-label text-danger">
                    OTP*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="otp"
                    name="otp"
                    value={formData.otp}
                    onChange={handleChange}
                    required
                  />
                </div>
              ) : (
                <button
                  type="button"
                  id="sendOtpButton"
                  className="btn btn-primary mb-2"
                  onClick={sendOtp}
                >
                  Send OTP
                </button>
              )}
              <button
                type="submit"
                id="submitBtn"
                className="btn btn-danger mb-2"
                disabled={!otpSent}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
