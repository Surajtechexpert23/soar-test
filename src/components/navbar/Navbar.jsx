import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import userImage from '../../assets/user.png'
import notification from '../../assets/notification.png'
import setting from '../../assets/settings.png'
import { HiMenu, HiSearch } from "react-icons/hi";
import { useSelector } from "react-redux";

const NavBar = ({ onToggle }) => {
  const [currentLocation, setCurrentLocation] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const profile = useSelector((state) => state.profile);
  // useEffect(()=>{
  //   console.log("userdata",profile)
  // },[profile])
  console.log({profile});
  
// const userdata=useSelector((state)=> state.profile)

  useEffect(() => {
    setCurrentLocation(location.pathname.replace("/", ""));
  }, [location.pathname]);

  return (
    <nav className="h-24 shadow-md border-b-2 border-slate-200 flex items-center justify-between px-6 z-10">
      <button onClick={onToggle} className="text-2xl mx-[1%] lg:hidden">
        <HiMenu />
      </button>
      <h1 className="text-2xl mx-[2%] font-bold">
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

          {/* <HiBell className="mx-4 text-gray-500 cursor-pointer text-3xl" /> */}
        </div>
        <div className="bg-gray-100 rounded-full  m-5 hidden md:flex">
        <img
          src={userImage}
          alt="avatar"
          className="rounded-full  w-[70px]"
        /></div>
      </div>
    </nav>
  );
};

export default NavBar;
