import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dash from './App';
 import DashboardLayout from './components/DashboardLayout';

function App() {
  return (
    <Router>
      <Routes>
     <Route path="/" element={<DashboardLayout/>} ></Route>
    {/* <Route path='/' element={Dash}></Route> */}
     </Routes>
    </Router>
    

  );
};

export default App;

// src/App.jsx
// import React from 'react';
// import ProjectOverview from './components/ProjectOverview';
// import ResourceManagement from './components/ResourceManagement';
// import BudgetTracking from './components/BudgetTracking';
// import { useProjectData, useResourceData, useBudgetData, useFetchData } from './data';

// const App = () => {
//   const { project } = useProjectData();
//   const { resourceData } = useResourceData();
//   const { budgetData } = useBudgetData();
//   useFetchData();

//   return (
//     <div>
//       <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <div className="lg:col-span-1">
//           <ProjectOverview project={project} />
//         </div>
//         <div className="lg:col-span-2 space-y-6">
//           <ResourceManagement resourceData={resourceData} />
//           <BudgetTracking budgetData={budgetData} />
//           {/* Add other sections here */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


