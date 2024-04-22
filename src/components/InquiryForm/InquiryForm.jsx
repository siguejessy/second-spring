import React, { useState } from 'react';
import { createInquiry } from '../../utilities/inquiries-api';

const InquiryForm = ({ productId }) => {
  // State for the inquiry message
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create the inquiry
      await createInquiry({ productId, message });
      // Reset the message input
      setMessage('');
      // Show a success message or redirect if needed
    } catch (error) {
      // Handle error
      console.error('Error creating inquiry:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your inquiry message here..."
        required
      />
      <button type="submit">Send Inquiry</button>
    </form>
  );
};

export default InquiryForm;