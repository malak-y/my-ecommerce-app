import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { Button } from "react-bootstrap";

const Wishlist = () => {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);
  const [hoveredWishlist, setHoveredWishlist] = useState(null);
  const [hoveredRecommendations, setHoveredRecommendations] = useState(null);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  const handleRemoveFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="container mt-5">
      <h2 className="fw-bold">
        Wishlist ({wishlist.length})
        <button className="btn btn-outline-dark float-end">
          Move All To Bag
        </button>
      </h2>

      {wishlist.length === 0 ? (
        <p className="text-center mt-4">Your wishlist is empty.</p>
      ) : (
        <div className="row mt-4">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="col-md-3"
              onMouseEnter={() => setHoveredWishlist(product.id)}
              onMouseLeave={() => setHoveredWishlist(null)}
            >
              <div className="card wishlist-card position-relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid product-img"
                />
                <div className="card-body text-center">
                  <h6 className="product-title">
                    {product.title.substring(0, 20)}...
                  </h6>
                  <p className="text-danger fw-bold">${product.price}</p>
                  <FaTrash
                    className="text-danger trash-icon position-absolute top-0 end-0 m-2"
                    onClick={() => handleRemoveFromWishlist(product.id)}
                  />
                </div>

                {/* Show Add to Cart only when hovering over this product */}
                {hoveredWishlist === product.id && (
                  <div className="position-absolute bottom-0 start-0 w-100 add-to-cart-overlay">
                    <Button variant="dark" className="fw-bold w-100">
                      Add To Cart
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Just For You Section */}
      <div className="mt-5">
        <h4 className="fw-bold">Just For You</h4>
        <div className="row">
          {[
            {
              id: 1,
              title: "Gaming Laptop",
              price: 1500,
              image:
                "https://cdn.mos.cms.futurecdn.net/3kcgKLkfPRbskpsYzW239d.jpg",
            },
            {
              id: 2,
              title: "LCD Monitor",
              price: 100,
              image:
                "https://images.philips.com/is/image/philipsconsumer/3195f5ef01474f9daf38b01500f0846f?$pnglarge$&wid=960",
            },
            {
              id: 3,
              title: "Gamepad",
              price: 560,
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkl1T4crw3zy77Kf8VsDhJ7eZykQK8AnPmA&s",
            },
            {
              id: 4,
              title: "Keyboard",
              price: 200,
              image:
                "https://ctl.net/cdn/shop/products/ctl-ctl-wireless-keyboard-for-chrome-os-works-with-chromebook-29142051258456.jpg?v=1647376204&width=1024",
            },
          ].map((product) => (
            <div
              key={product.id}
              className="col-md-3"
              onMouseEnter={() => setHoveredRecommendations(product.id)}
              onMouseLeave={() => setHoveredRecommendations(null)}
            >
              <div className="card wishlist-card position-relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid product-img"
                />
                <div className="card-body text-center">
                  <h6 className="product-title">{product.title}</h6>
                  <p className="text-danger fw-bold">${product.price}</p>
                </div>

                {/* Show Add to Cart only when hovering over this product */}
                {hoveredRecommendations === product.id && (
                  <div className="position-absolute bottom-0 start-0 w-100 add-to-cart-overlay">
                    <Button variant="dark" className="fw-bold w-100">
                      Add To Cart
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .wishlist-card {
            border: none;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s ease-in-out;
          }

          .wishlist-card:hover {
            transform: scale(1.05);
          }

          .product-img {
            height: 150px;
            object-fit: contain;
            padding: 10px;
          }

          .product-title {
            font-size: 14px;
            font-weight: 600;
          }

    .trash-icon {
  cursor: pointer;
  transition: color 0.2s;
  font-size: 40px; /* Increase size */
  background: white;
  padding: 8px; /* Adjust padding for better visibility */
  border-radius: 50%;
}

.trash-icon:hover {
  color: red;
}


          .add-to-cart-overlay {
            text-align: center;
            padding: 8px;
            transition: opacity 0.3s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Wishlist;
