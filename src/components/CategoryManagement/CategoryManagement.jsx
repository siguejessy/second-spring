import React, { useState, useEffect } from 'react';
import { addCategory, updateCategory, deleteCategory, addSubCategory, updateSubCategory, deleteSubCategory, getAllCategories, getSubCategoriesByCategoryId } from '../../utilities/categories-api';

const CategoryManagement = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [formData, setFormData] = useState({
    categoryName: '',
    subCategoryName: '',
    selectedCategory: '',
    selectedSubCategory: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await getAllCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      const newCategory = await addCategory(formData.categoryName);
      setCategories([...categories, newCategory]);
      setFormData({ ...formData, categoryName: '' });
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  const handleAddSubCategory = async (e) => {
    e.preventDefault();
    try {
      const newSubCategory = await addSubCategory(formData.subCategoryName, formData.selectedCategory);
      setSubCategories([...subCategories, newSubCategory]);
      setFormData({ ...formData, subCategoryName: '' });
    } catch (error) {
      console.error('Error adding sub-category:', error);
    }
  };

  const handleUpdateCategory = async (e) => {
    e.preventDefault();
    try {
      await updateCategory(formData.selectedCategory, formData.categoryName);
      const updatedCategories = categories.map(category => {
        if (category._id === formData.selectedCategory) {
          return { ...category, name: formData.categoryName };
        }
        return category;
      });
      setCategories(updatedCategories);
      setFormData({ ...formData, categoryName: '' });
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  const handleUpdateSubCategory = async (e) => {
    e.preventDefault();
    try {
      await updateSubCategory(formData.selectedSubCategory, formData.subCategoryName);
      const updatedSubCategories = subCategories.map(subCategory => {
        if (subCategory._id === formData.selectedSubCategory) {
          return { ...subCategory, name: formData.subCategoryName };
        }
        return subCategory;
      });
      setSubCategories(updatedSubCategories);
      setFormData({ ...formData, subCategoryName: '' });
    } catch (error) {
      console.error('Error updating sub-category:', error);
    }
  };

  const handleDeleteCategory = async () => {
    try {
      await deleteCategory(formData.selectedCategory);
      const updatedCategories = categories.filter(category => category._id !== formData.selectedCategory);
      setCategories(updatedCategories);
      setSubCategories([]);
      setFormData({ ...formData, selectedCategory: '', selectedSubCategory: '' });
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const handleDeleteSubCategory = async () => {
    try {
      await deleteSubCategory(formData.selectedSubCategory);
      const updatedSubCategories = subCategories.filter(subCategory => subCategory._id !== formData.selectedSubCategory);
      setSubCategories(updatedSubCategories);
      setFormData({ ...formData, selectedSubCategory: '' });
    } catch (error) {
      console.error('Error deleting sub-category:', error);
    }
  };

  const handleCategoryChange = async (e) => {
    const selectedCategory = e.target.value;
    setFormData({ ...formData, selectedCategory, selectedSubCategory: '' });
    try {
      const subCategoriesData = await getSubCategoriesByCategoryId(selectedCategory);
      setSubCategories(subCategoriesData);
    } catch (error) {
      console.error('Error fetching sub-categories:', error);
    }
  };

  return (
    <div>
      <h3>Add Category</h3>
      <form onSubmit={handleAddCategory}>
        <input
          type="text"
          value={formData.categoryName}
          onChange={(e) => setFormData({ ...formData, categoryName: e.target.value })}
          placeholder="Enter category name"
        />
        <button type="submit">Add Category</button>
      </form>

      <h3>Add Sub-Category</h3>
      <form onSubmit={handleAddSubCategory}>
        <input
          type="text"
          value={formData.subCategoryName}
          onChange={(e) => setFormData({ ...formData, subCategoryName: e.target.value })}
          placeholder="Enter sub-category name"
        />
        <select
          value={formData.selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Select category</option>
          {categories.map(category => (
            <option key={category._id} value={category._id}>{category.name}</option>
          ))}
        </select>
        <button type="submit">Add Sub-Category</button>
      </form>

      <h3>Update Category</h3>
      <form onSubmit={handleUpdateCategory}>
        <select
          value={formData.selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Select category</option>
          {categories.map(category => (
            <option key={category._id} value={category._id}>{category.name}</option>
          ))}
        </select>
        <input
          type="text"
          value={formData.categoryName}
          onChange={(e) => setFormData({ ...formData, categoryName: e.target.value })}
          placeholder="Enter new category name"
        />
        <button type="submit">Update Category</button>
      </form>

      <h3>Update Sub-Category</h3>
      <form onSubmit={handleUpdateSubCategory}>
        <select
          value={formData.selectedSubCategory}
          onChange={(e) => setFormData({ ...formData, selectedSubCategory: e.target.value })}
        >
          <option value="">Select sub-category</option>
          {subCategories.map(subCategory => (
            <option key={subCategory._id} value={subCategory._id}>{subCategory.name}</option>
          ))}
        </select>
        <input
          type="text"
          value={formData.subCategoryName}
          onChange={(e) => setFormData({ ...formData, subCategoryName: e.target.value })}
          placeholder="Enter new sub-category name"
        />
        <button type="submit">Update Sub-Category</button>
      </form>

      <h3>Delete Category</h3>
      <button onClick={handleDeleteCategory}>Delete Category</button>

      <h3>Delete Sub-Category</h3>
      <button onClick={handleDeleteSubCategory}>Delete Sub-Category</button>
    </div>
  );
};

export default CategoryManagement;