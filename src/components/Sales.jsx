"use client";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Line } from "react-chartjs-2";
import CalendarDays from "./assets/calendar_days";

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Set to false to hide the legend (header)
      },
      title: {
        display: false, // Set to false to hide the title
      },
    },
    elements: {
      line: {
        tension: 0.4, // Adjust the tension to control the curve
      },
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 0,
          minRotation: 0,
        },
        grid: {
          display: false, // Remove vertical gridlines
          beginAtZero: true,
        },
      },
      y: {
        grid: {
          display: true, // Optionally, hide horizontal gridlines
        },
        beginAtZero: true,
        display: true, // Set to false to remove the main vertical axis line
      },
    },
  };
  
  const labels = ["", "Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", ""];
  
  export const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [900, 500, 200, 1000, 1500, 1200, 400, 700],
        borderColor: "#6c8cf5",
        backgroundColor: "#6c8cf5",
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  };
function Sales() {
  return (
    <div className="bg-white rounded-xl p-6 h-[440px] scroll-smooth md:scroll-auto">
      <div className="flex justify-between p-4">
        <h1 className="font-[600]">Project Expenditure Graph</h1>
        <div className="text-xs flex items-center gap-5">
          <div className="text-gray-400 font-[600]">
            <p className="font-[700]">Week</p>
          </div>
          <button className="text-gray-400 font-[600]">Month</button>
          <p className=" text-xs border-[1px] border-gray-300 rounded-md px-3 py-2 gap-3">Year</p>
          <div className="bg-[#f3f3f6] rounded-md p-1.5 text-[#878787] cursor-pointer">
            <CalendarDays  /> 
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-[600] mt-3 pl-4">$382,382</h1>
      <p className="text-sm text-gray-400 pl-4">Total Spent Amount</p>
      <div className="pt-10 h-[240px] w-full">
          <Line options={options} data={data} />
      </div>
    </div>
  );
}

export default Sales;
