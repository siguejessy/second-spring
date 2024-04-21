import './Product.css';
import React from 'react';


export default function Product({ product, handleAddToFavorites }) {
  return (
    <div className="Product">
      <div className="emoji flex-ctr-ctr">{product.emoji}</div>
      <div className="name">{product.name}</div>
      <div className="buy">
        <span>${product.price.toFixed(2)}</span>
        {/* {edit adding to handleAddToFavorites} */}
        <button className="btn-sm" onClick={() => handleAddToFavorites(product._id)}> 
          ADD
        </button>
      </div>
    </div>
  );
}