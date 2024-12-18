import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import SideBar from "@/components/sidebar/SideBar";
import NavBar from "@/components/navbar/Navbar";

import Dashboard from "@/pages/Dashboard";
import CreditCards from "@/pages/CreditCards";
import Settings from "@/pages/Settings";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Router>
      <div className="flex h-screen">
        <SideBar isOpen={isOpen} onToggle={toggleSidebar}/>
        <div className={`flex-1 transition-all duration-300 ${isOpen ? "ml-0" : "lg:ml-[15%]"}`}>
          <NavBar onToggle={toggleSidebar} />
          <main className=" h-[calc(100vh-100px)] overflow-y-auto"> {/* Adjust for navbar height */}
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/credit_cards" element={<CreditCards />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
