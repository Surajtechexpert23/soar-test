import React from "react";
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
  const data = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"], 
    datasets: [
      {
        label: "Withdraw",
        data: [300, 250, 300, 450, 215, 320, 420], 
        backgroundColor: "rgba(0, 0, 0, 0.7)",  
        borderColor: "rgba(0, 0, 0, 1)",
        borderWidth: 1,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
      },
      {
        label: "Deposit",
        data: [205, 110, 400, 150, 315, 175, 300],  
        backgroundColor: "rgba(59, 130, 246, 0.7)", 
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 1,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
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
            size: 12, 
          },
        },
        barPercentage: 0.2, 
        categoryPercentage: 0.1,
      },
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false, 
        },
        ticks: {
          font: {
            size: 12, 
          },
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
            size: 12, 
          },
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
    <div className="relative w-full h-72 md:h-full"> {/* Responsive height with Tailwind */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default WeeklyActivityChart;
