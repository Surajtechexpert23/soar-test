import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1280);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const[fetchdata,setFetchdata]=useState([])
  useEffect(()=>{
    fetch("http://localhost:2005/expense").then((res)=>res.json()).then((data)=>setFetchdata(data))
  },[])
  const name = fetchdata.map((item) => item.name);
  const value = fetchdata.map((item) => parseFloat(item.value.replace("%", "")));

  const data = {
    labels: name,
    datasets: [
      {
        data: value,
        backgroundColor: ['blue', 'gray', 'orange', 'black'],
        borderColor: ['blue', 'gray', 'orange', 'black'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: 'center',
        align: 'center',
        color: '#fff',
        font: {
          weight: 'bold',
          size: 12,
        },
        formatter: (value) => {
          if (value === 15 && isMobile) return '15% \nBill'; // Hide "Bill Expense" on non-mobile screens
          return `${value === 20 ? "20% \nInvestment" : value === 30 ? "30% \nEntertainment" : value === 15 ? "15% \nBill\nExpense" : '35% \nOthers'}`;
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 2,
        offset: isMobile ? 0 : 40, 
      },
    },
  };

  return (
    <div className="relative w-full h-72 md:h-full flex justify-center items-center">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
