import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../../App';
import Details from './Details';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const context = useContext(MyContext);
  const [product, setProduct] = useState(null);
  const { id } = useParams(); // Récupère l'ID depuis l'URL

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/produits/${id}`, {
          headers: {
            accept: 'application/json',
          },
        });
        setProduct(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération de produit :', error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div
      className={`mt-10 p-1   rounded-lg dark:bg-gray-900 ${
        context.isToggleSidebar ? "md:ml-64" : "ml-0"
      }`}
    >
      <div className=" p-1 rounded-lg ">
        <div className="grid grid-cols-1 gap-4 mb-4">
          <div className="flex items-center justify-between h-24 rounded bg-gray-50 dark:bg-gray-800 px-4">
            {/* */}
            <h1 className="text-lg font-semibold text-gray-800 dark:text-white">Product View</h1>
            {/* */}
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li>
                  <Link to="/dashboard/products" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Products</Link>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Product View</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {product && <Details product={product} />}
      </div>
    </div>
  );
};

export default ProductDetails;