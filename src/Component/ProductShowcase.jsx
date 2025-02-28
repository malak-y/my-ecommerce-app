import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Toast } from "react-bootstrap";
import { FaHeart, FaEye, FaStar, FaRegStar } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    price: "$100",
    rating: 3,
    reviews: 35,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNlig3ljvEAQePEBUesZzpRmE7Xu2FCeUjsg&s",
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    price: "$360",
    rating: 4,
    reviews: 95,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLZDfZbV8n1EMjpFioZSZGOPkyBdUf_EU4Q&s",
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    price: "$700",
    rating: 5,
    reviews: 325,
    img: "https://m.media-amazon.com/images/I/81Md+pSt04L._AC_SL1500_.jpg",
  },
  {
    id: 4,
    name: "Curology Product Set",
    price: "$500",
    rating: 4,
    reviews: 145,
    img: "https://m.media-amazon.com/images/I/71c+7HM-eYL.jpg",
  },
  {
    id: 5,
    name: "Kids Electric Car",
    price: "$960",
    rating: 5,
    reviews: 65,
    img: "https://m.media-amazon.com/images/I/71DBGP8ehHL._AC_UF1000,1000_QL80_.jpg",
    tag: "NEW",
  },
  {
    id: 6,
    name: "Jr. Zoom Soccer Cleats",
    price: "$1160",
    rating: 5,
    reviews: 35,
    img: "https://m.media-amazon.com/images/I/51dSNpRYOJL._AC_SL1001_.jpg",
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    price: "$660",
    rating: 4,
    reviews: 55,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcsSMgXD_FCi9XnmOJ-HnAXMz8A5X_Q4L0GA&s",
    tag: "NEW",
  },
  {
    id: 8,
    name: "Quilted Satin Jacket",
    price: "$660",
    rating: 4,
    reviews: 55,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuQb7z62VLf5HRPWzScOAUnBIZTNMNod4jZg&s",
  },
];

const ProductShowcase = () => {
  const [hovered, setHovered] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [addedProduct, setAddedProduct] = useState("");
  const navigate = useNavigate();

  // Handle Add to Cart
  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    setAddedProduct(product.name);
    setShowToast(true);

    // Redirect to Cart Page after 1.5 seconds
    setTimeout(() => {
    }, 1500);
  };

  return (
    <Container>
      <h2 className="text-center mb-4">Explore Our Products</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={3} sm={6} xs={12} className="mb-4">
            <Card
              className="shadow-sm border-0 h-100 position-relative"
              onMouseEnter={() => setHovered(product.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="position-relative overflow-hidden">
                <Card.Img
                  variant="top"
                  src={product.img}
                  alt={product.name}
                  style={{
                    height: "200px",
                    objectFit: "contain",
                    transition: "0.3s ease-in-out",
                  }}
                />
                {product.tag && (
                  <span className="badge bg-success position-absolute top-0 start-0 m-2">
                    {product.tag}
                  </span>
                )}
                <div className="position-absolute top-0 end-0 m-2 d-flex flex-column">
                  <FaHeart className="mb-2 text-dark" />
                  <FaEye className="text-dark" />
                </div>

                {/* Add To Cart Button */}
                <div
                  className="position-absolute bottom-0 start-0 w-100"
                  style={{
                    opacity: hovered === product.id ? 1 : 0,
                    transition: "opacity 0.3s ease-in-out",
                    textAlign: "center",
                    padding: "8px",
                  }}
                >
                  <Button
                    variant="dark"
                    className="fw-bold w-100"
                    style={{ color: "white", backgroundColor: "black" }}
                    onClick={() => handleAddToCart(product)}
                  >
                    Add To Cart
                  </Button>
                </div>
              </div>
              <Card.Body className="text-center d-flex flex-column justify-content-between">
                <Card.Title className="mb-2">{product.name}</Card.Title>
                <p className="text-danger fw-bold">{product.price}</p>
                <div>
                  {[...Array(5)].map((_, index) =>
                    index < product.rating ? (
                      <FaStar key={index} className="text-warning" />
                    ) : (
                      <FaRegStar key={index} className="text-muted" />
                    )
                  )}
                  <small className="text-muted"> ({product.reviews})</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Success Message Toast */}
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={1500}
        autohide
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          backgroundColor: "#28a745",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <Toast.Body>{addedProduct} added successfully!</Toast.Body>
      </Toast>

      <div className="text-center mt-3">
        <Button variant="danger">View All Products</Button>
      </div>
    </Container>
  );
};

export default ProductShowcase;
