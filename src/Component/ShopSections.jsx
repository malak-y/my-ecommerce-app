import { FaCamera, FaLaptop, FaMobileAlt, FaHeadphones, FaGamepad, FaEye } from "react-icons/fa";
import { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";

const categories = [
    { name: "Phones", icon: <FaMobileAlt size={30} /> },
    { name: "Computers", icon: <FaLaptop size={30} /> },
    { name: "SmartWatch", icon: <FaCamera size={30} /> },
    { name: "Camera", icon: <FaCamera size={30} /> },
    { name: "HeadPhones", icon: <FaHeadphones size={30} /> },
    { name: "Gaming", icon: <FaGamepad size={30} /> },
];

const products = [
    { name: "The north coat", price: 260, oldPrice: 360, image: "https://images.thenorthface.com/is/image/TheNorthFace/NF0A3C8D_LE4_altfront?wid=1300&hei=1510&fmt=jpeg&qlt=50&resMode=sharp" },
    { name: "Gucci duffle bag", price: 960, oldPrice: 1160, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlciHUA6-dfG8pxFtDlz04GfEIrP21mpfnqw&s" },
    { name: "RGB liquid CPU Cooler", price: 160, oldPrice: 170, image: "https://m.media-amazon.com/images/I/61taA3TevhL.jpg" },
    { name: "Small BookShelf", price: 360, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcAmEJ03aLOTM3lf0EcmN3Slql7jRMgkzoSg&s" },
];

const ShopSection = () => {
    const [selectedCategory, setSelectedCategory] = useState("Camera");
    const [successMessage, setSuccessMessage] = useState(""); 
    const [wishlistMessage, setWishlistMessage] = useState("");
    const [viewMessage, setViewMessage] = useState("");

    const handleAddToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProduct = cart.find((item) => item.name === product.name);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        setSuccessMessage(`${product.name} added to cart successfully!`);

        setTimeout(() => {
            setSuccessMessage("");
        }, 3000);
    };  

    const handleAddToWishlist = (product) => {
        setWishlistMessage(`${product.name} added to wishlist!`);
        setTimeout(() => {
            setWishlistMessage("");
        }, 3000);
    };

    const handleViewProduct = (product) => {
        setViewMessage(`Viewing ${product.name}`);
        setTimeout(() => {
            setViewMessage("");
        }, 3000);
    };

    return (
        <>
            {/* Messages at the Top */}
            <div style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 1050,
                textAlign: "center",
                padding: "10px",
            }}>
                {successMessage && <div className="alert alert-success">{successMessage}</div>}
                {wishlistMessage && <div className="alert alert-info">{wishlistMessage}</div>}
                {viewMessage && <div className="alert alert-warning">{viewMessage}</div>}
            </div>

            <Container className="mt-5 pt-5">
                {/* Categories Section */}
                <div className="p-4 border rounded shadow-sm bg-white mb-5">
                    <h5 className="text-danger fw-bold">Categories</h5>
                    <h2 className="fw-bold">Browse By Category</h2>
                    <Row className="mb-4 d-flex justify-content-center">
                        {categories.map((category) => (
                            <Col key={category.name} xs="auto">
                                <Button
                                    variant={selectedCategory === category.name ? "danger" : "outline-secondary"}
                                    className="d-flex flex-column align-items-center gap-2 p-3"
                                    style={{ width: "100px", height: "100px" }}
                                    onClick={() => setSelectedCategory(category.name)}
                                >
                                    {category.icon}
                                    <span className="fw-bold">{category.name}</span>
                                </Button>
                            </Col>
                        ))}
                    </Row>
                </div>

                {/* Best Selling Products Section */}
                <div className="p-4 border rounded shadow-sm bg-white">
                    <h5 className="text-danger fw-bold">This Month</h5>
                    <h2 className="fw-bold d-flex justify-content-between">
                        Best Selling Products
                        <Button variant="danger">View All</Button>
                    </h2>
                    <Row>
                        {products.map((product, index) => (
                            <Col key={index} md={3} sm={6} className="mb-4">
                                <Card className="shadow-sm border-0 product-card h-100">
                                    <div className="position-relative image-container">
                                        <Card.Img 
                                            variant="top" 
                                            src={product.image} 
                                            className="product-image"
                                            style={{ height: "200px", objectFit: "cover" }}
                                        />
                                        <div className="position-absolute top-0 end-0 p-2 d-flex flex-column gap-2">
                                            <FaHeart className="text-dark cursor-pointer" size={20} onClick={() => handleAddToWishlist(product)} />
                                            <FaEye className="text-dark cursor-pointer" size={20} onClick={() => handleViewProduct(product)} />
                                        </div>
                                        <Button className="add-to-cart-btn" variant="danger" onClick={() => handleAddToCart(product)}>
                                            Add to Cart
                                        </Button>
                                    </div>
                                    <Card.Body className="d-flex flex-column justify-content-between text-center">
                                        <Card.Title className="fw-semibold">{product.name}</Card.Title>
                                        <div className="d-flex justify-content-center gap-2">
                                            <span className="text-danger fw-bold">${product.price}</span>
                                            {product.oldPrice && <span className="text-muted text-decoration-line-through">${product.oldPrice}</span>}
                                        </div>
                                        <div className="text-warning">★★★★★ (65)</div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </>
    );
};

export default ShopSection;
