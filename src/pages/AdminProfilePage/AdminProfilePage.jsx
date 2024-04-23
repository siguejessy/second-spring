import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardProductDetail from '../../components/CardProductDetail/CardProductDetail';
import { getUser } from '../../utilities/users-service';

const AdminProfilePage = () => {
  const [products, setProducts] = useState([]);
  const user = getUser();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProductsByIds(user.products); // Fetch products by IDs using index function
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching user products:', error);
      }
    };

    fetchProducts();
  }, [user.products]); // Add user.products to the dependency array

  return (
    <main className='AdminProfilePage'>
      <h2>Welcome to Admin Profile Page</h2>
      <div>
        <Link to="/products/new">
          <button>Add a Product</button>
        </Link>
      </div>
      <div>
        <button>View My Catalogue</button>
        {products.length > 0 ? (
          products.map(product => (
            <div key={product._id}>
              <CardProductDetail product={product} />
              {/* Add delete and update functionality as needed */}
            </div>
          ))
        ) : (
          <div>No products available</div>
        )}
      </div>
    </main>
  );
};

export default AdminProfilePage;
