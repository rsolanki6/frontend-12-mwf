import React from 'react'

export default function BannerApp() {
  return (

     <>
     
      <section className="relative w-full h-[870px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" data-alt="minimalist high-end fashion photography featuring a luxury watch and silk scarf on a marble surface with soft natural morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUrAnfroFTZq4bxzuS8kdb2bYneJgJxNPQPxw3crkdNNC4BjhilE4CIkBsqTNdpoJa_-IR_q__3QEPsAPkJ4Lz_Mb2b784xzztzZQYFpJRwwCiq3TyTZrrjaRhoJvp_eo8P3O2Fj_oof0EKaTfBfSuxKgF_DRMP-eXJgunpthV_t3hrLMmS_UkM3_uzmKk4-g3m8eIMC5BrZWyVrWl5PNM_V_7sG-3INXmRhzrFPY2RmN6CAvU0DSTHQCiOuQOqhj-mzMVseK8GzY"/>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full">
          
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-label-sm rounded-full mb-6">
              New Collection 2024
            </span>
            <h1 className="font-h1 text-h1 text-primary mb-6 text-gray-950">
              Elevate Your Everyday Essentials
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed text-gray-950">
              Experience the perfect blend of modern craftsmanship and timeless
              design. Our curated selection brings luxury to your doorstep.
            </p>
            
            <div className="flex gap-4">
              <button className="bg-secondary text-white px-10 py-4 rounded-2xl font-button hover:bg-on-secondary-fixed-variant transition-all shadow-xl shadow-secondary/20">
                Shop Now
              </button>
              <button className="bg-white border border-outline/20 text-primary px-10 py-4 rounded-2xl font-button hover:bg-surface-container transition-all">
                View Lookbook
              </button>
            </div>
          
          </div>
        
        </div>
      </section>


     </>


  )
}
