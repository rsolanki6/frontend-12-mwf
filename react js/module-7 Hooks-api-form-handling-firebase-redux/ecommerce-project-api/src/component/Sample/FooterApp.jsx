import React from 'react'

export default function FooterApp() {
  return (

     <>
     
<footer className="w-full pt-20 pb-10 bg-slate-900 border-t border-slate-800">
  <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
    <div className="space-y-6">
      <span className="text-xl font-bold text-white mb-6 block">LUXE</span>
      <p className="text-slate-400 text-sm leading-relaxed">
        Defining the future of luxury commerce through thoughtful design and
        curated excellence since 2024.
      </p>
      <div className="flex gap-4">
        <a
          className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
          href="#"
        >
          <span className="material-symbols-outlined text-[20px]">
            language
          </span>
        </a>
        <a
          className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
          href="#"
        >
          <span className="material-symbols-outlined text-[20px]">share</span>
        </a>
      </div>
    </div>
    <div>
      <h4 className="text-white font-bold mb-6">Quick Links</h4>
      <ul className="space-y-4 font-inter text-sm text-slate-400">
        <li>
          <a className="hover:text-teal-400 transition-colors" href="#">
            Privacy Policy
          </a>
        </li>
        <li>
          <a className="hover:text-teal-400 transition-colors" href="#">
            Terms of Service
          </a>
        </li>
        <li>
          <a className="hover:text-teal-400 transition-colors" href="#">
            Shipping &amp; Returns
          </a>
        </li>
        <li>
          <a className="hover:text-teal-400 transition-colors" href="#">
            FAQ
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h4 className="text-white font-bold mb-6">Categories</h4>
      <ul className="space-y-4 font-inter text-sm text-slate-400">
        <li>
          <a className="hover:text-teal-400 transition-colors" href="#">
            New Arrivals
          </a>
        </li>
        <li>
          <a className="hover:text-teal-400 transition-colors" href="#">
            Best Sellers
          </a>
        </li>
        <li>
          <a className="hover:text-teal-400 transition-colors" href="#">
            Accessories
          </a>
        </li>
        <li>
          <a className="hover:text-teal-400 transition-colors" href="#">
            Gift Cards
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h4 className="text-white font-bold mb-6">Newsletter</h4>
      <p className="text-slate-400 text-sm mb-4">
        Join our community for early access and styling tips.
      </p>
      <div className="flex">
        <input
          className="bg-slate-800 border-none rounded-l-lg text-white p-3 w-full focus:ring-1 focus:ring-teal-400"
          placeholder="Email address"
          type="email"
        />
        <button className="bg-teal-500 text-white px-4 rounded-r-lg hover:bg-teal-400 transition-all">
          <span className="material-symbols-outlined">send</span>
        </button>
      </div>
    </div>
  </div>
  <div className="max-w-[1280px] mx-auto px-6 mt-20 pt-10 border-t border-slate-800 text-center">
    <p className="font-inter text-sm text-slate-400">
      © 2024 LUXE Corporate. All rights reserved.
    </p>
  </div>
</footer>

     
     </>


  )
}
