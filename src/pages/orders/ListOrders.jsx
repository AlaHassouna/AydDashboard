import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

const ListOrders = () => {

  const [activePage, setActivePage] = useState(1);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orders, setOrders] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [isOrderPopupVisible, setIsOrderPopupVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [limit, setLimit] = useState(2);
  const [userName, setUserName] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const openOrderPopup = (order) => {
    setSelectedOrder(order);
    setIsOrderPopupVisible(true);
  };
  const closeOrderPopup = () => {
    setSelectedOrder(null);
    setIsOrderPopupVisible(false);
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
    }
    };
    const handleNextPage = () => {
    if (currentPage < totalPages) {
    setCurrentPage(currentPage + 1);
    }
    };
    const handlePageChange = (page) => {
    setCurrentPage(page);
    };
  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
  };

  // const paginationTab = [1, 2, 3, 4, 5];

  const openPopup = (user) => {
    setSelectedUser(user);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setSelectedUser(null);
    setIsPopupVisible(false);
  };

  const openProductPopup = (product) => {
    setSelectedProduct(product);
    setIsPopupVisible(true);
  };
  const generatePaginationTab = (num) => Array.from({ length: num }, (_, i) => i + 1);
  const [paginationTab ,setPaginationTab ]=useState([])
  const fetchOrders = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/orders`, {
        params: {
          page: currentPage,
          pageSize: pageSize,
          sortBy: sortBy,
          userName: userName,
        },
        headers: {
          accept: 'application/json',
        },
      });
      setPaginationTab(generatePaginationTab(response.data.totalPages));
      setOrders(response.data.orders);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Erreur lors de la récupération des orders :', error);
    }
  };
  useEffect(() => {
   

    fetchOrders();
  }, [currentPage, userName, sortBy]);
  useEffect(()=>{
    console.log("Orders",orders)
  },[orders])
  return (
    <div className="w-full overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex justify-between mb-4">
  
  
  
</div>
<div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <div class="w-full md:w-1/2">
                    <form class="flex items-center">
                        <label for="simple-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <input type="text" id="simple-search" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="Rechercher par nom d'utilisateur " required=""/>
                        </div>
                    </form>
                </div>
                <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    
                    <div class="flex items-center space-x-3 w-full md:w-auto">
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option value="newest">Plus récent</option>
                        <option value="oldest">Plus ancien</option>
                      </select>
                        
                    </div>
                </div>
            </div>
      <table className="mb-3 mt-2 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-[#efefef] dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Nom
            </th>
            <th scope="col" className="px-6 py-3">
              Gouvernorat
            </th>
            <th scope="col" className="px-6 py-3">
              Délégation
            </th>
            <th scope="col" className="px-6 py-3">
              Adresse
            </th>
            <th scope="col" className="px-6 py-3">
              Téléphone 1
            </th>
            <th scope="col" className="px-6 py-3">
              Téléphone 2
            </th>
            
            <th scope="col" className="px-6 py-3">
              Statut
            </th>
            <th scope="col" className="px-6 py-3">
              Remarque
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input id={`checkbox-table-search-${index}`} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label htmlFor={`checkbox-table-search-${index}`} className="sr-only">checkbox</label>
                </div>
              </td>
              <td className="px-6 py-4">{order.id}</td>
              <td className="px-6 py-4">
                
                  {order.user?.Nom}
              
              </td>
              <td className="px-6 py-4">{order.gouvernorat}</td>
              <td className="px-6 py-4">{order.delegation}</td>
              <td className="px-6 py-4">{order.Adresse}</td>
              <td className="px-6 py-4">{order.phone1}</td>
              <td className="px-6 py-4">{order.phone2}</td>
              
              <td className="px-6 py-4">{order.status}</td>
              <td className="px-6 py-4">{order.remarque}</td>
              <td className="flex items-center px-6 py-4">
                <button onClick={() => openOrderPopup(order)} className="font-medium text-blue-600 hover:underline">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                  <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>

                </button>
                <Link
                  to={`/dashboard/orders/edit/${order.id}`}
                  className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                >
                  <svg className="bg-[#228a4f16] p-1 rounded text-[#228a4f] w-25 h-25 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                  </svg>
  
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isOrderPopupVisible && selectedOrder && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-8 rounded-lg shadow-xl w-11/12 max-w-3xl max-h-[90vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Détails de la commande</h2>
        <button 
          onClick={closeOrderPopup} 
          className="text-gray-500 hover:text-gray-700 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        
      </div>
      
      <div className="space-y-6">
        {/* Informations sur l'utilisateur */}
        <div className="space-y-4">
          <p><strong className="text-gray-600">ID Utilisateur:</strong> {selectedOrder.user.id}</p>
          <p><strong className="text-gray-600">Email:</strong> {selectedOrder.user.Email}</p>
          <p><strong className="text-gray-600">Adresse:</strong> {selectedOrder.user.Adresse}</p>
          <p><strong className="text-gray-600">Téléphone 1:</strong> {selectedOrder.user.Phone_1}</p>
          <p><strong className="text-gray-600">Téléphone 2:</strong> {selectedOrder.user.Phone_2}</p>
          <p><strong className="text-gray-600">Gouvernorat:</strong> {selectedOrder.user.Gouvernorat}</p>
          <p><strong className="text-gray-600">Délégation:</strong> {selectedOrder.user.Delegation}</p>
        </div>
        
        {/* Informations sur la commande */}
        <div className="space-y-4">
          <p><strong className="text-gray-600">Gouvernorat Commande:</strong> {selectedOrder.gouvernorat}</p>
          <p><strong className="text-gray-600">Délégation Commande:</strong> {selectedOrder.delegation}</p>
          <p><strong className="text-gray-600">Statut:</strong> {selectedOrder.status}</p>
          <p><strong className="text-gray-600">Remarque:</strong> {selectedOrder.remarque || "Aucune remarque"}</p>
          <p><strong className="text-gray-600">Prix Total:</strong> {selectedOrder.total_price}€</p>
          <p><strong className="text-gray-600">Date de création:</strong> {new Date(selectedOrder.created_at).toLocaleString()}</p>
        </div>

        {/* Détails des produits */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Produits Commandés</h3>
          {selectedOrder.produits.map((produit) => (
            <div key={produit.id} className="flex items-center space-x-4 mb-4 border-b pb-4">
              <img 
                src={produit.Image[0]} 
                alt={produit.Product} 
                className="w-20 h-20 object-cover rounded-md shadow-sm" 
              />
              <div className="flex-1">
                <p><strong className="text-gray-600">Produit:</strong> {produit.Product}</p>
                <p><strong className="text-gray-600">Description:</strong> {produit.Description}</p>
                <p><strong className="text-gray-600">Catégorie:</strong> {produit.Category}</p>
                <p><strong className="text-gray-600">Sous-catégorie:</strong> {produit.SubCategory}</p>
                <p><strong className="text-gray-600">Marque:</strong> {produit.Brand}</p>
                <p><strong className="text-gray-600">Prix unitaire:</strong> {produit.Price}€</p>
                <p><strong className="text-gray-600">Quantité:</strong> {produit.order_product.quantity}</p>
                <p><strong className="text-gray-600">Taille:</strong> {produit.order_product.size}</p>
                <p><strong className="text-gray-600">Couleur:</strong> {produit.order_product.color}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={closeOrderPopup} 
        className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md text-lg hover:bg-blue-700 transition duration-200">
        Fermer
      </button>
    </div>
  </div>
)}



      <div className="sm:block md:flex justify-end sm:justify-center md:justify-end mr-2 ml-2">
        <nav aria-label="Page navigation">
          <ul className="mb-3 inline-flex -space-x-px text-sm ml-auto">
            <li>
            <Pagination handlePrevPage={handlePrevPage}
                                    handleNextPage={handleNextPage}
                                    handlePageChange={handlePageChange}
                                    totalPages={totalPages}
                                    currentPage={currentPage}
                                    />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ListOrders