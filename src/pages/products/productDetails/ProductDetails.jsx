import React, { useContext } from 'react'
import { MyContext } from '../../../App'
import Details from './Details';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  const context= useContext(MyContext)
  const product = [
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
                    <h1 className="text-lg font-semibold text-gray-800 dark:text-white">Product View</h1>
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
                                    <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Product View</span>
                                </div>
                                </li>
                            </ol>
                            </nav>

                </div>
            </div>
            <Details product={product}/>
            </div>
        </div>
  )
}

export default ProductDetails