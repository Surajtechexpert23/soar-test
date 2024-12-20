import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import userImage from "../../assets/user.png";
import notification from "../../assets/notification.png";
import setting from "../../assets/settings.png";
import { HiMenu, HiSearch } from "react-icons/hi";
import { useSelector } from "react-redux";

const NavBar = ({ onToggle }) => {
  const [currentLocation, setCurrentLocation] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const profile = useSelector((state) => state.profile);
  useEffect(() => {
    setCurrentLocation(location.pathname.replace("/", ""));
  }, [location.pathname]);

  return (
    <nav className="md:shadow-md md:border-b-2 border-slate-200  px-6 z-10  ">
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
          <label className="relative md:block hidden mr-4">
            <span className="sr-only">Search</span>
            <span className="absolute left-5 inset-y-0 flex items-center pl-2 text-gray-500 text-xl">
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
            className="bg-gray-100 rounded-full p-3  m-5 hidden md:flex"
            onClick={() => navigate("/settings")}
          >
            <img
              src={setting}
              alt="avatar"
              className="rounded-full  w-[25px] h-[25px] cursor-pointer"
            />
            {/* <HiCog className="mx-4 text-gray-500 cursor-pointer text-3xl" /> */}
          </div>
          <div className="bg-gray-100 rounded-full p-3 m-5 hidden md:flex">
            <img
              src={notification}
              alt="avatar"
              className="rounded-full  w-[20px] h-[25px] "
            />
          </div>
          <div className="bg-gray-100 rounded-full ml-4 md:flex">
            <img
              src={userImage}
              alt="avatar"
              className="rounded-full w-[50px] lg:w-[70px]"
            />
          </div>
        </div>
      </div>
      <label className="relative block md:hidden">
        <span className="sr-only">Search</span>
        <span className="absolute left-2 inset-y-0 flex items-center pl-2 text-gray-500 text-xl">
          <HiSearch fill="#8BA3CB" />
        </span>
        <input
          className="py-3 my-2 rounded-full disable bg-gray-100 placeholder:text-[#8BA3CB]  block w-full pl-12 pr-3"
          placeholder="Search for something"
          type="text"
          name="search"
        />
      </label>
    </nav>
  );
};

export default NavBar;
