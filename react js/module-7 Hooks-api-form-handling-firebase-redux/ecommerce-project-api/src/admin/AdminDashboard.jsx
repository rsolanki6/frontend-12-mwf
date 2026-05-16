import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { FaBox } from "react-icons/fa";
import CountApp from './CounterApp';


export default function AdminDashboard() {
  return (
     <>
     
     <main className="p-6">
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
               <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex justify-between items-center">
                         <div>
                              <p className="text-gray-500">Total Sales</p>
                              <h3 className="text-3xl font-bold mt-2">₹85,000</h3>
                         </div>
                         <div className="bg-teal-100 p-4 rounded-xl">
                              <FaUser className="text-teal-600 text-2xl" />
                         </div>
                    </div>
               </div>
               <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex justify-between items-center">
                         <div>
                              <p className="text-gray-500">Orders</p>
                              <h3 className="text-3xl font-bold mt-2">1,240</h3>
                         </div>
                         <div className="bg-blue-100 p-4 rounded-xl">
                              <FaCartShopping className="text-blue-600 text-2xl" />
                         </div>
                    </div>
               </div>
               <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex justify-between items-center">
                         <div>
                              <p className="text-gray-500">Customers</p>
                              <h3 className="text-3xl font-bold mt-2">850</h3>
                         </div>
                         <div className="bg-pink-100 p-4 rounded-xl">
                              <FaUser className="text-pink-600 text-2xl" />
                         </div>
                    </div>
               </div>
               <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex justify-between items-center">
                         <div>
                              <p className="text-gray-500">Products</p>
                              <h3 className="text-3xl font-bold mt-2">120</h3>
                         </div>
                         <div className="bg-yellow-100 p-4 rounded-xl">
                              <FaBox className="text-yellow-600 text-2xl" />
                         </div>
                    </div>
               </div>
          </div>
          {/* Table */}
          <div className="bg-white rounded-2xl shadow-sm mt-8 overflow-hidden">
               <div className="p-5 border-b">
                    <h3 className="text-xl font-bold">Recent Orders</h3>
               </div>
               <div className="overflow-x-auto">
                    <table className="w-full text-left">
                         <thead className="bg-gray-50">
                              <tr>
                              <th className="p-4">Order ID</th>
                              <th className="p-4">Customer</th>
                              <th className="p-4">Product</th>
                              <th className="p-4">Price</th>
                              <th className="p-4">Status</th>
                              </tr>
                         </thead>
                         <tbody>
                              <tr className="border-b hover:bg-gray-50">
                              <td className="p-4">#1001</td>
                              <td className="p-4">Rohan</td>
                              <td className="p-4">Luxury Watch</td>
                              <td className="p-4">₹5,999</td>
                              <td className="p-4">
                              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                                   Completed
                              </span>
                              </td>
                              </tr>
                              <tr className="border-b hover:bg-gray-50">
                              <td className="p-4">#1002</td>
                              <td className="p-4">Aman</td>
                              <td className="p-4">Premium Scarf</td>
                              <td className="p-4">₹2,499</td>
                              <td className="p-4">
                              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                                   Pending
                              </span>
                              </td>
                              </tr>
                              <tr className="hover:bg-gray-50">
                              <td className="p-4">#1003</td>
                              <td className="p-4">Priya</td>
                              <td className="p-4">Coffee Mug</td>
                              <td className="p-4">₹899</td>
                              <td className="p-4">
                              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                                   Cancelled
                              </span>
                              </td>
                              </tr>
                         </tbody>
                    </table>
               </div>
          </div>
     </main>

     
     
     </>
  )
}
