import React, { useState } from 'react'
import Rating from './Rating'

const Details = ({ product }) => {
  console.log("Product details :",product)
  const productD=product[0]
  const images = product[0].Image;
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <section class="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
    <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">

      <div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
        <div class="shrink-0 max-w-md lg:max-w-lg mx-auto">
           
          {/* <img class="w-full dark:hidden" src={productD.Image} alt="" /> */}
          <div className="relative w-full">
            <div className="relative h-full overflow-hidden rounded-lg md:h-full">
                {/* Parcours dynamique des images */}
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`duration-700 ease-in-out ${currentIndex === index ? 'block ' : 'hidden'}`}
                  >
                    <img
                      src={image}
                      className=""
                      alt={`Image ${index + 1}`}
                    />
                  </div>
                ))}

                {/* Slider controls */}
                <button
                  type="button"
                  className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  onClick={goToPrevious}
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
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
                        d="M5 1 1 5l4 4"
                      />
                    </svg>
                    <span className="sr-only">Previous</span>
                  </span>
                </button>

                <button
                  type="button"
                  className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  onClick={goToNext}
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
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
                    <span className="sr-only">Next</span>
                  </span>
                </button>
      
            </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToPrevious}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-gray-800  dark:text-white rtl:rotate-180"
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
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-gray-800  dark:text-white rtl:rotate-180"
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
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
          {/* <img class="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="" /> */}
          {/* <img class="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="" /> */}
        </div>

        <div class="mt-6 sm:mt-8 lg:mt-0">
            <h2
                class="text-[13px] font-semibold text-gray-900  dark:text-white mb-3"
            >
                Product Details
          </h2>
          <h1
            class="text-xl font-extrabold text-gray-900 sm:text-2xl dark:text-white"
          >
            {productD.Product} 
          </h1>
         
          <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
            <p
              class="font-bold text-gray-900 dark:text-white"
            >

              Brand : 
            </p>
            
            <div class="flex items-center gap-2 mt-2 sm:mt-0">
              
              <p
                class="text-sm font-medium leading-none text-gray-500 dark:text-gray-400"
              >
                {productD.Brand}
              </p>
             
            </div>
          </div>
          <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
            <p
              class="font-bold text-gray-900 dark:text-white"
            >

              Is Featured : 
            </p>
            
            <div class="flex items-center gap-2 mt-2 sm:mt-0">
              
              <p
                class="text-sm font-medium leading-none text-gray-500 dark:text-gray-400"
              >
                {product.IsFeatured ==true ? 
            <svg class="w-6 h-6 text-[#6fdf98b8] dark:text-[#88dba7b8]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
          </svg>
          
          
          :
<svg class="w-6 h-6 text-[#fd5c5cb8] dark:text-[#ff7c7cb8]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg>

          }
              </p>
             
            </div>
          </div>
          
          <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
            <p
              class="font-bold text-gray-900 dark:text-white"
            >

              Category : 
            </p>
            
            <div class="flex items-center gap-2 mt-2 sm:mt-0">
              
              <p
                class="text-sm font-medium leading-none text-gray-500 dark:text-gray-400"
              >
                {productD.Category}
              </p>
             
            </div>
          </div>
          <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
            <p
              class="font-bold text-gray-900 dark:text-white"
            >

              Sub Category : 
            </p>
            
            <div class="flex items-center gap-2 mt-2 sm:mt-0">
              
              <p
                class="text-sm font-medium leading-none text-gray-500 dark:text-gray-400"
              >
                {productD.SubCategory}
              </p>
             
            </div>
          </div>
          <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
            <p
              class="font-bold text-gray-900 dark:text-white"
            >

              Tags: 
            </p>
            
            <div className="flex flex-wrap items-center gap-2 mt-2 sm:mt-0">
                {productD.Tags?.map((tag, index) => (
                    <span
                    key={index}
                    className="bg-gray-100 text-gray-800 text-xs font-medium leading-none 
                        px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                    >
                    {tag}
                    </span>
                ))}
                </div>

          </div>
          <div className="flex flex-col gap-4 mt-4">
            {productD.Variants?.map((variant, sizeIndex) => (
                <div key={sizeIndex} className="">
                {/* Taille */}
                <h3  className="text-sm font-bold  text-gray-900 dark:text-white">
                    Taille: {variant.Size}
                </h3>
                <div className="flex flex-wrap gap-2 mt-2">
                    {/* Couleurs et Quantités */}
                    {variant.Colors.map((color, colorIndex) => (
                    <span
                        key={colorIndex}
                        className="bg-gray-100 text-gray-800 text-xs font-medium leading-none 
                                px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                    >
                        {color.Color} ({color.Quantity} pièces)
                    </span>
                    ))}
                </div>
                </div>
            ))}
            </div>
            <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
            <p
              class="font-bold text-gray-900 dark:text-white"
            >

              Price : 
            </p>
            
            <div class="flex items-center gap-2 mt-2 sm:mt-0">
              
            <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                {productD.OldPrice === productD.Price ? (
                    <div className="flex items-center ">
                    <span>{productD.Price.toFixed(2)}</span>
                    <span className="ml-1 text-xs font-semibold text-gray-500">Dt</span>
                    </div>
                ) : (
                    <div className="flex items-center justify-between">
                    
                    {/* Nouveau prix */}
                    <div className="flex items-center text-black mr-2">
                        <span className="text-gray-500">{productD.Price.toFixed(2)}</span>
                        <span className="ml-1 text-xs font-semibold text-gray-500">Dt</span>
                    </div>
                    {/* Ancien prix barré */}
                    <div className="flex items-center line-through text-gray-400">
                        <span>{productD.OldPrice.toFixed(2)}</span>
                        <span className="ml-1 text-xs font-semibold text-gray-500">Dt</span>
                    </div>
                    </div>
                )}
                </p>

             
            </div>
          </div>
          <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
            <p
              class="font-bold text-gray-900 dark:text-white"
            >

              Stock : 
            </p>
            
            <div class="flex items-center gap-2 mt-2 sm:mt-0">
              
              <p
                class="text-sm font-medium leading-none text-gray-500 dark:text-gray-400"
              >
                {productD.Stock} Piece
              </p>
             
            </div>
          </div>
          
          <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
            <p
              class="font-bold text-gray-900 dark:text-white"
            >

              Review : 
            </p>
            
            <div class="flex items-center gap-2 mt-2 sm:mt-0">
              
              <p
                class="text-sm font-medium leading-none text-gray-500 dark:text-gray-400"
              >
                {productD.Rating} Review
              </p>
             
            </div>
          </div>
          

         
        </div>
        
      </div>
      <hr class="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
          <p
              class="font-bold text-gray-900 dark:text-white"
            >

            Product Description : 
            </p>   
          <p class="mb-6 text-gray-500 dark:text-gray-400">
            {productD.Description}
          </p>
          <p
              class="font-bold text-gray-900 dark:text-white"
            >

            Rating Analytics : 
            </p>   

          {/* <p class="text-gray-500 dark:text-gray-400">
            Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast
            Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse with
            Magic Keyboard or Magic Keyboard with Touch ID.
          </p>   */}
          <Rating/>
    </div>
  </section>
  )
}

export default Details