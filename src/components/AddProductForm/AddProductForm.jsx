import React, { useState } from 'react';
import { createProduct }from '../../utilities/products-api';
import './AddProductForm.css';
import { Navigate } from 'react-router-dom';


const defaultEmojis = {
  '📚': 'Book',
  '🏠': 'Decor',
  '🖼️': 'Decor',
  '🥂': 'Glassware',
  '🆕': 'New Category',
  '🪑': 'Chair',
  '🎨': 'Art',
  '🏺': 'Vase',
  '🪞': 'Mirror',
  '🛋️': 'Sofa',
  '🍷': 'Wine & Cocktail glass',
  '🍸': 'Martini glass',
  '🥃': 'Rocks glass',
};


const AddProductForm = () => {
  const [productData, setProductData] = useState({
    name: '',
    emoji: '',
    category: '',
    subCategory: '',
    description: '',
    price: '',
    tags: [],
    // photo: null, //icebox-photo-upload
  });
  const [redirectToProduct, setRedirectToProduct] = useState(null);
  const [newEmoji, setNewEmoji] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'photo') {
      setProductData({ ...productData, photo: e.target.files[0] });
    } else if (e.target.name === 'emoji') {
      setProductData({ ...productData, emoji: e.target.value });
    } else if (e.target.name === 'newEmoji') {
      setNewEmoji(e.target.value);
    } else {
      setProductData({ ...productData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const newProduct = {
        name: productData.name,
        emoji: productData.emoji,
        category: productData.category,
        subCategory: productData.subCategory,
        description: productData.description,
        price: productData.price,
        tags: productData.tags,
      };
      // photo: productData.photo, // This is a placeholder for now icebox-photo-upload
  
      const createdProduct = await createProduct(newProduct);
      console.log('Product added successfully');
  
      // Redirect to the newly created product's page
      setRedirectToProduct(`/products/${createdProduct._id}`);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };
  
  if (redirectToProduct) {
    return <Navigate to={redirectToProduct} replace={true} />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={productData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Emoji:</label>
        <select name="emoji" value={productData.emoji} onChange={handleChange}>
          <option value="">Select emoji...</option>
          {Object.keys(defaultEmojis).map((emoji, index) => (
            <option key={index} value={emoji}>{emoji} {defaultEmojis[emoji]}</option>
          ))}
          <option value="New Emoji">New Emoji {defaultEmojis['New Emoji']}</option>
        </select>
        {productData.emoji === "New Emoji" && (
          <input type="text" name="newEmoji" value={productData.newEmoji} onChange={handleChange} />
        )}
      </div>
      <div>
        <label>Category:</label>
        <select name="category" value={productData.category} onChange={handleChange}>
          <option value="Book">Book {defaultEmojis.Book}</option>
          <option value="Decor">Decor {defaultEmojis.Decor}</option>
          <option value="Glassware">Glassware {defaultEmojis.Glassware}</option>
          <option value="New Category">New Category {defaultEmojis['New Category']}</option>
        </select>
        {productData.category === "New Category" && (
          <input type="text" name="newCategory" value={productData.newCategory} onChange={handleChange} />
        )}
      </div>
      <div>
        <label>Sub-category:</label>
        <select name="subCategory" value={productData.subCategory} onChange={handleChange}>
          <option value="Furniture">Furniture {defaultEmojis.Furniture}</option>
          <option value="Vases">Vases {defaultEmojis.Vases}</option>
          <option value="Serving Sets">Serving Sets {defaultEmojis['Serving Sets']}</option>
          <option value="Art">Art {defaultEmojis.Art}</option>
          <option value="Mirrors">Mirrors {defaultEmojis.Mirrors}</option>
          <option value="New Subcategory">New Subcategory {defaultEmojis['New Subcategory']}</option>
        </select>
        {productData.subCategory === "New Subcategory" && (
          <input type="text" name="newSubCategory" value={productData.newSubCategory} onChange={handleChange} />
        )}
      </div>
      {/* <div>
        <label>Product Photo:</label>
        <input type="file" name="photo" onChange={handleChange} accept="image/*" /> / icebox-photo-upload
      </div> */}
      <div>
        <label>Description:</label>
        <input type="text" name="description" value={productData.description} onChange={handleChange} />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" name="price" value={productData.price} onChange={handleChange} />
      </div>
      <div>
        <label>Tags:</label>
        <input type="text" name="tags" value={productData.tags} onChange={handleChange} placeholder="comma-separated tags" />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;