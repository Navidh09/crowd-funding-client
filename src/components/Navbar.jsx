import React from "react";
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(user);

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>

      <li>
        <NavLink to={"/campaigns"}>All Campaign</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={"/addCampaign"}>Add New Campaign</NavLink>
          </li>
          <li>
            <NavLink to={"/myCampaign"}>My Campaign</NavLink>
          </li>
          <li>
            <NavLink to={"/myDonation"}>My Donations</NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleSignOut = () => {
    logOutUser()
      .then(() => {
        toast.success("logged out");
        navigate("/login");
      })
      .catch(() => {
        toast.error("something error");
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-3xl text-[#8A2BE2]">
          Crowdcube
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {!user ? (
          <div className="space-x-2">
            <NavLink
              className="btn hover:bg-white hover:text-[#8A2BE2] hover:font-bold"
              to={"/login"}
            >
              Log In
            </NavLink>

            <NavLink
              className="btn hover:bg-white hover:text-[#8A2BE2] hover:font-bold"
              to={"/register"}
            >
              Register
            </NavLink>
          </div>
        ) : (
          <div className="flex items-center gap-5">
            {user.photoURL ? (
              <div className="w-[40px]">
                <div
                  className="tooltip tooltip-bottom"
                  data-tip={user.displayName}
                >
                  <img className="rounded-full" src={user.photoURL} alt="" />
                </div>
              </div>
            ) : (
              <div className="tooltip tooltip-bottom" data-tip="User">
                <FaRegUserCircle className="text-3xl"></FaRegUserCircle>
              </div>
            )}

            <button
              onClick={handleSignOut}
              className="btn btn-neutral hover:bg-white hover:text-black"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
