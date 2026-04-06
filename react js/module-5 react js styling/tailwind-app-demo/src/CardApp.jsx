import React from "react";
import Data from "./Data.jsx";

export default function CardApp() {
     return (
          <div className="bg-gray-200 min-h-screen py-10">
               
               <h1 className="text-3xl font-bold text-center mb-10">Employee Data</h1>

               <div className="grid gap-8 px-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    
                    {Data && Data.map((item) => (
                         <div key={item.id} className="bg-white border border-white rounded-3xl p-8 text-center">
                              <img src={item.photo} alt="profile" className="w-30 h-30 mt-8 mx-auto mb-6 animate-bounce border rounded-full"/>
                              <p className="mb-2 font-medium"> <b>Id is :</b> {item.id} </p>
                              <p className="mb-2 font-medium"><b>Name is :</b> {item.name}</p>
                              <p className="mb-2 font-medium"><b>Age is :</b> {item.age}</p>
                         </div>
                    ))}

               </div>
          </div>
     );
}