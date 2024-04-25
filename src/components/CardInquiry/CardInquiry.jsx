import React from 'react';
import './CardInquiry.css';

const CardInquiry = ({ inquiry }) => {
  return (
    <div className="inquiry">
      <h3>User: {inquiry.user}</h3>
      <p>Product: {inquiry.product}</p>
      <p>Message: {inquiry.message}</p>
    </div>
  );
};

export default CardInquiry;