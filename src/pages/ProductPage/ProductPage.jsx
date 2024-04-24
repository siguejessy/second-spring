import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById, deleteProduct } from '../../utilities/products-api';
import { getUser } from '../../utilities/users-service';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProductById(id);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    const fetchUser = async () => {
      const fetchedUser = await getUser();
      setUser(fetchedUser);
    };

    fetchProduct();
    fetchUser();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteProduct(id);
      // Redirect or display a success message
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      // Redirect to a form to update the product
    } catch (error) {
      console.error('Error updating product:', error);
    }
  }

  const isAdmin = user && user.role === 'admin';

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>Emoji: {product.emoji}</p>
          <p>Category: {product.category}</p>
          <p>Subcategory: {product.subCategory}</p>
          <p>Description: {product.description}</p>
          <p>Price: {product.price}</p>
          {isAdmin && (
            <div>
              <button onClick={handleDelete}>Delete this product</button>
              <button onClick={handleUpdate}>Update this product</button> {/* Add update option here */}
            </div>
          )}
          {!isAdmin && <button>Inquire about this product</button>}
          {/* Add inquire form component here */}
          <form>
            <label htmlFor="inquiry">Inquiry:</label>
            <textarea id="inquiry" name="inquiry" rows="4" cols="50"></textarea>
            {/* <button onClick={handleInquiry}>Submit Inquiry</button> */}
          </form>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductPage;