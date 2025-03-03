import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"

const ListSubCategories = ({subCategories,setSubCategories }) => {
    const [activePage, setActivePage] = useState(1);
    // const [subCategories, setSubCategories] = useState(initialCategories); 
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);
    // Function to handle page click
    const handlePageClick = (pageNumber) => {
      setActivePage(pageNumber);
    };
    const paginationTab=[1, 2, 3, 4, 5]
    const [loading,setLoading]=useState()
    // Fonction pour gérer la suppression de catégorie
    const [message, setMessage] = useState('');
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const openPopup = (categoryId) => {
        setSelectedSubCategory(categoryId);
      setIsPopupVisible(true);
    };
  
    const closePopup = () => {
      setSelectedSubCategory(null);
      setIsPopupVisible(false);
    };
    const handleDeleteSubCategory = (subcategoryId) => {
      axios
        .delete(`http://127.0.0.1:8000/api/subcategories/${subcategoryId}`)
        .then((response) => {
          console.log("subcategoryId", subcategoryId);
          setMessage(`SubCategory supprimée avec succès : ${response.data.message || 'Succès'}`);
          setSubCategories((prevCategories) =>
            prevCategories.filter((category) => category.id !== subcategoryId)
          ); // Mise à jour locale des catégories
          setIsPopupVisible(false); // Fermer le pop-up après suppression
          // Optionnel : actualisez la liste des catégories ici
        })
        .catch((error) => {
          setMessage(`Erreur lors de la suppression : ${error.response?.data?.message || error.message}`);
        });
    };
    return (
    //  <h1>hello</h1>
   <div className="w-full overflow-x-auto shadow-md sm:rounded-lg">
      <table className="mb-3 mt-2 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-[#efefef] dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" className="p-4">
                      <div className="flex items-center">
                          <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label for="checkbox-all-search" className="sr-only">checkbox</label>
                      </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                  Subcategory ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                  Category Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                      SubCategory Name
                  </th>
                  <th></th>
                  
              </tr>
          </thead>
          <tbody>
          {subCategories.map((subcategorie, index) => (
            <tr
              key={subcategorie.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id={`checkbox-table-search-${index}`}
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor={`checkbox-table-search-${index}`}
                    className="sr-only"
                  >
                    checkbox
                  </label>
                </div>
              </td>
              <td className="px-6 py-4">{subcategorie.id}</td>
              
                <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                <div className="flex items-center space-x-4">
                    {subcategorie.category.Name}
                    <div className="flex flex-col">
                        
                        </div>
                </div>
  
                
                </th>
                <td className="px-6 py-4">{subcategorie.Name} </td>
                <td className="flex items-center px-6 py-4">
                             
                              <Link
                                to={`/dashboard/subCategories/edit/${subcategorie.id}`}
                                className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                              >
                                <svg className="bg-[#228a4f16] p-1 rounded text-[#228a4f] w-25 h-25 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
                                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                                </svg>
                
                              </Link>
                              {/* delete */}
                              <a
                                href="#"
                                className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                                onClick={(e) => {
                                  e.preventDefault(); // Empêche le rechargement de la page
                                  openPopup(subcategorie.id); // Ouvrir le pop-up
                                }}
                              >
                                
                                <svg className="bg-[#ef090914] p-1 rounded text-[#ef0909] w-25 h-25 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15v3c0 .5523.44772 1 1 1h16c.5523 0 1-.4477 1-1v-3M3 15V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v9M3 15h18M8 15v4m4-4v4m4-4v4m-5.5061-7.4939L12 10m0 0 1.5061-1.50614M12 10l1.5061 1.5061M12 10l-1.5061-1.50614"/>
                                </svg>
                
                              </a>
                            </td>
            </tr>
          ))}
           
          </tbody>
      </table>
         {/* Popup de confirmation */}
         {isPopupVisible && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 w-80">
              <h2 className="text-lg font-bold mb-4">Confirmer la suppression</h2>
              <p className="mb-6">Êtes-vous sûr de vouloir supprimer cette catégorie ?</p>
              <div className="flex justify-end">
                <button
                  onClick={closePopup}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded mr-2"
                >
                  Annuler
                </button>
                <button
                  onClick={() => handleDeleteSubCategory(selectedSubCategory)}
                  className="px-4 py-2 bg-red-600 text-white rounded"
                >
                  Confirmer
                </button>
              </div>
            </div>
          </div>
        )}
      <p className='text-[14px] font-[500] ml-2 text-gray-500'>Showing <b>12</b> of <b>60</b> results</p>
      <div className="sm:block md:flex justify-end sm:justify-center md:justify-end mr-2 ml-2">
        <nav aria-label="Page navigation">
          <ul className="mb-3 inline-flex -space-x-px text-sm ml-auto">
            <li>
              <a
                href="#"
                className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight ${
                  activePage === 1 ? 'text-blue-600 bg-blue-50' : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'
                } border border-e-0 border-gray-300 rounded-s-lg  dark:bg-gray-800 dark:border-gray-700 c dark:hover:bg-gray-700 dark:hover:text-white`}
                onClick={(e) => {
                    if (activePage !== 1) {
                      handlePageClick(activePage - 1);
                    }
                    e.preventDefault(); // Prevents action if page is 5 (disabled)
                  }}
              >
                Previous
              </a>
            </li>
  
            {paginationTab.map((pageNumber) => (
              <li key={pageNumber}>
                <a
                  href="#"
                  className={`flex items-center justify-center px-3 h-8 leading-tight ${
                    activePage === pageNumber
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-500 bg-white'
                  } border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                  onClick={() => handlePageClick(pageNumber)}
                >
                  {pageNumber}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className={`flex items-center justify-center px-3 h-8 leading-tight ${
                  activePage === 5 ? 'text-blue-600 bg-blue-50' : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'
                } border border-gray-300 rounded-e-lg  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                onClick={(e) => {
                    if (activePage !== 5) {
                      handlePageClick(activePage + 1);
                    }
                    e.preventDefault(); // Prevents action if page is 5 (disabled)
                  }}
                
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
  
  </div> 
  )
}

export default ListSubCategories