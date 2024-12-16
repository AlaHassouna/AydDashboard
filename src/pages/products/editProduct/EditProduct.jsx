
import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../../App'
import { FilePond,registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

const EditProduct = () => {
  const context= useContext(MyContext)
  const productObj = [
    {
      UID: "C001",
      Product: "T-shirt",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
      Category: "Tops",
      SubCategory: "Casual Wear",
      Brand: "AYD",
      OldPrice: 35.00,
      Price: 19.99,
      Stock: 100,
      Rating: 4.3,
      Order: 200,
      Sales: 3000,
      IsFeatured:true,
      Image: ["https://timshop.timhortons.ca/cdn/shop/files/693770626664_TShirtIconWhite_Front.png?v=1714573840&width=2048",
        "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_auto:best,t_productPageHeroGalleryTransformation_v2,w_auto/legacy_dam/en-nz/S001463520/PPAGK-254-kids-Tshirt-marquee-001?cb=c7d589026f2c77059bcbd4f875f3dcf0b1a73a0c",
        "https://www.exist.com.tn/95266-large_default/t-shirt.jpg"],
      Tags: ["Suite", "Party", "Dress", "Smart", "Man", "Styles"],
      Variants: [
        {
          Size: "S",
          Colors: [
            { Color: "Red", Quantity: 10 },
            { Color: "Blue", Quantity: 15 },
            { Color: "Green", Quantity: 5 },
          ],
        },
        {
          Size: "M",
          Colors: [
            { Color: "Red", Quantity: 8 },
            { Color: "Yellow", Quantity: 12 },
            { Color: "Purple", Quantity: 7 },
          ],
        },
        {
          Size: "L",
          Colors: [
            { Color: "Blue", Quantity: 20 },
            { Color: "Green", Quantity: 10 },
            { Color: "Purple", Quantity: 9 },
          ],
        },
        {
          Size: "XL",
          Colors: [
            { Color: "Red", Quantity: 5 },
            { Color: "Yellow", Quantity: 8 },
            { Color: "Purple", Quantity: 6 },
          ],
        },
      ],
      CreatedAt:"02 Feb 2024"
    },
  ];
  const product = productObj[0];

const [files, setFiles] = useState([]);
const [productData, setProductData] = useState({
  ...product,
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
    Image: productData.Image, // Assumer que les URLs sont séparées par des virgules
    Tags: productData.Tags, // Idem pour les tags
    Variants: productData.Variants, // Les variantes sont déjà sous forme d'objets
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
// Functions for handling Variants
const removeSize = (e,index) => {
  e.preventDefault();

  setProductData((prevData) => {
    const updatedVariants = [...prevData.Variants];
    updatedVariants.splice(index, 1);
    return { ...prevData, Variants: updatedVariants };
  });
};

const addSize = (e) => {
  e.preventDefault();
  setProductData((prevData) => ({
    ...prevData,
    Variants: [...prevData.Variants, { Size: "", Colors: [] }],
  }));
};

const updateSize = (index, size) => {
  setProductData((prevData) => {
    const updatedVariants = [...prevData.Variants];
    updatedVariants[index].Size = size;
    return { ...prevData, Variants: updatedVariants };
  });
};

const addColor = (e, index) => {
  e.preventDefault();
  setProductData((prevData) => {
    const updatedVariants = [...prevData.Variants];
    const lastColor = updatedVariants[index].Colors.slice(-1)[0];

    if (lastColor?.Color === "" && lastColor?.Quantity === 0) {
      return prevData; // Prevent adding an empty color
    }

    updatedVariants[index].Colors.push({ Color: "", Quantity: 0 });
    return { ...prevData, Variants: updatedVariants };
  });
};

const updateColor = (index, colorIndex, field, value) => {
  setProductData((prevData) => {
    const updatedVariants = [...prevData.Variants];
    updatedVariants[index].Colors[colorIndex][field] = value;
    return { ...prevData, Variants: updatedVariants };
  });
};

const removeColor = (e, index, colorIndex) => {
  e.preventDefault();
  setProductData((prevData) => {
    // Clone les variantes pour éviter de modifier directement l'état précédent
    const updatedVariants = [...prevData.Variants];
    // Clone les couleurs de la variante spécifique pour une manipulation sécurisée
    const updatedColors = [...updatedVariants[index].Colors];
    // Supprime uniquement la couleur ciblée
    updatedColors.splice(colorIndex, 1);
    // Met à jour la liste des couleurs dans la variante
    updatedVariants[index] = {
      ...updatedVariants[index],
      Colors: updatedColors,
    };
    // Retourne l'état mis à jour
    return { ...prevData, Variants: updatedVariants };
  });
};


useEffect(() => {
  console.log("Variants updated:", productData.Variants);
}, [productData.Variants]);
    

    // cloudinary
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
        load(response.data.url); // Adds the file URL
        setProductData((prevData) => ({
          ...prevData,
          Image: [...prevData.Image, response.data.url],
        }));
      })
      .catch((err) => {
        error("Upload error");
      });

    return {
      abort: () => {
        console.log("Upload canceled");
        abort();
      },
    };
  },
};
const removeImage = (e,index) => {
  e.preventDefault();

  setProductData((prevData) => {
    const updatedImages = [...prevData.Image];
    updatedImages.splice(index, 1); // Supprime l'image ciblée
    return { ...prevData, Image: updatedImages };
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
      name={`mt-20 p-1   rounded-lg dark:bg-gray-900 ${
          context.isToggleSidebar ? "md:ml-64" : "ml-0"
        }`}
      >
       
     <div className="mt-10 p-1 rounded-lg ">
        <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="flex items-center justify-between h-24 rounded bg-gray-50 dark:bg-gray-800 px-4">
                {/* <!-- H1 centré --> */}
                <h1 className="text-lg font-semibold text-gray-800 dark:text-white">Ecommerce</h1>
                      {/* <!-- Breadcrumb à g auche --> */}
                      <nav className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                         
                          <li>
                           
                              <Link to="/dashboard/products" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Products</Link>
                            
                          </li>
                          <li aria-current="page">
                            <div className="flex items-center">
                              <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                              </svg>
                              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Edit</span>
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
  
       {productData.Variants.map((variant, index) => (
  <div key={index} className="my-6 p-4 border border-gray-300 rounded">
    <div className="flex justify-between items-center">
      <label
        htmlFor={`size-${index}`}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Size {index + 1}
      </label>
      <button
        onClick={(e) => removeSize(e,index)}
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
      value={variant.Size}
      onChange={(e) => updateSize(index, e.target.value)}
    />

    <div className="mt-4">
      <h3 className="font-medium text-gray-900 dark:text-white">Colors for {variant.Size || "this size"}</h3>
      {variant.Colors.map((color, colorIndex) => (
        <div key={colorIndex} className="my-2 flex items-center space-x-4">
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Color"
            value={color.Color}
            onChange={(e) =>
              updateColor(index, colorIndex, "Color", e.target.value)
            }
          />
          <input
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Quantity"
            value={color.Quantity}
            onChange={(e) =>
              updateColor(
                index,
                colorIndex,
                "Quantity",
                parseInt(e.target.value) || 0
              )
            }
          />
          <button
            onClick={(e) => removeColor(e,index, colorIndex)}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={(e) => addColor(e, index)}
        className="mt-2 text-blue-500 text-sm"
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

  {productData.Image.length > 0 && (
    <div className="">
      <div className="grid grid-cols-3 gap-4 mt-2">
        {productData.Image.map((url, index) => (
          <div key={index} className="relative">
            <img
              src={url}
              alt={`Upload ${index + 1}`}
              className="rounded"
            />
            <button
              onClick={(e) => removeImage(e,index)}
              className="absolute top-0 right-0  text-white text-xs p-1 rounded"
            >
              <svg className="w-6 h-6 text-[#fd4848] dark:text-[#802929]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
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
export default EditProduct