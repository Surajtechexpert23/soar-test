import React from "react";

const TransactionItem = ({ icon, title, date, amount, amountType, iconbg }) => {
  return (
    <div className="flex gap-1 items-center relative">
      <div
        className={`flex justify-center items-center ${iconbg} w-14 h-14 rounded-full transition duration-600`}
      >
        <img src={icon.image} alt={icon.name} className={icon.className} />
      </div>
      <div className="flex flex-col ml-2 :ml-10">
        <p>{title}</p>
        <p className="text-[#718EBF]">{date}</p>
      </div>
      <div className="absolute right-0">
        <p
          className={`text-center text-lg ${
            amountType === "negative" ? "text-red-500" : "text-emerald-400"
          }`}
        >
          {amountType === "negative" ? `-$${amount}` : `+$${amount}`}
        </p>
      </div>
    </div>
  );
};

export default TransactionItem;
