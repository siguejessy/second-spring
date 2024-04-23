import React, { useState, useEffect } from 'react';
import "./AddProductForm.css";

const AddProductForm = () => {
  const [productData, setProductData] = useState({
    name: '',
    emoji: '',
    category: '',
    subCategory: '',
    description: '',
    price: '',
  });
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    fetch('/api/categories')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        return response.json();
      })
      .then(data => {
        setCategories(data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setProductData({
      ...productData,
      category: selectedCategory,
      subCategory: '', // Reset sub-category when category changes
    });

    fetch(`/api/subcategories?category=${selectedCategory}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch sub-categories');
        }
        return response.json();
      })
      .then(data => {
        setSubCategories(data);
      })
      .catch(error => {
        console.error('Error fetching sub-categories:', error);
      });
  };

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to add product');
        }
        return response.json();
      })
      .then(data => {
        console.log('Product added successfully:', data);
        setProductData({
          name: '',
          emoji: '',
          category: '',
          subCategory: '',
          description: '',
          price: '',
        });
      })
      .catch(error => {
        console.error('Error adding product:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Category:</label>
        <select name="category" value={productData.category} onChange={handleCategoryChange}>
          <option value="">Select category...</option>
          {categories.map(category => (
            <option key={category._id} value={category._id}>{category.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Sub-category:</label>
        <select name="subCategory" value={productData.subCategory} onChange={handleChange}>
          <option value="">Select sub-category...</option>
          {subCategories.map(subCategory => (
            <option key={subCategory._id} value={subCategory._id}>{subCategory.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={productData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Emoji:</label>
        <input type="text" name="emoji" value={productData.emoji} onChange={handleChange} />
      </div>
      <div>
        <label>Description:</label>
        <textarea rows="3" cols="35" name="description" value={productData.description} onChange={handleChange} />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" name="price" value={productData.price} onChange={handleChange} />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;