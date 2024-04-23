import React, { useState, useEffect } from 'react';
import "./AddProductForm.css";
import { createProduct } from '../../utilities/products-api';
import { getAllCategories, getAllTags, getSubCategoriesByCategoryId } from '../../utilities/categories-api';

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
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchCategoriesAndTags = async () => {
      try {
        const categoriesData = await getAllCategories();
        setCategories(categoriesData);
        const tagsData = await getAllTags();
        setTags(tagsData);
      } catch (error) {
        console.error('Error fetching categories and tags:', error);
      }
    };

    fetchCategoriesAndTags();
  }, []);

  const handleCategoryChange = async (e) => {
    const selectedCategory = e.target.value;
    setProductData({
      ...productData,
      category: selectedCategory,
      subCategory: '', // Reset sub-category when category changes
    });

    try {
      const subCategoriesData = await getSubCategoriesByCategoryId(selectedCategory);
      setSubCategories(subCategoriesData);
    } catch (error) {
      console.error('Error fetching sub-categories:', error);
    }
  };

  const handleSubCategoryChange = (e) => {
    setProductData({ ...productData, subCategory: e.target.value });
  };

  const handleTagChange = (e) => {
    const selectedTags = Array.from(e.target.selectedOptions, option => option.value);
    setProductData({ ...productData, tags: selectedTags });
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
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Category:</label>
        <select name="category" value={productData.category} onChange={handleCategoryChange}>
          <option value="">Select category...</option>
          <option value="book">Book</option>
          <option value="decor">Decor</option>
          <option value="glassware">Glassware</option>
          {categories.map(category => (
            <option key={category._id} value={category._id}>{category.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Sub-category:</label>
        <select name="subCategory" value={productData.subCategory} onChange={handleSubCategoryChange}>
          <option value="">Select sub-category...</option>
          <option value="art">Art</option>
          <option value="furniture">Furniture</option>
          <option value="mirror">Mirror</option>
          <option value="serving-set">Serving Set</option>
          <option value="vase">Vase</option>
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
      <div>
        <label>Tags:</label>
        <input type="text" name="tags" value={productData.tags} onChange={handleChange} />
        <p>Enter tags separated by commas (e.g., example-of-tag, second-example, another, another-tag)</p>
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;