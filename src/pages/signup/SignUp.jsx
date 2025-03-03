
import React, { useState } from 'react'
import logo from '../../assets/images/logo1.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import bcrypt from 'bcryptjs'; 


const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName : '',
    email: '',
    password: '',
    phoneNumber: '',
    adresse1: '',
    city: '',
    state : '',
    postalCode: '',
    dateOfBirth: '',
    profilePicture:'',
    isAdmin:false,
    country:"Tunisie"
  });

  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    setErrorMessage("")
    e.preventDefault();
    try {
      // Crypter le mot de passe
      
      // const hashedPassword = await bcrypt.hash(formData.password, 10); // Hasher le mot de passe
      // Préparer les données à envoyer
      const formDataWithHashedPassword = {
        ...formData,
        password: formData.password, // Remplacer le mot de passe par le hashé
      };
      console.log("formDataWithHashedPassword ",formDataWithHashedPassword)
      const response = await axios.post(
        'https://localhost:7057/api/Account/Register',
        formDataWithHashedPassword,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      setSuccessMessage('Compte créé avec succès !');
      console.log('Response:', response.data);
      // navigate('/dashboard'); // Redirige vers une page après succès
    } catch (error) {
      if (typeof error.response.data === 'string' && error.response.data.includes("Email is already in use.")) {
        setErrorMessage(error.response.data);
      }else{
        setErrorMessage("Erreur de création : Le mot de passe doit contenir des chiffres, des caractères minuscules et majuscules, ainsi qu'un caractère spécial.")
       
      
      }
      
      console.error('Error:', error.response.data);
      console.error('Error:', error );

      
    }
  };
  return (
    <section class="bg-center bg-cover bg-no-repeat bg-[url('https://images.pexels.com/photos/116720/pexels-photo-116720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-blend-multiply flex items-center justify-center ">

         <div class="  w-full  flex flex-col items-center justify-center px-6 py-8 mx-auto ">
        {/* <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
             <img class="w-20 h-20 mr-2" src={logo} alt="logo"/>
        </a> */}
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                       Créer un compte
                </h1>
                <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
                      <input
                        type="name"
                        name="fullName"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Nom"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="••••••••"
                        required
                        value={formData.password}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label for="phoneNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numéro du téléphone</label>
                      <input
                        type="number"
                        name="phoneNumber"
                        id="phoneNumber"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Numéro du téléphone"
                        required
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label for="adresse" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adresse</label>
                      <input
                        type="text"
                        name="adresse1"
                        id="adresse"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Adresse"
                        required
                        value={formData.adresse}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label for="Ville" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ville</label>
                      <input
                        type="text"
                        name="city"
                        id="Ville"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Ville"
                        required
                        value={formData.Ville}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label for="Gouvernorat" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gouvernorat</label>
                      <input
                        type="text"
                        name="state"
                        id="Gouvernorat"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Gouvernorat"
                        required
                        value={formData.Gouvernorat}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label for="postalCode" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code Postal</label>
                      <input
                        type="text"
                        name="postalCode"
                        id="postalCode"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Code Postal"
                        required
                        value={formData.postalCode}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className='col-span-2 '>
                      <label for="dateOfBirth" class="block mb-2  text-sm font-medium text-gray-900 dark:text-white">Date de naissance</label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        id="dateOfBirth"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <label for="remember" class="text-[#551121] text-xs  dark:text-gray-300">{errorMessage}</label>

                  <div class="flex items-start mt-4">
                    <div class="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>

                    <div class="ml-3 text-sm">
                      <label for="terms" class="font-light text-gray-500 dark:text-gray-300">
                        J'accepte les{" "}
                        <a
                          class="font-medium text-[#011d28e6] hover:underline dark:text-white"
                          href="#"
                        >
                          Termes et conditions
                        </a>
                      </label>
                    </div>
                    
                                          
                  </div>
                  
                  <button
                    type="submit"
                    class="w-full text-white bg-[#011d28] hover:bg-[#011d28e6] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white dark:text-black mt-4"
                  >
                    Créer un compte
                  </button>
                  <div class="inline-flex items-center justify-center w-full">
                          <hr class=" mb-0 mt-0 w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                          <span class=" absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">ou</span>
                      </div>
                      <button type="submit" class="w-full py-2.5 px-5 me-2 mb-2 text-sm font-medium  focus:outline-none bg-[#011d28] hover:bg-[#011d28e6] text-white rounded-lg border border-gray-200  text-center  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 flex items-center justify-center space-x-2 mx-auto">
                          <svg class="w-6 h-6  text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd"/>
                          </svg>
                          <span>Continuer avec Google</span>
                        </button>
                    
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Vous avez déjà un compte ?<Link to="/login" class="font-medium text-[#011d28e6] hover:underline dark:text-white"> Connectez-vous ici</Link>
                    </p>
                </form>

            </div>
        </div>
    </div>
  </section>
    
  )
}

export default SignUp