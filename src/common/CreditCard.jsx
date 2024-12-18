import React from "react";
import { FcSimCardChip } from "react-icons/fc";
import { RiMastercardFill } from "react-icons/ri";

const CreditCard = ({
  balance,
  cardHolder,
  validThru,
  cardNumber,
  isBlack,
}) => {
  return (
    <div
      className={`rounded-2xl shadow-sm ${
        isBlack ? "bg-black text-white" : "bg-white text-black border"
      }`}
    >
      <div className="p-8">
        <div className="mt-2 flex justify-between items-center">
          <div className="flex flex-col">
            <p className="text-[11px]">Balance</p>
            <p>{balance}</p>
          </div>
          <FcSimCardChip className="text-5xl" />
        </div>

        <div className="mt-5 grid grid-cols-2 flex flex-col">
          <div>
            <p className="uppercase text-[11px]">Card Holder</p>
            <p>{cardHolder}</p>
          </div>
          <div>
            <p className="uppercase text-[11px]">Valid Thru</p>
            <p>{validThru}</p>
          </div>
        </div>
      </div>

      <div
        className={` flex justify-between items-center ${
          isBlack ? "bg-gray-700" : "border-t"
        } p-5 px-8 rounded-b-xl`}
      >
        <p className="text-sm ">{cardNumber}</p>
        <RiMastercardFill className="text-5xl" />
      </div>

    </div>
  );
};

export default CreditCard;
