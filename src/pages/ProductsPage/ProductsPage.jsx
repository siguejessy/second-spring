import React, { useState, useEffect } from 'react';
import { index } from '../../utilities/products-api';
import CardProductDetail from '../../components/CardProductDetail/CardProductDetail';
import GoBackButton from '../../components/GoBackBtn/GoBackBtn';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await index();
        setProducts(fetchedProducts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to fetch products. Please try again later.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <GoBackButton />
      <h1>All Products</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="product-list">
        {!loading && !error && (
          products.map(product => (
            <CardProductDetail key={product._id} product={product}/>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
