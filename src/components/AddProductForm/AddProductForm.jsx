import React, { useState, useEffect } from 'react';
import "./AddProductForm.css";
import { createProduct } from '../../utilities/products-api';
import { getCategoryByName, getSubCategoriesByCategoryId } from '../../utilities/categories-api';
import { redirect } from 'react-router-dom';

const AddProductForm = () => {
  const [productData, setProductData] = useState({
    name: '',
    emoji: '',
    category: '',
    subCategory: '',
    description: '',
    price: '',
    tags: [],
  });
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [redirectToProfile, setRedirectToProfile] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategoryByName();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = async (e) => {
    const selectedCategoryName = e.target.value;
    try {
      const category = await getCategoryByName(selectedCategoryName);
      setProductData({
        ...productData,
        category: category._id,
        subCategory: '', // Reset sub-category when category changes
      });
      const subCategoriesData = await getSubCategoriesByCategoryId(category._id);
      setSubCategories(subCategoriesData);
    } catch (error) {
      console.error('Error fetching category or sub-categories:', error);
    }
  };

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProduct(productData);
      console.log('Product added successfully');
      setProductData({
        name: '',
        emoji: '',
        category: '',
        subCategory: '',
        description: '',
        price: '',
        tags: [],
      });
      // Redirect to admin profile page after adding the product
      setRedirectToProfile(true);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  if (redirectToProfile) {
    return <redirect to="/profile" />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Category:</label>
        <select name="category" value={productData.category} onChange={handleCategoryChange}>
          <option value="">Select category...</option>
          {categories.map(category => (
            <option key={category._id} value={category.name}>{category.name}</option>
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
      {/* Other input fields */}
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;