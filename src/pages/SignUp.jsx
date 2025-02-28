import { Link } from "react-router-dom";

const SignUp = () => {
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

        {/* Right Side - Sign Up Form */}
        <div className="col-md-6">
          <div className="p-5">
            <h2 className="fw-bold">Create an account</h2>
            <p className="text-secondary">Enter your details below</p>

            <form>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Name"
              />
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
                Create Account
              </button>

              <button className="btn btn-outline-secondary w-100">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsn_7YWUcHfdiZW2UrAM4XFj_2vk2Opk4mVA&s"
                  alt="Google Logo"
                  className="me-1"
                  width="20"
                />
                Sign up with Google
              </button>
            </form>
            <p className="mt-3">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
