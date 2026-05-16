import React from 'react'
import { Link } from 'react-router-dom';
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
                    <Link to="/admin" className="flex items-center gap-3 p-3 rounded-xl bg-teal-500 text-white font-semibold">
                         <FaChartLine />Dashboard
                    </Link>
                    <Link to="/admin/products" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition">
                         <FaBox />Products
                    </Link>
                    <Link to="/admin/orders" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition">
                         <FaCartShopping />Orders
                    </Link>
                    <Link to="/admin/customers" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition">
                         <FaUsers />Customers
                    </Link>
                    <Link to="/admin/reviews" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition">
                         <FaComment />Feedback
                    </Link>
                    <Link to="/admin/contact-messages" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition">
                         <FaEnvelope />Contact Messages
                    </Link>
                    <Link to="/admin/settings" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition">
                         <FaGear />Settings
                    </Link>
               </nav>
          </aside>

    
    </>
  )
}
