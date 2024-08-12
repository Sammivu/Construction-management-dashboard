// ./src/components/ResourceManagement.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const ResourceManagement = ({ resourceData }) => {
  const data = {
    labels: resourceData.map(item => item.name),
    datasets: [
      {
        label: 'Allocated Resources',
        data: resourceData.map(item => item.allocated),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Used Resources',
        data: resourceData.map(item => item.used),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const options = {
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

  return (
    <header id='resource'>
    <div className="bg-white rounded-xl p-6 h-[450px] scroll-smooth md:scroll-auto">
      <h2 className="font-[600] mb-4">Resource Management</h2>
      <Bar data={data} options={options} />
    </div>
    </header>
  );
};

export default ResourceManagement;
