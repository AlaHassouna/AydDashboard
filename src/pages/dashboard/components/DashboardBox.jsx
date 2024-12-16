import React, { createContext, useState } from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const DashboardBox = (props) => {
  const [box1, setBox1] = useState(false);
  const MyContext=createContext();

  const toggleBox1 = () => {
    setBox1(!box1);
  };

  return (
    <div className="relative flex w-full p-5 dark:bg-gray-800">
        {props.grow === true ? (
          <span className="text-white opacity-10 absolute bottom-2 left-2 text-[40px]">
            <TrendingUpIcon style={{ fontSize: '10rem' }} />
          </span>
        ) : (
          <span className="text-white opacity-10 absolute bottom-2 left-2 text-[40px]">
            <TrendingDownIcon style={{ fontSize: '10rem' }} />
          </span>
        )}
      
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h4 className="text-white text-[17px]" style={{ lineHeight: '10px' }}>{props.title}</h4>
            <span className="text-white text-[40px] font-semibold">{props.value}</span>
          </div>
          <div className="mt-auto">
            <h5 className="text-white mb-0">Last Month</h5>
          </div>
        </div>
      
        <div className="relative ml-auto">
          {props.icon && (
            <span className="flex items-center justify-center w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[55px] md:h-[55px] lg:w-[60px] lg:h-[60px] rounded-[10px] bg-gradient-to-br from-black/0 to-black/20">
              {props.icon}
            </span>
          )}
        </div>

        
        <button onClick={toggleBox1}>
          <svg className="absolute bottom-3  right-2 w-[32px] h-[32px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="3" d="M12 6h.01M12 12h.01M12 18h.01" />
          </svg>
        </button>

        {/* Dropdown menu */}
        {box1 && (
          <div id="dropdownDots" className="absolute top-full right-0  z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
            <li className="ml-3 flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <a
                href="#"
                className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Last Day
              </a>
            </li>

            <li className="ml-3 flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <a
                href="#"
                className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Last Week
              </a>
            </li>
            <li className="ml-3 flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <a
                href="#"
                className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Last Month
              </a>
            </li>
            <li className="ml-3 flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <a
                href="#"
                className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Last Year
              </a>
            </li>
            </ul>
            
          </div>
        )}
      </div>
    // </div> 
  );
};

export default DashboardBox;
