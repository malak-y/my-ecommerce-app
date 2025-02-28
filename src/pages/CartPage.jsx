import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { Container, Table, Button, Form, Row, Col, Card } from "react-bootstrap";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleQuantityChange = (id, quantity) => {
    let updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: parseInt(quantity) } : item
    );

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Container className="mt-4">
      <h5 className="text-muted">Home / Cart</h5>
      <Table bordered className="mt-3">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.name} width="50" className="me-2" />
                {item.title}
              </td>
              <td>${item.price}</td>
              <td>
                <Form.Select
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                >
                  {[...Array(10).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                </Form.Select>
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Row className="mt-3">
        <Col md={6}>
          <Button variant="secondary" className="me-2">Return To Shop</Button>
        </Col>
        <Col md={6}>
          <Card className="p-3">
            <h5>Cart Total</h5>
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Shipping: Free</p>
            <hr />
            <p><strong>Total: ${subtotal.toFixed(2)}</strong></p>
            <Button 
  variant="danger" 
  className="w-100"
  onClick={() => navigate("/checkoutpage")} 
>
  Proceed to Checkout
</Button>

          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
