import React, { useContext, useState } from 'react'
import { MyContext } from '../../App';
import { Link } from 'react-router-dom';
import DashboardBox from '../dashboard/components/DashboardBox';
import ListCategories from './ListCategories';
import axios from 'axios';
import { useEffect } from 'react';

const Categories = () => {
  const API_URL = import.meta.env.VITE_API_BASE_URL;

    const [box1, setBox1] = useState(false);
    // const [brandBy, setBrandBy] = useState(false);
    const [categories, setCategories] = useState(false);
    const [showBy, setShowBy] = useState(false);
    const [categoryBy, setCategoryBy] = useState(false);
    const [searchBy, setSearchBy] = useState(false);
    const [valShowBy, setValShowBy] = useState();
    const [valCategoryBy  , setValCategoryBy] = useState();
    const [valSearchBy  , setValSearchBy] = useState();
    const context= useContext(MyContext)
  
  
    // const [categories, setCategories] = useState([
    //   {
    //     id: 1,
    //     Name: "T-Shirts",
    //     subCategorie: [
    //       "Cartoons",
    //       "Films",
    //       "Animes",
    //       "Jeux vidéo",
    //       "Art abstrait",
    //       "Polo T-Shirts",
    //       "Casual"
    //     ],
    //     Icon: "https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //   },
    //   {
    //     id: 2,
    //     Name: "Hoodies",
    //     subCategorie: [
    //       "Cartoons",
    //       "Films",
    //       "Animes",
    //       "Streetwear",
    //       "Casual",
    //       "Saisonnier"
    //     ],
    //     Icon: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //   },
    //   {
    //     id: 8,
    //     Name: "Sweaters",
    //     SubCategory: [
    //       "Cartoons",
    //       "Films",
    //       "Streetwear",
    //       "Vintage",
    //       "Saisonnier",
    //       "Casual"
    //     ],
    //     Icon: "https://images.pexels.com/photos/2613261/pexels-photo-2613261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //   },
    //   {
    //     id: 10,  // ID unique pour cette catégorie
    //     Name: "Survêtements",  // Nom de la catégorie
    //     SubCategory: [
    //       "Casual",
    //       "Sport",
    //       "Streetwear",
    //       "Saisonnier"
    //     ],  // Sous-catégories possibles pour les tracksuits
    //     Icon: "https://images.pexels.com/photos/26664909/pexels-photo-26664909/free-photo-of-les-moments.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  // Icône associée à la catégorie
    //   },
      
    //   {
    //     id: 7,  // ID unique pour cette catégorie
    //     Name: "Pantalons",  // Nom de la catégorie
    //     SubCategory: [
    //       "Jeans",
    //       "Chinos",
    //       "Jogging",
    //       "Formel"
    //     ],  // Sous-catégories
    //     Icon: "https://images.pexels.com/photos/1895943/pexels-photo-1895943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  // Icône associée à la catégorie
    //   },
    //   {
    //     id: 3,
    //     Name: "Vestes",
    //     subCategorie: [
    //       "Films",
    //       "Animes",
    //       "Logos",
    //       "Casual",
    //       "Formel",
    //       "Détail graphique"
    //     ],
    //     Icon: "https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //   },
    //   {
    //     id: 9,
    //     Name: "Shorts",
    //     SubCategory: [
    //       "Casual",
    //       "Sport",
    //       "Vintage",
    //       "Saisonnier",
    //       "Streetwear"
    //     ],
    //     Icon: "https://images.pexels.com/photos/18394309/pexels-photo-18394309/free-photo-of-portrait-d-un-jeune-garcon-avec-une-silhouette-sombre-contre-le-mur.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //   },
    //   {
    //     id: 4,
    //     Name: "Jupes",
    //     subCategorie: [
    //       "Motifs floraux",
    //       "Casual",
          
    //     ],
    //     Icon: "https://images.pexels.com/photos/1007018/pexels-photo-1007018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //   },
    //   {
    //     id: 5,
    //     Name: "Robes",
    //     subCategorie: [
    //       "Casual",
    //       "Élégance minimaliste",
    //       "Saisonnière",
    //       "Art moderne"
    //     ],
    //     Icon: "https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //   },
    //   // {
    //   //   id: 6,
    //   //   Name: "Chemises",
    //   //   SubCategory: [
    //   //     "Films et séries",
    //   //     "Art graphique",
    //   //     "Thème cartoon",
    //   //     "Vintage"
    //   //   ],
    //   //   Icon: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=400"
    //   // },
      
      
      
      
    //   {
    //     id: 10,
    //     Name: "Accessoires",
    //     subCategorie: [
    //       "Écharpes",
    //       "Chapeaux",
    //       "Gants",
    //       "Bijoux",
    //       "Sacs à main"
    //     ],
    //     Icon: "https://images.pexels.com/photos/30076369/pexels-photo-30076369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //   }
    // ]); // État pour stocker les catégories
    const [selectedCategory, setSelectedCategory] = useState(''); // État pour la catégorie sélectionnée  
const [mockCategories, setMockCategories] = useState([]); // État pour stocker les catégories
  

  useEffect(() => {
    // Fonction pour récupérer les catégories
    const fetchCategories = async () => {
        try {
            const response = await axios.get(`${API_URL}/categories`, {
                headers: {
                    accept: 'application/json',
                },
            });
            setMockCategories(response.data); // Mettre à jour l'état avec les données récupérées
        } catch (error) {
            console.error('Erreur lors de la récupération des catégories :', error);
        }
    };
  
    fetchCategories(); // Appel de la fonction
  }, []);
  useEffect(()=>{
  console.log("mockCategories ",mockCategories)
  },[mockCategories])
    
    useEffect(()=>{
console.log("categories ",mockCategories)
    },[mockCategories])


    const toggleBox1 = () => {
      setBox1(!box1);
    };
  
    const toggleCategories = () => {
      setCategories(!categories);
     
      
    };
  
    const toggleShowBy = () => {
      setShowBy(!showBy);
      
      if(categoryBy){
        setCategoryBy(!categoryBy);
        }
      if(searchBy){
        setSearchBy(!searchBy);
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
    const [totCategories, setTotCategories] = useState(); 
  
    useEffect(() => {
      // Fonction pour récupérer les catégories
      const fetchtotReviews = async () => {
          try {
              const response = await axios.get(`${API_URL}/categories/count`, {
                  headers: {
                      accept: 'application/json',
                  },
              });
              setTotCategories(response.data.count); 
          } catch (error) {
              console.error('Erreur lors de la récupération des catégories :', error);
          }
      };
    
      fetchtotReviews(); // Appel de la fonction
    }, []);
    useEffect(()=>{
    console.log("totCategories ",totCategories)
    },[totCategories])

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
                                    <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Categories</span>
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
                            
                        <svg className="text-[45px] opacity-40 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5 3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm0 12a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H5Zm12 0a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2Zm0-12a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2Z"/>
                        <path fill-rule="evenodd" d="M10 6.5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM10 18a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Zm-4-4a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1Zm12 0a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1Z" clip-rule="evenodd"/>
                        </svg>
                        
                        
                        }
                        title={"Total Categories"}
                        value={totCategories}
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

                  <button onClick={toggleCategories} >
                    <svg className="w-[35px] h-[35px] text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeWidth="2.8" d="M6 12h.01m6 0h.01m5.99 0h.01"/>
                    </svg>
                  </button>

                {/* /* Dropdown menu */} 
                  {categories && (
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
                  
                  
                  
                  
                  
                  <ListCategories categories={mockCategories} setCategories={setMockCategories}/>
                  {/* <BestSellingTable /> */}
             </div>
          </div>
        </div>
  </div>
  )
}

export default Categories