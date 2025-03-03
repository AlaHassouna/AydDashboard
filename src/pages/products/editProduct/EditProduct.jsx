
import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../../App'
import { FilePond,registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

const EditProduct = () => {
  // const [categories, setCategories] = useState([
  //   {
  //     id: 1,
  //     Name: "T-Shirts",
  //     subCategorie: [
  //       "Cartoons",
  //       "Films",
  //       "Animes",
  //       "Jeux vidéo",
  //       "Art abstrait",
  //       "Polo T-Shirts",
  //       "Casual"
  //     ],
  //     Icon: "https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  //   },
  //   {
  //     id: 2,
  //     Name: "Hoodies",
  //     subCategorie: [
  //       "Cartoons",
  //       "Films",
  //       "Animes",
  //       "Streetwear",
  //       "Casual",
  //       "Saisonnier"
  //     ],
  //     Icon: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  //   },
  //   {
  //     id: 8,
  //     Name: "Sweaters",
  //     SubCategory: [
  //       "Cartoons",
  //       "Films",
  //       "Streetwear",
  //       "Vintage",
  //       "Saisonnier",
  //       "Casual"
  //     ],
  //     Icon: "https://images.pexels.com/photos/2613261/pexels-photo-2613261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  //   },
  //   {
  //     id: 10,  // ID unique pour cette catégorie
  //     Name: "Survêtements",  // Nom de la catégorie
  //     SubCategory: [
  //       "Casual",
  //       "Sport",
  //       "Streetwear",
  //       "Saisonnier"
  //     ],  // Sous-catégories possibles pour les tracksuits
  //     Icon: "https://images.pexels.com/photos/26664909/pexels-photo-26664909/free-photo-of-les-moments.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  // Icône associée à la catégorie
  //   },
    
  //   {
  //     id: 7,  // ID unique pour cette catégorie
  //     Name: "Pantalons",  // Nom de la catégorie
  //     SubCategory: [
  //       "Jeans",
  //       "Chinos",
  //       "Jogging",
  //       "Formel"
  //     ],  // Sous-catégories
  //     Icon: "https://images.pexels.com/photos/1895943/pexels-photo-1895943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  // Icône associée à la catégorie
  //   },
  //   {
  //     id: 3,
  //     Name: "Vestes",
  //     subCategorie: [
  //       "Films",
  //       "Animes",
  //       "Logos",
  //       "Casual",
  //       "Formel",
  //       "Détail graphique"
  //     ],
  //     Icon: "https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  //   },
  //   {
  //     id: 9,
  //     Name: "Shorts",
  //     SubCategory: [
  //       "Casual",
  //       "Sport",
  //       "Vintage",
  //       "Saisonnier",
  //       "Streetwear"
  //     ],
  //     Icon: "https://images.pexels.com/photos/18394309/pexels-photo-18394309/free-photo-of-portrait-d-un-jeune-garcon-avec-une-silhouette-sombre-contre-le-mur.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  //   },
  //   {
  //     id: 4,
  //     Name: "Jupes",
  //     subCategorie: [
  //       "Motifs floraux",
  //       "Casual",
        
  //     ],
  //     Icon: "https://images.pexels.com/photos/1007018/pexels-photo-1007018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  //   },
  //   {
  //     id: 5,
  //     Name: "Robes",
  //     subCategorie: [
  //       "Casual",
  //       "Élégance minimaliste",
  //       "Saisonnière",
  //       "Art moderne"
  //     ],
  //     Icon: "https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  //   },
  //   // {
  //   //   id: 6,
  //   //   Name: "Chemises",
  //   //   SubCategory: [
  //   //     "Films et séries",
  //   //     "Art graphique",
  //   //     "Thème cartoon",
  //   //     "Vintage"
  //   //   ],
  //   //   Icon: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=400"
  //   // },
    
    
    
    
  //   {
  //     id: 10,
  //     Name: "Accessoires",
  //     subCategorie: [
  //       "Écharpes",
  //       "Chapeaux",
  //       "Gants",
  //       "Bijoux",
  //       "Sacs à main"
  //     ],
  //     Icon: "https://images.pexels.com/photos/30076369/pexels-photo-30076369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  //   }
  // ]); // État pour stocker les catégories
  const navigate = useNavigate();
    
  const [categories, setCategories] = useState([]); // État pour stocker les catégories
  const [selectedCategory, setSelectedCategory] = useState(); // État pour la catégorie sélectionnée  
  const context= useContext(MyContext)
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const [product, setProduct] = useState(null); // État pour les données du produit
  const [loading, setLoading] = useState(true); // État pour le chargement
  const [error, setError] = useState(null); // État pour les erreurs
  const [productData, setProductData] = useState({})
  const [subCategories, setSubCategories] = useState(productData.SubCategory)
  const[selectedSubCategoryId,setSelectedSubCategoryId]=useState()

  const [subCategory, setSubCategory] = useState()

  function getCategoryIdByName(categories, name) {
 
    const category = categories.find(category => category.Name.toLowerCase() === name.toLowerCase());
    return category ? category.id : null; // Retourne l'ID ou null si non trouvé
  }
    function getCategoryNameById(categories, id) {
       const parsedId = typeof id === "string" ? parseInt(id, 10) : id; // Convertit en nombre si nécessaire
     const category = categories.find(category => category.id === parsedId);
      return category ? category.Name : null;
    }
    function getSubCategoryNameById(subCategories, id) {
      const parsedId = typeof id === "string" ? parseInt(id, 10) : id; // Convertit en nombre si nécessaire
    const subCategory = subCategories.find(subCategory => subCategory.id === parsedId);
     return subCategory ? subCategory.Name : null;
   }
   function getSubCategoryIdByName(subCategories, name) {
   //console.log('Sub categorie dans fonction trouve id',subCategories)
    const parsedId = subCategories.find(subCategory => subCategory.Name.toLowerCase() === name.toLowerCase());
   //console.log('parsedId dans fonction trouve id',parsedId)
  
    return parsedId ? parsedId.id : null; // Retourne l'ID ou null si non trouvé
  }
    useEffect(() => {
      // Fonction pour récupérer les catégories
      const fetchCategories = async () => {
          try {
              const response = await axios.get('http://127.0.0.1:8000/api/categories', {
                  headers: {
                      accept: 'application/json',
                  },
              });
              setCategories(response.data); // Mettre à jour l'état avec les données récupérées
          } catch (error) {
              console.error('Erreur lors de la récupération des catégories :', error);
          }
      };
    
      fetchCategories(); // Appel de la fonction

    }, []);
    useEffect(()=>{
    //console.log("categories ",categories)
    const fetchProduct = async () => {
      try {
          const response = await axios.get(`http://127.0.0.1:8000/api/produits/${id}`, {
              headers: {
                  accept: 'application/json', // Specify the content type expected from the API
              },
          });
          console.log("response.data", response.data);
          //console.log("response.data.Category", response.data.Category);
          setProductData(response.data); // Store the data in the state
          setSubCategory(response.data.SubCategory);

          // setSelectedSubCategoryId(response.data.SubCategory)
          const catid= getCategoryIdByName(categories,response.data.Category)
         if(catid){
            const response2 = await axios.get(`http://127.0.0.1:8000/api/categories/${catid}/subcategories`, {
                headers: {
                    accept: 'application/json', // Specify the content type expected from the API
                },
            });
            //console.log("setSubCategories", response2.data);
            setSubCategories(response2.data); // Store the data in the state
            
          }
      

          // setSubCategories(response.data.SubCategory); // Store the data in the state

      } catch (error) {

          setError(error.message); // Handle errors
      }
  };

  fetchProduct(); // Call the async function
    },[categories])
  
useEffect(()=>{
  if(subCategory && subCategories){
    //console.log("subCategory0",subCategory)
    //console.log("subCategories",subCategories)
  setSelectedSubCategoryId(getSubCategoryIdByName(subCategories,subCategory))}
},[subCategories,subCategory])

//   useEffect(() => {

   
// }, []);
useEffect(()=>{
  //console.log("subCategories", subCategories);

},[subCategories])
  useEffect(() => {
    if(selectedCategory){
    const fetchProduct = async (idCateogry) => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/categories/${idCateogry}/subcategories`, {
                headers: {
                    accept: 'application/json', // Specify the content type expected from the API
                },
            });
            //console.log("setSubCategories deb", response.data);
            setSubCategories(response.data); // Store the data in the state
        } catch (error) {
          setSubCategories("")
          
            setError(error.message); // Handle errors
        }
    };

    fetchProduct(selectedCategory); // Call the async function
  }
}, [selectedCategory]);
useEffect(() => {
  //console.log("subCategories",subCategories)
},[subCategories])
useEffect(() => {
  //console.log("productData",productData)
},[productData])
const [isInitialized, setIsInitialized] = useState(false); // Nouvelle variable d'état
// useEffect(() => {
//   if (product && !isInitialized) {
//     // Met à jour les données locales avec celles du produit uniquement une fois
//     setProductData({ ...product });
//     setIsInitialized(true); // Marque comme initialisé
//   }
// }, [product, isInitialized]);

const [files, setFiles] = useState([]);

// //console.log("productData ",productData )

//  // Gérer l'ajout de produits
 const handlEditProduct = async (e) => {
  e.preventDefault();
  //console.log(" selectedSubCategoryId", selectedSubCategoryId)
  const newProduct = {
    
    // UID: productData.UID,
    Product: productData.Product,
    Description: productData.Description,
    // subcategoryID: productData.categoryID,
    SubCategory_id: selectedSubCategoryId,
    Brand: productData.Brand,
    OldPrice: parseFloat(productData.OldPrice),
    Price: parseFloat(productData.Price),
    Stock: parseInt(productData.Stock, 10),
    Rating: 0,
    Order: 0,
    Sales: 0,
    IsFeatured: productData.IsFeatured,
    HotProduct: productData.HotProduct,
    BestSeller: productData.BestSeller,
    TopRated: productData.TopRated,
    Gender: productData.Gender,
    Image: productData.Image, // Utiliser le tableau directement
    Tags: productData.Tags, // Utiliser le tableau directement
    Variants: productData.Variants // Utiliser le tableau directement
  };

  //console.log(newProduct);
  const url = `http://127.0.0.1:8000/api/produits/${id}`;

  try {
    const response = await axios.put(url, newProduct, {
      headers: {
        'Content-Type': 'application/json', // Spécifie le type de contenu envoyé
      },
    });

    //console.log('Réponse du serveur:', response.data);
    setTimeout(() => navigate('/dashboard/products'), 2000);

  } catch (error) {
    console.error('Erreur lors de l\'envoi des données:', error.response || error.message);
  }
};
// Gérer les changements dans les champs du formulaire
const handleInputChange = (e) => {
  let { name, value, type, checked } = e.target;
  //console.log(name,":",value)
  //console.log(typeof value);
  //console.log(typeof value);
  // Vérifier si le champ est 'Tags' et s'il s'agit d'une chaîne
  if (name === "Tags" && typeof value === "string") {
    // Convertir la chaîne en un tableau
    value = value.split(",").map(item => item.trim()); // On utilise trim() pour enlever les espaces inutiles
  }
  setProductData((prevData) => ({
    ...prevData,
    [name]: type === "checkbox" ? checked : value,
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
    Variants: [ { Size: "", Colors: [] },...prevData.Variants],
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
  //console.log("Variants updated:", productData.variants);
}, [productData.variants]);
    

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
        //console.log("Upload canceled");
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
        const handleSelectChangeSub = (e) => {
          const newSubCategoryId = e.target.value; // Récupère la nouvelle valeur

          setSelectedSubCategoryId(newSubCategoryId)
          //console.log('retour recherche name category by id categories:', categories); // Debug pour vérifier l'ID
          //console.log('retour recherche name category by id newCategoryId:', newSubCategoryId); // Debug pour vérifier l'ID

          
          // setProductData((prevData) => ({
          //   ...prevData, // Conserve les autres propriétés de productData
          //   SubCategory: , // Met à jour uniquement categoryId
          // }));
          //console.log('recherche sub category:', getSubCategoryNameById(subCategories,newSubCategoryId)); // Debug pour vérifier l'ID
          setProductData((prevData) => ({
            ...prevData, // Conserve les autres propriétés de productData
            SubCategory: getSubCategoryNameById(subCategories,newSubCategoryId), // Met à jour uniquement categoryId
          }));
        };

        const handleSelectChange = (e) => {
          const newCategoryId = e.target.value; // Récupère la nouvelle valeur
          //console.log('retour recherche name category by id categories:', categories); // Debug pour vérifier l'ID
          //console.log('retour recherche name category by id newCategoryId:', newCategoryId); // Debug pour vérifier l'ID

          
          setProductData((prevData) => ({
            ...prevData, // Conserve les autres propriétés de productData
            Category: getCategoryNameById(categories,newCategoryId), // Met à jour uniquement categoryId
          }));
          setSelectedCategory(newCategoryId)
          //console.log('Selected Category ID:', newCategoryId); // Debug pour vérifier l'ID
        };
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
                           
                              <Link to="/dashboard/products" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Product</Link>
                            
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
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Edit product</h2>
        <form action="#">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                    <label htmlFor="Product" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                    <input type="text" name="Product" id="Product" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required=""
                    value={productData.Product || ""} onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="Category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                    <select
                  id="Category"
                  value={productData.Category}
                  // ID de la catégorie sélectionnée
                  onChange={handleSelectChange} // Gestion de la sélection
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option value={productData.Category} disabled selected>
                    {productData.Category ? `${productData.Category}` : "Sélectionnez une catégorie"}
                  </option>
                 
                  {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                      {category.Name}
                    </option>
                    
                

                  ))}
                </select> 
                </div>
                
                <div>
                    <label htmlFor="SubCategory" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">SubCategory</label>
                    {subCategories && (
    <select
      id="SubCategory"
      value={productData.SubCategory}
      onChange={handleSelectChangeSub} // Gestion de la sélection
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
    >
      
      <option value={productData.SubCategory} disabled selected>
                    {productData.SubCategory ? `${productData.SubCategory}` : "Select SubCategory"}
      </option>
      {subCategories.map((SubCategory) => (
        <option key={SubCategory.id} value={SubCategory.id}>
          {SubCategory.Name}
        </option>
      ))}
    </select>
  ) }

                    
                </div>
                {/* <div>
                    <label htmlFor="SubCategory" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sub Category</label>
                    <select id="SubCategory" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                        <option selected="">Select sub category</option>
                        <option value="TV">TV/Monitors</option>
                        <option value="PC">PC</option>
                        <option value="GA">Gaming/Console</option>
                        <option value="PH">Phones</option>
                    </select>
                </div> */}
                
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
                
                
                <div>
                                <label htmlFor="Tags" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tags</label>
                                <input type="text" id="Tags" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Tag1,tag2,tag3,....." required
                                name="Tags" value={productData.Tags} onChange={handleInputChange}/>
                            </div> 
                            <div className="w-full">
                                <label htmlFor="Gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                                <select
                                  id="Gender"
                                  value={productData.Gender}
                                  onChange={(e) => setProductData({ ...productData, Gender: e.target.value })}
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                >
                                  <option value="" disabled>
                                    Gender
                                  </option>
                                  <option value="femme">Femme</option>
                                  <option value="homme">Homme</option>
                                </select>
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
  
       {productData.Variants?.map((variant, index) => (
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
            placeholder="quantity"
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
                         <div className="flex mt-2">
                            <div className="flex items-center h-5">
                                <input id="helper-checkbox" aria-describedby="helper-checkbox-text" name="HotProduct" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                checked={productData.HotProduct} onChange={handleInputChange} 
                                />
                            </div>
                            <div className="ms-2 text-sm">
                                <label htmlFor="helper-checkbox" className="font-medium text-gray-900 dark:text-gray-300">Hot Product</label>
                            </div>
                          </div>
                          <div className="flex mt-2">
                            <div className="flex items-center h-5">
                                <input id="helper-checkbox" aria-describedby="helper-checkbox-text" name="BestSeller" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                checked={productData.BestSeller} onChange={handleInputChange} 
                                />
                            </div>
                            <div className="ms-2 text-sm">
                                <label htmlFor="helper-checkbox" className="font-medium text-gray-900 dark:text-gray-300">BestSeller</label>
                                {/* <p id="helper-checkbox-text" className="text-xs font-normal text-gray-500 dark:text-gray-300">Mark this product to feature it on the homepage or in promotions.</p> */}
                            </div>
                         </div>
                         <div className="flex mt-2">
                            <div className="flex items-center h-5">
                                <input id="helper-checkbox" aria-describedby="helper-checkbox-text" name="TopRated" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                checked={productData.TopRated} onChange={handleInputChange} 
                                />
                            </div>
                            <div className="ms-2 text-sm">
                                <label htmlFor="helper-checkbox" className="font-medium text-gray-900 dark:text-gray-300">TopRated</label>
                                {/* <p id="helper-checkbox-text" className="text-xs font-normal text-gray-500 dark:text-gray-300">Mark this product to feature it on the homepage or in promotions.</p> */}
                            </div>
                         
            </div>
             {/* <div className="flex mt-2">
              <div className="flex items-center h-5">
                  <input id="helper-checkbox" aria-describedby="helper-checkbox-text" name="BestSeller" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  checked={productData.BestSeller} onChange={handleInputChange} 
                  />
              </div>
              <div className="ms-2 text-sm">
                  <label htmlFor="helper-checkbox" className="font-medium text-gray-900 dark:text-gray-300">Best Seller</label>
              </div>
            </div>
            <div className="flex mt-2">
              <div className="flex items-center h-5">
                  <input id="helper-checkbox" aria-describedby="helper-checkbox-text" name="TopRated" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  checked={productData.TopRated} onChange={handleInputChange} 
                  />
              </div>
              <div className="ms-2 text-sm">
                  <label htmlFor="helper-checkbox" className="font-medium text-gray-900 dark:text-gray-300">Top Rated</label>
              </div>
            </div> */}
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

  {productData.Image?.length > 0 && (
    <div className="">
      <div className="grid grid-cols-3 gap-4 mt-2">
        {productData.Image?.map((url, index) => (
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
            onClick={handlEditProduct}
            >
                Update product
            </button>
        </form>
    </div>
  </section>
        </div>
      </div>
    )
  }
export default EditProduct