import React, { useState, useRef, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cleave from 'cleave.js';
import { CartContext } from '../CartContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useContext(CartContext);
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);

  // Form state
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
  });
  const [billingSame, setBillingSame] = useState(true);
  const [billingInfo, setBillingInfo] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const cardInputRef = useRef(null);

  // Cleave.js for credit card
  useEffect(() => {
    if (cardInputRef.current) {
      new Cleave(cardInputRef.current, {
        creditCard: true,
        delimiter: ' ',
        onCreditCardTypeChanged: (type) => {
        
        },
      });
    }
  }, []);

  const handleNext = () => {
    // Basic validation for each step
    if (currentStep === 0) {
      // Shipping Info validation
      const values = Object.values(shippingInfo);
      if (values.some((v) => !v.trim())) {
        alert('Please fill out all shipping fields.');
        return;
      }
    } else if (currentStep === 1 && !billingSame) {
      const values = Object.values(billingInfo);
      if (values.some((v) => !v.trim())) {
        alert('Please fill out all billing fields.');
        return;
      }
    } else if (currentStep === 2) {
      // Payment Info validation (very basic)
      if (!paymentInfo.cardNumber || paymentInfo.cardNumber.replace(/ /g, '').length < 16) {
        alert('Please enter a valid card number.');
        return;
      }
      if (!paymentInfo.expiry.trim() || !paymentInfo.cvv.trim()) {
        alert('Please complete all payment fields.');
        return;
      }
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  
  const handlePlaceOrder = () => {
    setLoading(true);
    // API call
    
    setTimeout(() => {
      setLoading(false);
      alert('Order placed successfully!');
      clearCart();
      navigate('/cart');
    }, 2000);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="form-step">
            <h3>Shipping Information</h3>
            <input
              type="text"
              placeholder="Name"
              value={shippingInfo.name}
              onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Address"
              value={shippingInfo.address}
              onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="City"
              value={shippingInfo.city}
              onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="State"
              value={shippingInfo.state}
              onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Zip Code"
              value={shippingInfo.zip}
              onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={shippingInfo.phone}
              onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
              required
            />
          </div>
        );
      case 1:
        return (
          <div className="form-step">
            <h3>Billing Information</h3>
            <label>
              <input
                type="checkbox"
                checked={billingSame}
                onChange={(e) => setBillingSame(e.target.checked)}
              />
              Same as shipping
            </label>
            {!billingSame && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  value={billingInfo.name}
                  onChange={(e) => setBillingInfo({ ...billingInfo, name: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Address"
                  value={billingInfo.address}
                  onChange={(e) => setBillingInfo({ ...billingInfo, address: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="City"
                  value={billingInfo.city}
                  onChange={(e) => setBillingInfo({ ...billingInfo, city: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="State"
                  value={billingInfo.state}
                  onChange={(e) => setBillingInfo({ ...billingInfo, state: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Zip Code"
                  value={billingInfo.zip}
                  onChange={(e) => setBillingInfo({ ...billingInfo, zip: e.target.value })}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={billingInfo.phone}
                  onChange={(e) => setBillingInfo({ ...billingInfo, phone: e.target.value })}
                  required
                />
              </>
            )}
          </div>
        );
      case 2:
        return (
          <div className="form-step">
            <h3>Payment Information</h3>
            <input
              ref={cardInputRef}
              type="text"
              placeholder="Credit Card Number"
              onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Expiry Date (MM/YY)"
              value={paymentInfo.expiry}
              onChange={(e) => setPaymentInfo({ ...paymentInfo, expiry: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="CVV"
              value={paymentInfo.cvv}
              onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
              required
            />
          </div>
        );
      case 3:
        return (
          <div className="form-step">
            <h3>Order Review</h3>
            <div className="order-summary">
              {cart.map((item) => (
                <div key={item.id} className="order-item">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="order-totals">
              {(() => {
                const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
                const tax = subtotal * 0.1;
                const shipping = 5;
                const total = subtotal + tax + shipping;
                return (
                  <>
                    <p>Subtotal: ${subtotal.toFixed(2)}</p>
                    <p>Tax (10%): ${tax.toFixed(2)}</p>
                    <p>Shipping: ${shipping.toFixed(2)}</p>
                    <h4>Total: ${total.toFixed(2)}</h4>
                  </>
                );
              })()}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="progress-indicator">
        {[1, 2, 3, 4].map((step, index) => (
          <div key={index} className={`step ${currentStep >= index ? 'active' : ''}`}>
            {step}
          </div>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {renderStep()}
        <div className="form-navigation">
          {currentStep > 0 && (
            <button type="button" onClick={handlePrev}>
              Previous
            </button>
          )}
          {currentStep < 3 && (
            <button type="button" onClick={handleNext}>
              Next
            </button>
          )}
          {currentStep === 3 && (
            <button type="button" onClick={handlePlaceOrder} disabled={loading}>
              {loading ? 'Placing Order...' : 'Place Order'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Checkout;
