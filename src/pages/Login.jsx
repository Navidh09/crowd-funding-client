import React from "react";
import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { loginUser, errorMessage, setErrorMessage } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((res) => {
        console.log("successfully logged in");
      })
      .catch((err) => console.log("error", err.message));
  };
  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-5xl font-bold ml-3 mt-3">Login now!</h1>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="fieldset-label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="fieldset-label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <p className="pl-3 pb-6">
          Don't have an account ? Please{" "}
          <span className="text-blue-600">
            <Link to={"/register"}>Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
