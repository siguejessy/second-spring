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

  const isAdmin = user && user.isAdmin;

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
              {/* Add update option here */}
            </div>
          )}
          {!isAdmin && <button>Inquire about this product</button>}
          {/* Add inquire form component here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductPage;