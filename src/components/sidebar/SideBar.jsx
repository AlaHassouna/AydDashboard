import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [isDashboardVisible, setIsDashboardVisible] = useState(false);
  const [isAuthentificationVisible, setIsAuthentificationVisible] = useState(false);
  const [isUsersVisible, setIsUsersVisible] = useState(false);
  const [isProductsVisible, setIsProductsVisible] = useState(false);
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
  const [isSubCategoriesVisible, setIsSubCategoriesVisible] = useState(false);

  
  const [isInvoicesVisible, setIsInvoicesVisible] = useState(false);
  const toggleDashboard = () => {
    setIsDashboardVisible(!isDashboardVisible);
  };
  const toggleAuthentification = () => {
    setIsAuthentificationVisible(!isAuthentificationVisible);
  };
  const toggleUsers = () => {
    setIsUsersVisible(!isUsersVisible);
  };
  const toggleProducts = () => {
    setIsProductsVisible(!isProductsVisible);
  };
  const toggleCategories = () => {
   setIsCategoriesVisible(!isCategoriesVisible);
 };
 const toggleSubCategories = () => {
   setIsSubCategoriesVisible(!isSubCategoriesVisible);
 };
 
  const toggleInvoices = () => {
    setIsInvoicesVisible(!isInvoicesVisible);
  };
  // Authentification
  return (
   <aside
   className="fixed top-10 left-0 w-64 h-screen pt-14 bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700 z-50"
   aria-label="Sidenav"
   id="drawer-navigation"
 >
      <div className="overflow-y-auto  px-3 h-full bg-white dark:bg-gray-800">
       <ul className="space-y-2 font-medium">
          {/* <li>
             <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                   <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                   <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                </svg>
                <span className="ms-3">Dashboard</span>
             </a>
          </li> */}
          <li>
             <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 
             rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" 
             aria-controls="dropdown-example" data-collapse-toggle="dropdown-example" onClick={toggleDashboard}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"/>
                    </svg>

                   <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Dashboard</span>
                   {!isDashboardVisible && (<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10 16 4-4-4-4"/>
                    </svg>)}
                    {isDashboardVisible && (
                   <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="  " strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                   </svg>)}
             </button>
             {isDashboardVisible && (
              <ul id="dropdown-example" className="py-2 space-y-2">
                   <li>
                      <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 
                      group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                       Ecommerce
                        </a>
                   </li>
                   {/* <li>
                      <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 
                      group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >Analytics</a>
                   </li> */}
                   <li>
                      <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11
                       group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        Crm</a>
                   </li>
                   <li>
                      <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11
                       group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        Erp</a>
                   </li>
             </ul>
            )}
          </li>
           {/* Products */}
           <li>
             <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 
             rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" 
             aria-controls="dropdown-example" data-collapse-toggle="dropdown-example" onClick={toggleProducts}>
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M7.111 20A3.111 3.111 0 0 1 4 16.889v-12C4 4.398 4.398 4 4.889 4h4.444a.89.89 0 0 1 .89.889v12A3.111 3.111 0 0 1 7.11 20Zm0 0h12a.889.889 0 0 0 .889-.889v-4.444a.889.889 0 0 0-.889-.89h-4.389a.889.889 0 0 0-.62.253l-3.767 3.665a.933.933 0 0 0-.146.185c-.868 1.433-1.581 1.858-3.078 2.12Zm0-3.556h.009m7.933-10.927 3.143 3.143a.889.889 0 0 1 0 1.257l-7.974 7.974v-8.8l3.574-3.574a.889.889 0 0 1 1.257 0Z"/>
                </svg>
                   <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Products</span>
                <span className="mr-2 inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-white bg-[#ff4de4] rounded-full dark:bg-gray-700 dark:text-gray-300">New</span>
                {!isProductsVisible && (<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10 16 4-4-4-4"/>
                    </svg>)}
                    {isProductsVisible && (
                   <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="  " strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                   </svg>)} 
             </button>
             {isProductsVisible && (
              <ul id="dropdown-example" className="py-2 space-y-2">
                   <li>
                   <Link to="/dashboard/products" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 
                      group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        Product List
                        </Link>
                   </li>
                   {/* <li>
                      <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 
                      group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >Product View</a>
                   </li> */}
                   <li>
                      <Link to="/dashboard/products/add" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11
                       group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        Add Product</Link>
                      
                      </li>
             </ul>
            )}
          </li>
          {/* Categories  */}
          <li>
             <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 
             rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" 
             aria-controls="dropdown-example" data-collapse-toggle="dropdown-example" onClick={toggleCategories}>
                  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 6.5h2M11 18h2m-7-5v-2m12 2v-2M5 8h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm0 12h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm12 0h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm0-12h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Z"/>
                  </svg>

                   <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Categories</span>
                {!isCategoriesVisible && (<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10 16 4-4-4-4"/>
                    </svg>)}
                    {isCategoriesVisible && (
                   <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="  " strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                   </svg>)} 
             </button>
             {isCategoriesVisible && (
              <ul id="dropdown-example" className="py-2 space-y-2">
                   <li>
                   <Link to="/dashboard/categories" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 
                      group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        Category  List
                        </Link>
                   </li>
                   {/* <li>
                      <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 
                      group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >Product View</a>
                   </li> */}
                   <li>
                      <Link to="/dashboard/categories/add" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11
                       group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        Add category </Link>
                      
                      </li>
             </ul>
            )}
          </li>
          {/*Sub Categories  */}
          <li>
             <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 
             rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" 
             aria-controls="dropdown-example" data-collapse-toggle="dropdown-example" onClick={toggleSubCategories}>
                  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm6-2a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm0 0h-1a5 5 0 0 1-5-5v-.5"/>
                  </svg>

                   <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Sub Categories</span>
                {!isSubCategoriesVisible && (<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10 16 4-4-4-4"/>
                    </svg>)}
                    {isSubCategoriesVisible && (
                   <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="  " strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                   </svg>)} 
             </button>
             {isSubCategoriesVisible && (
              <ul id="dropdown-example" className="py-2 space-y-2">
                   <li>
                   <Link to="/dashboard/subcategories" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 
                      group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        Sub Category  List
                        </Link>
                   </li>
                   {/* <li>
                      <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 
                      group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >Product View</a>
                   </li> */}
                   <li>
                      <Link to="/dashboard/subcategories/add" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11
                       group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        Add sub category </Link>
                      
                      </li>
             </ul>
            )}
          </li>
          {/* User */}
          <li>
             <Link to="" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 
             rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" 
             aria-controls="dropdown-example" data-collapse-toggle="dropdown-example" onClick={toggleUsers}>
                   <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                  </svg>
                  

                   <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Users</span>
                {/* <span className="mr-2 inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-white bg-[#ff4d7a] rounded-full dark:bg-gray-700 dark:text-gray-300">Hot</span>
                {!isUsersVisible && (<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10 16 4-4-4-4"/>
                    </svg>)}
                    {isUsersVisible && (
                   <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="  " strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                   </svg>)} */}
             </Link>
             {/* {isUsersVisible && (
              <ul id="dropdown-example" className="py-2 space-y-2">
                   <li>
                      <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">User List</a>
                   </li>
                   <li>
                      <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                   </li>
                   <li>
                      <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                   </li>
             </ul>
            )} */}
          </li>
          {/* Authentification */}
          <li>
             <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 
             rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" 
             aria-controls="dropdown-example" data-collapse-toggle="dropdown-example" onClick={toggleAuthentification}>
                   <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"/>
                    </svg>


                   <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Authentification</span>
                   {!isAuthentificationVisible && (<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10 16 4-4-4-4"/>
                    </svg>)}
                    {isAuthentificationVisible && (
                   <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="  " strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                   </svg>)}
             </button>
             {isAuthentificationVisible && (
              <ul id="dropdown-example" className="py-2 space-y-2">
                   <li>
                      <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                   </li>
                   <li>
                      <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                   </li>
                   <li>
                      <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                   </li>
             </ul>
            )}
          </li>
         
          <li>
             <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 
             rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" 
             aria-controls="dropdown-example" data-collapse-toggle="dropdown-example" onClick={toggleInvoices}>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 3v4a1 1 0 0 1-1 1H5m8-2h3m-3 3h3m-4 3v6m4-3H8M19 4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM8 12v6h8v-6H8Z"/>
                </svg>

                   <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Invoices</span>
                   {!isInvoicesVisible && (<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10 16 4-4-4-4"/>
                    </svg>)}
                    {isInvoicesVisible && (
                   <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="  " strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                   </svg>)}  
             </button>
             {isInvoicesVisible && (
              <ul id="dropdown-example" className="py-2 space-y-2">
                   <li>
                      <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                   </li>
                   <li>
                      <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                   </li>
                   <li>
                      <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                   </li>
             </ul>
            )}
          </li>
          <li>
             <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
              </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">Orders</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-white bg-primary-700 rounded-full dark:bg-blue-900 dark:text-blue-300">5</span>

             </a>
          </li>
          <li>
             <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9"/>
            </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">Messages</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-white bg-primary-700 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
             </a>
          </li>
          <li>
             <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"/>
            </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">Notifications</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-white bg-primary-700 rounded-full dark:bg-blue-900 dark:text-blue-300">9</span>

             </a>
          </li>
          <li>
             <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="2" d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
            </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
             </a>
          </li>
          <div id="dropdown-cta" className="pt-5 pb-5 p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900" role="alert">
          <div className="flex items-center justify-center ">
            <button 
              type="button" 
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Logout
            </button>
          </div>

         
      </div>
          {/* <li>
             <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"/>
              </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">Blank Page</span>
             </a>
          </li>
          
          <li>
             <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">Alerts</span>
             </a>
          </li>
          <li>
             <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
            </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">Avatars</span>
             </a>
          </li>
          <li>
             <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6.2V5h11v1.2M8 5v14m-3 0h6m2-6.8V11h8v1.2M17 11v8m-1.5 0h3"/>
            </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">Headings</span>
             </a>
          </li>
          <li>
             <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 6.5h2M11 18h2m-7-5v-2m12 2v-2M5 8h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm0 12h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm12 0h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm0-12h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Z"/>
            </svg>


                <span className="flex-1 ms-3 whitespace-nowrap">Buttons</span>
             </a>
          </li> */}
         
       </ul>
         
    </div>
 </aside>
 
  )
}

export default SideBar