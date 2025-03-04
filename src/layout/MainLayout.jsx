import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MainLayout = () => {
  const { loader } = useContext(AuthContext);
  if (loader) {
    return (
      <h2 className="flex items-center justify-center mt-60">
        <span className="loading loading-bars loading-xl"></span>
      </h2>
    );
  }
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
