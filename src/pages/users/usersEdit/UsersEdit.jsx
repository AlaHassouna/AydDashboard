import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../../App';

import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

const UsersEdit = () => {
    // États pour les champs du formulaire
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [adresse, setAdresse] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [gouvernorat, setGouvernorat] = useState("");
  const [delegation, setDelegation] = useState("");
  const [role, setRole] = useState("user");
  const [isActive, setIsActive] = useState(1);

  // États pour les messages d'erreur et de succès
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const context = useContext(MyContext);
  const navigate = useNavigate();

  // Récupérer l'ID de l'utilisateur depuis l'URL
  const { id } = useParams();
    // Liste des gouvernorats
    const gouvernorats = [
        'Tunis', 'Ariana', 'Ben Arous', 'Manouba', 'Bizerte', 'Beja', 'Jendouba',
        'Kef', 'Siliana', 'Nabeul', 'Zaghouan', 'Sousse', 'Monastir', 'Mahdia',
        'Sfax', 'Kairouan', 'Kasserine', 'Sidi Bouzid', 'Gabes', 'Mednine', 'Tataouine',
        'Gafsa', 'Tozeur', 'Kebili'
    ];
    const [gouvernoratModal, setGouvernoratModal] = useState(false);

  // Charger les données de l'utilisateur à éditer
  useEffect(() => {
    const fetchUser = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/users/${id}`, {
                headers: {
                    accept: 'application/json',
                },
            });
            console.log("response",response.data)

            if (response.data) {
                setNom(response.data.Nom);
                setEmail(response.data.Email);
                setAdresse(response.data.Adresse);
                setPhone1(response.data.Phone_1);
                setPhone2(response.data.Phone_2);
                setGouvernorat(response.data.Gouvernorat);
                setDelegation(response.data.Delegation);
                setRole(response.data.Role);
                setIsActive(response.data.IsActive);
              } else {
                setError("Erreur lors du chargement des données de l'utilisateur.");
              }
        } catch (error) {
            console.error('Erreur lors de la récupération des users :', error);
        }
    };

    fetchUser();
  }, [id]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    switch (name) {
      case "nom":
        setNom(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "adresse":
        setAdresse(value);
        break;
      case "phone1":
        setPhone1(value);
        break;
      case "phone2":
        setPhone2(value);
        break;
      case "gouvernorat":
        setGouvernorat(value);
        break;
      case "delegation":
        setDelegation(value);
        break;
      case "role":
        setRole(value);
        break;
      case "isActive":
        setIsActive(Number(value)); // Convertir en nombre
        break;
      default:
        break;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Vérification des champs obligatoires
    if (!nom || !email || !phone1 || !gouvernorat || !delegation) {
      setError("Veuillez remplir tous les champs obligatoires.");
      return;
    }
  
    // Données à envoyer
    const userData = {
      Nom: nom,
      Email: email,
      Adresse: adresse,
      Phone_1: phone1,
      Phone_2: phone2,
      Gouvernorat: gouvernorat,
      Delegation: delegation,
      Role: role,
      IsActive: isActive,
    };
  
    try {
        // Envoi des données avec Axios (PUT request)
        const response = await axios.put(`http://localhost:8000/api/users/${id}`, userData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        // Vérifier la réponse
        if (response.status === 200) {
          setSuccess("Utilisateur mis à jour avec succès !");
          setTimeout(() => navigate('/dashboard/users'), 2000);

        } else {
          setError("Une erreur s'est produite lors de la mise à jour.");
        }
    
      } catch (err) {
        setError("Une erreur s'est produite lors de la mise à jour.");
        console.error("Erreur Axios:", err);
      }
  };


  return (
    <div
  className={`mt-0 p-1 rounded-lg dark:bg-gray-900 ${
    context.isToggleSidebar ? 'md:ml-64' : 'ml-0'
  }`}
>
  <div className="mt-10 p-1 rounded-lg">
    <div className="grid grid-cols-1 gap-4 mb-4">
      <div className="flex items-center justify-between h-24 rounded bg-gray-50 dark:bg-gray-800 px-4">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-white">Gestion des Utilisateurs</h1>
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li>
              <Link
                to="/dashboard/users"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Utilisateurs
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
                  Modifier
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
          Modifier l'Utilisateur
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {/* Nom */}
            <div className="sm:col-span-2">
              <label
                htmlFor="nom"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nom
              </label>
              <input
                type="text"
                name="nom"
                id="nom"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={nom}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Email */}
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={email}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Adresse */}
            <div className="sm:col-span-2">
              <label
                htmlFor="adresse"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Adresse
              </label>
              <input
                type="text"
                name="adresse"
                id="adresse"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={adresse}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Téléphone 1 */}
            <div className="sm:col-span-1">
              <label
                htmlFor="phone1"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Téléphone 1
              </label>
              <input
                type="text"
                name="phone1"
                id="phone1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={phone1}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Téléphone 2 */}
            <div className="sm:col-span-1">
              <label
                htmlFor="phone2"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Téléphone 2
              </label>
              <input
                type="text"
                name="phone2"
                id="phone2"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={phone2}
                onChange={handleInputChange}
              />
            </div>

            {/* Gouvernorat */}
            <div className="relative">
                {/* Label */}
                <label
                    htmlFor="gouvernorat"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Gouvernorat
                </label>

                {/* Bouton pour ouvrir le menu */}
                <button
                    type="button"
                    onClick={() => setGouvernoratModal(!gouvernoratModal)}
                    className="border focus:ring-2 focus:outline-none focus:ring-[#011d28e6] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center w-full justify-between bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                    {gouvernorat || "Sélectionner"}
                    <svg
                    className="w-2.5 h-2.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                    >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                    />
                    </svg>
                </button>

                {/* Dropdown menu */}
                {gouvernoratModal && (
                    <div
                    className="absolute z-10 w-full bg-white border rounded-lg shadow-lg dark:bg-gray-700 max-h-52 overflow-y-auto mt-1"
                    >
                    <ul className="text-sm text-gray-700 dark:text-gray-200">
                        {gouvernorats.sort().map((city) => (
                        <li
                            key={city}
                            className="px-4 py-2 hover:bg-[#011d28e6] hover:text-white cursor-pointer transition-colors duration-300"
                            onClick={() => {
                            setGouvernorat(city);
                            setGouvernoratModal(false); // Ferme le menu après sélection
                            }}
                        >
                            {city}
                        </li>
                        ))}
                    </ul>
                    </div>
                )}
                </div>

            {/* Délégation */}
            <div className="sm:col-span-1">
              <label
                htmlFor="delegation"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Délégation
              </label>
              <input
                type="text"
                name="delegation"
                id="delegation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={delegation}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Rôle */}
            <div className="sm:col-span-2">
              <label
                htmlFor="role"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Rôle
              </label>
              <select
                id="role"
                name="role"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={role}
                onChange={handleInputChange}
                required
              >
                <option value="user">Utilisateur</option>
                <option value="admin">Administrateur</option>
              </select>
            </div>

            {/* Statut */}
            <div className="sm:col-span-2">
              <label
                htmlFor="isActive"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Statut
              </label>
              <select
                id="isActive"
                name="isActive"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={isActive}
                onChange={handleInputChange}
                required
              >
                <option value={1}>Actif</option>
                <option value={0}>Inactif</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Mettre à jour l'Utilisateur
          </button>
        </form>
      </div>
    </section>
  </div>
</div>
  )
}

export default UsersEdit