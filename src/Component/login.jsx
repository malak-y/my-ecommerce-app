import  { useState } from 'react'
import './Login.css'; // You can create this CSS file for styling

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email/Phone:', emailOrPhone, 'Password:', password);
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Log in to Exclusive</h1>
        <p>Enter your details below</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="emailOrPhone">Email or Phone Number</label>
          <input
            type="text"
            id="emailOrPhone"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Log in</button>
        <p className="forgot-password">Forget Password?</p>
      </form>
    </div>
  );
};

export default Login;