import React from "react";
import CardIcon from "@/assets/Card.svg";
import DollerIcon from "@/assets/DollerIcon.svg";
import PaypalIcon from "@/assets/paypalpayment.svg";

const TransactionItem = ({ title, date, amount, amountType, type }) => {
  const icons = {
    card: CardIcon,
    cash: DollerIcon,
    paypal: PaypalIcon,
  };
  const iconback = {
    card: "#FFF5D9",
    cash: "#DCFAF8",
    paypal: "#E7EDFF",
  };
  const transactionType = icons[type];
  const iconbg = iconback[type];

  return (
    <div className="flex gap-1 items-center relative">
      <div
        style={{ backgroundColor: iconbg }}
        className={`flex justify-center items-center w-14 h-14 rounded-full transition duration-600`}
      >
        <img src={transactionType} alt={type} className="text-3xl" />
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
