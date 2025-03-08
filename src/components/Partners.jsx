import React from "react";
import { FcGoogle } from "react-icons/fc";
import {
  SiAdidas,
  SiCocacola,
  SiNike,
  SiPuma,
  SiReebok,
  SiUbereats,
} from "react-icons/si";
import { TiVendorMicrosoft } from "react-icons/ti";

const Partners = () => {
  return (
    <div className="w-9/12 mx-auto">
      <h1 className="text-center text-3xl font-semibold text-[#8A2BE2]">
        Our Proud Partners -
      </h1>
      <div className="flex items-center gap-10 justify-center mt-8">
        <SiCocacola className="text-7xl"></SiCocacola>
        <TiVendorMicrosoft className="text-6xl"></TiVendorMicrosoft>
        <FcGoogle className="text-5xl"></FcGoogle>
        <SiUbereats className="text-5xl" />
        <SiAdidas className="text-6xl" />
        <SiNike className="text-7xl"></SiNike>
        <SiPuma className="text-6xl"></SiPuma>
        <SiReebok className="text-7xl"></SiReebok>
      </div>
    </div>
  );
};

export default Partners;
