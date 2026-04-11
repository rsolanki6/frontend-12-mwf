import React from "react";
export default function Contact() 
{
     return(
     <>
          {/* Navbar */}
               <nav className="bg-blue-600 text-white">
               <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                    <h1 className="text-xl font-bold">MySite</h1>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                         <a href="#" className="hover:text-gray-200">Home</a>
                         <a href="#" className="hover:text-gray-200">About</a>
                         <a href="#" className="hover:text-gray-200">Contact</a>
                    </div>
                    {/* Hamburger */}
                    <button id="menu-btn" className="md:hidden text-2xl">☰</button>
               </div>
               {/* Mobile Menu */}
               <div id="mobile-menu" className="hidden md:hidden px-4 pb-4">
                    <a href="#" className="block py-2">Home</a>
                    <a href="#" className="block py-2">About</a>
                    <a href="#" className="block py-2">Contact</a>
               </div>
          </nav>
          {/* Contact Section */}
          <section className="py-16">
               <div className="max-w-xl mx-auto bg-white p-8 rounded shadow">
                    <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
                    <form>
                         {/* Name */}
                         <div className="mb-4">
                              <label className="block mb-1 font-medium">Name</label>
                              <input type="text" placeholder="Enter your name" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" required=""/>
                         </div>
                         {/* Gmail */}
                         <div className="mb-4">
                              <label className="block mb-1 font-medium">Email</label>
                              <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" required=""/>
                         </div>
                         {/* Message */}
                         <div className="mb-4">
                              <label className="block mb-1 font-medium">Message</label>
                              <textarea rows={4} placeholder="Write your message..." className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" required="" defaultValue={""}/>
                         </div>
                         {/* Submit */}
                         <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Send Message</button>
                    </form>
               </div>
          </section>
          {/* JS for Hamburger */}
     </>

     )
}