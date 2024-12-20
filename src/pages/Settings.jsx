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
    <div className="lg:mx-10 p-3  m-4 bg-white border rounded-xl shadow-md md:p-6 md:pt-8 md:mt-5">
      <div className="flex flex-wrap md:justify-start md:space-x-16  space-x-6">
        {["Edit Profile", "Preferences", "Security"].map((tabName) => (
          <p
            key={tabName}
            className={`cursor-pointer pb-2 font-bold ${
              activeTab === tabName
                ? "text-black border-b-4 border-black font-[500] text-sm"
                : "text-gray-500"
            } ${
              tabName === "Preferences" || tabName === "Security"
                ? "text-gray-300 cursor-not-allowed text-sm"
                : "hover:text-black transition duration-200" 
            }`}
            onClick={() => handleTabClick(tabName)}
          >
            {tabName}
          </p>
        ))}
      </div>
      <hr/>

      {activeTab === "Edit Profile" && (
        <div>
          <UserProfileForm />
        </div>
      )}
    </div>
  );
};

export default Settings;
