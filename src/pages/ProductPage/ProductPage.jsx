import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import InquiryForm from '../../components/InquiryForm/InquiryForm';
import { getProductById } from '../../utilities/products-service';

const ProductPage = ({ user }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProductById(productId); // Fetch product by ID
        setProduct(fetchedProduct);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setError('Failed to fetch product');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {product && (
        <div>
          <ProductDetail product={product} />
          {user && (
            <div>
              <h2>Send an Inquiry</h2>
              <InquiryForm productId={product._id} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
