import React, { useState } from 'react';

const OTPVerification = ({ onVerify, onResend }) => {
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      setError('OTP must be 6 digits.');
      return;
    }
    
    setIsLoading(true);
    try {
      await onVerify(otp); // Call the verification function passed as prop
      setError('');
    } catch (err) {
      setError('Invalid OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = () => {
    setIsLoading(true);
    setError('');
    onResend(); // Resend OTP function passed as prop
    setIsLoading(false);
  };

  return (
    <div className="otp-verification">
      <h2>Enter OTP</h2>
      <form onSubmit={handleSubmit}>
        <div className="otp-input">
          <input 
            type="text" 
            value={otp} 
            onChange={handleOtpChange} 
            maxLength="6" 
            placeholder="Enter 6-digit OTP"
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Verifying...' : 'Verify OTP'}
        </button>
      </form>
      <div className="resend-otp">
        <p>Didn't receive an OTP?</p>
        <button onClick={handleResend} disabled={isLoading}>
          {isLoading ? 'Resending...' : 'Resend OTP'}
        </button>
      </div>
    </div>
  );
};

export default OTPVerification;
