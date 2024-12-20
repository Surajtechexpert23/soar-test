import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { HiMenu, HiSearch, HiCog, HiBell } from "react-icons/hi";

const NavBar = ({ onToggle }) => {
  const [currentLocation, setCurrentLocation] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentLocation(location.pathname.replace("/", ""));
  }, [location.pathname]);

  return (
    <nav className="shadow-md border-b-2 border-slate-200  px-6 z-10  ">
      <div className="h-24 flex items-center justify-between">
        <button onClick={onToggle} className="text-2xl lg:hidden">
          <HiMenu fill="#343C6A" />
        </button>
        <h1 className="text-2xl font-bold text-[#343C6A]">
          {currentLocation === "dashboard"
            ? "Overview"
            : currentLocation === "credit_cards"
            ? "Credit Cards"
            : "Settings"}
        </h1>
        <div className="flex items-center ">
          {/* <div className="relative hidden md:flex">
            <HiSearch className="absolute left-5 top-6 text-gray-500 text-xl " />
            <input
              type="text"
              placeholder="Search for something"
              className="pr-2 py-3 m-2 rounded-full disable bg-gray-100 placeholder:text-gray-400 placeholder:pl-12 "
            />
          </div> */}
          <label class="relative md:block hidden mr-4">
            <span class="sr-only">Search</span>
            <span class="absolute left-5 inset-y-0 flex items-center pl-2 text-gray-500 text-xl">
              <HiSearch fill="#8BA3CB" />
            </span>
            <input
              className="py-3 m-2 rounded-full disable bg-gray-100 placeholder:text-[#8BA3CB]  block w-full pl-12 pr-3"
              placeholder="Search for something"
              type="text"
              name="search"
            />
          </label>
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
      </div>
      {/* <div className="relative flex md:hidden">
        <HiSearch className="absolute left-5 top-6 text-gray-500 text-xl " />
        <input
          type="text"
          placeholder="Search for something"
          className="pr-2 py-3 m-2 w-full rounded-full disable bg-gray-100 placeholder:text-gray-400 placeholder:pl-12 "
        />
      </div> */}
      <label class="relative block md:hidden">
        <span class="sr-only">Search</span>
        <span class="absolute left-5 inset-y-0 flex items-center pl-2 text-gray-500 text-xl">
          <HiSearch fill="#8BA3CB" />
        </span>
        <input
          className="py-3 m-2 rounded-full disable bg-gray-100 placeholder:text-[#8BA3CB]  block w-full pl-12 pr-3"
          placeholder="Search for something"
          type="text"
          name="search"
        />
      </label>
    </nav>
  );
};

export default NavBar;
