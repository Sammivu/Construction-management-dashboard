// ./src/components/CostWidget.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const CostWidget = ({ costData }) => {
  const total = costData.values.reduce((acc, value) => acc + value, 0);

  const data = {
    labels: costData.labels,
    datasets: [
      {
        data: costData.values,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const dataset = tooltipItem.dataset;
            const value = dataset.data[tooltipItem.dataIndex];
            const percentage = ((value / total) * 100).toFixed(2);
            return `${tooltipItem.label}: ${percentage}% ($${value.toLocaleString()})`;
          },
        },
      },
    },
    cutout: '70%',
  };

  return (
    <div className="bg-white p-6 rounded-xl  flex flex-col lg:flex-row scroll-smooth md:scroll-auto">
        <h2 className="font-[600] mb-2">Cost Breakdown</h2>
      <div className="w-full lg:w-1/2 flex items-center justify-center">
      <div className='h-[200px] w-[200px] mt-13'>
        < Doughnut data={data} options={options} />
        </div>
      </div>
      <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
        
        {costData.labels.map((label, index) => (
          <div key={index} className="flex items-center text-sm  justify-between">
            <span className="text-sm font-medium">{label}</span>
            <div className="w-32 h-4 ml-4">
              <div
                style={{
                  width: `${costData.values[index] / Math.max(...costData.values) * 100}%`,
                  backgroundColor: data.datasets[0].backgroundColor[index],
                }}
                className="h-full"
              ></div>
            </div>
            <span className="text-sm font-semibold ml-4">${costData.values[index].toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CostWidget;
