import React, { useState } from 'react';
import Cancel from "./assets/cancel";
import Menu from "./assets/menu";

function TopNav() {
  const [activeButton, setActiveButton] = useState('overview');
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu open/close

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setMenuOpen(false); // Close the menu when a button is clicked
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-between sticky top-0 px-4 py-4 bg-[#F7F7F8] z-10">
      <h1 className="font-[700]">Dashboard</h1>
      
      <div className="relative">
        <div className="bg-gray-200 rounded-md p-1.5 cursor-pointer md:hidden" onClick={toggleMenu}>
          {menuOpen ? <Cancel color="#878787" /> : <Menu color="#878787" />}
        </div>
        
        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-20">
            <ul className="py-1">
              <li className="text-[#0c0c11] cursor-pointer">
                <a href="#overview">
                  <button
                    className={`block px-4 py-2 w-full text-left ${activeButton === 'overview' ? 'font-bold' : 'font-normal'}`}
                    onClick={() => handleButtonClick('overview')}
                  >
                    Overview
                  </button>
                </a>
              </li>
              <li className="text-[#0c0c11] cursor-pointer">
                <a href="#resource">
                  <button
                    className={`block px-4 py-2 w-full text-left ${activeButton === 'resource' ? 'font-bold' : 'font-normal'}`}
                    onClick={() => handleButtonClick('resource')}
                  >
                    Resource
                  </button>
                </a>
              </li>
              <li className="text-[#0c0c11] cursor-pointer">
                <a href="#budget">
                  <button
                    className={`block px-4 py-2 w-full text-left ${activeButton === 'budget' ? 'font-bold' : 'font-normal'}`}
                    onClick={() => handleButtonClick('budget')}
                  >
                    Budget
                  </button>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Full Nav on Larger Screens */}
      <div className="hidden md:flex items-center gap-1.5">
        <div className="text-[#0c0c11] rounded-md p-1.5 cursor-pointer">
          <a href="#overview">
            <button
              className={`px-4 py-2 ${activeButton === 'overview' ? 'font-bold' : 'font-normal'}`}
              onClick={() => handleButtonClick('overview')}
            >
              Overview
            </button>
          </a>
        </div>
        <div className="text-[#0c0c11] rounded-md p-1.5 cursor-pointer">
          <a href="#resource">
            <button
              className={`px-4 py-2 ${activeButton === 'resource' ? 'font-bold' : 'font-normal'}`}
              onClick={() => handleButtonClick('resource')}
            >
              Resource
            </button>
          </a>
        </div>
        <div className="text-[#0c0c11] rounded-md p-1.5 cursor-pointer">
          <a href="#budget">
            <button
              className={`px-4 py-2 ${activeButton === 'budget' ? 'font-bold' : 'font-normal'}`}
              onClick={() => handleButtonClick('budget')}
            >
              Budget
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
