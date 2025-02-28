import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp"; 
import Header from "./Component/Header";
import Login from "./pages/Login";
import AllProducts from "./pages/AllProducts";
import PropTypes from "prop-types";
import Wishlist from "./pages/Wishlist";
import About from "./pages/About";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
const Layout = ({ children, useContainer = true }) => {
  return (
    <div>
      <Header />
      <Navbar />
      {useContainer ? <div className="container">{children}</div> : children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  useContainer: PropTypes.bool,
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout useContainer={false}>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <SignUp />
            </Layout>
          }
        />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/all-products" element={<Layout><AllProducts /></Layout>} />
        <Route path="/wishlist" element={<Layout><Wishlist /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/cartpage" element={<Layout><CartPage /></Layout>} />
        <Route path="/checkoutpage" element={<Layout><CheckoutPage /></Layout>} />
        <Route path="/checkoutpage" element={<Layout><CheckoutPage /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/product/:id" element={<Layout><ProductDetails /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
