import React from "react";
import CreditCard from "@/common/CreditCard";

const CreditCards = () => {
  return (
    <>
      <h1 className="px-6 pt-8 text-xl font-bold"> Your All Card Details </h1>
      <div className=" p-6 pt-5 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-4">
        <CreditCard
          balance="$5,756"
          cardHolder="Eddy Cusuma"
          validThru="12/22"
          cardNumber="3778 **** **** 1234"
          isBlack={true}
        />
        <CreditCard
          balance="$5,756"
          cardHolder="Eddy Cusuma"
          validThru="12/22"
          cardNumber="3778 **** **** 1234"
          isBlack={false}
        />
        <CreditCard
          balance="$5,756"
          cardHolder="Eddy Cusuma"
          validThru="12/22"
          cardNumber="3778 **** **** 1234"
          isBlack={true}
        />
        <CreditCard
          balance="$5,756"
          cardHolder="Eddy Cusuma"
          validThru="12/22"
          cardNumber="3778 **** **** 1234"
          isBlack={false}
        />
        <CreditCard
          balance="$5,756"
          cardHolder="Eddy Cusuma"
          validThru="12/22"
          cardNumber="3778 **** **** 1234"
          isBlack={true}
        />
      </div>
    </>
  );
};

export default CreditCards;
