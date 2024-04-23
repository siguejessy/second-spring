import React, { useState, useEffect } from 'react';
import CardProductDetail from '../../components/CardProductDetail/CardProductDetail';
import { getAll } from '../../utilities/products-api';

const ShopGlasswarePage = () => {
  const [glasswareProducts, setGlasswareProducts] = useState([]);

  useEffect(() => {
    const fetchGlasswareProducts = async () => {
      try {
        const allProducts = await getAll();
        const glasswareProducts = allProducts.filter(product => product.category === 'Glassware');
        setGlasswareProducts(glasswareProducts);
      } catch (error) {
        console.error('Error fetching glassware products:', error);
      }
    };

    fetchGlasswareProducts();
  }, []);

  return (
    <div className='ShopGlasswarePage'>
      <h2>Shop Glassware</h2>
      <div className='product-gallery'>
        {glasswareProducts.map(product => (
          <CardProductDetail key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopGlasswarePage;
