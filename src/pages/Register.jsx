import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { registerUser, setUser, googleLogin, setErrorMessage } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    setErrorMessage(null);
    googleLogin(googleProvider)
      .then((res) => {
        setUser(res.user);
        toast.success("Registration Successful");
        navigate("/");
      })
      .catch(() => {
        toast.error("Something Wrong");
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    registerUser(email, password)
      .then(() => {
        toast.success("Registration Successful");
        navigate("/");
      })
      .catch(() => {
        toast.error("Something Wrong");
      });
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
        <div className="text-center mb-4">
          <button
            onClick={handleGoogleLogin}
            className="cursor-pointer btn-md px-6 btn shadow-lg"
          >
            Sign Up With Google{" "}
            <span className="ml-1 text-xl">
              <FcGoogle />
            </span>
          </button>
        </div>
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
