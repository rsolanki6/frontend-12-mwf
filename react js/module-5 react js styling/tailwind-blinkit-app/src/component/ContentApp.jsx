import React from 'react'

import category1 from '../images/pharmacy-WEB.avif'
import category2 from '../images/PetCare_WEB.avif'
import category3 from '../images/babycare-WEB.avif'
// first group of products
import product1 from '../images/paan-corner_web.avif'
import product2 from '../images/Slice-2_10.avif'
import product3 from '../images/Slice-3_9.avif'
import product4 from '../images/Slice-4_9.avif'
import product5 from '../images/Slice-5_4.avif'
import product6 from '../images/Slice-6_5.avif'
import product7 from '../images/Slice-7-1_0.avif'
import product8 from '../images/Slice-8_4.avif'
import product9 from '../images/Slice-10.avif'

// second group of products
import product11 from '../images/Slice-11.avif'
import product12 from '../images/Slice-12.avif'
import product13 from '../images/Slice-13.avif'
import product14 from '../images/Slice-14.avif'
import product15 from '../images/Slice-15.avif'
import product16 from '../images/Slice-16.avif'
import product17 from '../images/Slice-17.avif'
import product18 from '../images/Slice-18.avif'
import product19 from '../images/Slice-19.avif'
import product20 from '../images/Slice-20.avif'

// grid product
import mproduct1 from '../images/product1.avif'
import mproduct2 from '../images/product2.avif'
import mproduct3 from '../images/product3.avif'
import mproduct4 from '../images/product4.avif'
import mproduct5 from '../images/product5.avif'
import mproduct6 from '../images/product6.avif'
import mproduct7 from '../images/product7.avif'
import mproduct8 from '../images/product8.avif'
import mproduct9 from '../images/product9.avif'
import mproduct10 from '../images/product10.avif'
import mproduct11 from '../images/product11.avif'
import mproduct12 from '../images/product12.avif'
import mproduct13 from '../images/product13.avif'
import mproduct14 from '../images/product14.avif'
import mproduct15 from '../images/product15.avif'
import mproduct16 from '../images/product16.avif'
import mproduct17 from '../images/product17.avif'
import mproduct18 from '../images/product18.avif'
import mproduct19 from '../images/product19.avif'
import mproduct20 from '../images/product20.avif'
import mproduct21 from '../images/product21.avif'
import mproduct22 from '../images/product22.avif'
import mproduct23 from '../images/product23.avif'
import mproduct24 from '../images/product24.avif'
import mproduct25 from '../images/product25.avif'
import mproduct26 from '../images/product26.avif'
import mproduct27 from '../images/product27.avif'
import mproduct28 from '../images/product28.avif'
import mproduct29 from '../images/product29.avif'
import mproduct30 from '../images/product30.avif'
import mproduct31 from '../images/product31.avif'
import mproduct32 from '../images/product32.avif'
import mproduct33 from '../images/product33.avif'
import mproduct34 from '../images/product34.avif'
import mproduct35 from '../images/product35.avif'
import mproduct36 from '../images/product36.avif'


export default function ContentApp() {
  return (
    <>
  {/* content section */}
  <section className="py-5">
    {/* divide 3 section using flex and flex-wrap */}
    <div className="max-w-7.5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="flex flex-wrap -mx-2">
        {/* card 1 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
          <div className="bg-white rounded-lg shadow">
            <img src={category1} alt="Category 1" className="w-full h-40  rounded-md mb-4"/>
          </div>
        </div>

        {/* card 2 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
          <div className="bg-white rounded-lg shadow">
            <img src={category2} alt="Category 2" className="w-full h-40  rounded-md mb-4"/>
          </div>
        </div>

        {/* card 3 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
          <div className="bg-white rounded-lg shadow">
            <img src={category3} alt="Category 3" className="w-full h-40  rounded-md mb-4"/>
          </div>
        </div>
      </div>

      {/* product grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-10 gap-2 mt-8">
        {/* product card */}
        <div className="bg-white rounded-lg p-4"><img src={product1} alt="Product 1" className="w-full h-50 mx-auto object-cover rounded-md -mb-2"/></div>
        <div className="bg-white rounded-lg p-4"><img src={product2} alt="Product 2" className="w-full h-50 mx-auto object-cover rounded-md -mb-2"/></div>
        <div className="bg-white rounded-lg p-4"><img src={product3} alt="Product 3" className="w-full h-50 mx-auto object-cover rounded-md -mb-2"/></div>
        <div className="bg-white rounded-lg p-4"><img src={product4} alt="Product 4" className="w-full h-50 mx-auto object-cover rounded-md -mb-2"/></div>
        <div className="bg-white rounded-lg p-4"><img src={product5} alt="Product 5" className="w-full h-50 mx-auto object-cover rounded-md -mb-2"/></div>
        <div className="bg-white rounded-lg p-4"><img src={product6} alt="Product 6" className="w-full h-50 mx-auto object-cover rounded-md -mb-2"/></div>
        <div className="bg-white rounded-lg p-4"><img src={product7} alt="Product 7" className="w-full h-50 mx-auto object-cover rounded-md -mb-2"/></div>
        <div className="bg-white rounded-lg p-4"><img src={product8} alt="Product 8" className="w-full h-50 mx-auto object-cover rounded-md -mb-2"/></div>
        <div className="bg-white rounded-lg p-4"><img src={product9} alt="Product 9" className="w-full h-50 mx-auto object-cover rounded-md -mb-2"/></div>
        <div className="bg-white rounded-lg p-4"><img src={product3} alt="Product 4" className="w-full h-50 mx-auto object-cover rounded-md -mb-2"/></div>
        <div className="bg-white rounded-lg p-4"><img src={product11} alt="Product 4" className="w-full h-50 mx-auto object-cover rounded-md -mb-2"/></div>
        <div className="bg-white rounded-lg p-4"><img src={product12} alt="Product 4" className="w-full h-50 mx-auto object-cover rounded-md -mb-2"/></div>
        <div className="bg-white rounded-lg p-4"><img src={product13} alt="Product 4" className="w-full h-50 mx-auto object-cover rounded-md -mb-2"/></div>
        <div className="bg-white rounded-lg p-4"><img src={product14} alt="Product 4" className="w-full h-50 mx-auto object-cover rounded-md -mb-2"/></div>
        <div className="bg-white rounded-lg p-4"><img src={product15} alt="Product 4" className="w-full h-50 mx-auto object-cover rounded-md -mb-2"/></div>
        <div className="bg-white rounded-lg p-4"><img src={product16} alt="Product 4" className="w-full h-50 mx-auto object-cover rounded-md -mb-2"/></div>
        <div className="bg-white rounded-lg p-4"><img src={product17} alt="Product 4" className="w-full h-50 mx-auto object-cover rounded-md -mb-2"/></div>
        <div className="bg-white rounded-lg p-4"><img src={product18} alt="Product 4" className="w-full h-50 mx-auto object-cover rounded-md -mb-2"/></div>
        <div className="bg-white rounded-lg p-4"><img src={product19} alt="Product 4" className="w-full h-50 mx-auto object-cover rounded-md -mb-2"/></div>
        <div className="bg-white rounded-lg p-4"><img src={product20} alt="Product 4" className="w-full h-50 mx-auto object-cover rounded-md -mb-2"/></div>
      </div>
      
      {/* Rolling paper & tobacco */}
      <div className="mt-8">
        <p className="sm:text-sm md:text-xl lg:text-2xl font-semibold mb-4">Dairy, Bread & Eggs{" "}
          <button type="button" className="float-end bg-white border-0 text-green-500">see all</button>
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4">
          {/* product 1 */}
          <div className="bg-white rounded-lg shadow p-4">
            <img src={mproduct1} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Amul Gold Full cream Milk{" "}</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">500 ml</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 34{" "}
              <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
            </p>
          </div>
        
          {/* Product 2 */}
          <div className="bg-white rounded-lg shadow p-4">
            <img src={mproduct2} alt="Product 2" className="w-full h-40 object-cover rounded-md mb-4"/>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Amul Taaza Toned Milk{" "}</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">500 ml</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 28{" "}
              <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
            </p>
          </div>

          {/* Product 3 */}
          <div className="bg-white rounded-lg shadow p-4">
            <img src={mproduct3} alt="Product 3" className="w-full h-40 object-cover rounded-md mb-4"/>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Amul Masti Pouch Curd{" "}</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">1 kg</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 77{" "}
              <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
            </p>
          </div>

          {/* Product 4 */}
          <div className="bg-white rounded-lg shadow p-4">
            <img src={mproduct4} alt="Product 4" className="w-full h-40 object-cover rounded-md mb-4"/>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Amul Masti Curd Cup{" "}</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">200 g</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 24{" "}
              <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
            </p>
          </div>

          {/* Product 5 */}
          <div className="bg-white rounded-lg shadow p-4">
            <img src={mproduct5} alt="Product 5" className="w-full h-40 object-cover rounded-md mb-4"/>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Amul Salted Butter{" "}</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">100 g</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 58{" "}
              <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
            </p>
          </div>
          
          {/* Product 6 */}
          <div className="bg-white rounded-lg shadow p-4">
            <img src={mproduct6} alt="Product 6" className="w-full h-40 object-cover rounded-md mb-4"/>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Amul Masti Pouch Curd{" "}</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">390 g</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 35{" "}
              <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
            </p>
          </div>
        
        </div>
      </div>

      {/* Snacks & Manchies */}
      <div className="mt-8">
        <p className="sm:text-sm md:text-xl lg:text-2xl font-semibold mb-4">Snacks & Manchies{" "}
          <button type="button" className="float-end bg-white border-0 text-green-500">see all</button>
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4">
          {/* Product 7 */}
          <div className="bg-white rounded-lg shadow p-4">
            <img src={mproduct7} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Beanly Choco Hazelnut Spread With Breadstick{" "}</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">52 g</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 98{" "}
              <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
            </p>
          </div>
          
          {/* product 8 */}
          <div className="bg-white rounded-lg shadow p-4">
            <img src={mproduct8} alt="Product 2" className="w-full h-40 object-cover rounded-md mb-4"/>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">pringles Original Potato Chips{" "}</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Pack of 2</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 187{" "}
              <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
            </p>
          </div>
          
          {/* Product 9 */}
          <div className="bg-white rounded-lg shadow p-4">
            <img src={mproduct9} alt="Product 3" className="w-full h-40 object-cover rounded-md mb-4"/>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Kettle Studio Lime & Chilli Wafers{" "}</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">140 g</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 80{" "}
              <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
            </p>
          </div>

          {/* Product 10 */}
          <div className="bg-white rounded-lg shadow p-4">
            <img src={mproduct10} alt="Product 4" className="w-full h-40 object-cover rounded-md mb-4"/>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Kettle Studio Sharp Jalapenous & cream{" "}</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">56 g</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 44{" "}
              <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
            </p>
          </div>

          {/* Product 11 */}
          <div className="bg-white rounded-lg shadow p-4">
            <img src={mproduct11} alt="Product 6" className="w-full h-40 object-cover rounded-md mb-4"/>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Kettle Studio Mature Cheddar & Red Onions{" "}</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">56 g</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 44{" "}
              <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
            </p>
          </div>

          {/* Product 12 */}
          <div className="bg-white rounded-lg shadow p-4">
            <img src={mproduct12} alt="Product 6" className="w-full h-40 object-cover rounded-md mb-4"/>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Red Rock Deli Kettle Chips{" "}</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">58 g</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 51{" "}
              <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
            </p>
          </div>
        
        </div>
      </div>

      {/* Hookah */}
      <div className="mt-8">
          <p className="sm:text-sm md:text-xl lg:text-2xl font-semibold mb-4">Hookah{" "}
            <button type="button" className="float-end bg-white border-0 text-green-500">see all</button>
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4">
            {/* product 13 */}
            <div className="bg-white rounded-lg shadow p-4">
              <img src={mproduct13} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Chief Commissioner Herbal Hookah{" "}</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">50 g</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 100{" "}
                <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
              </p>
            </div>

            {/* Product 14 */}
            <div className="bg-white rounded-lg shadow p-4">
              <img src={mproduct14} alt="Product 2" className="w-full h-40 object-cover rounded-md mb-4"/>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Brain Froster Hookah Flavor{" "}</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Pack of 1</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 100{" "}
                <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
              </p>
            </div>

            {/* Product 15 */}
            <div className="bg-white rounded-lg shadow p-4">
              <img src={mproduct15} alt="Product 3" className="w-full h-40 object-cover rounded-md mb-4"/>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">DBI Special Herbal Molasses Hookah{" "}</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">50 g</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 100{" "}
                <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
              </p>
            </div>

            {/* Product 16 */}
            <div className="bg-white rounded-lg shadow p-4">
              <img src={mproduct16} alt="Product 4" className="w-full h-40 object-cover rounded-md mb-4"/>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Kiwi Herbal Hookah Flavor{" "}</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">50 g</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 100{" "}
                <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
              </p>
            </div>

            {/* Product 17 */}
            <div className="bg-white rounded-lg shadow p-4">
              <img src={mproduct17} alt="Product 5" className="w-full h-40 object-cover rounded-md mb-4"/>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Coconut Hookah Coal Cubes By Stash Pro{" "}</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">250 g</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 180{" "}
                <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
              </p>
            </div>
            
            {/* Product 18 */}
            <div className="bg-white rounded-lg shadow p-4">
              <img src={mproduct18} alt="Product 6" className="w-full h-40 object-cover rounded-md mb-4"/>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Watermelon Herbal Hookah Flavor{" "}</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">50 g</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 100{" "}
                <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
              </p>
            </div>
          
          </div>
      </div>
      
      {/* Mouth Fresheners */}
      <div className="mt-8">
        <p className="sm:text-sm md:text-xl lg:text-2xl font-semibold mb-4">Mouth Fresheners{" "}
          <button type="button"className="float-end bg-white border-0 text-green-500">see all</button>
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4">
            
            {/* Product 19 */}
            <div className="bg-white rounded-lg shadow p-4">
              <img src={mproduct19} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Rajnigandha Silver Pearl Silver Coated Elaichi{" "}</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">5.75 g</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 60{" "}
                <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
              </p>
            </div>

            {/* Product 20 */}
            <div className="bg-white rounded-lg shadow p-4">
              <img src={mproduct20} alt="Product 2" className="w-full h-40 object-cover rounded-md mb-4"/>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Trident Island Berry Lime Chewing Gum{" "}</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Pack of 14</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 150{" "}
                <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
              </p>
            </div>

            {/* Product 21 */}
            <div className="bg-white rounded-lg shadow p-4">
              <img src={mproduct21} alt="Product 3" className="w-full h-40 object-cover rounded-md mb-4"/>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Jay Gotli Mukhwas Mouth Freshener{" "}</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">200 g</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 160{" "}
                <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
              </p>
            </div>

            {/* Product 22 */}
            <div className="bg-white rounded-lg shadow p-4">
              <img src={mproduct22} alt="Product 4" className="w-full h-40 object-cover rounded-md mb-4"/>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Praakritik Natural Paan Gulkand{" "}</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">250 g</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 360{" "}
                <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
              </p>
            </div>

            {/* Product 23 */}
            <div className="bg-white rounded-lg shadow p-4">
              <img src={mproduct23} alt="Product 5" className="w-full h-40 object-cover rounded-md mb-4"/>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Trident Island Berry Lime Chewing Gum{" "}</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Pack of 14</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 150{" "}
                <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
              </p>
            </div>

            {/* Product 24 */}
            <div className="bg-white rounded-lg shadow p-4">
              <img src={mproduct24} alt="Product 6" className="w-full h-40 object-cover rounded-md mb-4"/>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Trident Spearmint Gum (Sugar Free){" "}</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Pack of 14</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 150{" "}
                <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
              </p>
            </div>
          
        </div>
      </div>
      
      {/* Cold Drinks & Juices */}
      <div className="mt-8">
        <p className="sm:text-sm md:text-xl lg:text-2xl font-semibold mb-4">Cold Drinks & Juices{" "}
          <button type="button"className="float-end bg-white border-0 text-green-500">see all</button>
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4">
            
            {/* Product 25 */}
            <div className="bg-white rounded-lg shadow p-4">
              <img src={mproduct25} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Amul Unsalted Buttermilk{" "}</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">400 ml</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 15{" "}
                <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
              </p>
            </div>

            {/* Product 26 */}
            <div className="bg-white rounded-lg shadow p-4">
              <img src={mproduct26} alt="Product 2" className="w-full h-40 object-cover rounded-md mb-4"/>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Thums Up Soft Drink{" "}</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">750 ml</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 45{" "}
                <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
              </p>
            </div>

            {/* Product 27 */}
            <div className="bg-white rounded-lg shadow p-4">
              <img src={mproduct27} alt="Product 3" className="w-full h-40 object-cover rounded-md mb-4"/>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Bisleri Package Water{" "}</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">1 L</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 18{" "}
                <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
              </p>
            </div>

            {/* Product 28 */}
            <div className="bg-white rounded-lg shadow p-4">
              <img src={mproduct28} alt="Product 4" className="w-full h-40 object-cover rounded-md mb-4"/>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">kinely Strong Soda Water{" "}</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">750 ml</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 18{" "}
                <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
              </p>
            </div>

            {/* Product 29 */}
            <div className="bg-white rounded-lg shadow p-4">
              <img src={mproduct29} alt="Product 5" className="w-full h-40 object-cover rounded-md mb-4"/>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Sparkling Ice Cubes by Burrf{" "}</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">1 kg</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 68{" "}
                <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
              </p>
            </div>

            {/* Product 30 */}
            <div className="bg-white rounded-lg shadow p-4">
              <img src={mproduct30} alt="Product 6" className="w-full h-40 object-cover rounded-md mb-4"/>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Bisleri Packaged Water{" "}</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">10 L</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 108{" "}
                <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
              </p>
            </div>
          
        </div>   
      </div>
      
      {/* Candies & Gums */}
      <div className="mt-8">
        <p className="sm:text-sm md:text-xl lg:text-2xl font-semibold mb-4">Candies & Gums{" "}
          <button type="button"className="float-end bg-white border-0 text-green-500">see all</button>
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4">
            
            {/* Product 31 */}
            <div className="bg-white rounded-lg shadow p-4">
              <img src={mproduct31} alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4"/>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Chupa chups Sour Bites Mixed Fruit Candy{" "}</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">61.6 g</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 34{" "}
                <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
              </p>
            </div>

            {/* Product 32 */}
            <div className="bg-white rounded-lg shadow p-4">
              <img src={mproduct32} alt="Product 2" className="w-full h-40 object-cover rounded-md mb-4"/>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Happydent Sugar Free Wave Fruit Flavour{" "}</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">28.9 g</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 46{" "}
                <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
              </p>
            </div>

            {/* Product 33 */}
            <div className="bg-white rounded-lg shadow p-4">
              <img src={mproduct33} alt="Product 3" className="w-full h-40 object-cover rounded-md mb-4"/>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Happydent Sugar Free Mint Chewing gum{" "}</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">28.9 g</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 46{" "}
                <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
              </p>
            </div>

            {/* Product 34 */}
            <div className="bg-white rounded-lg shadow p-4">
              <img src={mproduct34} alt="Product 4" className="w-full h-40 object-cover rounded-md mb-4"/>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Parle Poppins Candy{" "}</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">100 g</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 24{" "}
                <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
              </p>
            </div>

            {/* Product 35 */}
            <div className="bg-white rounded-lg shadow p-4">
              <img src={mproduct35} alt="Product 5" className="w-full h-40 object-cover rounded-md mb-4"/>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Kopiko Cappuccino Candy - Family Pack{" "}</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">40 g</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 44{" "}
                <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
              </p>
            </div>

            {/* Product 36 */}
            <div className="bg-white rounded-lg shadow p-4">
              <img src={mproduct36} alt="Product 6" className="w-full h-40 object-cover rounded-md mb-4"/>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Boomer Krunch Chewing Gum{" "}</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">28.8 g</p>
              <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">₹ 45{" "}
                <button type="button" className="border-1 border-green-500 p-1 float-end rounded-xl">ADD</button>
              </p>
            </div>
          
        </div>   
      </div>
    
    
    </div>
  </section>
</>

  )
}