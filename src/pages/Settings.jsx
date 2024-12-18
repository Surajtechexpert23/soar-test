import React, { useState } from "react";
import UserProfileForm from "@/components/form/UserProfileForm";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Edit Profile");

  const handleTabClick = (tabName) => {
    if (tabName === "Preferences" || tabName === "Security") {
      return; 
    }
    setActiveTab(tabName);
  };

  return (
    <div className="lg:m-10 p-6 bg-white border rounded-xl shadow-md md:p-6 md:pt-8 md:mt-5">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center md:justify-start space-x-4 pb-2 mb-6">
        {["Edit Profile", "Preferences", "Security"].map((tabName) => (
          <p
            key={tabName}
            className={`cursor-pointer pb-2 font-bold ${
              activeTab === tabName
                ? "text-black border-b-2 border-black"
                : "text-gray-500"
            } ${
              tabName === "Preferences" || tabName === "Security"
                ? "text-gray-300 cursor-not-allowed" // Disabled style
                : "hover:text-black transition duration-200" // Hover effect for enabled tabs
            }`}
            onClick={() => handleTabClick(tabName)}
          >
            {tabName}
          </p>
        ))}
      </div>

      {activeTab === "Edit Profile" && (
        <div>
          <UserProfileForm />
        </div>
      )}
    </div>
  );
};

export default Settings;
