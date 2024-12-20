import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
 
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
 
const WeeklyActivityChart = () => {
  const[fetchdata,setFetchdata]=useState([])
  useEffect(()=>{
    fetch("http://localhost:3008/activity").then((res)=>res.json()).then((data)=>setFetchdata(data))
  },[])
  const labels = fetchdata.map((item) => item.day);
  const depositData = fetchdata.map((item) => item.deposit);
  const withdrawData = fetchdata.map((item) => item.withdraw);
  const data = {
    labels,
    datasets: [
      {
        label: "Withdraw",
        data: withdrawData,
        backgroundColor: "rgba(35, 35, 35, 1)",
        borderWidth: 1,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
        barPercentage: 0.5,
      },
      {
        label: "Deposit",
        data: depositData,
        backgroundColor: "rgba(57, 106, 255, 1)",
        borderWidth: 1,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
        barPercentage: 0.5,
      },
      
    ],
  };
 
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 18,
          },
          color: " #718EBF",
        },
        border: {
          display: false,
        },
        categoryPercentage: 1, // Space between groups (categories)
      },
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
        },
        ticks: {
          font: {
            size: 18,
          },
          color: " #718EBF",
          stepSize: 100,
        },
        border: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          usePointStyle: true,
          font: {
            size: 18,
          },
          color: "#718EBF",
          textAlign: "center",
        },
      },
      datalabels: {
        display: false,
      },
    },
    layout: {
      padding: {
        top: 20,
        left: 10,
        right: 10,
        bottom: 10,
      },
    },
  };
 
  return (
    <div className="relative w-full h-72 md:h-full">
      {" "}
      {/* Responsive height with Tailwind */}
      <Bar data={data} options={options} />
    </div>
  );
};
 
export default WeeklyActivityChart;