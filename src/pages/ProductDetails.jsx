import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <h2 className="text-center mt-5">Loading...</h2>;

  // Handle quantity change
  const handleQuantity = (type) => {
    setQuantity((prev) => (type === "increase" ? prev + 1 : Math.max(1, prev - 1)));
  };

  return (
    <div className="container mt-5">
      {/* Product Display Section */}
      <div className="row">
        {/* Image Gallery */}
        <div className="col-md-6 d-flex">
          <div className="d-flex flex-column me-3">
            {[product.image, product.image, product.image].map((img, index) => (
              <img key={index} src={img} alt={product.title} className="img-thumbnail mb-2" style={{ width: "80px" }} />
            ))}
          </div>
          <img src={product.image} alt={product.title} className="img-fluid w-75" />
        </div>

        {/* Product Details */}
        <div className="col-md-6">
          <h2 className="fw-bold">{product.title}</h2>
          <div className="d-flex align-items-center">
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaStar className="text-secondary" />
            <span className="ms-2 text-muted">(150 Reviews)</span>
          </div>
          <h4 className="text-danger mt-2">${product.price.toFixed(2)}</h4>
          <p className="text-muted">{product.description}</p>

          {/* Size Selection */}
          <div className="mt-3">
            <span className="fw-bold me-2">Size:</span>
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className={`btn mx-1 ${selectedSize === size ? "btn-dark text-white" : "btn-outline-dark"}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Quantity & Add to Cart */}
          <div className="mt-4 d-flex align-items-center">
            <button className="btn btn-outline-secondary" onClick={() => handleQuantity("decrease")}>-</button>
            <input type="text" value={quantity} className="form-control text-center mx-2" style={{ width: "50px" }} readOnly />
            <button className="btn btn-outline-secondary" onClick={() => handleQuantity("increase")}>+</button>
            <button className="btn btn-danger ms-3">Buy Now</button>
          </div>

          {/* Delivery Info */}
          <div className="mt-4 border p-3">
            <p className="mb-1"><strong>Free Delivery:</strong> Enter your postal code for delivery availability</p>
            <p className="mb-0"><strong>Return Policy:</strong> 30 Days Return</p>
          </div>
        </div>
      </div>

      {/* Related Items Section */}
      <div className="mt-5">
        <h4 className="fw-bold text-danger">Related Items</h4>
        <div className="row">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="col-md-3">
              <div className="card border-0 shadow-sm">
                <img src={product.image} alt="Related Product" className="card-img-top" />
                <div className="card-body">
                  <h6 className="card-title">Product Name</h6>
                  <p className="text-muted">$100 <del className="text-danger">$150</del></p>
                  <button className="btn btn-dark w-100">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
