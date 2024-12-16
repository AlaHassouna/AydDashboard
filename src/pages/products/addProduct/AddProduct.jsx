  import React, { useContext, useEffect, useState } from 'react'
  import { MyContext } from '../../../App'
  import { FilePond,registerPlugin } from 'react-filepond'
  import 'filepond/dist/filepond.min.css';
  import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
  import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
  import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
  import axios from 'axios';
import { Link } from 'react-router-dom';

  registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)
  
  const AddProduct = () => {
    const context= useContext(MyContext)
    const [uploadedImages, setUploadedImages] = useState([]);   
    const [variants, setVariants] = useState([]); // État pour les variantes
    const [files, setFiles] = useState([]);
    const [productData, setProductData] = useState({
      UID: 0,
      Product: '',
      Description: '',
      Category: '',
      SubCategory: '',
      Brand: '',
      OldPrice: '',
      Price:'',
      Stock: '',
      Rating: '',
      Order: 0,
      Sales: 0,
      IsFeatured: false,
      Image: [],
      Tags: [],
      Variants: [],
      CreatedAt: ''
    });
    
     // Gérer l'ajout de produits
  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      UID: 123,
      Product: productData.Product,
      Description: productData.Description,
      Category: productData.Category,
      SubCategory: productData.SubCategory,
      Brand: productData.Brand,
      OldPrice: parseFloat(productData.OldPrice),
      Price: parseFloat(productData.Price),
      Stock: parseInt(productData.Stock, 10),
      Rating: 0,
      Order: 0,
      Sales: 0,
      IsFeatured: productData.IsFeatured,
      Image: uploadedImages, // Assumer que les URLs sont séparées par des virgules
      Tags: productData.Tags.split(','), // Idem pour les tags
      Variants: variants, // Les variantes sont déjà sous forme d'objets
      CreatedAt: new Date().toLocaleDateString() // Format de la date
    };

    console.log(newProduct);
  };

   // Gérer les changements dans les champs du formulaire
   const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };


    // Fonction pour supprimer une taille
const removeSize = (index) => {
  setVariants((prevVariants) => {
    const updatedVariants = [...prevVariants];
    updatedVariants.splice(index, 1);
    return updatedVariants;
  });
};

    // Fonction pour ajouter une nouvelle taille
    const addSize = (e) => {
      e.preventDefault(); 
      setVariants((prevVariants) => [...prevVariants, { size: "", colors: [] }]);
    };
  
    useEffect(() => {
      console.log("Variants mis à jour :", variants);
    }, [variants]);
  
    // Fonction pour mettre à jour le nom de la taille
    const updateSize = (index, size) => {
      
      setVariants((prevVariants) => {
        const updatedVariants = [...prevVariants];
        updatedVariants[index].size = size;
        return updatedVariants;
      });
    };
  
    // Fonction pour ajouter une couleur à une taille
    const addColor = (e,index) => {
      e.preventDefault(); 

      setVariants((prevVariants) => {
        const updatedVariants = [...prevVariants];
        const lastColor = updatedVariants[index].colors.slice(-1)[0];
        
        // Vérifier si le dernier objet est vide
        if (lastColor?.color === "" && lastColor?.quantity === 0) {
          console.log("Une couleur vide existe déjà, aucun ajout.");
          return prevVariants; // Ne pas ajouter une nouvelle couleur
        }
    
        updatedVariants[index].colors.push({ color: "", quantity: 0 });
        
        return updatedVariants;
      });
    };
  
    // Fonction pour mettre à jour la couleur et la quantité
    const updateColor = (index, colorIndex, field, value) => {
      

      setVariants((prevVariants) => {
        const updatedVariants = [...prevVariants];
        updatedVariants[index].colors[colorIndex][field] = value;
        return updatedVariants;
      });
    };
  
    // Fonction pour supprimer une couleur
    const removeColor = (index, colorIndex) => {
      

      setVariants((prevVariants) => {
        const updatedVariants = [...prevVariants];
        updatedVariants[index].colors.splice(colorIndex, 1);
        return updatedVariants;
      });
    };
    

    //cloudinary
    const serverOptions = {
      process: (fieldName, file, metadata, load, error, progress, abort) => {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "iit2024");
        data.append("cloud_name", "dbz3tuynl");
  
        axios
          .post("https://api.cloudinary.com/v1_1/dbz3tuynl/image/upload", data, {
            onUploadProgress: (event) => {
              progress(event.loaded / event.total, event.loaded, event.total);
            },
          })
          .then((response) => {
            load(response.data.url); // Ajoute l'URL du fichier
            setUploadedImages((prev) => [...prev, response.data.url]);
          })
          .catch((err) => {
            error("Erreur de téléchargement");
          });
  
        return {
          abort: () => {
            console.log("Upload annulé");
            abort();
          },
        };
      },
    };
    const removeImage = (e, index) => {
      e.preventDefault();
  
      setUploadedImages((prevData) => {
        // Supprime l'image ciblée en créant un nouveau tableau
        const updatedImages = [...prevData];
        updatedImages.splice(index, 1); // Supprime l'image à l'index donné
        return updatedImages;
      });
    };
     load: (source, load, error, progress, abort, headers) => {
         var myRequest = new Request(source);
         fetch(myRequest).then(function(response) {
          response.blob().then(function(myBlob) {
           load(myBlob);
          });
         });
        }
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
                        {/* <li className="inline-flex items-center">
                          <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                            </svg>
                            Home
                          </a>
                        </li> */}
                        <li>
                          {/* <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                            </svg> */}
                            <Link to="/dashboard/products" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Products</Link>
                          {/* </div> */}
                        </li>
                        <li aria-current="page">
                          <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Add</span>
                          </div>
                        </li>
                      </ol>
                    </nav>

      
        </div>
      </div>
      </div>
      <div
        className=" rounded-lg bg-gray-50 dark:bg-gray-800 px-4 h-full mb-4 p-5"
      >
        <section >
  <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
      <form action="#">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                  <label htmlFor="Product" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                  <input type="text" name="Product" id="Product" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required=""
                  value={productData.Product} onChange={handleInputChange}
                  />
              </div>
              <div>
                  <label htmlFor="Category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                  <select id="Category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option selected="">Select category</option>
                      <option value="TV">TV/Monitors</option>
                      <option value="PC">PC</option>
                      <option value="GA">Gaming/Console</option>
                      <option value="PH">Phones</option>
                  </select>
              </div>
              <div>
                  <label htmlFor="SubCategory" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sub Category</label>
                  <select id="SubCategory" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option selected="">Select sub category</option>
                      <option value="TV">TV/Monitors</option>
                      <option value="PC">PC</option>
                      <option value="GA">Gaming/Console</option>
                      <option value="PH">Phones</option>
                  </select>
              </div>
              
              <div className="w-full">
                  <label htmlFor="OldPrice" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Old Price</label>
                  <div className="relative">
                  <input 
                    type="number" 
                    name="OldPrice" 
                    id="OldPrice" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                    placeholder="2999" 
                    required
                    value={productData.OldPrice} onChange={handleInputChange}
                  />
                  <span className="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-400">DT</span>
                </div>

              </div>
              <div className="w-full">
                  <label htmlFor="Price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                  <div className="relative">
                    <input 
                      type="number" 
                      name="Price" 
                      id="Price" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                      placeholder="2999" 
                      required
                      value={productData.Price} onChange={handleInputChange}
                    />
                    <span className="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-400">DT</span> 
                  </div>
              </div>
              <div>
                  <label htmlFor="Stock" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock</label>
                  <input type="number" name="Stock" id="Stock" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="99" required=""
                  value={productData.Stock} onChange={handleInputChange}
                  />
              </div> 
              <div className="w-full">
                  <label htmlFor="Brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                  <input type="text" name="Brand" id="Brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required=""
                  value={productData.Brand} onChange={handleInputChange}
                  />
              </div>
              
              
              <div className="sm:col-span-2">
                  <label htmlFor="Tags" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tags (comma separated)</label>
                  <input type="text" id="Tags" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Tag1,tag2,tag3,....." required=""
                  name="Tags" value={productData.Tags} onChange={handleInputChange}
                  />
              </div>
              <div className="sm:col-span-2">
                  <label htmlFor="Description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea id="Description" name="Description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here" value={productData.Description} onChange={handleInputChange} 
                  />
              </div>
          </div>
          <div className="w-full">
      
      <label htmlFor="stock" className="block mt-2 text-sm font-medium text-gray-900 dark:text-white">Manage Variants</label>

      <button
        onClick={addSize}
        className="inline-flex items-center px-5 py-2.5 my-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
      >
        Add Size
      </button>

      {variants.map((variant, index) => (
        <div key={index} className="my-6 p-4 border border-gray-300 rounded">
        <div className="flex justify-between items-center">
          <label
            htmlFor={`size-${index}`}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Size {index + 1}
          </label>
          <button
            onClick={() => removeSize(index)}
            className="text-red-500 text-sm"
          >
            Remove Size
          </button>
        </div>
        <input
          type="text"
          id={`size-${index}`}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Enter size"
          value={variant.size}
          onChange={(e) => updateSize(index, e.target.value)}
        />
          

          <div className="mt-4">
          <h3 className="font-medium text-gray-900 dark:text-white">Colors for {variant.Size || "this size"}</h3>

            {variant.colors.map((color, colorIndex) => (
              <div key={colorIndex} className="my-2 flex items-center space-x-4">
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Color"
                  value={color.color}
                  onChange={(e) =>
                    updateColor(index, colorIndex, "color", e.target.value)
                  }
                />
                <input
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Quantity"
                  value={color.quantity}
                  onChange={(e) =>
                    updateColor(index, colorIndex, "quantity", parseInt(e.target.value) || 0)
                  }
                />
                <button
                  onClick={() => removeColor(index, colorIndex)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={(e) => addColor(e, index)}
              className="inline-flex items-center px-5 py-2.5 my-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Add Color
            </button>
          </div>
        </div>
      ))}
    </div>
          <div className="flex mt-2">
            <div className="flex items-center h-5">
                <input id="helper-checkbox" aria-describedby="helper-checkbox-text" name="IsFeatured" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                checked={productData.IsFeatured} onChange={handleInputChange} 
                />
            </div>
            <div className="ms-2 text-sm">
                <label htmlFor="helper-checkbox" className="font-medium text-gray-900 dark:text-gray-300">Is featured</label>
                <p id="helper-checkbox-text" className="text-xs font-normal text-gray-500 dark:text-gray-300">Mark this product to feature it on the homepage or in promotions.</p>
            </div>
        </div>
        <div>
            <h2 className="block my-2 text-sm font-medium text-gray-900 dark:text-white">
              Upload Images
            </h2>
            <FilePond
              files={files}
              onupdatefiles={setFiles}
              allowMultiple={false}
              maxFiles={1}
              server={serverOptions}
              name="file"
              labelIdle='Glissez et déposez vos fichiers ou <span className="filepond--label-action">Parcourir</span>'
            />

            {uploadedImages.length > 0 && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Images téléchargées :</h3>
                <div className="grid grid-cols-3 gap-4 mt-2">
                  {uploadedImages.map((url, index) => (
                    <div key={index} className="relative">
                          <img
                            key={index}
                            src={url}
                            alt={`Upload ${index + 1}`}
                            className="rounded border border-gray-300"
                          />
                          <button
                            onClick={(e) => removeImage(e,index)}
                            className="absolute top-0 right-0  text-white text-xs p-1 rounded"
                          >
                            <svg class="w-6 h-6 text-[#fd4848] dark:text-[#802929]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                            </svg>

                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
    </div>
          <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          onClick={handleAddProduct}
          >
              Add product
          </button>
      </form>
  </div>
</section>
      </div>
    </div>
  )
}

export default AddProduct