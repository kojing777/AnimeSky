import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login logic
    toast.success("Logged in successfully!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back!</h2>
        <p className="login-subtitle">Sign in to continue to H!Anime</p>
        <form className="login-form" onSubmit={handleLogin}>
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
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Sign In
          </button>
          <div className="login-links">
            <Link to="/forgot-password">Forgot Password?</Link>
            <span>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </span>
          </div>
        </form>
        <div className="social-login">
          <p>Or continue with</p>
          <div className="social-icons">
            <button className="social-button google">
              <i className="fab fa-google"></i>
            </button>
            <button className="social-button facebook">
              <i className="fab fa-facebook"></i>
            </button>
            <button className="social-button twitter">
              <i className="fab fa-twitter"></i>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;