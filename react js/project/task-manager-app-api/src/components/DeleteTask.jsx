import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function DeleteTask() {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const deleteProduct = async () => {
      const result = await Swal.fire({
        title: "Do you want to delete this product?",
        text: "This action cannot be undone.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
      });

      if (result.isConfirmed) {
        try {
          const formData = new FormData();
          formData.append("id", id);

          const response = await axios.post(
            "https://brijeshguru.com/api/delete_products.php",
            formData
          );

          console.log(response.data);

          if (response.data.status === true) {
            await Swal.fire(
              "Deleted!",
              "Product deleted successfully.",
              "success"
            );

            navigate("/manage-task");
          } else {
            Swal.fire(
              "Error",
              response.data.message || "Product could not be deleted.",
              "error"
            );
          }
        } catch (error) {
          console.error("Delete error:", error);

          Swal.fire(
            "Error",
            "Something went wrong while deleting the product.",
            "error"
          );
        }
      } else {
        navigate("/manage-task");
      }
    };

    deleteProduct();
  }, [id, navigate]);

  return <></>;
}
