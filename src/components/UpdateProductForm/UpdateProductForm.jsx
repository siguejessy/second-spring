import React, { useState, useEffect } from 'react';
import "./UpdateProductForm.css";

const UpdateProductForm = ({ productId }) => {
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
    // Fetch product details from backend
    fetch(`/api/products/${productId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        return response.json();
      })
      .then(data => {
        setProductData(data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });


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
  }, [productId]);

  useEffect(() => {

    if (productData.category) {
      fetch(`/api/subcategories?category=${productData.category}`)
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
    }
  }, [productData.category]);

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    fetch(`/api/products/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update product');
        }
        console.log('Product updated successfully');
      })
      .catch(error => {
        console.error('Error updating product:', error);
      });
  };

  const handleDelete = () => {
    fetch(`/api/products/${productId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete product');
        }
        console.log('Product deleted successfully');
      })
      .catch(error => {
        console.error('Error deleting product:', error);
      });
  };

  return (
    <div>
      <form>
        <div>
          <label>Category:</label>
          <select name="category" value={productData.category} onChange={handleChange}>
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
        <button type="button" onClick={handleUpdate}>Update Product</button>
        <button type="button" onClick={handleDelete}>Delete Product</button>
      </form>
    </div>
  );
};

export default UpdateProductForm;