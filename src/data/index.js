import { IoSpeedometerOutline } from "react-icons/io5";
import { useState, useEffect } from 'react';
 


export const INCOME_BREAKDOWN_DATA = [
    { id: 1, title: "Backlogs", value: "10%", color:"#F4B665" },
    { id: 2, title: "Completed", value: "45%", color: "rgb(255,128,139)"},
    { id: 3, title: "Up coming", value: "25%", color: "rgb(94,129,244)"  },
    { id: 4, title: "On going", value: "20%", color: "rgb(138,241,185)" },
  ];

// Project Data
export const useProjectData = () => {
    const [project, setProject] = useState({
      name: 'Apartment Building',
      startDate: '05/05/2020',
      endDate: '05/05/2025',
      status: 'In Progress',
      completionRate: 57.63,
    });
  
    return { project, setProject };
  };
  
  // Resource Management Data
  export const useResourceData = () => {
    const [resourceData, setResourceData] = useState([
      { name: 'Labor', allocated: 200, used: 180 },
      { name: 'Materials', allocated: 150, used: 120 },
      { name: 'Equipment', allocated: 80, used: 60 },
    ]);
  
    return { resourceData, setResourceData };
  };
  

export const budgetData = {
  total: 2000000, // Total project amount
};

export const costData = {
  labels: ['Equipment', 'Foreign Labor', 'Labor', 'Material', 'Subcontractors'],
  values: [75926, 68386, 79787, 91279, 67004], // Cost breakdown values
};


  
  
  // Fetch data from an API or backend service
  export const useFetchData = () => {
    useEffect(() => {
      // Implement your API fetching logic here
    }, []);
  };

  // ./src/data/index.js

export const projects = [
    {
        id: 1,
        name: 'Project_2',
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        status: 'In Progress',
        completionRate: 50,
    },
    {
        id: 2,
        name: 'Project_5',
        startDate: '2024-02-15',
        endDate: '2024-10-30',
        status: 'Completed',
        completionRate: 100,
    },
    {
        id: 3,
        name: 'Project_6',
        startDate: '2024-03-20',
        endDate: '2024-11-25',
        status: 'Not Started',
        completionRate: 0,
    },
    // Add more project objects as needed
];

