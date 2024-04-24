import React, { useState, useEffect } from 'react';
import './UpdateProductForm.css';
import { updateProduct } from '../../utilities/products-api';
import { useNavigate } from 'react-router-dom';
import { getProductById } from '../../utilities/products-api';

const UpdateProductForm = ({ productId }) => {
  const [productData, setProductData] = useState({
    name: '',
    emoji: '',
    category: '',
    subCategory: '',
    description: '',
    price: '',
  });

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const product = await getProductById(productId);
        setProductData(product);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProduct({ ...productData, id: productId });
      console.log('Product updated successfully');
      navigate(`/products/${productId}`);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };
  
  return (
    <div>
      <h1>Update Product</h1>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={productData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Emoji:</label>
          <input type="text" name="emoji" value={productData.emoji} onChange={handleChange} />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" name="category" value={productData.category} onChange={handleChange} />
        </div>
        <div>
          <label>Sub-category:</label>
          <input type="text" name="subCategory" value={productData.subCategory} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" name="description" value={productData.description} onChange={handleChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={productData.price} onChange={handleChange} />
        </div>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default UpdateProductForm;
