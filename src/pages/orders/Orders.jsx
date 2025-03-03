import React, { useContext, useState } from 'react'
import { MyContext } from '../../App';
import { Link } from 'react-router-dom';
import DashboardBox from '../dashboard/components/DashboardBox';
import axios from 'axios';
import { useEffect } from 'react';
import ListOrders from './ListOrders';

const Orders = () => {
  // const [brandBy, setBrandBy] = useState(false);
  const [orders, setOders] = useState(false);
  const context= useContext(MyContext)

  const [totSales, setTotSales] = useState(); 
  const [totOrders, setTotOrders] = useState(); 
  
  useEffect(() => {
    // Fonction pour récupérer les catégories
    const fetchSalesOrders = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/orders/stats', {
                headers: {
                    accept: 'application/json',
                },
            });
            setTotSales(response.data.total_revenue); 
            setTotOrders(response.data.total_orders); 
        } catch (error) {
            console.error('Erreur lors de la récupération des orders :', error);
        }
    };
  
    fetchSalesOrders(); // Appel de la fonction
  }, []);
  useEffect(()=>{
  console.log("totSales ",totSales)
  console.log("totOrders ",totOrders)
  },[totSales,totOrders])
    
  
  const togglOrders = () => {
    setOders(!orders);
  };

  return (
    <div
      className={`mt-10 p-1   rounded-lg dark:bg-gray-900 ${
        context.isToggleSidebar ? "md:ml-64" : "ml-0"
      }`}
    >
     
        <div className=" p-1 rounded-lg ">
            <div className="grid grid-cols-1 gap-4 mb-4">
                <div className="flex items-center justify-between h-24 rounded bg-gray-50 dark:bg-gray-800 px-4">
                    {/* <!-- H1 centré --> */}
                    <h1 className="text-lg font-semibold text-gray-800 dark:text-white">Ecommerce</h1>
                            {/* <!-- Breadcrumb à g auche --> */}
                            <nav className="flex" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                                <li>
                                    <Link to="/dashboard" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Dashboard</Link>
                                </li>
                                <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                    </svg>
                                    <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Orders</span>
                                </div>
                                </li>
                            </ol>
                            </nav>

            
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
    {/* 1ère colonne */}
    <div
        className="flex rounded bg-gray-50 h-30 dark:bg-gray-800"
        style={{
            backgroundImage: 'linear-gradient(to right,#c012e2, #eb64fe)',
        }}
    >
        <DashboardBox
            icon={
                <svg
                    className="text-[45px] opacity-40 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        fillRule="evenodd"
                        d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z"
                        clipRule="evenodd"
                    />
                </svg>
            }
            title={"Total Orders"}
            value={totOrders}
        />
    </div>

    {/* 2ème colonne */}
    <div
        className="flex rounded bg-gray-50 h-30 dark:bg-gray-800"
        style={{
            backgroundImage: 'linear-gradient(#1f2937, #374961)',
        }}
    >
        <DashboardBox
            icon={
                <svg
                    className="text-[45px] opacity-40 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        fillRule="evenodd"
                        d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z"
                        clipRule="evenodd"
                    />
                </svg>
            }
            title={"Total Sales"}
            value={totSales}
        />
    </div>
</div>

                <div
        className=" rounded-lg bg-gray-50 dark:bg-gray-800 px-4 h-full mb-4 p-5"
      >
          <div className="flex items-center justify-between">
              <h1 className='text-[18px] font-bold dark:text-white'>Orders</h1>

                {/* Dots */}
                <div className="relative ml-auto">
                
                  <button onClick={togglOrders} >
                    <svg className="w-[35px] h-[35px] text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeWidth="2.8" d="M6 12h.01m6 0h.01m5.99 0h.01"/>
                    </svg>
                  </button>

                {/* /* Dropdown menu */} 
                  {orders && (
                    <div id="dropdownDots" className="absolute top-full right-0  z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                      <li className="ml-3 flex items-center space-x-2">
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                      </svg>

                        <a
                          href="#"
                          className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Edit
                        </a>
                      </li>

                      <li className="ml-3 flex items-center space-x-2">
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5v14m-6-8h6m-6 4h6m4.506-1.494L15.012 12m0 0 1.506-1.506M15.012 12l1.506 1.506M15.012 12l-1.506-1.506M20 19H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1Z"/>
                      </svg>


                        <a
                          href="#"
                          className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </li>
                      <li className="ml-3 flex items-center space-x-2">
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/>
                      </svg>

                        <a
                          href="#"
                          className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Download
                        </a>
                      </li>
                      
                      </ul>
                      
                    </div>
                  )}
                </div>
                  

          </div>
          <div className='justify-between items-center  mt-3'>
                  
                 
                  <ListOrders/>
                  
                  
                  
                  
                  
             </div>
          </div>
        </div>
  </div>
  )
}

export default Orders