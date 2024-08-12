// ./src/components/BudgetTracking.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const BudgetTracking = ({ budgetData, costData }) => {
  const spentAmount = costData.values.reduce((acc, value) => acc + value, 0);
  const remainingAmount = budgetData.total - spentAmount;

  const data = {
    labels: ['Spent', 'Remaining'],
    datasets: [
      {
        data: [spentAmount, remainingAmount],
        backgroundColor: ['rgba(255, 159, 64, 0.6)', 'rgba(75, 192, 192, 0.6)'],
        hoverBackgroundColor: ['rgba(255, 159, 64, 0.8)', 'rgba(75, 192, 192, 0.8)'],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const value = tooltipItem.raw || 0;
            const percentage = ((value / budgetData.total) * 100).toFixed(2);
            return `${tooltipItem.label}: $${value.toLocaleString()} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <header id='budget'>
    <div className="bg-white  rounded-xl p-6 scroll-smooth md:scroll-auto">
      <h2 className="font-[600] mb-4">Budget Tracking</h2>
      <div className='w-full lg:w-1/2 flex items-center justify-center'>
      <div className='h-[200px] w-[200px]'>
        <Doughnut data={data} options={options} />
        </div>
      </div>
      <div className="flex items-center text-sm justify-between mt-4">
        <p><strong>Total Budget:</strong> ${budgetData.total.toLocaleString()}</p>
        <p><strong>Spent:</strong> ${spentAmount.toLocaleString()}</p>
        <p><strong>Remaining:</strong> ${remainingAmount.toLocaleString()}</p>
      </div>
    </div>
    </header>
  );
};

export default BudgetTracking;
