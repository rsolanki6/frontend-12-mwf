import React from 'react'
import { FaChartLine } from "react-icons/fa6";
import { FaBox } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { FaComment } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";

export default function AdminSideBar() {
  return (
    <>
    
          <aside id="sidebar" className="fixed lg:static z-50 top-0 left-0 w-72 h-full bg-white shadow-lg transform -translate-x-full lg:translate-x-0 transition-transform duration-300">
               <div className="flex items-center justify-between p-5 border-b">
               <h1 className="text-3xl font-bold text-teal-600">LUXE</h1>
               <button id="closeBtn" className="lg:hidden text-2xl">
                    <i className="fa-solid fa-xmark" />
               </button>
               </div>
               
               <nav className="p-5 space-y-3">
                    <a href="#" className="flex items-center gap-3 p-3 rounded-xl bg-teal-500 text-white font-semibold">
                         <FaChartLine />Dashboard
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition">
                         <FaBox />Products
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition">
                         <FaCartShopping />Orders
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition">
                         <FaUsers />Customers
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition">
                         <FaComment />Feedback
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition">
                         <FaEnvelope />Contact Messages
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition">
                         <FaGear />Settings
                    </a>
               </nav>
          </aside>

    
    </>
  )
}
