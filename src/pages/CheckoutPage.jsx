import { useState, useEffect } from "react";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container py-5">
      <div className="row g-4">
        {/* Billing Details */}
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <h2 className="h4 mb-3">Billing Details</h2>
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="First Name*" required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Company Name" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Street Address*" required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Apartment, floor, etc. (optional)" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Town/City*" required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Phone Number*" required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email Address*" required />
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="save-info" />
                <label className="form-check-label" htmlFor="save-info">
                  Save this information for faster checkout next time
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <h2 className="h4 mb-3">Your Order</h2>
            <ul className="list-group mb-3">
              {cartItems.map((item) => (
                <li className="list-group-item d-flex justify-content-between" key={item.id}>
                  <span>{item.title} (x{item.quantity})</span>
                  <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between">
                <span>Subtotal:</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Shipping:</span>
                <strong>Free</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between fw-bold">
                <span>Total:</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </li>
            </ul>

            <div className="mb-3">
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="bank"
                  checked={paymentMethod === "bank"}
                  onChange={() => setPaymentMethod("bank")}
                />
                <label className="form-check-label" htmlFor="bank">Bank</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="cash"
                  checked={paymentMethod === "cash"}
                  onChange={() => setPaymentMethod("cash")}
                />
                <label className="form-check-label" htmlFor="cash">Cash on Delivery</label>
              </div>
            </div>

            <div className="d-flex gap-3 mb-3">
              <FaCcVisa size={40} className="text-primary" />
              <FaCcMastercard size={40} className="text-danger" />
              <FaCcPaypal size={40} className="text-info" />
            </div>

            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Coupon Code" />
              <button className="btn btn-danger">Apply Coupon</button>
            </div>

            <button className="btn btn-danger w-100">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
