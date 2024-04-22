import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./AddProductForm.css";

const AddProductForm = ({ addProduct, user, categories }) => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    emoji: '',
    category: '',
    subCategory: '',
    tags: [],
    price: '',
    createdBy: user._id,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addProduct(newProduct);
    setNewProduct({
      name: '',
      emoji: '',
      category: '',
      subCategory: '',
      tags: [],
      price: '',
      createdBy: user._id,
    });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='add-product-form'>
        <div>
          <label>Select category for your product:</label>
          <br />
          <select name='category' value={newProduct.category} onChange={handleChange}>
            <option value="" disabled>Select category...</option>
            {categories.map(category => (
              <option key={category._id} value={category._id}>{category.name}</option>
            ))}
          </select>
        </div>
        <br />
        <div>
          <label>Sub-category:</label>
          <br />
          <input type="text" name='subCategory' value={newProduct.subCategory} onChange={handleChange} />
        </div>
        <br />
        <div>
          <label>Product name:</label>
          <br />
          <input type="text" name='name' value={newProduct.name} onChange={handleChange} />
        </div>
        <br />
        <div>
          <label>Emoji:</label>
          <br />
          <input type="text" name='emoji' value={newProduct.emoji} onChange={handleChange} />
        </div>
        <br />
        <div>
          <label>Tags (comma-separated):</label>
          <br />
          <input type="text" name='tags' value={newProduct.tags} onChange={handleChange} />
        </div>
        <br />
        <div>
          <label>Price:</label>
          <br />
          <input type="number" name='price' value={newProduct.price} onChange={handleChange} />
        </div>
        <br />
      </div>
      <button type="submit">Create Product</button>
    </form>
  );
};

export default AddProductForm;