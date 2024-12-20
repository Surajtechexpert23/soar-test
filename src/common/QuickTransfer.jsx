import React from "react";

const QuickTransfer = ({ url, name, position, extra_css = "" }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img src={url} alt="avatar" className="rounded-full w-20" />
        <h2 className={`text-md text-black ${extra_css}`}>{name}</h2>
        <p className={`text-sm text-[#343c6a] ${extra_css}`}>{position}</p>
      </div>
    </>
  );
};

export default QuickTransfer;
