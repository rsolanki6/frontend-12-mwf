import React from "react";
import { FaExchangeAlt } from "react-icons/fa";

export default function Home() {     
return (
<main className="min-h-screen bg-gradient-to-bxr from-slate-100 via-white to-slate-200 px-4 py-8">
     <div className="max-w-6xl mx-auto">

          {/* Hero Section */}
          <div className="text-center mb-10">
               <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Currency Converter</h1>
               <p className="mt-4 text-slate-600 text-sm md:text-lg">Convert currencies in real-time using live exchange rates.</p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10">

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* Left Side */}
                    <div>

                         {/* Amount */}
                         <div className="mb-6">
                              <label className="block text-slate-700 font-medium mb-2">Amount</label>
                              <input type="number" placeholder="Enter amount"
                              className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                         </div>

                         {/* Currency Selectors */}
                         <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-end">

                              {/* From */}
                              <div className="sm:col-span-2">
                                   <label className="block text-slate-700 font-medium mb-2">From</label>

                                   <select className="w-full border border-slate-300 rounded-xl px-4 py-3">
                                        <option>USD</option>
                                        <option>INR</option>
                                        <option>EUR</option>
                                        <option>GBP</option>
                                   </select>
                              </div>

                              {/* Swap */}
                              <div className="flex justify-center">
                                   <button className="bg-slate-900 text-white p-3 rounded-full hover:bg-slate-700 transition"><FaExchangeAlt /></button>
                              </div>

                              {/* To */}
                              <div className="sm:col-span-2">
                                   <label className="block text-slate-700 font-medium mb-2">To</label>

                                   <select className="w-full border border-slate-300 rounded-xl px-4 py-3">
                                        <option>INR</option>
                                        <option>USD</option>
                                        <option>EUR</option>
                                        <option>GBP</option>
                                   </select>
                              </div>

                         </div>

                         {/* Convert Button */}
                         <button className="w-full mt-8 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">Convert Currency</button>

                    </div>

                    {/* Right Side Result */}
                    <div className="flex items-center">
                         
                         <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6">
                              <h3 className="text-lg font-semibold text-slate-900 mb-4">Conversion Result</h3>
                              
                              <div className="space-y-3">
                                   <p className="text-slate-600">Amount</p>
                                   <h2 className="text-3xl md:text-4xl font-bold text-blue-600">₹8,550.00</h2>
                                   <p className="text-slate-500">100 USD = 8,550 INR</p>
                                   <div className="pt-4 border-t mt-4">
                                        <p className="text-sm text-slate-500">Exchange Rate</p>
                                        <p className="font-medium">1 USD = 85.50 INR</p>
                                   </div>
                    
                              </div>
                    
                         </div>
                    
                    </div>
               </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

               <div className="bg-white rounded-2xl shadow-md p-6">
                    <h3 className="font-semibold text-lg mb-2">Live Rates</h3>
                    <p className="text-slate-600">Fetch real-time exchange rates from an external API.</p>
               </div>

               <div className="bg-white rounded-2xl shadow-md p-6">
                    <h3 className="font-semibold text-lg mb-2">Conversion History</h3>
                    <p className="text-slate-600">Store and manage previous currency conversions.</p>
               </div>

               <div className="bg-white rounded-2xl shadow-md p-6">
                    <h3 className="font-semibold text-lg mb-2">Fast & Responsive</h3>
                    <p className="text-slate-600">Optimized for mobile, tablet, and desktop devices.</p>
               </div>

          </div>

     </div>

</main>
);
}