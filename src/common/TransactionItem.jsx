import React from 'react';

const TransactionItem = ({ icon, title, date, amount, amountType,iconbg }) => {
  return (
    <div className="flex gap-1 items-center relative">
      <div className={`flex justify-center items-center ${iconbg} w-14 h-14 rounded-full transition duration-600`}>
        {icon}
      </div>
      <div className="flex flex-col ml-2 :ml-10">
        <p>{title}</p>
        <p className="text-gray-500">{date}</p>
      </div>
      <div className="absolute right-0">
        <p className={`text-center text-lg ${amountType === 'negative' ? 'text-red-600' : 'text-green-500'}`}>
          {amountType === 'negative' ? `-$${amount}` : `+$${amount}`}
        </p>
      </div>
    </div>
  );
};

export default TransactionItem;
