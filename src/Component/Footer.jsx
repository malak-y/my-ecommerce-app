import './Footer.css';
import qrCode from '../assets/ExampleCode.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Section - Brand & Subscription */}
        <div className="footer-section">
          <h3 className="footer-title">Exclusive</h3>
          <p className="footer-subtitle">Subscribe</p>
          <p className="footer-text">Get 10% off your first order</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email" />
            <button>&#10148;</button>
          </div>
        </div>

        {/* Support Section */}
        <div className="footer-section">
          <h4 className="footer-title">Support</h4>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div className="footer-section">
          <h4 className="footer-title">Account</h4>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h4 className="footer-title">Quick Link</h4>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>

        {/* App Download Section */}
        <div className="footer-section">
          <h4 className="footer-title">Download App</h4>
          <p>Save $3 with App New User Only</p>
          <div className="app-container">
            <img src={qrCode} alt="QR Code" className="qr-code" />
            <div className="app-links">
              <img src="https://static-00.iconduck.com/assets.00/google-play-icon-icon-1917x2048-2fljsw4s.png" alt="Google Play" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmA-_LfIzAJkSmTBF_Qr0V3qM5eEn94havBQ&s" alt="App Store" />
            </div>
          </div>
          <div className="social-icons">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-linkedin"></i>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="footer-bottom">
        <p>© Copyright Rimel 2022. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
