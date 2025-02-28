import { Container, Row, Col, Card } from "react-bootstrap";
import { FaTruck, FaHeadphones, FaUndoAlt } from "react-icons/fa";
import "./NewArrival.css"; // Import your CSS file

const NewArrival = () => {
  return (
    <Container className="py-5">
      {/* Header Section */}
      <div className="mb-4">
        <span className="text-danger fw-semibold">Featured</span>
        <h2 className="fw-bold">New Arrival</h2>
      </div>

      {/* Product Grid Section */}
      <Row className="g-3">
        <Col md={6}>
          <Card className="text-white">
            <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ronXtXyrcSNF1iuHW7qgZFUEBib9pHV13Q&s" alt="PS5" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <h5 className="fw-bold">PlayStation 5</h5>
              <p>Black and White version of the PS5 coming out on sale.</p>
              <button className="btn btn-dark btn-sm">Shop Now</button>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md={6}>
          <Row className="g-3">
            <Col md={12}>
              <Card className="text-white">
                <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkXaDXVtPB00XexiX2oBAoXOZweyoXl9cGLA&s" alt="Women Collection" />
                <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                  <h5 className="fw-bold">Women’s Collections</h5>
                  <p>Featured woman collections that give you another vibe.</p>
                  <button className="btn btn-dark btn-sm">Shop Now</button>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="text-white equal-card">
                <Card.Img src="https://img.freepik.com/premium-photo/black-speaker-system-with-piano-lacquer-huge-speakers-black-background_88135-33695.jpg" alt="Speakers" />
                <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                  <h5 className="fw-bold">Speakers</h5>
                  <p>Amazon wireless speakers.</p>
                  <button className="btn btn-dark btn-sm">Shop Now</button>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="text-white equal-card">
                <Card.Img src="https://img.freepik.com/premium-photo/mens-perfume-bottle-with-clean-austere-design-plain-matte-black-background_869057-12777.jpg" alt="Perfume" />
                <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                  <h5 className="fw-bold">Perfume</h5>
                  <p>GUCCI INTENSE OUD EDP.</p>
                  <button className="btn btn-dark btn-sm">Shop Now</button>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Bottom Info Section */}
      <Row className="text-center mt-5">
        <Col md={4}>
          <FaTruck size={30} className="text-dark mb-2" />
          <h6 className="fw-bold">FREE AND FAST DELIVERY</h6>
          <p className="text-muted">Free delivery for all orders over $140</p>
        </Col>
        <Col md={4}>
          <FaHeadphones size={30} className="text-dark mb-2" />
          <h6 className="fw-bold">24/7 CUSTOMER SERVICE</h6>
          <p className="text-muted">Friendly 24/7 customer support</p>
        </Col>
        <Col md={4}>
          <FaUndoAlt size={30} className="text-dark mb-2" />
          <h6 className="fw-bold">MONEY BACK GUARANTEE</h6>
          <p className="text-muted">We return money within 30 days</p>
        </Col>
      </Row>
    </Container>
  );
};

export default NewArrival;
