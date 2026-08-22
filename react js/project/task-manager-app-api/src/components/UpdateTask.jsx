import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeaderApp from "./HeaderApp";

export default function UpdateTask() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    old_price: "",
    new_price: "",
    description: "",
  });

  const [currentPhoto, setCurrentPhoto] = useState("");
  const [newPhoto, setNewPhoto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  // Get product data
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(
          "https://brijeshguru.com/api/get_products.php"
        );

        const result = await response.json();

        if (result.status === true) {
          const product = result.data.find(
            (item) => String(item.id) === String(id)
          );

          if (product) {
            setFormData({
              name: product.name,
              old_price: product.old_price,
              new_price: product.new_price,
              description: product.description,
            });

            setCurrentPhoto(product.photo);
          } else {
            alert("Product not found");
            navigate("/manage-task");
          }
        }
      } catch (error) {
        console.error("Error getting product:", error);
        alert("Unable to load product");
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id, navigate]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle photo
  const handlePhotoChange = (e) => {
    setNewPhoto(e.target.files[0]);
  };

  // Update product
  const updateProduct = async (e) => {
    e.preventDefault();

    setUpdating(true);

    const data = new FormData();

    data.append("id", id);
    data.append("name", formData.name);
    data.append("old_price", formData.old_price);
    data.append("new_price", formData.new_price);
    data.append("description", formData.description);

    // Add new photo only if selected
    if (newPhoto) {
      data.append("photo", newPhoto);
    }

    try {
      const response = await fetch(
        "https://brijeshguru.com/api/edit_products.php",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      console.log("Update response:", result);

      if (result.status === true) {
        alert("Product updated successfully!");

        // Go back to Manage Task
        navigate("/manage-task");
      } else {
        alert(result.message || "Product update failed");
      }
    } catch (error) {
      console.error("Update error:", error);
      alert("Something went wrong while updating the product");
    } finally {
      setUpdating(false);
    }
  };

  // Loading
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <HeaderApp />

        <div className="flex justify-center items-center p-10">
          <h2 className="text-xl text-gray-600">
            Loading product...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderApp />
      <div className="max-w-3xl mx-auto p-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Update Product</h1>

          <form onSubmit={updateProduct} className="space-y-6">

            {/* Product Name */}
            <div>
              <label className="block font-semibold text-gray-700 mb-2">Product Name</label>

              <input type="text" name="name" value={formData.name} onChange={handleChange} required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-teal-500"
              />
            </div>

            {/* Current Photo */}
            {currentPhoto && (
              <div>
                <label className="block font-semibold text-gray-700 mb-2">Current Photo</label>

                <div className="flex justify-center bg-gray-50 rounded-xl p-4">
                  <img src={currentPhoto} alt={formData.name}
                    className="h-48 w-auto object-contain rounded-xl"
                  />
                </div>
              </div>
            )}

            {/* Change Photo */}
            <div>
              <label className="block font-semibold text-gray-700 mb-2">Change Photo</label>

              <input type="file" accept="image/*" onChange={handlePhotoChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3"
              />
            </div>

            {/* Old Price */}
            <div>
              <label className="block font-semibold text-gray-700 mb-2">Old Price</label>

              <input type="number" name="old_price" value={formData.old_price} onChange={handleChange} step="0.01" required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-teal-500"
              />
            </div>

            {/* New Price */}
            <div>
              <label className="block font-semibold text-gray-700 mb-2">New Price</label>

              <input type="number" name="new_price" value={formData.new_price} onChange={handleChange} step="0.01" required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-teal-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block font-semibold text-gray-700 mb-2">Description</label>

              <textarea name="description" value={formData.description} onChange={handleChange} rows="5" required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-teal-500 resize-none"
              />
            </div>

            {/* Update Button */}
            <button type="submit" disabled={updating}
              className="w-full bg-teal-500 hover:bg-teal-600 disabled:bg-gray-400 text-white font-semibold py-3 rounded-xl transition"
            >
              {updating ? "Updating..." : "Update Product"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
