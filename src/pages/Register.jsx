import React from "react";
import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { registerUser, errorMessage, setErrorMessage } =
    useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    registerUser(email, password)
      .then((res) => {
        console.log("successfully registered");
      })
      .catch((err) => console.log("error", err.message));
  };
  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-5xl font-bold ml-3 mt-3">Register now!</h1>
        <form onSubmit={handleRegister} className="card-body">
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
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        <p className="pl-3 pb-6">
          Already have an account ? Please{" "}
          <span className="text-blue-600">
            <Link to={"/login"}>Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
