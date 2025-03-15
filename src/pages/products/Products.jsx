import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../App';
import DashboardBox from '../dashboard/components/DashboardBox';
import Chart from 'react-google-charts';
import BestSellingTable from '../dashboard/components/BestSellingTable';
import { Link } from 'react-router-dom';
import axios from 'axios'
function Products() {
  const API_URL = import.meta.env.VITE_API_BASE_URL;

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
  }
  const [totSales, setTotSales] = useState(); 
  const [totOrders, setTotOrders] = useState(); 
  
  useEffect(() => {
    // Fonction pour récupérer les catégories
    const fetchSalesOrders = async () => {
        try {
            const response = await axios.get(`${API_URL}/orders/stats`, {
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




  const [TotProducts, setTotProducts  ] = useState(); 
  
  useEffect(() => {
    // Fonction pour récupérer les catégories
    const fetchTotProducts = async () => {
        try {
            const response = await axios.get(`${API_URL}/produits/count`, {
                headers: {
                    accept: 'application/json',
                },
            });
            setTotProducts(response.data.count); 
        } catch (error) {
            console.error('Erreur lors de la récupération des produits :', error);
        }
    };
  
    fetchTotProducts(); // Appel de la fonction
  }, []);
  useEffect(()=>{
  console.log("TotProducts ",TotProducts)
  },[TotProducts])                                          
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
                        {/* <li className="inline-flex items-center">
                          <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                            </svg>
                            Home
                          </a>
                        </li> */}
                        <li>
                          {/* <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                            </svg> */}
                            <Link to="/dashboard" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Dashboard</Link>
                          {/* </div> */}
                        </li>
                        <li aria-current="page">
                          <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Products</span>
                          </div>
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
        
          <svg className="text-[45px] opacity-40 text-white dark:text-white"  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M14 7h-4v3a1 1 0 0 1-2 0V7H6a1 1 0 0 0-.997.923l-.917 11.924A2 2 0 0 0 6.08 22h11.84a2 2 0 0 0 1.994-2.153l-.917-11.924A1 1 0 0 0 18 7h-2v3a1 1 0 1 1-2 0V7Zm-2-3a2 2 0 0 0-2 2v1H8V6a4 4 0 0 1 8 0v1h-2V6a2 2 0 0 0-2-2Z" clip-rule="evenodd"/>
          </svg>

          

      }
      grow={true}
      title={"Total Sales"}
      value={ totSales }
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
      value={totOrders}
    />
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
      value={TotProducts}
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

export default Products