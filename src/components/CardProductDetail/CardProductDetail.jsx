import './CardProductDetail.css';
import React from 'react';
import { Link } from 'react-router-dom';

const CardProductDetail = ({ product }) => {
  return (
    <div className="productCard">
      <Link to={`/products/${product._id}`}>
        <h2>{product.name}</h2>
      </Link>
      <div className="cardDetails">
      <p>{product.emoji}</p>
      <p>Category: {product.category}</p>
      <p>Sub-Category: {product.subCategory}</p>
      <p>Price: ${product.price}</p>
    </div>
    </div>
  );
};

export default CardProductDetail;