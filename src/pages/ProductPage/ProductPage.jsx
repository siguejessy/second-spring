import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, deleteProduct } from '../../utilities/products-api';
import { getUser } from '../../utilities/users-service';
import GoBackButton from '../../components/GoBackBtn/GoBackBtn';
import UpdateProductForm from '../../components/UpdateProductForm/UpdateProductForm';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [user, setUser] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const navigate = useNavigate();

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
      navigate('/products');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleUpdate = () => {
    // Show the update form
    setShowUpdateForm(true);
  };

  const isAdmin = user && user.role === 'admin';

  return (
    <div>
      <GoBackButton />
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
              <button onClick={handleUpdate}>Update this product</button>
            </div>
          )}
          {showUpdateForm && <UpdateProductForm productId={id} />}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductPage;