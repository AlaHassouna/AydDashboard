import React, { useContext, useState } from 'react'
import { MyContext } from '../../App';
import { Link } from 'react-router-dom';
import DashboardBox from '../dashboard/components/DashboardBox';
import axios from 'axios';
import { useEffect } from 'react';
import ListSubCategories from './ListSubCategories';

const Subcategories = () => {
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
    const [selectedCategory, setSelectedCategory] = useState(''); // État pour la catégorie sélectionnée  
const [subCategories, setSubCategories] = useState([]); // État pour stocker les catégories
  

  useEffect(() => {
    // Fonction pour récupérer les catégories
    const fetchCategories = async () => {
        try {
            const response = await axios.get(`${API_URL}/subcategories`, {
                headers: {
                    accept: 'application/json',
                },
            });
            setSubCategories(response.data); // Mettre à jour l'état avec les données récupérées
        } catch (error) {
            console.error('Erreur lors de la récupération des catégories :', error);
        }
    };
  
    fetchCategories(); // Appel de la fonction
  }, []);
  useEffect(()=>{
  console.log("subCategories ",subCategories)
  },[subCategories])
    
    useEffect(()=>{
console.log("subCategories ",subCategories)
    },[subCategories])


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
     
    };
        const [totSubCategories, setTotSubCategories] = useState(); 
    
    useEffect(() => {
      // Fonction pour récupérer les catégories
      const fetchtotReviews = async () => {
          try {
              const response = await axios.get(`${API_URL}/subcategories/count`, {
                  headers: {
                      accept: 'application/json',
                  },
              });
              setTotSubCategories(response.data.count); 
          } catch (error) {
              console.error('Erreur lors de la récupération des catégories :', error);
          }
      };
    
      fetchtotReviews(); // Appel de la fonction
    }, []);
    useEffect(()=>{
    console.log("totSubCategories ",totSubCategories)
    },[totSubCategories])

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
                                    <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Subcategories</span>
                                </div>
                                </li>
                            </ol>
                            </nav>

            
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 mb-4">
                    

                    {/* Reste des colonnes */}
                    <div
                        className="flex rounded bg-gray-50 h-30 dark:bg-gray-800"
                        style={{
                        backgroundImage: 'linear-gradient(to right,#2c78e5, #60aff5)',
                        }}
                    >
                        <DashboardBox
                        icon={
                            
                        
                         <svg class="w-6 h-6 text-gray-800 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm6-2a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm0 0h-1a5 5 0 0 1-5-5v-.5"/>
                         </svg>
                        
                        }
                        title={"Total Subcategories"}
                        value={totSubCategories }
                        />
                    </div>

                </div>
                <div
        className=" rounded-lg bg-gray-50 dark:bg-gray-800 px-4 h-full mb-4 p-5"
      >
          <div className="flex items-center justify-between">
              <h1 className='text-[18px] font-bold dark:text-white'>Categories</h1>

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
          <div className='justify-between items-center  mt-3'>
                  
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
                        className="absolute  top-full mt-1 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
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
                  
                  
                  
                  
                  
                  <ListSubCategories subCategories={subCategories} setSubCategories={setSubCategories}/>
                  {/* <BestSellingTable /> */}
             </div>
          </div>
        </div>
  </div>
  )
}

export default Subcategories