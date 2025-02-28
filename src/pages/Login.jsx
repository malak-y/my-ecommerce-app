import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="row w-100">
        {/* Left Side - Image */}
        <div className="col-md-6 d-none d-md-block">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMhJT-FArfDoB7iCYna2B7raoqynXr37Co5A&s"
            alt="Shopping Cart"
            className="img-fluid w-100 h-100"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="col-md-6">
          <div className="p-5">
            <h2 className="fw-bold">Log in to Exclusive</h2>
            <p className="text-secondary">Enter your details below</p>

            <form>
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email or Phone Number"
              />
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
              />

              <button className="btn btn-danger w-100 mb-3">
                Log In
              </button>

              <p className="text-center">
                <Link to="/forgot-password" className="text-danger">
                  Forgot Password?
                </Link>
              </p>
            </form>

            <p className="mt-3">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
