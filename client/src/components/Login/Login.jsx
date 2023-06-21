import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Welcome to SharkBuz</h1>
        <div className="alien">
            <img src="../../src/assets/images/alien.png" className="" alt="alien" />
        </div>
        <div className="earth">
          <img src="../../src/assets/images/earth.png" className="" alt="earth" />
        </div>
      </div>
      <div className="login-right">
        <div className="login-contents">
          <h1>Create Account</h1>
          <div className="sign-in-links">
            <div className="google">
              <img src="../../src/assets/icons/google.svg" alt="" />
              <p>Sign up with Google</p>
            </div>
            <div className="facebook">
              <img src="../../src/assets/icons/facebook.svg" alt="" />
              <p>Sign up with Facebook</p>
            </div>
          </div>
          <h3>- OR -</h3>
          <form action="">
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Full Name"
            />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email Address"
            />
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Password"
            />
            <input type="submit" value="Create Account" />
            <div className="already">
              <p>
                Already have an account? <span>Login</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
