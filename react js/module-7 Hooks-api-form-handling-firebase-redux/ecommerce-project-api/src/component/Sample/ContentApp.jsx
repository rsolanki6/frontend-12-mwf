import React from 'react'
import { Link } from 'react-router-dom'

export default function ContentApp() {
  return (

     <>

<main>
  {/* Categories Grid */}
  <section className="max-w-[1280px] mx-auto px-6 py-xl">
    <div className="flex items-end justify-between mb-lg">
      <div>
        <h2 className="font-h2 text-h2 text-primary mb-2">
          Curated Categories
        </h2>
        <p className="text-on-surface-variant">
          Find exactly what you need for your lifestyle.
        </p>
      </div>
      <Link
        className="text-secondary font-button flex items-center gap-2 hover:gap-3 transition-all"
        to="/shop"
      >
        View All{" "}
        <span className="material-symbols-outlined">arrow_forward</span>
      </Link>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      <div className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer shadow-lg shadow-slate-900/5">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-alt="close up of premium leather handbag and designer sunglasses on a clean studio background with soft shadows"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS69_NjVLTWlojbJYhwyOxZNFipDJIwMevqcSbumSJ3QQdBoCbQ9UjRetlhSJR7vjJ2T2y5Brt3KYS-FnzJya1s_5Rlz86k0vMQknjqCbWVoS2l_eukk6ha0u9tGrAfMaat1cDPbm0rk3oxlo77bPpFQmIM1ZCDwHathjU0-IfWnRR1eyj651oG6kmNRLj_9-9OigyqZbHbdrpgnZQTKdsjms6zrEyg0k_GypBj408e4mzH8IeKKOogodkL5JtEtNIyVUEr_9-LhM"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
          <h3 className="text-white font-h3 text-h3 mb-2">Accessories</h3>
          <p className="text-white/80 text-label-sm">
            Premium leather &amp; metals
          </p>
        </div>
      </div>
      
      <div className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer shadow-lg shadow-slate-900/5">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-alt="modern minimalist apparel hanging on a wooden rack in a bright white airy boutique setting"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUYr7MrSbNMLswrARa41LJhJKttIkDzhAqN4vzaSV870xdOJ7dzUulZMQWc9ndoCWYWIHNSAP0uRDeQ4htvijJX4L6vypJJrUNeU2PeU7qGjZQbAVbyNWkFOmKf-fD8-GMARfAKhhvxd6gH58I8YRL22gdbjcOsWQecQbCwfjkyfkSHPzluc96_KuvbwkIQZE9bQGk2ejJlHkf27WVpA8gXxlppZYsOjTyGBIKJ1XTugzAJFHiTAvWiy_PpDd5PL-jCZYZAG5ckNA"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
          <h3 className="text-gray-700 font-h3 text-h3 mb-2">Ready-to-Wear</h3>
          <p className="text-gray-700 text-label-sm">
            Sustainable fine fabrics
          </p>
        </div>
      </div>
      
      <div className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer shadow-lg shadow-slate-900/5">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-alt="minimalist living room interior featuring architectural ceramic vases and a premium linen candle"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPb5ITOCi6PH1TtqmLwuYAOuGOVhNpfYazGhGSGOr1ep-UOu8N-lwiq4Yf3TeMtCL6ETVaHQmv663pu8z4o967y-ooscZ-SKDBRJRJjhS4-sPL-eesJqcWut-kEzSXjBwxa-r0g3MVqwZDZOWSTiiTEOBRyNhy15NdJ2j8JCjJwZZ5pe56oubZ3wFgEYcSk9QyeyiiSlproYaUaKmLnfAwLyKTIoRromAS-BqhEyaQuOEfm6h0Nx2mbMY4ldZt30KFsaDJcV6PoSU"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
          <h3 className="text-white font-h3 text-h3 mb-2">Home Decor</h3>
          <p className="text-white/80 text-label-sm">Artisanal living pieces</p>
        </div>
      </div>
    </div>
  </section>
  {/* Featured Products */}
  <section className="bg-surface-container-low py-xl">
    <div className="max-w-[1280px] mx-auto px-6">
      <div className="text-center mb-lg">
        <h2 className="font-h2 text-h2 text-primary mb-4">
          Featured Selection
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">
          Discover our most-loved pieces, crafted with meticulous attention to
          detail and uncompromising quality.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {/* Product Card 1 */}
        <div className="group bg-white rounded-xl overflow-hidden shadow-lg shadow-slate-900/5 hover:-translate-y-1 transition-all duration-300">
          <div className="relative aspect-square overflow-hidden">
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              data-alt="minimalist gold link necklace on a soft beige linen texture with professional studio lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAow0e3q7BDdeIw7ckhviEHTPLEitA_vHUbur9LNid0ZU0vaFk12oOM_rYtycKS8B7tdhIzaUailkX8g_KBiTUUJbgGljut2ETBsR5iAPiKokdGnQvcUY2_hdJkF-ZiLWGskiNXEFcMFAelg3SHwdPyhV9uQBj0EJmiUbga_qIVozfJjBqfavGoaEuLDvYU7zg7zV69LoVo6siRZn8guwtMIoZblZugKxF8YzOujDU9e5Mi9VW9LbzS1oQfiLJOTwg1BkWSilLzH5M"
            />
            <button className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full shadow-sm hover:text-red-500 transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                favorite
              </span>
            </button>
          </div>
          <div className="p-6">
            <p className="text-label-sm text-secondary font-semibold mb-2">
              New Arrival
            </p>
            <h4 className="font-h3 text-[18px] text-primary mb-1">
              Celestial Gold Link
            </h4>
            <p className="text-body-md font-bold text-primary mb-6">$240.00</p>
            <button className="w-full py-3 bg-primary text-white rounded-lg font-button flex items-center justify-center gap-2 hover:bg-slate-800 transition-all">
              <span
                className="material-symbols-outlined text-[18px]"
                data-icon="shopping_cart"
              >
                shopping_cart
              </span>
              Add to Cart
            </button>
          </div>
        </div>
        {/* Product Card 2 */}
        <div className="group bg-white rounded-xl overflow-hidden shadow-lg shadow-slate-900/5 hover:-translate-y-1 transition-all duration-300">
          <div className="relative aspect-square overflow-hidden">
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              data-alt="sleek modern black leather watch with silver dial isolated on a dark moody surface"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIUQmjwDPeollSSqhscSRQZ0ZWJm71UzP3JxLLOIkKX6uOfYmw7S8nYKMbO9QLOrrGiE7mD0VIPefuKAcJzM0J34HoMyxlsQN2EfDYl82TOejEK3QskF-eMqLSofVS8c5Z9hPpJFO1v1UWhY437JMRBsMRlVK6og2a2NE-q5lLjubPpeBmRVGiwvGe5TmW3w5SMS6f-z9IQWGhEO6YGqZTRcodvxMZnWugxnMM6n-fMfISGm3U3dJH6ONn9p6-hQkZAlLpNrArobg"
            />
            <button className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full shadow-sm hover:text-red-500 transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                favorite
              </span>
            </button>
          </div>
          <div className="p-6">
            <p className="text-label-sm text-slate-500 mb-2">Timepieces</p>
            <h4 className="font-h3 text-[18px] text-primary mb-1">
              Noir Executive Watch
            </h4>
            <p className="text-body-md font-bold text-primary mb-6">$580.00</p>
            <button className="w-full py-3 bg-primary text-white rounded-lg font-button flex items-center justify-center gap-2 hover:bg-slate-800 transition-all">
              <span
                className="material-symbols-outlined text-[18px]"
                data-icon="shopping_cart"
              >
                shopping_cart
              </span>
              Add to Cart
            </button>
          </div>
        </div>
        {/* Product Card 3 */}
        <div className="group bg-white rounded-xl overflow-hidden shadow-lg shadow-slate-900/5 hover:-translate-y-1 transition-all duration-300">
          <div className="relative aspect-square overflow-hidden">
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              data-alt="premium white leather sneakers on a minimalist grey concrete pedestal with bright top lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuAc-iBM-q0WfysA9ZSGgWRMpOQA5GU-IQB8orD5A9dbVugMqe7rQFeM3sdhooCayMK0EIZ7TNm0Py9EOyCT5-sjh-8i4AHmteof7a3XyJCACw1Uc70dxIc-bNwF6f5MN1uQqy8nGLbqcEIZNZvhqw_IQSlAFANVrrM-EhjgTauGtqMhe5kq-k3-fAgRaAQQopcBmSpDM76O7d1XIHclF3Smo8pQaVJ1fJy0Tkqnd1rTlbqohdh4R6jT4_nHjCkjRljSgCCQ9t2ss"
            />
            <button className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full shadow-sm hover:text-red-500 transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                favorite
              </span>
            </button>
          </div>
          <div className="p-6">
            <p className="text-label-sm text-slate-500 mb-2">Footwear</p>
            <h4 className="font-h3 text-[18px] text-primary mb-1">
              Canvas Low Top
            </h4>
            <p className="text-body-md font-bold text-primary mb-6">$125.00</p>
            <button className="w-full py-3 bg-primary text-white rounded-lg font-button flex items-center justify-center gap-2 hover:bg-slate-800 transition-all">
              <span
                className="material-symbols-outlined text-[18px]"
                data-icon="shopping_cart"
              >
                shopping_cart
              </span>
              Add to Cart
            </button>
          </div>
        </div>
        {/* Product Card 4 */}
        <div className="group bg-white rounded-xl overflow-hidden shadow-lg shadow-slate-900/5 hover:-translate-y-1 transition-all duration-300">
          <div className="relative aspect-square overflow-hidden">
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              data-alt="handcrafted ceramic coffee set in matte black on a warm oak wood table"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlqgFAsAOPYh5W78XAsT8vkdexlTjWtIdOUN1Tgv941bZ9ww0U6F1qik11avHT7bMr8LAPM011qXKo1mf8Ru_S8bdz9oxG5tYoW_0KPyoNJWwOG2SnytTGAKchgLoYArkL0VI58ZTuXootQ5TiCmCwCu-ShHdMVEn4XM0J6gDGPkAoRfZg8jP1knC1DdTE4PeRUtL7V1iwxw9Ry1aQVg5wC8_DbJQEjnGCZVWjbfh0aXQj23U0dmW4w0FwFqCih5-Gqv9yP1uuUsY"
            />
            <button className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full shadow-sm hover:text-red-500 transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                favorite
              </span>
            </button>
          </div>
          <div className="p-6">
            <p className="text-label-sm text-secondary font-semibold mb-2">
              Limited Edition
            </p>
            <h4 className="font-h3 text-[18px] text-primary mb-1">
              Hand-thrown Ceramics
            </h4>
            <p className="text-body-md font-bold text-primary mb-6">$85.00</p>
            <button className="w-full py-3 bg-primary text-white rounded-lg font-button flex items-center justify-center gap-2 hover:bg-slate-800 transition-all">
              <span
                className="material-symbols-outlined text-[18px]"
                data-icon="shopping_cart"
              >
                shopping_cart
              </span>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Special Offer Banner */}
  <section className="max-w-[1280px] mx-auto px-6 py-xl">
    <div className="relative rounded-[2rem] overflow-hidden bg-primary text-white p-12 md:p-20 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1 space-y-6">
        <h2 className="font-h1 text-h1 tracking-tight">The Mid-Season Event</h2>
        <p className="text-body-lg text-slate-300">
          Enjoy exclusive access to our private sale. Sign up now and receive up
          to 30% off on selected archival pieces.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <button className="bg-secondary text-white px-8 py-4 rounded-full font-button hover:bg-on-secondary-container transition-all">
            Unlock Access
          </button>
          <div className="flex items-center gap-2 px-4 text-label-sm font-medium border border-slate-700 rounded-full">
            CODE: LUXE30
          </div>
        </div>
      </div>
      <div className="flex-1 w-full max-w-md">
        <img
          className="rounded-2xl shadow-2xl shadow-black/40 rotate-3 group-hover:rotate-0 transition-transform duration-700"
          data-alt="stylish architectural detail of a modern glass building reflecting a vibrant orange sunset"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj-apbIRYwtlEqa3lMfECzbgl8hOEOaXyVjDanEPuK2bBWg9FGRQzNPJ0ErhDTQ3T3YYGWOTvAr4uAhhM3hzLzNECESHk7kHzAxHOHFUmSmW60c3Kv86Ksb0025F9KqUX9P5bakJzTL-oKYBuOfKibsXHo9tNi93Diq56KGI1a9Nt8Oud3PZmVt_i99ei22u8LBaalfUwjcGjC0wU7EK346L8MZNbxXUDseZC5uN_B98dhY2cAGtINWiHSkdVWLvbS-dDD8dZlpe0"
        />
      </div>
    </div>
  </section>
  {/* Testimonials */}
  <section className="max-w-[1280px] mx-auto px-6 py-xl">
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-gutter">
      <div className="lg:col-span-1 py-4">
        <h2 className="font-h2 text-h2 text-primary mb-4">
          What Our Clients Say
        </h2>
        <div className="flex gap-1 text-secondary mb-6">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
        </div>
        <p className="text-on-surface-variant">
          4.9/5 Average Rating from over 10,000+ happy customers worldwide.
        </p>
      </div>
      <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="p-8 bg-white rounded-2xl shadow-lg shadow-slate-900/5">
          <p className="text-body-md text-on-surface mb-8 italic">
            "The quality of the leather is exceptional. I've bought high-end
            brands before, but LUXE truly stands out in durability and design."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
              <img
                className="w-full h-full object-cover"
                data-alt="portrait of a sophisticated young man with glasses in a minimalist studio setting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmbtRRzA_yKBGqIu6fLVcjKU2qvOT5j3B1xvnntt4L4PFEze4CZGWvwGExgQNfePfpLFiYV2QxWyTBntDQUvHSKiD3KlSp2aDETWBAdagDgQVvZetpyce-l_9HbQOT8mqE9p6v9l4wN6yDIT6ZmZir-k4uzrB2SP4Otw6y68OINfHAz_I9nCWM4jJBgQD4JvY4C-S0MwXT2Qba3d4Qwqi-XFlj1imAzMUjg5sywHMC9prjfG_7DjswNUT5mDhlbwRP4cyrTRttlzw"
              />
            </div>
            <div>
              <p className="font-bold text-primary">Marcus H.</p>
              <p className="text-label-sm text-slate-500">Verified Buyer</p>
            </div>
          </div>
        </div>
        <div className="p-8 bg-white rounded-2xl shadow-lg shadow-slate-900/5">
          <p className="text-body-md text-on-surface mb-8 italic">
            "Customer service was so responsive when I needed a size exchange.
            The new items arrived within 48 hours. Simply impressive."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
              <img
                className="w-full h-full object-cover"
                data-alt="portrait of a professional woman with a warm smile wearing a neutral tone silk blouse"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkKe4CmxM397Qgbnk6Jgp4NjStOJOivDGFfclnebpUda9LtDDuTKX98h6-Afd9Knw6njoU8YtFJEv8QCVsoQgcXDgBW5Il0k-DVFTwzJXGRvhiRML-x8DJUspVZPq5bxVFtcBGz8z00jEwvauc5f9pN7EyGaKpvT7F23kwiqbuxpVeHVFgOupa7WVN7zUAjxnrKSYnfA2iT-W-nD7lImRFMh99bQIl0p6V-ioF88pF4UJpgQ2qUFwbPY5PYNp5Zl3X2mZs3y74fmk"
              />
            </div>
            <div>
              <p className="font-bold text-primary">Sarah J.</p>
              <p className="text-label-sm text-slate-500">Verified Buyer</p>
            </div>
          </div>
        </div>
        <div className="p-8 bg-white rounded-2xl shadow-lg shadow-slate-900/5">
          <p className="text-body-md text-on-surface mb-8 italic">
            "Absolutely love the minimalist aesthetic. It fits perfectly with my
            home decor. Every piece feels like a work of art."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
              <img
                className="w-full h-full object-cover"
                data-alt="close up profile of an elegant woman with minimalist jewelry in soft natural lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS9XmrrHI_tWxvue2dAOFgtNa0dWU9E1-EcjrucNcJQB05P-ibrc5bh6OiTyVcOo3hqr5hxmqviDVvyyv-ncvj8pHfrHbXS_PVuem4pFKO6pi8BcOBGcS1AWUAvgwqlZsBcHlctfPMBtq_YpVzdjamfC0rgLDsJMtn_HM4tT-T-7KePyTegHWZXw2bv-ZJt4OTqMg3Bc6CQGgNwOb9MnYQAYRt78IkaqyuJ5fduYmMH5eGSBcY70YW38Af-o6IR4Qln8hDfzwbU4Y"
              />
            </div>
            <div>
              <p className="font-bold text-primary">Elena G.</p>
              <p className="text-label-sm text-slate-500">Verified Buyer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

     
     </>


  )
}
