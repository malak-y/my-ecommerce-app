import { FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4">
      <Link className="navbar-brand fw-bold fs-4" to="/">Exclusive</Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/signup" ? "underline" : ""}`} to="/signup">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>

      <div className="d-flex align-items-center gap-3">
        <div className="position-relative">
          <input
            type="text"
            className="form-control ps-5"
            placeholder="What are you looking for?"
            style={{ width: "250px" }}
          />
          <FaSearch
            className="text-secondary position-absolute"
            style={{ top: "50%", left: "15px", transform: "translateY(-50%)" }}
          />
        </div>
        <Link to="/wishlist">
          <FaHeart size={20} className="text-dark cursor-pointer" />
        </Link>
        <Link to="/cartpage">
        <FaShoppingCart size={20} className="text-dark" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
