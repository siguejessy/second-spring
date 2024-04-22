import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import InquiryForm from '../../components/InquiryForm/InquiryForm';
import { getProductById } from '../../utilities/products-api';

const ProductPage = ({ user }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProductById(productId);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [productId]);

  return (
    <div>
      {product && (
        <div>
          <ProductDetail product={product} />
          {user && (
            <div>
              <h2>Send an Inquiry</h2>
              <InquiryForm productId={productId} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductPage;