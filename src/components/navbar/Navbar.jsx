import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import { HiMenu, HiSearch, HiCog, HiBell } from "react-icons/hi";

const NavBar = ({ onToggle }) => {
  const [currentLocation, setCurrentLocation] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentLocation(location.pathname.replace("/", ""));
  }, [location.pathname]);

  return (
    <nav className="h-24 shadow-md border-b-2 border-slate-200 flex items-center justify-between px-6 z-10">
      <button onClick={onToggle} className="text-2xl lg:hidden">
        <HiMenu />
      </button>
      <h1 className="text-2xl font-bold">
        {currentLocation === "dashboard"
          ? "Overview"
          : currentLocation === "credit_cards"
          ? "Credit Cards"
          : "Settings"}
      </h1>
      <div className="flex items-center ">
        <div className="relative hidden md:flex">
          <HiSearch className="absolute left-5 top-6 text-gray-500 text-xl " />
          <input
            type="text"
            placeholder="Search for something"
            className="pr-2 py-3 m-2 rounded-full disable bg-gray-100 placeholder:text-gray-400 placeholder:pl-12 "
          />
        </div>
        <div
          className="bg-gray-100 rounded-full p-3 hidden md:flex"
          onClick={() => navigate("/settings")}
        >
          <HiCog className="mx-4 text-gray-500 cursor-pointer text-3xl" />
        </div>
        <div className="bg-gray-100 rounded-full p-3 ml-2 hidden md:flex">
          <HiBell className="mx-4 text-gray-500 cursor-pointer text-3xl" />
        </div>
        <img
          src={"https://i.pravatar.cc/50?u=5"}
          alt="avatar"
          className="rounded-full ml-2"
        />
      </div>
    </nav>
  );
};

export default NavBar;
