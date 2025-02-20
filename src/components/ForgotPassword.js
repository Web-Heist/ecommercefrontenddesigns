import React, { useState } from "react";
import axios from "axios";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://mockapi.io/auth/forgot-password", { email });
      setMessage("Reset link sent to your email");
    } catch (err) {
      setMessage("Failed to send reset link");
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <h2>Forgot Password</h2>
        {message && <p>{message}</p>}
        <form onSubmit={handleResetPassword}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send Reset Link</button>
        </form>
        <p>
          Remember your password? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
