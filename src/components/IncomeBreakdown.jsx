"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";
import CalendarDays from './assets/calendar_days';
import { INCOME_BREAKDOWN_DATA } from '../data';

ChartJS.register(ArcElement, Tooltip, Legend);



const dataValues = [10, 45, 25, 20];
const total = dataValues.reduce((a, b) => a + b, 0);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          const value = tooltipItem.raw;
          const percentage = ((value / total) * 100).toFixed(2);
          return `${INCOME_BREAKDOWN_DATA[tooltipItem.dataIndex].title}: (${percentage}%)`;
        },
      },
    },
  },
};

const data = {
  datasets: [
    {
      label: 'Project status',
      data: dataValues,
      backgroundColor: [
        '#F4B665',
        'rgb(255,128,139)',
        'rgb(94,129,244)',
        'rgb(138,241,185)',
      ],
      borderColor: [
        '#F4B665',
        'rgb(255,128,139)',
        'rgb(94,129,244)',
        'rgb(138,241,185)',
      ],
      borderWidth: 1,
    },
  ],
};

function IncomeBreakdown() {
  return (
    <div className="bg-white rounded-xl p-4 h-[400px] scroll-smooth md:scroll-auto">
      <div className="flex justify-between">
        <h1 className="font-[600]">Project Breakdown</h1>
        <div className="text-xs flex items-center gap-5">
          <div className="text-gray-400 font-[600]">
            <p className="font-[700]">Day</p>
          </div>
          <p className="text-gray-400 font-[600]">Week</p>
          <p className="text-xs border-[1px] border-gray-300 rounded-md px-3 py-2 gap-3">Month</p>
          <div className="bg-[#f3f3f6] rounded-md p-1.5 text-[#878787] cursor-pointer">
            <CalendarDays />
          </div>
        </div>
      </div>
      <div className="pt-4 flex justify-center my-5">
        <div className='h-[200px] w-[200px]'>
          <Doughnut data={data} options={options} />
        </div>
      </div>
      <div className='grid grid-cols-2 gap-x-12 mt-15'>
        {INCOME_BREAKDOWN_DATA.map((item) => (
          <div className='flex items-center justify-between mt-4' key={item.id}>
            <div className='flex items-center gap-2'>
              <div style={{ borderColor: item.color }} className={`border-4 h-2 w-2 p-0.5 bg-white rounded-full`}></div>
              <div className='text-xs font-[500]'>{item.title}</div>
            </div>
            <div className='font-bold text-xs'>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default IncomeBreakdown;
