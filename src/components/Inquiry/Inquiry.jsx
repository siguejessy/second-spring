import React from 'react';
import './Inquiry.css';

const Inquiry = ({ inquiry }) => {
  return (
    <div className="inquiry">
      <h3>Product: {inquiry.productName}</h3>
      <p>Status: {inquiry.status}</p>
      <p>Message: {inquiry.message}</p>
      <p>User: {inquiry.user}</p>
      {/* Add buttons or links for responding to the inquiry */}
    </div>
  );
};

export default Inquiry;