import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

const EditOrder = () => {
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  const { id } = useParams(); // Récupérer l'ID de la commande depuis l'URL
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // États pour le formulaire
  const [gouvernorat, setGouvernorat] = useState("");
  const [delegation, setDelegation] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [remarque, setRemarque] = useState("");
  const [status, setStatus] = useState("");
  const [adresseComplet, setAdresseComplet] = useState("");
  const [totPrice, setTotPrice] = useState("");
  const [name, setName] = useState("");
  const [panier, setPanier] = useState([]);
  const navigate = useNavigate();

  // Charger les données de la commande
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(`${API_URL}/order/${id}`);
        console.log("response::::",response.data)
        setOrder(response.data);
        setGouvernorat(response.data.Gouvernorat);
        setDelegation(response.data.Delegation);
        setPhone1(response.data.Phone1);
        setPhone2(response.data.Phone2   || "");
        setRemarque(response.data.Remarque || "");
        setStatus(response.data.status);
        setAdresseComplet(response.data.adresse_complet || "");
        setTotPrice(response.data.total_price);
        setName(response.data.User?.Nom);
        setPanier(
          response.data.Panier.map((produit) => ({
            Product_UID: produit.Product_UID,
            Size: produit.Size,
            Color: produit.Color,
            Quantity: produit.Quantity,
            Price: produit.Price,
          }))
        );
        setLoading(false);
      } catch (err) {
        setError("Erreur lors du chargement de la commande.");
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  // Gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const updatedOrder = {
        Gouvernorat: gouvernorat,
        Delegation: delegation,
        Phone1: phone1,
        Phone2: phone2,
        Remarque: remarque,
        status: status,
        adresse_complet: adresseComplet,
        Panier: panier,
      };

      const response = await axios.put(`${API_URL}/order/${id}`, updatedOrder, {
        headers: {
          accept: "application/json",
        },
      });

      setSuccess("Commande mise à jour avec succès !");
      setOrder(response.data.order);
      setTimeout(() => navigate('/dashboard/orders'), 1500);

    } catch (err) {
      setError(
        err.response?.data?.message || "Erreur lors de la mise à jour de la commande."
      );
    }
  };

  // Gérer la modification des produits dans le panier
  const handlePanierChange = (index, field, value) => {
    const updatedPanier = [...panier];
    updatedPanier[index][field] = value;
    setPanier(updatedPanier);
  };

  if (loading) return <p>Chargement...</p>;
  if (!order) return <p>Commande non trouvée.</p>;

  return (
    <div className="mt-0 p-1 rounded-lg dark:bg-gray-900">
      <div className="mt-10 p-1 rounded-lg">
        <div className="grid grid-cols-1 gap-4 mb-4">
          <div className="flex items-center justify-between h-24 rounded bg-gray-50 dark:bg-gray-800 px-4">
            <h1 className="text-lg font-semibold text-gray-800 dark:text-white">Modifier la commande</h1>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li>
                  <Link
                    to="/dashboard/orders"
                    className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Orders
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
              Modifier la commande #{order.id}
            </h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="col-span-2">
                  <label
                    htmlFor="gouvernorat"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    disabled
                  />
                </div>
                <div>
                  <label
                    htmlFor="gouvernorat"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Gouvernorat
                  </label>
                  <input
                    type="text"
                    id="gouvernorat"
                    value={gouvernorat}
                    onChange={(e) => setGouvernorat(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="delegation"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Délégation
                  </label>
                  <input
                    type="text"
                    id="delegation"
                    value={delegation}
                    onChange={(e) => setDelegation(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone1"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Téléphone 1
                  </label>
                  <input
                    type="text"
                    id="phone1"
                    value={phone1}
                    onChange={(e) => setPhone1(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone2"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Téléphone 2
                  </label>
                  <input
                    type="text"
                    id="phone2"
                    value={phone2}
                    onChange={(e) => setPhone2(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="remarque"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Remarque
                  </label>
                  <input
                    type="text"
                    id="remarque"
                    value={remarque}
                    onChange={(e) => setRemarque(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="status"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Statut
                  </label>
                  <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required
                  >
                    <option value="Confirmation">Confirmation</option>
                    <option value="Confirmé">Confirmé</option>
                    <option value="Livraison">Livraison</option>
                    <option value="Terminé">Terminé</option>
                    <option value="Retour">Retour</option>
                    <option value="Annulé">Annulé</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="adresseComplet"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Adresse complète
                  </label>
                  <input
                    type="text"
                    id="adresseComplet"
                    value={adresseComplet}
                    onChange={(e) => setAdresseComplet(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="remarque"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Prix total
                  </label>
                  <input
                    type="text"
                    id="totPrice"
                    value={totPrice}
                    onChange={(e) => setTotPrice(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  />
                </div>
              </div>

              {/* Section pour les produits */}
              <div className="mt-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Produits
                </h3>
                {panier.map((item, index) => (
                  <div key={index} className="mb-4 p-4 border rounded-lg">
                    <h1>{item.Product?.Product}</h1>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                      <div>
                        <label
                          htmlFor={`size-${index}`}
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Taille
                        </label>
                        <input
                          type="text"
                          id={`size-${index}`}
                          value={item.Size}
                          onChange={(e) =>
                            handlePanierChange(index, "Size", e.target.value)
                          }
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor={`color-${index}`}
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Couleur
                        </label>
                        <input
                          type="text"
                          id={`color-${index}`}
                          value={item.Color}
                          onChange={(e) =>
                            handlePanierChange(index, "Color", e.target.value)
                          }
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor={`quantity-${index}`}
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Quantité
                        </label>
                        <input
                          type="number"
                          id={`quantity-${index}`}
                          value={item.Quantity}
                          onChange={(e) =>
                            handlePanierChange(index, "Quantity", e.target.value)
                          }
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor={`price-${index}`}
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Prix
                        </label>
                        <input
                          type="number"
                          id={`price-${index}`}
                          value={item.Price}
                          onChange={(e) =>
                            handlePanierChange(index, "Price", e.target.value)
                          }
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          required
                        />
                      </div>
                    </div>
                    
                  </div>
                  
                ))}
              </div>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              {success && <p className="text-green-500 mb-4">{success}</p>}
              <button
                type="submit"
                className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Mettre à jour la commande
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EditOrder;