import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { useRef } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineChart = () => {
  const chartRef = useRef(null);
  const data = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        label: "Balance History",
        data: [150, 520, 350, 800, 200, 600, 700],
        borderColor: "rgba(24, 20, 243, 1)",
        borderWidth: 3,
        pointRadius: 0,
        tension: 0.4,
        fill: true,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
          }
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(45, 96, 255, 0.25)");
          gradient.addColorStop(1, "rgba(45, 96, 255, 0)");
          return gradient;
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(223, 229, 238, 1)",
        },
        border: {
          display: false,
          dash: [5, 5],
        },
        ticks: {
          font: {
            size: 18,
          },
          color: " #718EBF",
          stepSize: 200,
        },
      },
      x: {
        grid: {
          // color: "rgba(0, 0, 0, 0.1)",
          color: "rgba(223, 229, 238, 1)",
        },
        border: {
          display: false,
          dash: [5, 5],
        },
        ticks: {
          font: {
            size: 18,
          },
          color: " #718EBF",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        labels: {
          usePointStyle: true,
        },
      },

      datalabels: {
        display: false,
      },
    },
  };

  return (
    <div className="relative w-full h-72 md:h-full">
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default LineChart;
