import React, { useContext, useState } from 'react'
import DashboardBox from './components/DashboardBox'
import { Chart } from "react-google-charts";
import BestSellingTable from './components/BestSellingTable';
import { MyContext } from "../../App";



const Dashboard = () => {
  const [box1, setBox1] = useState(false);
  // const [brandBy, setBrandBy] = useState(false);
  const [bestSelling, setBestSelling] = useState(false);
  const [showBy, setShowBy] = useState(false);
  const [categoryBy, setCategoryBy] = useState(false);
  const [searchBy, setSearchBy] = useState(false);
  const [valShowBy, setValShowBy] = useState();
  const [valCategoryBy  , setValCategoryBy] = useState();
  const [valSearchBy  , setValSearchBy] = useState();
  const context= useContext(MyContext)


  const toggleBox1 = () => {
    setBox1(!box1);
  };

  const toggleBestSelling = () => {
    setBestSelling(!bestSelling);
   
    
  };

  const toggleShowBy = () => {
    setShowBy(!showBy);
    
    if(categoryBy){
      setCategoryBy(!categoryBy);
      }
    if(searchBy){
      setSearchBy(!searchBy);
  }
    if(brandBy){
      setBrandBy(!brandBy);
      }
  };

  const toggleCategoryBy = () => {
    setCategoryBy(!categoryBy);
    if(showBy){
      setShowBy(!showBy);
    }
    if(searchBy){
      setSearchBy(!searchBy);
    }
    if(brandBy){
      setBrandBy(!brandBy);
      }
  };


  const toggleSearchBy = () => {
    setSearchBy(!searchBy);
    if(showBy){
      setShowBy(!showBy);
    }
    if(categoryBy){
      setCategoryBy(!categoryBy);
    }
    if(brandBy){
      setBrandBy(!brandBy);
    }
  };


  // const toggleBrandBy = () => {
  //   setBrandBy(!brandBy);
  //   if(searchBy){
  //     setSearchBy(!searchBy);
  //   }
  //   if(categoryBy){
  //     setCategoryBy(!categoryBy);
  //     }
  //   if(showBy){
  //     setShowBy(!showBy);
  //   }
  // };
  const data = [
    ["Year", "Sales"],
    ["2013", 1000],
    ["2014", 1170],
    ["2015", 660],
    ["2016", 1030],
  ];
  
  const options = {
    backgroundColor: 'transparent', // Fond transparent
    curveType: 'function', // Rend la courbe lisse
    chartArea: {
      width: '90%', // Occupe 90% de la largeur du conteneur
      height: '80%', // Proportion du graphique
    },
    legend: 'none', // Pas de légende
    hAxis: {
      textPosition: 'none', // Masque l'axe horizontal
      gridlines: { color: 'transparent' }, // Pas de lignes de grille horizontales
    },
    vAxis: {
      textPosition: 'none', // Masque l'axe vertical
      gridlines: { color: 'transparent' }, // Pas de lignes de grille verticales
    },
    series: {
      0: {
        color: '#99bdff', // Couleur de la ligne
        areaOpacity: 0.2, // Ajoute un remplissage sous la courbe
      },
    },
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
                          {/* <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                            </svg> */}
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Dashboard</span>
                          
                          {/* </div> */}
                        </li>
                        
                      </ol>
                    </nav>

      
        </div>
      </div>
      {/* <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
         <p className="text-2xl text-gray-400 dark:text-gray-500">
            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
            </svg>
         </p>
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
  {/* Première colonne, première ligne */}
  <div
    className="flex rounded bg-gray-50 h-30 dark:bg-gray-800"
    style={{
      backgroundImage: 'linear-gradient(to right,#228a4f, #48d483)',
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
            d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z"
            clipRule="evenodd"
          />
        </svg>
      }
      grow={true}
      title={"Total Users"}
      value={450}
    />
  </div>

  {/* Deuxième colonne */}
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
      value={1452}
    />
  </div>

  {/* Troisième colonne fusionnée */}
  <div
    className="flex rounded bg-blue-gradient h-full row-span-2 dark:bg-gray-800 p-5 "
    style={{
      backgroundImage: 'linear-gradient(#1f2937, #374961)',
    }}
  >
        {/* <DashboardBox /> */}
        <div className="flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <h4 className="text-white text-[17px]">Total Sales</h4>
              {/* Dots */}
              <div className="relative ml-auto">

                <button onClick={toggleBox1}>
                  <svg className="w-[35px] h-[35px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2.8" d="M6 12h.01m6 0h.01m5.99 0h.01"/>
                  </svg>
                </button>

              {/* /* Dropdown menu */} 
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
                

            </div>
            <h3 className="text-white font-bold text-[25px]">
              36,787.00
              <div className=" absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white"> Dt</div>

            </h3>
            <div className="flex-grow">
              <Chart
                chartType="LineChart"
                data={data}
                options={options}
                width="90%"
                height="100%" // Assure que le graphique occupe tout l'espace disponible
              />
            </div>
            <p className="text-[16px] text-sm sm:text-base md:text-lg lg:text-xl text-white opacity-70 flex flex-wrap items-center">
              33,578.25
              <div className="ml-1 inline-flex items-center justify-center text-[10px] sm:text-xs md:text-sm text-white">Dt</div>
              <span className="ml-2 text-[10px] sm:text-sm md:text-base">in last month</span>
            </p>

              


        </div>
      
  </div>

  {/* Reste des colonnes */}
  <div
    className="flex rounded bg-gray-50 h-30 dark:bg-gray-800"
    style={{
      backgroundImage: 'linear-gradient(to right,#2c78e5, #60aff5)',
    }}
  >
    <DashboardBox
      icon={
        <svg className="text-[45px] opacity-40 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fill-rule="evenodd" d="M5.833 5a5 5 0 0 1 3-1h6.334a5 5 0 0 1 3 1L21.1 7.2a1 1 0 0 1 .268 1.296l-2 3.5a1 1 0 0 1-1.382.361l-.986-.59V19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-7.234l-.985.591a1 1 0 0 1-1.383-.36l-2-3.5A1 1 0 0 1 2.9 7.2L5.833 5ZM14 5h-4c0 .425.223.933.645 1.355.422.423.93.645 1.355.645.425 0 .933-.222 1.355-.645.423-.422.645-.93.645-1.355Z" clip-rule="evenodd"/>
    </svg>
      }
      title={"Total Products"}
      value={95}
    />
  </div>

  {/* Dernière colonne */}
  <div
    className="flex rounded bg-gray-50 h-30 dark:bg-gray-800"
    style={{
      backgroundImage: 'linear-gradient(to right,#e1950e, #f3cd29)',
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
          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
        </svg>
      }
      title={"Total Reviews"}
      value={277}
    />
  </div>
      </div>

      <div
        className=" rounded-lg bg-gray-50 dark:bg-gray-800 px-4 h-full mb-4 p-5"
      >
          <div className="flex items-center justify-between">
              <h1 className='text-[18px] font-bold dark:text-white'>Best Selling Products</h1>

                {/* Dots */}
                <div className="relative ml-auto">

                  <button onClick={toggleBestSelling} >
                    <svg className="w-[35px] h-[35px] text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeWidth="2.8" d="M6 12h.01m6 0h.01m5.99 0h.01"/>
                    </svg>
                  </button>

                {/* /* Dropdown menu */} 
                  {bestSelling && (
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
          <div className='flex flex-wrap justify-between items-center gap-3 mt-3'>
                  
                  <div className="w-full sm:w-auto col text-[14px] font-semibold capitalize relative flex items-center gap-2">
                    <h4 className='dark:text-white'>show By</h4>
                    <button
                      id="dropdownHoverButton"
                      data-dropdown-toggle="dropdownHover"
                      data-dropdown-trigger="hover"
                      className=" text-black bg-[#efefef] dark:bg-gray-700 dark:text-white hover:bg-[#e3e3e3] focus:ring-2 
                      focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 
                      text-center inline-flex items-center"
                      type="button"
                      onClick={toggleShowBy}
                      value={valShowBy} onChange={(e)=>setValShowBy(e.target.value)}
                    >
                      {valShowBy || 'Select an option'} 
                      <svg
                        className="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    {showBy && (
                      <div
                        id="dropdownHover"
                        className="absolute right-0 top-full mt-1 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                      >
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownHoverButton"
                        >
                          <li>
                          <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => {
                              setValShowBy('Dashboard');
                              setShowBy(false);
                            }}
                          >
                            Dashboard
                          </button>
                          </li>
                          <li>
                          <button
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              onClick={() => {
                                setValShowBy('Settings');
                                setShowBy(false);
                              }}
                            >
                              Settings
                            </button>
                          </li>
                          <li>
                          <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => {
                              setValShowBy('Earnings');
                              setShowBy(false);
                            }}
                          >
                            Earnings
                          </button>
                          </li>
                          <li>
                          <button
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              onClick={() => {
                                setValShowBy('Sign out');
                                setShowBy(false);
                              }}
                            >
                              Sign out
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  <div className="w-full sm:w-auto col text-[14px] font-semibold capitalize relative flex items-center gap-2">
                      <h4 className='dark:text-white'>Category By</h4>
                      <button
                        id="dropdownHoverButton"
                        data-dropdown-toggle="dropdownHover"
                        data-dropdown-trigger="hover"
                        className=" text-black bg-[#efefef] dark:bg-gray-700 dark:text-white hover:bg-[#e3e3e3] focus:ring-2 
                        focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 
                        text-center inline-flex items-center"
                        type="button"
                        onClick={toggleCategoryBy}
                      >
                        {valCategoryBy || 'Select an option'} 
                        <svg
                          className="w-2.5 h-2.5 ms-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                      {categoryBy && (
                        <div
                          id="dropdownHover"
                          className="absolute right-0 top-full mt-1 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                        >
                          <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownHoverButton"
                          >
                            <li>
                            <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => {
                              setValCategoryBy('Dashboard');
                              setCategoryBy(false);
                            }}
                          >
                                Dashboard
                              </button>
                            </li>
                            <li>
                              <button
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              onClick={() => {
                                setValCategoryBy('Settings');
                                setCategoryBy(false);
                              }}
                          >
                                Settings
                              </button>
                            </li>
                            <li>
                            <button
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              onClick={() => {
                                setValCategoryBy('Earnings');
                                setCategoryBy(false);
                              }}
                          >
                                Earnings
                              </button>
                            </li>
                            <li>
                            <button
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              onClick={() => {
                                setValCategoryBy('Sign out');
                                setCategoryBy(false);
                              }}
                          >
                                Sign out
                              </button>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  
                  {/* <div className="w-full sm:w-auto col text-[14px] font-semibold capitalize relative flex items-center gap-2">
                      <h4>Brand By</h4>
                      <button
                        id="dropdownHoverButton"
                        data-dropdown-toggle="dropdownHover"
                        data-dropdown-trigger="hover"
                        className="mt-2 text-black bg-[#efefef] hover:bg-[#e3e3e3] focus:ring-2 
                        focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 
                        text-center inline-flex items-center"
                        type="button"
                        onClick={toggleBrandBy}
                      >
                        <svg
                          className="w-2.5 h-2.5 ms-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                      {brandBy && (
                        <div
                          id="dropdownHover"
                          className="absolute top-full mt-1 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                        >
                          <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownHoverButton"
                          >
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Dashboard
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Settings
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Earnings
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Sign out
                              </a>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div> */}
                  
                  <div className="w-full sm:w-auto col text-[14px] font-semibold capitalize relative flex items-center gap-2">
                      <h4 className='dark:text-white'>Search By</h4>
                      <button
                        id="dropdownHoverButton"
                        data-dropdown-toggle="dropdownHover"
                        data-dropdown-trigger="hover"
                        className=" text-black bg-[#efefef] dark:bg-gray-700 dark:text-white hover:bg-[#e3e3e3] focus:ring-2 
                        focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 
                        text-center inline-flex items-center"
                        type="button"
                        onClick={toggleSearchBy}
                      >
                        {valSearchBy || 'Select an option'} 

                        <svg
                          className="w-2.5 h-2.5 ms-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                      {searchBy && (
                        <div
                          id="dropdownHover"
                          className="absolute right-0 top-full mt-1 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                        >
                          <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownHoverButton"
                          >
                            <li>
                            <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => {
                              setValSearchBy('Dashboard');
                              setSearchBy(false);
                            }}
                          >
                                Dashboard
                              </button>
                            </li>
                            <li>
                            <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => {
                              setValSearchBy('Settings');
                              setSearchBy(false);
                            }}
                          >
                                Settings
                              </button>
                            </li>
                            <li>
                            <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => {
                              setValSearchBy('Earnings');
                              setSearchBy(false);
                            }}
                          >
                                Earnings
                              </button>
                            </li>
                            <li>
                            <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => {
                              setValSearchBy('Sign out');
                              setSearchBy(false);
                            }}
                          >
                                Sign out
                              </button>
                            </li>
                          </ul>
                        </div>
                      )}
                      
                  </div>
                  <BestSellingTable />
          </div>
      </div>
   </div>
</div>
  )
}

export default Dashboard