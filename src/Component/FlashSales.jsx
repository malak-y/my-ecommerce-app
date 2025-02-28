import { useEffect, useState } from "react";
import { FaRegEye, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FlashSales = () => {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState(""); 
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToWishlist = (product) => {
    const updatedWishlist = [...wishlist, product];
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1; 
    } else {
      cart.push({ ...product, quantity: 1 }); 
    }
    localStorage.setItem("cart", JSON.stringify(cart));

    // Set success message
    setSuccessMessage(`${product.title} added successfully!`);
    
    // Hide message after 1.5 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 1500);
  };

  return (
    <div className="container mt-5 position-relative">
      {/* Success Message at the Top */}
      {successMessage && (
        <div
          className="alert alert-success text-center position-absolute w-100 top-0 start-50 translate-middle-x"
          style={{ zIndex: "1000" }}
        >
          {successMessage}
        </div>
      )}

      <h2 className="fw-bold mt-4">Flash Sales</h2>

      <div className="d-flex gap-4 flex-wrap">
        {products.map((product) => (
          <div
            key={product.id}
            className="card p-3 position-relative product-card"
            style={{
              minWidth: "250px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div className="position-relative">
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid"
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div
                className="position-absolute top-0 end-0 d-flex flex-column gap-2 p-2"
                style={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <FaHeart
                  className="text-danger fs-5 cursor-pointer"
                  onClick={() => addToWishlist(product)}
                  style={{ cursor: "pointer" }}
                />
                <FaRegEye className="text-dark fs-5" />
              </div>

              {/* Add to Cart Button */}
              <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
            <div className="mt-3">
              <h6 className="fw-semibold">{product.title.substring(0, 20)}...</h6>
              <p className="text-danger fw-bold">${product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button
          className="btn px-4 py-2"
          style={{
            borderRadius: "8px",
            fontSize: "16px",
            backgroundColor: "#DB4444",
            color: "white",
            border: "none",
          }}
          onClick={() => navigate("/all-products")}
        >
          View All Products
        </button>
      </div>

      <style>
        {`
          .product-card {
            position: relative;
          }
          .add-to-cart-btn {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            background-color: black;
            color: white;
            border: none;
            padding: 10px;
            width: 80%;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
          }
          .product-card:hover .add-to-cart-btn {
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
};

export default FlashSales;
