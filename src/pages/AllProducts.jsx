import { useEffect, useState } from "react";
import { FaRegEye, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [successMessage, setSuccessMessage] = useState(""); 
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));

    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const handleAddToWishlist = (product) => {
    let updatedWishlist = [...wishlist];
    const isExist = updatedWishlist.find((item) => item.id === product.id);
    if (!isExist) {
      updatedWishlist.push(product);
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    }
    navigate("/wishlist");
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
    setSuccessMessage(`${product.title} added successfully!`);
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`); 
  };

  return (
    <div className="container mt-5">
      <h2 className="fw-bold text-center mb-4">All Products</h2>

      {successMessage && (
        <div className="alert alert-success text-center">{successMessage}</div>
      )}

      <div className="d-flex gap-4 flex-wrap justify-content-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card-container"
            style={{ width: "250px", textAlign: "center", overflow: "hidden", cursor: "pointer" }}
            onClick={() => handleProductClick(product.id)} 
          >
            <div className="card p-3 position-relative product-card">
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
                    className={`text-dark fs-5 ${wishlist.find((item) => item.id === product.id) ? "text-danger" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToWishlist(product);
                    }}
                    style={{ cursor: "pointer" }}
                  />
                  <FaRegEye className="text-dark fs-5" />
                </div>

                <button 
                  className="add-to-cart-btn" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product);
                  }}
                >
                  Add to Cart
                </button>
              </div>

              <div className="mt-3">
                <h6 className="fw-semibold">{product.title.substring(0, 20)}...</h6>
                <p className="text-danger fw-bold">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          .product-card-container {
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

          .product-card-container:hover .add-to-cart-btn {
            opacity: 1;
          }

          .alert {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #28a745;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            z-index: 1000;
          }
        `}
      </style>
    </div>
  );
};

export default AllProducts;
