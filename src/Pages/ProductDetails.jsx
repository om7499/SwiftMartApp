
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../Store/StoreContext";
import { toast } from "react-toastify";


const ProductDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  const { dispatch } = useCart();

  useEffect(() => {
    const controller = new AbortController();

    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`,
          { signal: controller.signal }
        );
        setProducts(response.data);
      } catch (error) {
        if (error.name === "CanceledError") {
          console.log("Fetch aborted");
        } else {
          console.error("Error fetching product:", error);
          toast.error("Failed to fetch product details.");
        }
      }
    };

    fetchProduct();

    return () => {
      controller.abort();
    };
  }, [id]);

  // Show loader if products are not yet loaded
  if (!products) {
    return (
      <div className="d-flex justify-content-center align-items-center w-full h-[100vh]">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // Destructure product details safely after ensuring data exists
  const { image, title, price, description } = products;

  const handleAddToCart = (product) => {
    dispatch({ type: "Add_To cart", payload: product });
    toast.success("Added item to cart!");
  };

  return (
    <>
    <div className="w-full h-[100vh]">
      <div className="card m-3 s">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start p-3" alt={title} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <span className="text-muted fw-bold ">${price}</span>
              </p>
              <button
                className="btn btn-primary"
                onClick={() => handleAddToCart(products)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default ProductDetails;
