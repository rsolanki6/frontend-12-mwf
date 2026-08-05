import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://brijeshguru.com/api/get_products.php")
      .then((res) => {
        console.log(res.data);

        // If the API returns an array
        if (Array.isArray(res.data)) {
          setProducts(res.data);
        }

        // If the API returns {status:true,data:[...]}
        else if (res.data.status) {
          setProducts(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Products</h2>

      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100 shadow">
                <img src={product.photo} className="card-img-top" alt={product.name} style={{ height: "400px", objectFit: "cover" }} />
                <div className="card-body">
                  <h4>{product.name}</h4>
                  <p className="mb-2">
                    <span className="text-muted text-decoration-line-through me-2">₹{product.old_price}</span>
                    <span className="text-success fw-bold">₹{product.new_price}</span>
                  </p>
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center"><h3>No Products Found</h3></div>
        )}
      </div>

    </div>
  );
}