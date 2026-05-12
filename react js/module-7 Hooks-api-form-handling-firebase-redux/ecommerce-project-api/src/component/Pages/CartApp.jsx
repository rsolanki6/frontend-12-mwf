import React from 'react'
import HeaderApp from '../Sample/HeaderApp'
import FooterApp from '../Sample/FooterApp'
import { Link } from 'react-router-dom'

export default function CartApp() {
  return (
    <>
      <HeaderApp />

      <main className="flex-grow pt-28 pb-10 px-4 sm:px-6 max-w-[1280px] mx-auto w-full overflow-x-hidden">
        
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary">
            Your Cart
          </h1>
          <p className="text-gray-500 mt-2">
            Review your items before proceeding to checkout.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* ================= CART ITEMS ================= */}
          <div className="lg:col-span-8 space-y-6">

            {/* ITEM */}
            <div className="bg-white p-4 rounded-xl shadow flex flex-col sm:flex-row gap-4">
              
              {/* IMAGE */}
              <div className="w-full sm:w-32 h-40 sm:h-32 rounded-lg overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuByPRFC8_XbqzthGjkSlh6rSE-XPuhR0q2AQsKwzlMQ7o681qq7XK5fRRgRddFKsbp4CKH5iBh5z0E3zlme24AjPeN3BNKsVavb9iJa7gL1PhqTdOGRIDFCWB3NdBlYtUU3V0ZlAwu5EIM3LZmeZHZCUi1y5ZCntQaBqKQj2CIrlxywwyCD0ETbufa1MHnOxjl1urpzdP3iPxAb-NKBN3D7eax_O6GoC95QDlD7ntU-Nji8yMbl63gFzQ0CD-eCtoszQ0Lr6XYkMdI"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>

              {/* DETAILS */}
              <div className="flex flex-col justify-between w-full gap-4">

                <div>
                  <h3 className="text-lg font-semibold">
                    Aether Pro Tablet
                  </h3>
                  <p className="text-sm text-gray-500">
                    Space Black | 512GB
                  </p>

                  <button className="text-red-500 text-sm mt-2">
                    Remove
                  </button>
                </div>

                {/* QUANTITY + PRICE */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  
                  <div className="flex items-center border rounded-lg px-2 py-1">
                    <button className="px-2">-</button>
                    <span className="px-3">1</span>
                    <button className="px-2">+</button>
                  </div>

                  <p className="text-lg font-bold text-primary">
                    $1,299.00
                  </p>
                </div>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="bg-white p-4 rounded-xl shadow flex flex-col sm:flex-row gap-4">
              
              <div className="w-full sm:w-32 h-40 sm:h-32 rounded-lg overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-HniryDqgPEmyG6fg6KJbf0iqcWvbGX7s19eO2dSXD-oLgHUAj2E1yiQ6KBvpEUU9GQNHXG2H6I-yRR_0laIMfTme-mu9z4S5DWxWiM5y3cKS-TtQnB2HelucGlNaTx9KW3iJYzTtpjxRBQcRygjAVHSvz8NQgu3908VzrObHbk88uVPpc-A6ef8UCh0825szLA3hpzUXl-dr2hw1YnN4gHKmFFPUb-pKtDJ0Jl2Sdzz_DYLQDZfPkjbH2CjFWwfioUhVUaZweV0"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>

              <div className="flex flex-col justify-between w-full gap-4">

                <div>
                  <h3 className="text-lg font-semibold">
                    Luxe Sound Headphones
                  </h3>
                  <p className="text-sm text-gray-500">
                    Midnight Teal | Noise Cancelling
                  </p>

                  <button className="text-red-500 text-sm mt-2">
                    Remove
                  </button>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  
                  <div className="flex items-center border rounded-lg px-2 py-1">
                    <button className="px-2">-</button>
                    <span className="px-3">2</span>
                    <button className="px-2">+</button>
                  </div>

                  <p className="text-lg font-bold text-primary">
                    $698.00
                  </p>
                </div>
              </div>
            </div>

            {/* CONTINUE SHOPPING */}
            <Link to="/shop" className="text-teal-600 text-sm">
              ← Continue Shopping
            </Link>

          </div>

          {/* ================= SUMMARY ================= */}
          <aside className="lg:col-span-4">
            <div className="bg-white p-5 rounded-xl shadow sticky top-24">

              <h2 className="text-xl font-semibold mb-4">
                Order Summary
              </h2>

              <div className="space-y-2 border-b pb-4 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$1,997.00</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Calculated</span>
                </div>

                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>$159.76</span>
                </div>
              </div>

              <div className="flex justify-between py-4 font-bold text-lg">
                <span>Total</span>
                <span>$2,156.76</span>
              </div>

              <button className="w-full bg-black text-white py-3 rounded-lg">
                Proceed to Checkout
              </button>

              <p className="text-xs text-gray-500 mt-3 text-center">
                Secure checkout
              </p>
            </div>
          </aside>

        </div>
      </main>

      <FooterApp />
    </>
  )
}