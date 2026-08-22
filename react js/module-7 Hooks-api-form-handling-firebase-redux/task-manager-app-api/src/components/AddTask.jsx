import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderApp from "./HeaderApp";

export default function AddProduct() {
  const navigate = useNavigate();

  const name = useRef();
  const photo = useRef();
  const oldPrice = useRef();
  const newPrice = useRef();
  const description = useRef();

  const [adding, setAdding] = useState(false);

  const addProductData = async (e) => {
    e.preventDefault();

    setAdding(true);

    const formData = new FormData();

    formData.append("name", name.current.value);
    formData.append("photo", photo.current.files[0]);
    formData.append("old_price", oldPrice.current.value);
    formData.append("new_price", newPrice.current.value);
    formData.append("description", description.current.value);

    try {
      const response = await fetch(
        "https://brijeshguru.com/api/add_product.php",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      console.log("Add Product Response:", data);

      if (data.status === true) {
        alert("Product added successfully!");

        // Clear form
        e.target.reset();

        // Go to Manage Task
        navigate("/manage-task");
      } else {
        alert(data.message || "Failed to add product");
      }
    } catch (error) {
      console.error("Add product error:", error);
      alert("Something went wrong!");
    } finally {
      setAdding(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <HeaderApp />

      {/* Main */}
      <section className="flex items-center justify-center px-4 py-10">
        <div className="max-w-3xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden">
          <div className="p-8 md:p-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Add New Product</h1>

            <p className="text-gray-500 mb-8">Enter your product information</p>

            <form onSubmit={addProductData} className="space-y-6">

              {/* Product Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Product Name</label>

                <input type="text" ref={name} name="name" placeholder="Enter product name" required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-teal-500"
                />
              </div>

              {/* Product Photo */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Product Photo</label>

                <input type="file" ref={photo} name="photo" accept="image/*" required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3"
                />
              </div>

              {/* Old Price */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Old Price</label>

                <input type="number" ref={oldPrice} name="old_price" step="0.01" placeholder="Enter old price" required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-teal-500"
                />
              </div>

              {/* New Price */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">New Price</label>

                <input type="number" ref={newPrice} name="new_price" step="0.01" placeholder="Enter new price" required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-teal-500"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Description</label>

                <textarea ref={description} name="description" rows="5" placeholder="Enter product description" required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-teal-500 resize-none"
                />
              </div>

              {/* Submit */}
              <button type="submit" disabled={adding}
                className="w-full bg-teal-500 hover:bg-teal-600 disabled:bg-gray-400 text-white font-semibold py-3 rounded-xl transition duration-300"
              >
                {adding ? "Adding Product..." : "Add Product"}
              </button>

            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
