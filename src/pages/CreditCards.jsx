import React, { useEffect, useState } from "react";
import CreditCard from "@/common/CreditCard";

const CreditCards = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2005/cards")
      .then((res) => res.json())
      .then((data) => setCardData(data));
  }, []);
  return (
    <>
      <h1 className="px-6 pt-8 text-xl font-bold"> Your All Card Details </h1>
      <div className=" p-6 pt-5 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-4">
        {cardData.map((card, i) => (
          <CreditCard
            balance={card.balance}
            cardHolder={card.holder}
            validThru={card.valid_date}
            cardNumber={card.card_number}
            isBlack={i % 2 === 0 ? true : false}
          />
        ))}
      </div>
    </>
  );
};

export default CreditCards;
