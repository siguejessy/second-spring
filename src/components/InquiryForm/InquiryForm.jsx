import React, { useState } from 'react';
import { sendInquiry } from '../../utilities/inquiries-api';
import './InquiryForm.css';

const InquiryForm = ({ productId }) => { // Adjust the props destructuring
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ensure the correct key name for the product ID
      await sendInquiry({ product: productId, message }); 
      alert('Inquiry sent successfully!');
      setMessage('');
    } catch (error) {
      console.error('Error sending inquiry:', error);
      if (error instanceof Error) {
        alert(`Failed to send inquiry: ${error.message}`);
      } else {
        alert('Failed to send inquiry. Please try again later.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="message">Your Message:</label>
      <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
      <button type="submit">Send Inquiry</button>
    </form>
  );
};

export default InquiryForm;
