import React from "react";
import simchip from "../assets/Chip_Card.svg";
import simchipdark from "../assets/Chip_Card_dark.svg";

const CreditCard = ({
  balance,
  cardHolder,
  validThru,
  cardNumber,
  isBlack,
}) => {
  const formatCurrency = (amount) => {
    return amount.toLocaleString("en-US");
  };
  return (
    <div
      className={`rounded-3xl shadow-sm ${
        isBlack ? "text-white" : "bg-white text-black border border-[#DFEAF2]"
      }`}
      style={{
        background: isBlack
          ? "linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)"
          : "bg-white text-black border",
      }}
    >
      <div className="p-8">
        <div className="mt-2 flex justify-between items-center">
          <div className="flex flex-col">
            <p className={`text-sm ${!isBlack && "text-[#718EBF]"}`}>Balance</p>
            <p className="text-lg">${formatCurrency(balance)}</p>
          </div>
          <img
            src={isBlack ? simchip : simchipdark}
            alt="Credit Card"
            className="w-12"
          />
        </div>

        <div className="mt-5 grid grid-cols-2">
          <div>
            <p
              className={`uppercase text-sm ${
                isBlack ? "text-[#FFFFFFB2]" : "text-[#718EBF]"
              }`}
            >
              Card Holder
            </p>
            <p className="text-lg">{cardHolder}</p>
          </div>
          <div>
            <p
              className={`uppercase text-sm ${
                isBlack ? "text-[#FFFFFFB2]" : "text-[#718EBF]"
              }`}
            >
              Valid Thru
            </p>
            <p className="text-lg">{validThru}</p>
          </div>
        </div>
      </div>

      <div
        className={` flex justify-between items-center p-5 px-8 rounded-b-xl gap-4 ${
          !isBlack && "border-t  border-[#DFEAF2]"
        }`}
        style={{
          background:
            isBlack &&
            "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)",
        }}
      >
        <p className="text-xl">{cardNumber}</p>
        <div className="relative">
          <div
            className="rounded-full h-10 w-10 absolute right-5 "
            style={{
              background: isBlack
                ? " rgba(255, 255, 255, 0.5)"
                : "rgba(145, 153, 175, 0.5)",
            }}
          ></div>
          <div
            className="rounded-full h-10 w-10  "
            style={{
              background: isBlack
                ? " rgba(255, 255, 255, 0.5)"
                : "rgba(145, 153, 175, 0.5)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
