import React from 'react'
import banner from '../images/banner.webp'

export default function BannerApp() {
  return (
     <>
     {/* clickIt banner */}
     <section id="clickIt-banner" className="mt-0 p-5">
          <img src={banner} className="w-full mx-auto rounded-lg sm:h-70 md:h-75 " />
     </section>
     </>

)
}
