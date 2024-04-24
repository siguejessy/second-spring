import React, { useState, useEffect } from 'react';
import { index } from '../../utilities/products-api';
import CardProductDetail from '../../components/CardProductDetail/CardProductDetail';
import { Link } from 'react-router-dom';
import './ShopPage.css';

const ShopPage = () => {
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
      <h1>Shop</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="product-grid">
        {!loading &&
          products.map(product => (
            <Link key={product._id} to={`/products/${product._id}`}>
              <CardProductDetail product={product} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ShopPage;