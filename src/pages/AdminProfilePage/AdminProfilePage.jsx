import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardProductDetail from '../../components/CardProductDetail/CardProductDetail';
import { getAll, getProductsByName } from '../../controllers/api/products';
import { getUser } from '../../utilities/users-service';

const AdminProfilePage = () => {
  const [products, setProducts] = useState([]);
  const user = getUser();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const userProducts = await getAll(); // Fetch all products from the controller
        setProducts(userProducts);
      } catch (error) {
        console.error('Error fetching user products:', error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product => product.created_by === user._id); // Filter products based on user ID

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
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
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