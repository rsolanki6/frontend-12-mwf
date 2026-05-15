import React from 'react'
import { FaBell } from "react-icons/fa6";

export default function AdminHeaderApp() {
  return (
    <>
    
          <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
               <div className="flex items-center gap-4">
                    <button id="menuBtn" className="lg:hidden text-2xl text-gray-700">
                         <i className="fa-solid fa-bars" />
                    </button>
                    <h2 className="text-2xl font-bold text-gray-800">Admin Dashboard</h2>
               </div>
               <div className="flex items-center gap-5">
                    <button className="relative">
                         <FaBell className="text-2xl text-gray-600" />
                         <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                         3
                         </span>
                    </button>
                    <div className="flex items-center gap-3">
                         <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className="w-10 h-10 rounded-full border-2 border-gray-300 object-cover"/>
                         <div className="hidden sm:block">
                         <h4 className="font-semibold">Admin</h4>
                         <p className="text-sm text-gray-500">Administrator</p>
                         </div>
                    </div>
               </div>
          </header>

    
    </>
  )
}
