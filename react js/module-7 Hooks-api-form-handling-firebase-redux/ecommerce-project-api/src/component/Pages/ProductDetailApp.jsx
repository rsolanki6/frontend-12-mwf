import React from 'react'
import HeaderApp from '../Sample/HeaderApp'
import FooterApp from '../Sample/FooterApp'

export default function ProductDetailApp() {
  return (
    <>
      <HeaderApp />
      

<main className="pt-32 pb-xl max-w-[1280px] mx-auto px-6">
  {/* Hero Section */}
  <header className="mb-lg">
    <h1 className="font-h1 text-h1 text-primary mb-sm">Premium Collection</h1>
    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
      Discover our curated selection of high-end essentials designed for the
      modern professional. Quality craftsmanship meets contemporary design.
    </p>
  </header>
  {/* Filters and Sorting Bar */}
  <section className="flex flex-col md:flex-row md:items-center justify-between mb-lg space-y-4 md:space-y-0">
    <div className="flex items-center space-x-4 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
      <button className="flex items-center space-x-2 px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-label-sm whitespace-nowrap">
        <span
          className="material-symbols-outlined text-sm"
          data-icon="filter_list"
        >
          filter_list
        </span>
        <span>All Products</span>
      </button>
      <button className="px-4 py-2 bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high rounded-full font-label-sm text-label-sm transition-colors whitespace-nowrap">
        Home Office
      </button>
      <button className="px-4 py-2 bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high rounded-full font-label-sm text-label-sm transition-colors whitespace-nowrap">
        Accessories
      </button>
      <button className="px-4 py-2 bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high rounded-full font-label-sm text-label-sm transition-colors whitespace-nowrap">
        Tech Essentials
      </button>
      <button className="px-4 py-2 bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high rounded-full font-label-sm text-label-sm transition-colors whitespace-nowrap">
        Travel
      </button>
    </div>
    <div className="flex items-center space-x-3 self-end">
      <label className="font-label-sm text-label-sm text-outline">
        Sort by:
      </label>
      <div className="relative">
        <select className="appearance-none bg-surface-container-low border-none rounded-lg px-4 py-2 pr-10 font-label-sm text-label-sm focus:ring-2 focus:ring-secondary cursor-pointer">
          <option>Recommended</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest Arrivals</option>
        </select>
      </div>
    </div>
  </section>
  {/* Product Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
    {/* Product Card 1 */}
    <div className="group product-card-hover transition-all duration-300 bg-white rounded-xl shadow-lg shadow-slate-900/5 overflow-hidden flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low">
        <img
          alt="Modern Tablet"
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          data-alt="high-end minimalist tablet on a sleek white marble desk with soft directional lighting and clean shadows"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkpCShLIdjOo6xwyh60eG5edVKnwGDnltpjLlEoi6uAXvxfGSiIlo7JbkFFN-NiZrZ9YVphF_fh6CC-iqPh5M-pk0C54hAU-kOc2IAiQhp8qeAQnkvRJyjNT4xLY2IlmXh_wmfiL21iKV4Kt4ij5ph_ZgJi7kpwepZpwVfFkTKU7RXkDWCKPT1_q-hbVEuGYCbsgTu03fGAaQ4hC4hRuZAiJW8Gy_L11SdS8IV5-7ZE2fjPM5dNq8pZvQpNzDPqxGQYr_vuh1brdM"
        />
        <button className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur shadow-sm hover:text-error transition-colors">
          <span
            className="material-symbols-outlined text-xl"
            data-icon="favorite"
          >
            favorite
          </span>
        </button>
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-secondary text-on-secondary text-[10px] font-bold tracking-widest rounded-full uppercase">
            New
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-h3 text-[18px] text-primary group-hover:text-secondary transition-colors">
            Aether Pro Tablet
          </h3>
          <div className="flex items-center text-secondary">
            <span
              className="material-symbols-outlined text-sm"
              data-icon="star"
              data-weight="fill"
            >
              star
            </span>
            <span className="font-label-sm text-label-sm ml-1 text-on-surface">
              4.9
            </span>
          </div>
        </div>
        <p className="font-body-md text-label-sm text-on-surface-variant mb-4 line-clamp-2">
          Ultra-responsive display with the most powerful processor in its
          class.
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="font-h2 text-h3 text-primary">$899.00</span>
          <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-on-secondary hover:bg-on-secondary-fixed-variant transition-colors">
            <span
              className="material-symbols-outlined"
              data-icon="add_shopping_cart"
            >
              add_shopping_cart
            </span>
          </button>
        </div>
      </div>
    </div>
    {/* Product Card 2 */}
    <div className="group product-card-hover transition-all duration-300 bg-white rounded-xl shadow-lg shadow-slate-900/5 overflow-hidden flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low">
        <img
          alt="Premium Headphones"
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          data-alt="luxury noise cancelling over-ear headphones in matte charcoal finish resting on a wooden surface with bokeh lights"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_u3RtWabSg-XEZQn80-QLA_aKwcKJWDHhOc3zUALwCbwXWjKLnKHKj3oXXxwa6nyo1xyrwwa5hCpUfgOd7vcuej2fylm3fqkuklPQ0IAwAfRxdY90OUwAZJe87WhMebRbq4u_MUZVWzBToBhLXcopfIupO7gijQzc7JKsz0efYE42fU5NUPpd287Mw0oE-gKF2b5zWxVTIDB4zTh0DXBw2Uqnt5jWoF2er2kRXD16_iccVSpbIA0sTXVqDPPkPAGvFeSclzXXtgg"
        />
        <button className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur shadow-sm hover:text-error transition-colors">
          <span
            className="material-symbols-outlined text-xl"
            data-icon="favorite"
          >
            favorite
          </span>
        </button>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-h3 text-[18px] text-primary group-hover:text-secondary transition-colors">
            Sonic Noir Headphones
          </h3>
          <div className="flex items-center text-secondary">
            <span
              className="material-symbols-outlined text-sm"
              data-icon="star"
              data-weight="fill"
            >
              star
            </span>
            <span className="font-label-sm text-label-sm ml-1 text-on-surface">
              4.8
            </span>
          </div>
        </div>
        <p className="font-body-md text-label-sm text-on-surface-variant mb-4 line-clamp-2">
          Immersive sound quality with active noise cancellation for pure focus.
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="font-h2 text-h3 text-primary">$349.00</span>
          <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-on-secondary hover:bg-on-secondary-fixed-variant transition-colors">
            <span
              className="material-symbols-outlined"
              data-icon="add_shopping_cart"
            >
              add_shopping_cart
            </span>
          </button>
        </div>
      </div>
    </div>
    {/* Product Card 3 */}
    <div className="group product-card-hover transition-all duration-300 bg-white rounded-xl shadow-lg shadow-slate-900/5 overflow-hidden flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low">
        <img
          alt="Classic Watch"
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          data-alt="elegant minimal wristwatch with white face and silver band on a cool grey background with professional studio lighting"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnT_73hfyUPElAzyCo2MGAbaK1X3d9_DHva2oT_1qTUiJyv3kRcJHU14JzYgN6PswtmU4SIvYn4dz1EjgQ99n8Tf2FwK8cApjlUeI0XL3Dc2wDYFCMiOQXUkAVt3oj2wEmu8ru37gnzDtK5Kw794HmL0XFt_bAGVigB_0KMn2xA2yVVki9y6dkUxn0H2um38ddZe3wWilV3kmxSQ33ilt9RpC4JQ9XnaRyNG2Zw7ZT3sFYdXI-AXz7Mg-Szu_Jun6qZXCrl7LcLaY"
        />
        <button className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur shadow-sm hover:text-error transition-colors">
          <span
            className="material-symbols-outlined text-xl"
            data-icon="favorite"
          >
            favorite
          </span>
        </button>
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-tertiary-container text-tertiary-fixed text-[10px] font-bold tracking-widest rounded-full uppercase">
            Limited
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-h3 text-[18px] text-primary group-hover:text-secondary transition-colors">
            Chronos Silver Watch
          </h3>
          <div className="flex items-center text-secondary">
            <span
              className="material-symbols-outlined text-sm"
              data-icon="star"
              data-weight="fill"
            >
              star
            </span>
            <span className="font-label-sm text-label-sm ml-1 text-on-surface">
              5.0
            </span>
          </div>
        </div>
        <p className="font-body-md text-label-sm text-on-surface-variant mb-4 line-clamp-2">
          Timeless elegance meets modern precision in this limited edition
          timepiece.
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="font-h2 text-h3 text-primary">$1,200.00</span>
          <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-on-secondary hover:bg-on-secondary-fixed-variant transition-colors">
            <span
              className="material-symbols-outlined"
              data-icon="add_shopping_cart"
            >
              add_shopping_cart
            </span>
          </button>
        </div>
      </div>
    </div>
    {/* Product Card 4 */}
    <div className="group product-card-hover transition-all duration-300 bg-white rounded-xl shadow-lg shadow-slate-900/5 overflow-hidden flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low">
        <img
          alt="Camera Lens"
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          data-alt="high-quality professional camera lens with detailed glass reflection on a dark textured background with dramatic spotlight"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeztWTHtNh3jnt6Iz91gBQrTspGHv6frv9z7pZ2OfJjDq_K7rSDx1MuTkWiSALkixEf_72Co48IMu7jgnlD0DeO9n9ikTnPgqjDUu4kEE6b4OW6KgrTYdJCYGyOLtGPTAJjDm7tOpo7kFPktXC9joa-taAcCwWGN-MjwJX2JMJQfzJZ_tRRfYYU7Rk80i-1GbiZi08J9-IY9MVY6HlyActyp19N3Rnq-PuQtckEn09BvTrTdg2thWuaNKpAbocwY3gUJLv8mJpQ44"
        />
        <button className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur shadow-sm hover:text-error transition-colors">
          <span
            className="material-symbols-outlined text-xl"
            data-icon="favorite"
          >
            favorite
          </span>
        </button>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-h3 text-[18px] text-primary group-hover:text-secondary transition-colors">
            Optic Prime 50mm
          </h3>
          <div className="flex items-center text-secondary">
            <span
              className="material-symbols-outlined text-sm"
              data-icon="star"
              data-weight="fill"
            >
              star
            </span>
            <span className="font-label-sm text-label-sm ml-1 text-on-surface">
              4.7
            </span>
          </div>
        </div>
        <p className="font-body-md text-label-sm text-on-surface-variant mb-4 line-clamp-2">
          Crystal clear optics for the professional photographer who demands the
          best.
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="font-h2 text-h3 text-primary">$1,450.00</span>
          <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-on-secondary hover:bg-on-secondary-fixed-variant transition-colors">
            <span
              className="material-symbols-outlined"
              data-icon="add_shopping_cart"
            >
              add_shopping_cart
            </span>
          </button>
        </div>
      </div>
    </div>
    {/* Product Card 5 */}
    <div className="group product-card-hover transition-all duration-300 bg-white rounded-xl shadow-lg shadow-slate-900/5 overflow-hidden flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low">
        <img
          alt="Leather Notebook"
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          data-alt="premium handcrafted brown leather notebook on a dark desk next to a luxury fountain pen and soft lamp light"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0OznYuaNh8IFUeIAnHxDyNGeXeJ1nbe10xEeUIDyQid-aWS3fTHwDb-1MXOa20kC0u-2Auhr0muyfAN2gLvuRp2yvTVyMhJBNX7-EU0_9PNOHL-NZ3c6s3cEf01dOZ8aEy2CIcArcxmkfvLpBlg5q7m9D4msYmBhFS-xkSkQq3hwPcZoLMgSgGaR53k7KNW4SLdvkLpXQeKc1COWqEkI5FTku83NVROKFJKzbKxTuaXBocCk5-YdWMRxn8WDsObOtkbne6tpXKeE"
        />
        <button className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur shadow-sm hover:text-error transition-colors">
          <span
            className="material-symbols-outlined text-xl"
            data-icon="favorite"
          >
            favorite
          </span>
        </button>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-h3 text-[18px] text-primary group-hover:text-secondary transition-colors">
            Artisan Leather Journal
          </h3>
          <div className="flex items-center text-secondary">
            <span
              className="material-symbols-outlined text-sm"
              data-icon="star"
              data-weight="fill"
            >
              star
            </span>
            <span className="font-label-sm text-label-sm ml-1 text-on-surface">
              4.9
            </span>
          </div>
        </div>
        <p className="font-body-md text-label-sm text-on-surface-variant mb-4 line-clamp-2">
          Hand-stitched full-grain leather that ages beautifully with every note
          you write.
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="font-h2 text-h3 text-primary">$65.00</span>
          <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-on-secondary hover:bg-on-secondary-fixed-variant transition-colors">
            <span
              className="material-symbols-outlined"
              data-icon="add_shopping_cart"
            >
              add_shopping_cart
            </span>
          </button>
        </div>
      </div>
    </div>
    {/* Product Card 6 */}
    <div className="group product-card-hover transition-all duration-300 bg-white rounded-xl shadow-lg shadow-slate-900/5 overflow-hidden flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low">
        <img
          alt="Ergonomic Mouse"
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          data-alt="modern ergonomic computer mouse in light gray on a clean minimalist desk setup with plant in background"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS0Sb_93EqPJPOf7OYsIDM0nmgJgPbqVjFAwSS_6MzsH786EuAyocjC-GGFzmS8d0vDCn2VoruEwEHGOflin3FlhcuNN-AHJ9UxKqBmKJvt1dIvc7c5zrtyps1yG8Pj4DuOWgkMQ_FdcTnEkoSnYSrVWZ0cEfSdoqQj1S4PmeWwc3Z88RO6NewFfCxAt7bVf_dxNMY1mZFCC08iS6vXQ-MriDdwW5oLCc8f1x5vJBDZh2Hm5V9EoTDykBSN6EUzndWdtubZyvn2Mo"
        />
        <button className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur shadow-sm hover:text-error transition-colors">
          <span
            className="material-symbols-outlined text-xl"
            data-icon="favorite"
          >
            favorite
          </span>
        </button>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-h3 text-[18px] text-primary group-hover:text-secondary transition-colors">
            Zenith Flow Mouse
          </h3>
          <div className="flex items-center text-secondary">
            <span
              className="material-symbols-outlined text-sm"
              data-icon="star"
              data-weight="fill"
            >
              star
            </span>
            <span className="font-label-sm text-label-sm ml-1 text-on-surface">
              4.6
            </span>
          </div>
        </div>
        <p className="font-body-md text-label-sm text-on-surface-variant mb-4 line-clamp-2">
          Designed for comfort and precision throughout your entire workday.
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="font-h2 text-h3 text-primary">$129.00</span>
          <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-on-secondary hover:bg-on-secondary-fixed-variant transition-colors">
            <span
              className="material-symbols-outlined"
              data-icon="add_shopping_cart"
            >
              add_shopping_cart
            </span>
          </button>
        </div>
      </div>
    </div>
    {/* Product Card 7 */}
    <div className="group product-card-hover transition-all duration-300 bg-white rounded-xl shadow-lg shadow-slate-900/5 overflow-hidden flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low">
        <img
          alt="Minimal Lamp"
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          data-alt="sculptural designer desk lamp with warm golden glow in a dimly lit sophisticated office environment"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzSTWHyHvFl614O4uXm3tdH0xaykOZvHeJdWarKOOfnCEgjtvkpQiyfyAPwhgQSbwTUF0KSyYX_2e2j5hpLlYWjHJbm9IE3IerKnp_Vcw-W-tvP42nFLW93luSXnVrcsiTfMHO2l209bSk5J-7nz2aumYWjSOMVqTfxu2BfIEChnquJUNd73qQLvLrtKcvHWVJa_6lYGMpHGUbtgVJ5IO54kzNk4-9X83B3AV8rVjhpUh3gL-V0VZdboXsp9H9-aH-yImlTDaP8qk"
        />
        <button className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur shadow-sm hover:text-error transition-colors">
          <span
            className="material-symbols-outlined text-xl"
            data-icon="favorite"
          >
            favorite
          </span>
        </button>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-h3 text-[18px] text-primary group-hover:text-secondary transition-colors">
            Lumina Desk Lamp
          </h3>
          <div className="flex items-center text-secondary">
            <span
              className="material-symbols-outlined text-sm"
              data-icon="star"
              data-weight="fill"
            >
              star
            </span>
            <span className="font-label-sm text-label-sm ml-1 text-on-surface">
              4.8
            </span>
          </div>
        </div>
        <p className="font-body-md text-label-sm text-on-surface-variant mb-4 line-clamp-2">
          Adjustable lighting modes that sync with your circadian rhythm for
          better productivity.
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="font-h2 text-h3 text-primary">$199.00</span>
          <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-on-secondary hover:bg-on-secondary-fixed-variant transition-colors">
            <span
              className="material-symbols-outlined"
              data-icon="add_shopping_cart"
            >
              add_shopping_cart
            </span>
          </button>
        </div>
      </div>
    </div>
    {/* Product Card 8 */}
    <div className="group product-card-hover transition-all duration-300 bg-white rounded-xl shadow-lg shadow-slate-900/5 overflow-hidden flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low">
        <img
          alt="Minimalist Backpack"
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          data-alt="sleek modern black waterproof backpack on a concrete background with sharp urban shadows"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUPgVOSAvWvdVoP5Qkr9O9PvHrxEUpMFb9_ODIOLx4vJ0HEPPGUmR4dlT0K8We_ApPU7s5DLQ4UqeCXVmM5UFEuJ1oNoxbiNo7CSGFmByVQfUja7J4HQ97YeV-ZUGw4nTKBeJaegvgiF_RC76LiI3LpDqvTOJ1d0lnhg9tpGlRrG80dJn43X3pNBPIe0nvN0pnJOdZY-kpuGGE8seJn20O3BBGttUTpp-LSj_F02lyCi_lq4yQJld-UbbldRuQuvWsfT076NQipNM"
        />
        <button className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur shadow-sm hover:text-error transition-colors">
          <span
            className="material-symbols-outlined text-xl"
            data-icon="favorite"
          >
            favorite
          </span>
        </button>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-h3 text-[18px] text-primary group-hover:text-secondary transition-colors">
            Vantage Travel Pack
          </h3>
          <div className="flex items-center text-secondary">
            <span
              className="material-symbols-outlined text-sm"
              data-icon="star"
              data-weight="fill"
            >
              star
            </span>
            <span className="font-label-sm text-label-sm ml-1 text-on-surface">
              4.9
            </span>
          </div>
        </div>
        <p className="font-body-md text-label-sm text-on-surface-variant mb-4 line-clamp-2">
          Weather-proof construction with modular compartments for effortless
          organization.
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="font-h2 text-h3 text-primary">$210.00</span>
          <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-on-secondary hover:bg-on-secondary-fixed-variant transition-colors">
            <span
              className="material-symbols-outlined"
              data-icon="add_shopping_cart"
            >
              add_shopping_cart
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* Pagination */}
  <div className="flex justify-center mt-xl">
    <nav className="flex items-center space-x-2">
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-outline hover:border-secondary hover:text-secondary transition-colors">
        <span className="material-symbols-outlined" data-icon="chevron_left">
          chevron_left
        </span>
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary text-on-secondary font-label-sm">
        1
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-outline hover:border-secondary hover:text-secondary transition-colors font-label-sm">
        2
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-outline hover:border-secondary hover:text-secondary transition-colors font-label-sm">
        3
      </button>
      <span className="px-2 text-outline">...</span>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-outline hover:border-secondary hover:text-secondary transition-colors font-label-sm">
        12
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-outline hover:border-secondary hover:text-secondary transition-colors">
        <span className="material-symbols-outlined" data-icon="chevron_right">
          chevron_right
        </span>
      </button>
    </nav>
  </div>
</main>




      <FooterApp />
    </>
  )
}
