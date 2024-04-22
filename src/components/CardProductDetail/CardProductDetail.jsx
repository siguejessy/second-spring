import './ProductDetail.css';
import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>{product.emoji}</p>
      <p>Category: {product.category}</p>
      <p>Sub-Category: {product.subCategory}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;