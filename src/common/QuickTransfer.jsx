import React from "react";

const QuickTransfer = ({ url, name, position,extra_css="" }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img src={url} alt="avatar" className="rounded-full" />
        <h2 className={`text-md ${extra_css}`}>{name}</h2>
        <p className={`text-sm text-gray-500 ${extra_css}`}>{position}</p>
      </div>
    </>
  );
};

export default QuickTransfer;
