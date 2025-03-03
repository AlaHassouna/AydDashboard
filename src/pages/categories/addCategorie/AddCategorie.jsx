import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../../App';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const AddCategorie = () => {
  const [files, setFiles] = useState([]);
  const [categoryName, setCategoryName] = useState(); // Nom de la catégorie
  const [categoryImg, setCategoryImg] = useState(null); // ID de la catégorie
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
 
  const navigate = useNavigate();
  const context = useContext(MyContext);
// Effet pour initialiser les fichiers si categoryImg est défini
// useEffect(() => {
//     if (categoryImg) {
//       setFiles([
//         {
//           source: categoryImg, // Lien ou identifiant de l'image
//           options: {
//             type: "local", // Indique que c'est un fichier local
//           },
//         },
//       ]);
//     }
//   }, [categoryImg]);
  // useEffect(() => {
  //   const fetchCategory = async () => {
  //     try {
  //       const response = await axios.get(`https://localhost:7057/api/Category/${id}`, {
  //         headers: {
  //           accept: 'application/json',
  //         },
  //       });
  //       setCategoryName(response.data.name); // Assurez-vous que le champ 'name' correspond à vos données
  //       setCategoryID(response.data.id); // Assurez-vous que le champ 'id' correspond à vos données
  //       setCategoryImg(response.data.image);
  //     } catch (error) {
  //       console.error('Erreur lors de la récupération des données de la catégorie :', error);
  //       setError('Impossible de charger la catégorie.');
  //     }
  //   };

  //   fetchCategory();
  // }, [id]);
  
  const handleInputChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
  
    if (!files.length) {
      setError('Veuillez téléverser une icône pour la catégorie.');
      return;
    }
  
    try {
      const updatedCategory = {
        
        Name: categoryName, // Nom de la catégorie
        Icon: categoryImg, // URL de l'icône (générée après téléversement)
      };
  
      await axios.post(`http://127.0.0.1:8000/api/categories`, updatedCategory);
  
      setSuccess('Catégorie ajouté avec succès.');
      setTimeout(() => navigate('/dashboard/categories'), 2000);
    } catch (error) {
      console.error("Erreur lors de l'ajout du catégorie :", error);
      setError("Impossible d'ajouter une catégorie.");
    }
  };
  

  const serverOptions = {
    process: (fieldName, file, metadata, load, error, progress, abort) => {
      const data = new FormData();
      data.append('file', file);
      data.append('upload_preset', 'iit2024');
      data.append('cloud_name', 'dbz3tuynl');

      axios
        .post('https://api.cloudinary.com/v1_1/dbz3tuynl/image/upload', data, {
          onUploadProgress: (event) => {
            progress(event.loaded / event.total, event.loaded, event.total);
          },
        })
        .then((response) => {
          load(response.data.url);
          setCategoryImg(response.data.url)
        })
        .catch((err) => {
          error('Erreur lors du téléversement.');
        });

      return {
        abort: () => abort(),
      };
    },
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
            <h1 className="text-lg font-semibold text-gray-800 dark:text-white">Ecommerce</h1>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li>
                  <Link
                    to="/dashboard/products"
                    className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Category
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
                      Add
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
              Add category
            </h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="categoryName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Category Name
                  </label>
                  <input
                    type="text"
                    name="categoryName"
                    id="categoryName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={categoryName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <FilePond
                  files={files}
                  onupdatefiles={setFiles}
                  allowMultiple={false}
                  maxFiles={1}
                  server={serverOptions}
                  name="file"
                  labelIdle="Glissez et déposez vos fichiers ou <span className='filepond--label-action'>Parcourir</span>"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Add Category
              </button>
              
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddCategorie;