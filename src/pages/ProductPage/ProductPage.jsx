import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import InquiryForm from '../../components/InquiryForm/InquiryForm';

const ProductPage = ({ user }) => {
  // const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


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
