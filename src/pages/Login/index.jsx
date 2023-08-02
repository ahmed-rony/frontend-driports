import React, { useContext, useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import AuthContext from "../../utils/Reducers/AuthReducer";
import { newRequest } from "utils/newRequest";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error, dispatch } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/client/auth/login", {
        username,
        password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      window.location.href = "/";
    } catch (err) {
      dispatch({ type: "LOGIN_FAIL", payload: err?.response?.data });
      console.log(err);
    }
  };

  return (
    <>
      <section className="login">
        <form onSubmit={handleSubmit} className="login-form">
          <div elevation={3} className="login-box">
            <h2>Sign In</h2>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              disabled={loading}
              type="submit"
              className="brand-btn login-btn"
            >
              Login
            </button>
            {error && <small style={{ color: "orange" }}>{error}</small>}
            <small>
              Don't have an account? <Link to="/register">register</Link>
            </small>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
