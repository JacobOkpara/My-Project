import React, { useState } from "react";
import "./login.css";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.username === "jacob" && state.password === "code") {
      navigate("/home");
    }
  };

  return (
    <div className="login">
      <h1> Login Now </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          className="input-box"
          placeholder=" Your Username"
          value={state.username}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          value={state.password}
          className="input-box"
          placeholder=" Your Password"
          onChange={handleChange}
        />
        <br />
        <p>
          <span>
            <input type="checkbox" />
          </span>
          I agree to the terms of services
        </p>
        <button type="button" class="Signup-btn">
          Sign up
        </button>
        <hr />
        <p class="or">OR</p>
        <button type="submit" class="Twitter-btn">
          Login Here
        </button>
        <p>
          Do you have an account? <Link to="/">Sign in</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
