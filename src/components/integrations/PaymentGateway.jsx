// PaymentGateway.jsx
import React, { useState } from 'react';

const PaymentGateway = () => {
  const [amount, setAmount] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null);

  // Simulate a payment processing function
  const handlePayment = async () => {
    if (!amount) {
      alert('Please enter a valid amount');
      return;
    }
    
    try {
      // Here, you would integrate with a real payment API like Stripe or PayPal.
      // For demonstration purposes, we simulate a successful payment.
      
      // Mock payment success
      setTimeout(() => {
        setPaymentStatus('Payment Successful');
        alert('Payment of $' + amount + ' completed successfully!');
      }, 2000);
      
      setPaymentStatus('Processing...');
    } catch (error) {
      setPaymentStatus('Payment Failed');
      alert('Payment failed, please try again later.');
    }
  };

  return (
    <div className="payment-gateway">
      <h2>Payment Gateway Integration</h2>
      <div className="payment-form">
        <label htmlFor="amount">Enter Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount in USD"
        />
        <button onClick={handlePayment}>Pay Now</button>
      </div>
      {paymentStatus && <p>Status: {paymentStatus}</p>}
    </div>
  );
};

export default PaymentGateway;
