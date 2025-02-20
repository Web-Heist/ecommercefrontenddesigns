import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"; // Import the CSS file

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get("http://localhost:3001/users/1"); // Fetch user data
        setUser(userResponse.data);

        const ordersResponse = await axios.get("http://localhost:3001/orders"); // Fetch orders
        setOrders(ordersResponse.data);
      } catch (err) {
        console.error("Failed to fetch data", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (loading) return <p className="loading">Loading...</p>;

  return (
    <div className="dashboard">
      <div className="header">
        <h2 className="welcome-message">Welcome, {user?.name}</h2>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="section">
        <h3>Order History</h3>
        <ul className="order-list">
          {orders.map((order) => (
            <li key={order.id}>
              Order #{order.id} - ${order.total}
            </li>
          ))}
        </ul>
      </div>

      <div className="section account-settings">
        <h3>Account Settings</h3>
        <p>Update your email, password, or shipping address here.</p>
      </div>
    </div>
  );
};

export default Dashboard;