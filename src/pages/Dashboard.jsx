import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CreditCard from "@/common/CreditCard";
import TransactionItem from "@/common/TransactionItem";
import ToastNotifications from "@/common/ToastNotifications";
import QuickTransfer from "@/common/QuickTransfer";

import CardIcon from "@/assets/Card.svg";
import DollerIcon from "@/assets/DollerIcon.svg";
import PaypalIcon from "@/assets/paypalpayment.svg";
import BarChart from "@/components/chart/BarChart";
import PieChart from "@/components/chart/PieChart";
import LineChart from "@/components/chart/LineChart";
import { toast } from "react-toastify";

const Dashboard = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },

      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  const [amount, setAmount] = useState("525.50");
  const handleInputChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = () => {
    toast.success("Amount updated successfully!");
  };
  return (
    <>
      <div className="p-6 pt-8 grid grid-cols-1 lg:grid-cols-12 md:grid-cols-1 lg:gap-10 ">
        {/* Row 1 */}

        {/* Grid Column 1 */}
        <div className="col-span-8  md:w-full ">
          <div className="flex justify-between w-full">
            <h2 className="text-xl font-medium">My Cards</h2>
            <Link
              to="/credit_cards"
              className="flex py-1 items-center font-bold cursor-pointer text-[#343c6a] transition-transform duration-7000 ease-in-out hover:text-gray-500"
            >
              See All
            </Link>
          </div>

          <div className="mt-5">
            <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-10">
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
            </div>
          </div>
        </div>

        {/* Grid Column 2 */}
        <div className="col-span-4  md:w-full ">
          <h2 className="text-xl font-medium pb-1  mt-5 md:mt-0">
            Recent Transaction
          </h2>
          <div
            className="rounded-3xl md:p-8 p-4 bg-white shadow-sm mt-5 space-y-10 md:space-y-5 border h-[271px] overflow-y-scroll"
            id="style-1"
          >
            <TransactionItem
              icon={{
                image: CardIcon,
                name: "card Image",
                className: "text-3xl text-amber-400",
              }}
              title="Deposit from my Card"
              date="28 January 2021"
              amount="850"
              amountType="negative"
              iconbg={"bg-[#FFF5D9]"}
            />
            <TransactionItem
              icon={{
                image: PaypalIcon,
                name: "Paypal Image",
                className: "text-3xl text-amber-400",
              }}
              title="Deposit Paypal"
              date="25 January 2021"
              amount="2500"
              amountType="positive"
              iconbg={"bg-[#E7EDFF]"}
            />
            <TransactionItem
              icon={{
                image: DollerIcon,
                name: "Doller Image",
                className: "text-3xl text-amber-400",
              }}
              title="Jemi Wilson"
              date="21 January 2021"
              amount="5400"
              amountType="positive"
              iconbg={"bg-[#DCFAF8]"}
            />
            <TransactionItem
              icon={{
                image: DollerIcon,
                name: "Doller Image",
                className: "text-3xl text-amber-400",
              }}
              title="Jemi Wilson"
              date="21 January 2021"
              amount="5400"
              amountType="positive"
              iconbg={"bg-[#DCFAF8]"}
            />
            <TransactionItem
              icon={{
                image: DollerIcon,
                name: "Doller Image",
                className: "text-3xl text-amber-400",
              }}
              title="Jemi Wilson"
              date="21 January 2021"
              amount="5400"
              amountType="positive"
              iconbg={"bg-[#DCFAF8]"}
            />
          </div>
        </div>

        {/* Row 2 */}

        {/* Grid Column 1 */}
        <div className="col-span-8  md:w-full">
          <div className="flex flex-col justify-between w-full">
            <h2 className="text-xl font-medium mt-5 md:mt-0">
              Weekly Activity
            </h2>
            <div className="bg-white shadow-sm px-4 py-2 border rounded-3xl mt-5 min-h-[284px] lg:h-[500px] w-full ">
              <BarChart />
            </div>
          </div>
        </div>

        {/* Grid Column 2 */}
        <div className="col-span-4  md:w-full">
          <h2 className="text-xl font-medium mt-5 md:mt-0">
            Expense Statistics
          </h2>
          <div className="bg-white shadow-sm p-5 border rounded-2xl mt-5 lg:h-[500px] flex justify-center items-center">
            <PieChart />
          </div>
        </div>

        {/* Row 3 */}

        {/* Grid Column 1 */}
        <div className="col-span-5  md:w-full">
          <div className="flex flex-col justify-between w-full">
            <h2 className="text-xl font-medium mt-5 md:mt-0">
              Weekly Activity
            </h2>
            <div className="bg-white shadow-sm px-4 py-2 border rounded-3xl mt-5 h-[300px] w-full ">
              <Carousel responsive={responsive} className="mt-10">
                <QuickTransfer
                  url="https://i.pravatar.cc/50?u=1"
                  name="Livia Bator"
                  position="CEO"
                  extra_css="font-bold"
                />
                <QuickTransfer
                  url="https://i.pravatar.cc/50?u=2"
                  name="Randy Press"
                  position="Director"
                />
                <QuickTransfer
                  url="https://i.pravatar.cc/50?u=3"
                  name="Workman"
                  position="Designer"
                />
                <QuickTransfer
                  url="https://i.pravatar.cc/50?u=4"
                  name="Jason Diaz"
                  position="Designer"
                />
                <QuickTransfer
                  url="https://i.pravatar.cc/50?u=5"
                  name="John deo"
                  position="Designer"
                />
              </Carousel>

              <div className="flex flex-col justify-between items-center mt-5 lg:mt-10 md:mt-8 lg:mx-8 xl:flex-row lg:flex-row md:flex-col sm:flex-col">
                <p className="text-md text-[#718EBF]">Write Your Amount</p>
                <div className="relative">
                  <input
                    type="number"
                    value={amount}
                    onChange={handleInputChange} // Set the input change handler
                    className="block w-full rounded-full border border-neutral-300 bg-[#EDF1F7] text-[#718EBF] py-4 pl-6 pr-20 text-base/6 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:text-black "
                  />
                  <div className="absolute inset-y-0.5 right-0 flex justify-end">
                    <div className="relative group">
                      <button
                        type="submit"
                        aria-label="Submit"
                        onClick={handleSubmit} // Set the submit handler
                        className="relative inline-block p-px font-semibold leading-6 text-white bg-[#232323] cursor-pointer rounded-full shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                      >
                        <span className="absolute inset-0 rounded-full p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                        <span className="relative  block px-6 py-3 rounded-full bg-neutral-950">
                          <div className="relative  flex items-center space-x-2">
                            <span className="text-lg transition-all duration-500 group-hover:translate-x-1">
                              Send
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                              viewBox="0 0 1792 1824"
                            >
                              <path
                                fill="currentColor"
                                d="M1764 43q33 24 27 64l-256 1536q-5 29-32 45q-14 8-31 8q-11 0-24-5l-527-215l-298 327q-18 21-47 21q-14 0-23-4q-19-7-30-23.5t-11-36.5v-452L40 1115q-37-14-40-55q-3-39 32-59L1696 41q35-21 68 2m-342 1499l221-1323l-1434 827l336 137l863-639l-478 797z"
                              ></path>
                            </svg>
                          </div>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Column 2 */}
        <div className="col-span-7  md:w-full">
          <h2 className="text-xl font-medium mt-5 md:mt-0">Balance History</h2>
          <div className="bg-white shadow-sm p-5 border rounded-3xl my-5 h-[300px]">
            <LineChart />
          </div>
        </div>
      </div>

      <ToastNotifications />
    </>
  );
};

export default Dashboard;
