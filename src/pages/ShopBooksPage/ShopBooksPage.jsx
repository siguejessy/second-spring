import React, { useState, useEffect } from 'react';
import CardProductDetail from '../../components/CardProductDetail/CardProductDetail';
import { getAll } from '../../utilities/products-service';

const ShopBooksPage = () => {
  const [bookProducts, setBookProducts] = useState([]);

  useEffect(() => {
    const fetchBookProducts = async () => {
      try {
        const allProducts = await getAll();
        const bookProducts = allProducts.filter(product => product.category === 'Book');
        setBookProducts(bookProducts);
      } catch (error) {
        console.error('Error fetching book products:', error);
      }
    };

    fetchBookProducts();
  }, []);

  return (
    <div className='ShopBooksPage'>
      <h2>Shop Books</h2>
      <div className='product-gallery'>
        {bookProducts.map(product => (
          <CardProductDetail key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopBooksPage;