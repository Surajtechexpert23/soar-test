import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "@/assets/Logo.png";

import { TiHome } from "react-icons/ti";
import { FaMoneyBill, FaUser, FaRegCreditCard } from "react-icons/fa";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { PiHandCoinsBold, PiLightbulbFill } from "react-icons/pi";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

const SideBar = ({ isOpen, onToggle }) => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("Dashboard");

  useEffect(() => {
    switch (location.pathname) {
      case "/dashboard":
        setActiveTab("Dashboard");
        break;
      case "/credit_cards":
        setActiveTab("Credit Cards");
        break;
      case "/settings":
        setActiveTab("Settings");
        break;
      default:
        setActiveTab("Dashboard");
    }
  }, [location.pathname]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      onToggle(); 
    }
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0 z-10" : "-translate-x-full"
      } lg:translate-x-0 lg:w-[15%] md:w-[35%] z-10`}
    >
      <div className="flex items-center w-full justify-center mt-8">
        <img src={Logo} alt="logo" className="mx-8 md:w-48 sm:w-32 " />
        <button
          className="cursor-pointer duration-200 hover:scale-125 active:scale-100 bg-white rounded-full border shadow-md mr-5 lg:hidden"
          onClick={onToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="m14 7l-5 5l5 5z" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col mt-8 space-y-2">
        <Link
          to="/dashboard"
          className={`flex items-center p-3 cursor-pointer transition w-full ${
            activeTab === "Dashboard"
              ? "text-black font-semibold border-l-4 border-black"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("Dashboard")}
        >
          <TiHome className="text-3xl ml-[18px]" />
          <p className="ml-3">Dashboard</p>
        </Link>
        <button
          className={`flex items-center p-3 cursor-pointer transition w-full ${
            activeTab === "Transactions"
              ? "text-black font-semibold border-l-4 border-black"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("Transactions")}
        >
          <FaMoneyBill className="text-3xl ml-[18px] rotate-90" />
          <p className="ml-3">Transactions</p>
        </button>
        <button
          className={`flex items-center p-3 cursor-pointer transition w-full ${
            activeTab === "Accounts"
              ? "text-black font-semibold border-l-4 border-black"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("Accounts")}
        >
          <FaUser className="text-3xl ml-[18px]" />
          <p className="ml-3">Accounts</p>
        </button>
        <button
          className={`flex items-center p-3 cursor-pointer transition w-full ${
            activeTab === "Investment"
              ? "text-black font-semibold border-l-4 border-black"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("Investment")}
        >
          <RiBarChartHorizontalFill className="text-3xl ml-[18px]" />
          <p className="ml-3">Investment</p>
        </button>
        <Link
          to="/credit_cards"
          className={`flex items-center p-3 cursor-pointer transition w-full ${
            activeTab === "Credit Cards"
              ? "text-black font-semibold border-l-4 border-black"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("Credit Cards")}
        >
          <FaRegCreditCard className="text-3xl ml-[18px]" />
          <p className="ml-3">Credit Cards</p>
        </Link>
        <button
          className={`flex items-center p-3 cursor-pointer transition w-full ${
            activeTab === "Loans"
              ? "text-black font-semibold border-l-4 border-black"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("Loans")}
        >
          <PiHandCoinsBold className="text-3xl ml-[18px]" />
          <p className="ml-3">Loans</p>
        </button>
        <button
          className={`flex items-center p-3 cursor-pointer transition w-full ${
            activeTab === "Services"
              ? "text-black font-semibold border-l-4 border-black"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("Services")}
        >
          <MdOutlineDesignServices className="text-3xl ml-[18px]" />
          <p className="ml-3">Services</p>
        </button>
        <button
          className={`flex items-center p-3 cursor-pointer transition w-full ${
            activeTab === "My Privileges"
              ? "text-black font-semibold border-l-4 border-black"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("My Privileges")}
        >
          <PiLightbulbFill className="text-3xl ml-[18px]" />
          <p className="ml-3">My Privileges</p>
        </button>
        <Link
          to="/settings"
          className={`flex items-center p-3 cursor-pointer transition w-full ${
            activeTab === "Settings"
              ? "text-black font-semibold border-l-4 border-black"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("Settings")}
        >
          <IoMdSettings className="text-3xl ml-[18px]" />
          <p className="ml-3">Settings</p>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
