import './CardProductDetail.css';
import React from 'react';
import { Link } from 'react-router-dom';

const CardProductDetail = ({ product }) => {
  return (
    <div className="productCard">
      <div className="cardDetails">
        <div className="cardImage">
          <img src={product.image} alt={product.name} />
        </div>
      <Link to={`/products/${product._id}`}>
        <h2>{product.name}</h2>
      </Link>
      <p>{product.emoji}</p>
      <p>Category: {product.category}</p>
      <p>Sub-Category: {product.subCategory}</p>
      <p>Price: ${product.price}</p>
    </div>
    </div>
  );
};

export default CardProductDetail;