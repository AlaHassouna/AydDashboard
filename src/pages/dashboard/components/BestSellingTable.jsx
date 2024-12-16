import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const BestSellingTable = () => {
  const products = [
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
        Image: [
            "https://timshop.timhortons.ca/cdn/shop/files/693770626664_TShirtIconWhite_Front.png?v=1714573840&width=2048",
            "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_auto:best,t_productPageHeroGalleryTransformation_v2,w_auto/legacy_dam/en-nz/S001463520/PPAGK-254-kids-Tshirt-marquee-001?cb=c7d589026f2c77059bcbd4f875f3dcf0b1a73a0c",
            "https://www.exist.com.tn/95266-large_default/t-shirt.jpg"
        ]
    },
    {
        UID: "C002",
        Product: "Jeans",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
        Category: "Bottoms",
        SubCategory: "Denim",
        Brand: "AYD",
        OldPrice: 65.00,
        Price: 49.99,
        Stock: 60,
        Rating: 4.5,
        Order: 150,
        Sales: 2500,
        IsFeatured:false,
        Image: ["https://www.wibra.fr/wp-content/uploads/sites/5/2023/07/06932687-000-01.png"]
    },
    {
        UID: "C003",
        Product: "Jacket",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
        Category: "Outerwear",
        SubCategory: "Winter Wear",
        Brand: "AYD",
        OldPrice: 105.00,
        Price: 89.99,
        Stock: 40,
        Rating: 4.6,
        Order: 90,
        Sales: 1800,
        IsFeatured:true,
        Image: ["https://www.craftclothing.ph/cdn/shop/products/BM12-W-F_1024x1024.png?v=1644291853"]
    },
    {
        UID: "C004",
        Product: "Dress",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
        Category: "Dresses",
        SubCategory: "Evening Wear",
        Brand: "AYD",
        OldPrice: 95.00,
        Price: 69.99,
        Stock: 50,
        Rating: 4.7,
        Order: 120,
        Sales: 2400,
        IsFeatured:false,
        Image: ["https://www.meshki.us/cdn/shop/files/B125-2024.10.28-MESHKI_9306.png?v=1733347943&width=533"]
    },
    {
        UID: "C005",
        Product: "Sweater",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
        Category: "Tops",
        SubCategory: "Knitwear",
        Brand: "AYD",
        OldPrice: 39.99,
        Price: 39.99,
        Stock: 80,
        Rating: 4.4,
        Order: 100,
        Sales: 2000,
        IsFeatured:true,
        Image: ["https://fjallraven.com.au/cdn/shop/products/Ovik_Nordic_Sweater_M_82020-020_A_MAIN_FJR.png?v=1702871491"]
    },
    {
        UID: "C006",
        Product: "Shorts",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
        Category: "Bottoms",
        SubCategory: "Casual Wear",
        Brand: "AYD",
        OldPrice: 45.99,
        Price: 24.99,
        Stock: 120,
        Rating: 4.3,
        Order: 130,
        Sales: 2200,
        IsFeatured:false,
        Image: ["https://s7d2.scene7.com/is/image/FoxRacing/32240001_1?$dw_detn1$&fmt=webp-alpha"]
    },
    {
        UID: "C007",
        Product: "Skirt",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
        Category: "Bottoms",
        SubCategory: "Office Wear",
        Brand: "AYD",
        OldPrice: 45.00,
        Price: 29.99,
        Stock: 70,
        Rating: 4.5,
        Order: 80,
        Sales: 1400,
        IsFeatured:true,
        Image: ["https://cdn.shopify.com/s/files/1/0528/3407/4795/files/packshot_2_206610_1000_Front_1_FQMINDY-SKIRT_20Black_6af0436f-493e-4d28-b03c-0d5425b32de6_540x.png?v=1729064444"]
    },
    {
        UID: "C008",
        Product: "Hoodie",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
        Category: "Outerwear",
        SubCategory: "Casual Wear",
        Brand: "AYD",
        OldPrice: 49.99,
        Price: 49.99,
        Stock: 50,
        Rating: 4.8,
        Order: 200,
        Sales: 4000,
        IsFeatured:false,
        Image: ["https://timshop.timhortons.ca/cdn/shop/files/693770626480_HoodieAlwaysFreshBlack_Front.png?v=1714573073&width=2048"]
    },
    {
        UID: "C009",
        Product: "Polo Shirt",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
        Category: "Tops",
        SubCategory: "Smart Casual",
        Brand: "AYD",
        OldPrice: 34.99,
        Price: 34.99,
        Stock: 90,
        Rating: 4.6,
        Order: 140,
        Sales: 2800,
        IsFeatured:true,
        Image: ["https://owayo-cdn.com/cdn-cgi/image/format=auto,fit=contain,width=490/newhp/img/productHome/productSeitenansicht/productservice/poloshirt_classic_herren/st3000_blm.png"]
    },
    {
        UID: "C010",
        Product: "Blazer",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
        Category: "Outerwear",
        SubCategory: "Formal Wear",
        Brand: "AYD",
        OldPrice: 115.00,
        Price: 99.99,
        Stock: 30,
        Rating: 4.7,
        Order: 70,
        Sales: 1500,
        IsFeatured:false,
        Image: ["https://media.balmain.com/image/upload/f_auto,q_auto,dpr_auto/c_fill,w_375,h_530/sfcc/balmain/hi-res/CF1SG008WB080PAF?_i=AG"]
    },
    {
        UID: "C011",
        Product: "Tracksuit",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
        Category: "Activewear",
        SubCategory: "Sportswear",
        Brand: "AYD",
        OldPrice: 75.00,
        Price: 59.99,
        Stock: 40,
        Rating: 4.4,
        Order: 90,
        Sales: 1700,
        IsFeatured:true,
        Image: ["https://www.hummel.fr/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-hummel-master-catalog/default/dwf266066e/images/packshot/213323-7010.png?sw=1028&sh=1370&sm=fit&q=90"]
    },
    {
        UID: "C012",
        Product: "Scarf",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
        Category: "Accessories",
        SubCategory: "Winter Accessories",
        Brand: "AYD",
        OldPrice: 14.99,
        Price: 14.99,
        Stock: 200,
        Rating: 4.2,
        Order: 250,
        Sales: 3700,
        IsFeatured:true,
        Image: ["https://www.french-scarf.com/ar-men-s-silk-scarf-red-charles-336_25771574.png"]
    }
];

      // State to track the current active page
  const [activePage, setActivePage] = useState(1);

  // Function to handle page click
  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
  };
  const paginationTab=[1, 2, 3, 4, 5]
  return (
   

<div className="w-full overflow-x-auto shadow-md sm:rounded-lg">
    <table className="mb-3 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-[#efefef] dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    UID
                </th>
                <th scope="col" className="px-6 py-3">
                    Product
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                   Sub Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Brand
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Stock
                </th>
                <th scope="col" className="px-6 py-3">
                    Rating
                </th>
                <th scope="col" className="px-6 py-3">
                    Order
                </th>
                <th scope="col" className="px-6 py-3">
                    Sales
                </th>
                <th scope="col" className="px-6 py-3">
                    Is Featured
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        {products.map((product, index) => (
          <tr
            key={product.UID}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id={`checkbox-table-search-${index}`}
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor={`checkbox-table-search-${index}`}
                  className="sr-only"
                >
                  checkbox
                </label>
              </div>
            </td>
            <td className="px-6 py-4">{product.UID}</td>

            <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
            <div className="flex items-center space-x-4">
                <img src={product.Image} alt={product.Product} className="w-12 h-12 object-cover rounded" />
                <div className="flex flex-col">
                    <span>{product.Product}</span>
                    <span className='text-[12px]'>{product.Description.length > 20 ? product.Description.slice(0, 20) + '...' : product.Description}</span>
                </div>
            </div>

            
            </th>
            <td className="px-6 py-4">{product.Category}</td>
            <td className="px-6 py-4">{product.SubCategory}</td>

            <td className="px-6 py-4">{product.Brand}</td>
            <td className="px-6 py-4">
                {product.OldPrice === product.Price ? (
                    <div className="flex items-center">
                    <span>{product.Price.toFixed(2)}</span>
                    <span className="ml-1 text-xs font-semibold text-gray-500">Dt</span>
                    </div>
                ) : (
                    <div>
                    <div className="line-through text-gray-400 flex items-center">
                        <span >{product.OldPrice.toFixed(2)}</span>
                        <span className="ml-1 text-xs font-semibold text-gray-500">Dt</span>
                    </div>
                    <div className="flex items-center text-black">
                        <span className='text-gray-500'>{product.Price.toFixed(2)}</span>
                        <span className="ml-1 text-xs font-semibold text-gray-500">Dt</span>
                    </div>
                    </div>
                )}
                </td>

            <td className="px-6 py-4">{product.Stock}</td>
            <td className="px-6 py-4">{product.Rating}</td>
            <td className="px-6 py-4">{product.Order}</td>
            <td className="px-6 py-4">
                <div className="flex items-center">
                  <span>{product.Sales}</span>
                  <span className="ml-1 text-xs font-semibold text-gray-500">Dt</span>
                </div>
            </td>
            <td className="px-6 py-4">
              {product.IsFeatured ==true ? 
            <svg class="w-6 h-6 text-[#6fdf98b8] dark:text-[#88dba7b8]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
          </svg>
          
          
          :
<svg class="w-6 h-6 text-[#fd5c5cb8] dark:text-[#ff7c7cb8]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg>

          }</td>
            <td className="flex items-center px-6 py-4">
              <Link
                to={`/dashboard/products/${product.UID}`}
                
                className="font-medium  dark:text-blue-500 hover:underline"
              >
                <svg className="bg-[#bf12e210] p-1 text-[#bf12e2] rounded w-25 h-25  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                    <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>

              </Link>
              <Link
                to={`/dashboard/products/edit/${product.UID}`}
                className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
              >
                <svg className="bg-[#228a4f16] p-1 rounded text-[#228a4f] w-25 h-25 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                </svg>

              </Link>
              <a
                href="#"
                className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
              >
                
                <svg className="bg-[#ef090914] p-1 rounded text-[#ef0909] w-25 h-25 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15v3c0 .5523.44772 1 1 1h16c.5523 0 1-.4477 1-1v-3M3 15V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v9M3 15h18M8 15v4m4-4v4m4-4v4m-5.5061-7.4939L12 10m0 0 1.5061-1.50614M12 10l1.5061 1.5061M12 10l-1.5061-1.50614"/>
                </svg>

              </a>
            </td>
          </tr>
        ))}
            
        </tbody>
    </table>
    <p className='text-[14px] font-[500] ml-2 text-gray-500'>Showing <b>12</b> of <b>60</b> results</p>
    <div className="sm:block md:flex justify-end sm:justify-center md:justify-end mr-2 ml-2">
      <nav aria-label="Page navigation">
        <ul className="mb-3 inline-flex -space-x-px text-sm ml-auto">
          <li>
            <a
              href="#"
              className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight ${
                activePage === 1 ? 'text-blue-600 bg-blue-50' : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'
              } border border-e-0 border-gray-300 rounded-s-lg  dark:bg-gray-800 dark:border-gray-700 c dark:hover:bg-gray-700 dark:hover:text-white`}
              onClick={(e) => {
                  if (activePage !== 1) {
                    handlePageClick(activePage - 1);
                  }
                  e.preventDefault(); // Prevents action if page is 5 (disabled)
                }}
            >
              Previous
            </a>
          </li>

          {paginationTab.map((pageNumber) => (
            <li key={pageNumber}>
              <a
                href="#"
                className={`flex items-center justify-center px-3 h-8 leading-tight ${
                  activePage === pageNumber
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-500 bg-white'
                } border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                onClick={() => handlePageClick(pageNumber)}
              >
                {pageNumber}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              className={`flex items-center justify-center px-3 h-8 leading-tight ${
                activePage === 5 ? 'text-blue-600 bg-blue-50' : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'
              } border border-gray-300 rounded-e-lg  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
              onClick={(e) => {
                  if (activePage !== 5) {
                    handlePageClick(activePage + 1);
                  }
                  e.preventDefault(); // Prevents action if page is 5 (disabled)
                }}
              
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>

</div>

  )
}

export default BestSellingTable