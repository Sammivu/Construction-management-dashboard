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


