import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signup.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    // Simulate signup logic
    toast.success("Account created successfully!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create an Account</h2>
        <p className="signup-subtitle">Join An!meSky to explore more</p>
        <form className="signup-form" onSubmit={handleSignUp}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group password-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="form-control"
                placeholder="Enter your password"
                required
              />
              <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </span>
            </div>
          </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
          <div className="signup-links">
            <span>
              Already have an account? <Link to="/login">Log In</Link>
            </span>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;