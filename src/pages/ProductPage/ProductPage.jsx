import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, deleteProduct } from '../../utilities/products-api';
import { getUser } from '../../utilities/users-service';
import GoBackButton from '../../components/GoBackBtn/GoBackBtn';
import UpdateProductForm from '../../components/UpdateProductForm/UpdateProductForm';
import InquiryForm from '../../components/InquiryForm/InquiryForm'; // Import the InquiryForm component

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [user, setUser] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
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
      navigate('/products');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleUpdate = () => {
    setShowUpdateForm(prevState => !prevState); // Toggle showUpdateForm state
  };
 
  const sendInquiry = () => {
    setShowInquiryForm(prevState => !prevState);
  };

  const isAdmin = user && user.role === 'admin';
  const isCustomer = user && user.role === 'customer';

  return (
    <div>
      <GoBackButton />
      {product ? (
        <div>
          {product.image && <img src={product.image} alt={product.name} />}
          <h2>{product.name}</h2>
          <p>Emoji: {product.emoji}</p>
          <p>Category: {product.category}</p>
          <p>Subcategory: {product.subCategory}</p>
          <p>Description: {product.description}</p>
          <p>Price: ${product.price}</p>
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
      
      {isCustomer && (
  <button onClick={sendInquiry}>
    {showInquiryForm ? 'Hide Inquiry Form' : 'Send Inquiry'}
  </button>
)}

{showInquiryForm && <InquiryForm productId={id} />}

    </div>
  );
};

export default ProductPage;