import React from 'react'

export default function ProductDetailsApp() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Everthing delivered in a minute in all cities clickIt App </title>
  {/* main css */}
  <link rel="stylesheet" type="text/css" media="screen" href="css/style.css" />
  {/* icons cdn */}
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
  />
  {/* tailwinds js  */}
  {/* modal js */}
  {/* clickIt header here */}
  <section id="clickIt-header" className="sticky top-0 z-10 bg-white shadow">
    {/* HEADER BAR */}
    <div className="flex items-center justify-between p-4 md:grid md:grid-cols-4">
      {/* LOGO */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <h1 className="text-4xl font-extrabold">
          <a href="index.html">
            <span className="text-yellow-500">click</span>
            <span className="text-green-500">IT</span>
          </a>
        </h1>
        {/* MOBILE TOGGLER */}
        <button
          id="menu-btn"
          className="md:hidden text-3xl"
          onclick="document.getElementById('mobile-menu').classList.toggle('hidden')"
        >
          ☰
        </button>
      </div>
      {/* DELIVERY (DESKTOP) */}
      <div className="hidden md:flex items-center">
        <button
          type="button"
          command="show-modal"
          commandfor="dialog2"
          className="text-xl font-medium"
        >
          Delivery in 8 minutes
        </button>
      </div>
      {/* SEARCH (DESKTOP) */}
      <div className="hidden md:flex">
        <input
          type="text"
          placeholder="Search products here..."
          className="border-2 border-gray-300 rounded-3xl w-full p-2"
        />
      </div>
      {/* LOGIN & CART (DESKTOP) */}
      <div className="hidden md:flex gap-4 items-center ms-20">
        <button
          type="button"
          command="show-modal"
          commandfor="dialog1"
          className="text-xl font-bold"
        >
          Login
        </button>
        <button
          type="button"
          className="p-3 bg-gray-400 rounded-2xl text-white font-bold"
        >
          <span className="bi bi-cart3" /> My Cart
        </button>
      </div>
    </div>
    {/* MOBILE MENU */}
    <div
      id="mobile-menu"
      className="hidden md:hidden border-t border-gray-200 p-4 space-y-4"
    >
      {/* DELIVERY */}
      <button
        type="button"
        command="show-modal"
        commandfor="dialog2"
        className="block text-lg font-medium"
      >
        Delivery in 8 minutes
      </button>
      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search products here..."
        className="border-2 border-gray-300 rounded-3xl w-full p-2"
      />
      {/* LOGIN */}
      <button
        type="button"
        command="show-modal"
        commandfor="dialog1"
        className="block text-lg font-bold"
      >
        Login
      </button>
      {/* CART */}
      <button
        type="button"
        className="w-full p-3 bg-gray-400 rounded-2xl text-white font-bold"
      >
        <span className="bi bi-cart3" /> My Cart
      </button>
    </div>
  </section>
  {/* clickIt Content */}
  <section id="clickIt-content" className="bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-6">
        Home / Dairy &amp; Bakery / Milk
      </p>
      {/* Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT: Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="bg-white rounded-2xl shadow p-6 flex justify-center">
            <img
              src="images/product1.avif"
              alt="Amul Toned Milk"
              className="h-80 object-contain"
            />
          </div>
          {/* Thumbnails */}
          <div className="flex gap-4 justify-center">
            <img
              src="images/product1.avif"
              className="w-20 h-20 object-contain bg-white rounded-xl p-2 border cursor-pointer"
            />
            <img
              src="images/product2.avif"
              className="w-20 h-20 object-contain bg-white rounded-xl p-2 border cursor-pointer"
            />
            <img
              src="images/product2.avif"
              className="w-20 h-20 object-contain bg-white rounded-xl p-2 border cursor-pointer"
            />
          </div>
        </div>
        {/* RIGHT: Product Info */}
        <div className="space-y-5">
          <h1 className="text-3xl font-bold text-gray-900">Amul Toned Milk</h1>
          <p className="text-gray-600">
            Fresh &amp; pure toned milk from Amul, ideal for daily consumption.
          </p>
          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="bg-green-600 text-white text-sm px-2 py-1 rounded-lg">
              ★ 4.5
            </span>
            <span className="text-sm text-gray-500">(2,340 ratings)</span>
          </div>
          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-gray-900">₹54</span>
            <span className="text-gray-500 line-through">₹58</span>
            <span className="text-green-600 font-medium">7% OFF</span>
          </div>
          <p className="text-sm text-gray-500">Inclusive of all taxes</p>
          {/* Quantity */}
          <div>
            <p className="font-medium mb-2">Quantity</p>
            <div className="flex gap-3">
              <button className="px-4 py-2 border rounded-xl">500 ml</button>
              <button className="px-4 py-2 border rounded-xl bg-green-100 text-green-700">
                1 L
              </button>
            </div>
          </div>
          {/* Delivery */}
          <div className="bg-green-50 p-4 rounded-xl">
            <p className="font-medium text-green-700">
              🚀 Delivery in 10 minutes
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Freshly sourced from nearby store
            </p>
          </div>
          {/* Add to Cart */}
          <a href="cart.html">
            <button className="w-full bg-green-600 text-white py-4 rounded-2xl text-lg font-semibold hover:bg-green-700 transition">
              Add to Cart
            </button>
          </a>
          {/* Highlights */}
          <div className="bg-white rounded-2xl shadow p-6 space-y-2">
            <h2 className="text-xl font-semibold">Highlights</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Pasteurised &amp; homogenised milk</li>
              <li>Rich source of calcium &amp; protein</li>
              <li>No preservatives added</li>
              <li>Ideal for tea, coffee &amp; daily use</li>
            </ul>
          </div>
        </div>
      </div>
      {/* PRODUCT DETAILS */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Description */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-3">Product Description</h2>
          <p className="text-gray-600 leading-relaxed">
            Amul Toned Milk is processed and packed hygienically to ensure
            freshness and quality. It contains balanced fat and nutrients
            suitable for everyday consumption by the whole family.
          </p>
        </div>
        {/* Nutrition */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-3">
            Nutritional Information (per 100ml)
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>Energy: 58 kcal</li>
            <li>Protein: 3.2 g</li>
            <li>Fat: 3 g</li>
            <li>Carbohydrates: 4.8 g</li>
            <li>Calcium: 120 mg</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* clickIt footer */}
  <footer className="bg-gray-50 border-t border-gray-200 relative">
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Top Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-sm text-gray-700">
        {/* Logo & Description */}
        <div className="col-span-2">
          <h2 className="text-2xl font-bold text-green-600">clickIT</h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            clickIT delivers groceries and essentials in minutes. Fast,
            reliable, and affordable.
          </p>
        </div>
        {/* Useful Links */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="about.html" className="hover:text-green-600">
                About Us
              </a>
            </li>
            <li>
              <a href="career.html" className="hover:text-green-600">
                Careers
              </a>
            </li>
            <li>
              <a href="blog.html" className="hover:text-green-600">
                Blog
              </a>
            </li>
            <li>
              <a href="faq.html" className="hover:text-green-600">
                FAQs
              </a>
            </li>
          </ul>
        </div>
        {/* Categories */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
          <ul className="space-y-2">
            <li>
              <a href="products.html" className="hover:text-green-600">
                Fruits &amp; Vegetables
              </a>
            </li>
            <li>
              <a href="products.html" className="hover:text-green-600">
                Dairy &amp; Bakery
              </a>
            </li>
            <li>
              <a href="products.html" className="hover:text-green-600">
                Snacks &amp; Beverages
              </a>
            </li>
            <li>
              <a href="personal-care.html" className="hover:text-green-600">
                Personal Care
              </a>
            </li>
          </ul>
        </div>
        {/* Policies */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Policies</h3>
          <ul className="space-y-2">
            <li>
              <a href="privacy.html" className="hover:text-green-600">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="terms.html" className="hover:text-green-600">
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a href="refund-policy.html" className="hover:text-green-600">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="security.html" className="hover:text-green-600">
                Security
              </a>
            </li>
          </ul>
        </div>
        {/* App & Social */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Connect With Us</h3>
          {/* Social Icons */}
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-gray-500 hover:text-green-600">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="text-gray-500 hover:text-green-600">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" className="text-gray-500 hover:text-green-600">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="text-gray-500 hover:text-green-600">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          {/* App Buttons */}
          <div className="space-y-2">
            <a href="https://apps.apple.com/in/app/blinkit-grocery-in-10-minutes/id960335206">
              <button className="w-full bg-black text-white py-2 rounded-lg text-xs">
                Download on App Store
              </button>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.grofers.customerapp&hl=en">
              <button className="w-full bg-black text-white py-2 rounded-lg text-xs mt-3">
                Get it on Google Play
              </button>
            </a>
          </div>
        </div>
        {/* Google Translate */}
        <div className="col-span-2 md:col-span-1 mt-6 md:mt-0">
          <h3 className="font-semibold text-gray-900 mb-3">Google Translate</h3>
          <div id="google_translate_element" />
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-gray-200 mt-10 pt-6">
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-3">
          <p>© 2025 clickIT. All rights reserved.</p>
          <p>Made with ❤️ in India</p>
        </div>
      </div>
    </div>
    {/* Fixed WhatsApp Button */}
    <a
      href="https://wa.me/+918238405339"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg animate-bounce z-50 hover:bg-green-700"
    >
      <i className="bi bi-whatsapp text-xl text-white" />
    </a>
  </footer>
  {/* clickIt login modal */}
  <el-dialog>
    <dialog
      id="dialog1"
      aria-labelledby="dialog-title"
      className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent"
    >
      <el-dialog-backdrop className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in" />
      <div
        tabIndex={0}
        className="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0 -mt-15"
      >
        <el-dialog-panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="mt-3 text-center">
              <h2 className="p-3 bg-amber-500 rounded-4xl w-30 text-white text-center mx-auto text-2xl">
                clickIt
              </h2>
              <h3 className="text-2xl font-bold text-gray-900 text-center">
                India's last minute app <br />
                <span className="font-light">Log in or Sign up</span>
              </h3>
              <div className="mt-2 p-8">
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Enter a mobile for Login *"
                      className="w-full border-2 border-gray-300 p-3 rounded-2xl"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="submit"
                      defaultValue="Continue"
                      className="bg-gray-600 text-white w-full p-3 rounded-2xl"
                    />
                  </div>
                  <p>
                    By continuing, you agree to our Terms of service &amp;
                    Privacy policy
                  </p>
                </form>
              </div>
            </div>
          </div>
        </el-dialog-panel>
      </div>
    </dialog>
  </el-dialog>
  {/* change location or detect location modal */}
  <el-dialog>
    <dialog
      id="dialog2"
      aria-labelledby="dialog-title"
      className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent"
    >
      <el-dialog-backdrop className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in" />
      <div
        tabIndex={0}
        className="w-180 mt-25 ms-5  justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0"
      >
        <el-dialog-panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
          <div className="bg-white px-0 pt-0 pb-0 sm:p-6 sm:pb-4">
            <div className="mt-3 text-center">
              <h2 className="p-0 w-30 mb-3">Change location</h2>
              <div className="mt-2 p-0">
                <form>
                  <div className="mb-3 flex">
                    <button
                      type="button"
                      className="bg-green-600 text-white w-70 p-3 rounded-xl"
                    >
                      Detect my location
                    </button>
                    -
                    <span className="p-2 rounded-full border-2 bg-gray-100">
                      OR
                    </span>
                    -
                    <button
                      type="button"
                      className="bg-gray-400 text-white w-70 p-3"
                    >
                      Search Delivery location
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </el-dialog-panel>
      </div>
    </dialog>
  </el-dialog>
  {/* clickIt Register modal */}
  {/* clickIt forget password modal */}
</>

  )
}
