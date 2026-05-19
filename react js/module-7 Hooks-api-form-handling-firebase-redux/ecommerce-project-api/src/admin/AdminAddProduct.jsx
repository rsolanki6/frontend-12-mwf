import React, { useRef, useState, useEffect } from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'
import AdminSideBar from './AdminSideBar'
import AdminHeaderApp from './AdminHeaderApp'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function AdminAddProduct() {

  // display products
  const [products, setProducts] = useState([])

  // fetch product data
  useEffect(() => {

    fetchProducts()

  }, [])

  // fetch all products
  const fetchProducts = () => {

    axios.get(`http://localhost:8000/product`)
      .then((response) => {
        setProducts(response.data)
      })

      .catch((error) => {
        console.log(error)
      })

  }

  // form refs
  const title = useRef("")
  const price = useRef("")
  const description = useRef("")
  const image = useRef("")
  const category = useRef("")

  // add product
  const addProduct = (e) => {

    e.preventDefault()

    const insertData = {

      title: title.current.value,
      price: price.current.value,
      description: description.current.value,
      image: image.current.value,
      category: category.current.value

    }

    axios.post("http://localhost:8000/product", insertData)

      .then(() => {

        toast.success("Product Added Successfully!", {
          position: "top-right"
        })

        // refresh product list
        fetchProducts()

        // reset form
        e.target.reset()

      })

      .catch((error) => {
        console.log(error)
      })

  }

  // delete product
  const deleteProduct = (id) => {

    axios.delete(`http://localhost:8000/product/${id}`)

      .then(() => {

        toast.error("Product Deleted Successfully!", {
          position: "top-right"
        })

        // refresh products
        fetchProducts()

      })

      .catch((error) => {
        console.log(error)
      })

  }

  return (
    <>
      <section id="dashboardPage">

        <div className="flex min-h-screen bg-gray-100">

          {/* SIDEBAR */}
          <div className="sticky top-0 h-screen">
            <AdminSideBar />
          </div>

          {/* MAIN */}
          <main className="flex-1 overflow-y-auto">

            {/* HEADER */}
            <AdminHeaderApp />

            {/* ADD PRODUCT FORM */}
            <div className="bg-white rounded-[32px] p-8 shadow-sm m-6">

              <ToastContainer />

              <h2 className="text-4xl text-teal-600 mb-6 font-bold">
                Add New Product
              </h2>

              <form
                onSubmit={addProduct}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >

                {/* Product Image */}
                <div>

                  <label className="block mb-2 font-semibold">
                    Product Image
                  </label>

                  <input
                    type="text"
                    ref={image}
                    placeholder="Enter Image URL"
                    className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-teal-400"
                    required
                  />

                </div>

                {/* Product Title */}
                <div>

                  <label className="block mb-2 font-semibold">
                    Product Title
                  </label>

                  <input
                    type="text"
                    ref={title}
                    placeholder="Enter Product Title"
                    className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-teal-400"
                    required
                  />

                </div>

                {/* Category */}
                <div>

                  <label className="block mb-2 font-semibold">
                    Category
                  </label>

                  <select
                    ref={category}
                    className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-teal-400"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Travel">Travel</option>
                  </select>

                </div>

                {/* Price */}
                <div>

                  <label className="block mb-2 font-semibold">
                    Product Price
                  </label>

                  <input
                    type="number"
                    ref={price}
                    placeholder="Enter Product Price"
                    className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-teal-400"
                    required
                  />

                </div>

                {/* Description */}
                <div className="md:col-span-2">

                  <label className="block mb-2 font-semibold">
                    Description
                  </label>

                  <textarea
                    ref={description}
                    rows="4"
                    placeholder="Enter Product Description"
                    className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-teal-400"
                    required
                  ></textarea>

                </div>

                {/* Submit Button */}
                <div className="md:col-span-2">

                  <button
                    type="submit"
                    className="bg-teal-500 text-white px-8 py-3 rounded-xl hover:bg-teal-600 transition duration-300"
                  >
                    Add Product
                  </button>

                </div>

              </form>

            </div>

            {/* MANAGE PRODUCTS */}
            <div className="bg-white rounded-[32px] p-6 shadow-sm m-6">

              <div className="flex items-center justify-between mb-6">

               <p className="text-xl font-bold">Manage All Products</p>

              </div>

              <div className="overflow-x-auto">

                <table className="w-full">

                  <thead>

                    <tr className="text-left text-gray-500 border-b">

                      <th className="pb-4">Photo</th>
                      <th className="pb-4">Title</th>
                      <th className="pb-4">Category</th>
                      <th className="pb-4">Price</th>
                      <th className="pb-4">Description</th>
                      <th className="pb-4">Action</th>

                    </tr>

                  </thead>

                  <tbody className="divide-y">

                    {
                      products && products.map((item) => {

                        return (

                          <tr
                            key={item.id}
                            className="hover:bg-gray-50 transition"
                          >

                            {/* Product Image */}
                            <td className="py-5">

                              <img
                                src={item.image}
                                alt=""
                                className="w-20 h-20 rounded-xl object-cover"
                              />

                            </td>

                            {/* Title */}
                            <td className="py-5">
                              {item.title}
                            </td>

                            {/* Category */}
                            <td className="py-5">
                              {item.category}
                            </td>

                            {/* Price */}
                            <td className="py-5">
                              ₹ {item.price}
                            </td>

                            {/* Description */}
                            <td className="py-5">

                              <div className="w-60 h-32 overflow-auto">
                                {item.description}
                              </div>

                            </td>

                            {/* Action */}
                            <td>

                              {/* Delete */}
                              <button
                                onClick={() => deleteProduct(item.id)}
                                className="bg-red-500 text-white p-2 rounded-2xl"
                              >
                                <FaTrash />
                              </button>

                              {/* Edit */}
                              <button
                                className="bg-blue-600 text-white p-2 ms-2 rounded-2xl"
                              >
                                <FaEdit />
                              </button>

                            </td>

                          </tr>

                        )

                      })
                    }

                  </tbody>

                </table>

              </div>

            </div>

          </main>

        </div>

      </section>
    </>
  )
}