import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { loginUser, errorMessage, setErrorMessage, setUser, googleLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    setErrorMessage(null);
    googleLogin(googleProvider)
      .then((res) => {
        setUser(res.user);
        toast.success("Login Successful");
        navigate("/");
      })
      .catch(() => {
        toast.error("Something Wrong");
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage(null);
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((res) => {
        setUser(res.user);
        toast.success("Login Successful");
        navigate("/");
      })
      .catch(() => {
        setErrorMessage("Wrong email or password");
      });
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

          <div className="text-red-500 ml-3">
            {errorMessage && <p>{errorMessage}</p>}
          </div>
        </form>
        <div className="text-center mb-4">
          <button
            onClick={handleGoogleLogin}
            className="cursor-pointer btn-md px-6 btn shadow-lg"
          >
            Sign In With Google
            <span className="ml-1 text-xl">
              <FcGoogle />
            </span>
          </button>
        </div>
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
