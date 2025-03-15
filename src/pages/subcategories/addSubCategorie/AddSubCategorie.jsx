import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../../App';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

const AddSubCategorie = () => {
  const API_URL = import.meta.env.VITE_API_BASE_URL;

    const [subcategoryName, setSubCategoryName] = useState(); // Nom de la catégorie

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    
    const navigate = useNavigate();
    const context = useContext(MyContext);
    const [selectedCategoryId, setSelectedCategoryId] = useState(""); // to store selected category ID

    
    const handleInputChange = (e) => {
      setSubCategoryName(e.target.value);
    };
     // Handle category selection change
  const handleCategoryChange = (e) => {
    setSelectedCategoryId(e.target.value);
  };

    useEffect(()=>{
      console.log("File")
    },[File])
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');
      setSuccess('');
    
      
    
      try {
        const newSubCategory = {
          Name: subcategoryName, // Nom de la catégorie
          category_id: selectedCategoryId, // URL de l'icône (générée après téléversement)
        };
    
        await axios.post(`${API_URL}/subcategories`, newSubCategory, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        setSuccess('SubCategory ajouté avec succès.');
        setTimeout(() => navigate('/dashboard/subcategories'), 2000);
      } catch (error) {
        console.error("Erreur lors de l'ajout du SubCategory :", error);
        setError("Impossible d'ajouté la SubCategory.");
      }
    };
    const[mockCategories,setMockCategories]=useState([])
    
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
    
  
    
  
    return (
      <div
        className={`mt-0 p-1 rounded-lg dark:bg-gray-900 ${
          context.isToggleSidebar ? 'md:ml-64' : 'ml-0'
        }`}
      >
        <div className="mt-10 p-1 rounded-lg">
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="flex items-center justify-between h-24 rounded bg-gray-50 dark:bg-gray-800 px-4">
              <h1 className="text-lg font-semibold text-gray-800 dark:text-white">Ecommerce</h1>
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                  <li>
                    <Link
                      to="/dashboard/subcategories"
                      className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      SubCategories
                    </Link>
                  </li>
                  <li aria-current="page">
                    <div className="flex items-center">
                      <svg
                        className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                      <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                        Edit
                      </span>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-gray-50 dark:bg-gray-800 px-4 h-full mb-4 p-5">
          <section>
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
              <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                Edit SubCategory
              </h2>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              {success && <p className="text-green-500 mb-4">{success}</p>}
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="subcategoryName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      SubCategory Name
                    </label>
                    <input
                      type="text"
                      name="subcategoryName"
                      id="subcategoryName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={subcategoryName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                   {/* Dropdown to select a category */}
        <div className="sm:col-span-2">
          <label
            htmlFor="categorySelect"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Choose Category
          </label>
          <select
            id="categorySelect"
            name="categorySelect"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            value={selectedCategoryId}
            onChange={handleCategoryChange}
            required
          >
            <option value="">Select Category</option>
            {mockCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.Name}
              </option>
            ))}
          </select>
        </div>
                </div>
                
                              
                        
                <button
                  type="submit"
                  className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                >
                  Add SubCategory
                </button>
                
              </form>
            </div>
          </section>
        </div>
      </div>
    );
}

export default AddSubCategorie