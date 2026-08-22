import React, { useEffect, useState } from "react";
import HeaderApp from "./HeaderApp";
import { useNavigate } from "react-router-dom";

export default function ManageTask() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Get Products
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          "https://brijeshguru.com/api/get_products.php"
        );

        const result = await response.json();

        console.log(result);

        if (result.status === true) {
          setProducts(result.data);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <HeaderApp />

      {/* Main Content */}
      <main className="p-8">

        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          All Products
        </h1>

        {/* Loading */}
        {loading && (
          <div className="text-center py-10">
            <h2 className="text-xl text-gray-600">
              Loading products...
            </h2>
          </div>
        )}

        {/* Products */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">

            {products.length > 0 ? (
              products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >

                  {/* Product Image */}
                  <div className="h-56 flex items-center justify-center">
                    <img
                      src={product.photo}
                      alt={product.name}
                      className="max-h-56 max-w-full object-contain"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="p-4">

                    {/* Name */}
                    <h2 className="text-xl font-bold text-gray-800">
                      {product.name}
                    </h2>

                    {/* Prices */}
                    <div className="flex gap-3 items-center mt-3">

                      <span className="text-gray-400 line-through">
                        ₹{product.old_price}
                      </span>

                      <span className="text-teal-600 font-bold text-xl">
                        ₹{product.new_price}
                      </span>

                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mt-3 line-clamp-3 min-h-[72px]">
                      {product.description}
                    </p>

                    {/* Product ID */}
                    <p className="text-sm text-gray-400 mt-4">
                      Product ID: {product.id}
                    </p>

                    {/* Created Date */}
                    <p className="text-sm text-gray-400">
                      Added: {product.created_at}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-2 mt-5">

                      {/* Edit */}
                      <button
                        onClick={() =>
                          navigate(`/update-task/${product.id}`)
                        }
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition"
                      >
                        Edit
                      </button>

                      {/* Delete */}
                      <button
                        onClick={() =>
                          navigate(`/delete-task/${product.id}`)
                        }
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition"
                      >
                        Delete
                      </button>

                    </div>

                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">
                No products found.
              </p>
            )}

          </div>
        )}

      </main>
    </div>
  );
}
