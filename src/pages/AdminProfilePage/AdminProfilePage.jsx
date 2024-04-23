import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardProductDetail from '../../components/CardProductDetail/CardProductDetail';
import { getAll } from '../../utilities/products-api';
import { getUser } from '../../utilities/users-service';

const AdminProfilePage = () => {
  const [products, setProducts] = useState([]);
  const user = getUser();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await getAll();
        // Filter products based on the created_by field
        const userProducts = allProducts.filter(product => product.created_by === user.id);
        setProducts(userProducts);
      } catch (error) {
        console.error('Error fetching user products:', error);
      }
    };

    fetchProducts();
  }, [user.id]); //

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
        {products.map(product => (
          <div key={product.id}>
            <CardProductDetail product={product} />
            {/* Add delete and update functionality as needed */}
          </div>
        ))}
      </div>
    </main>
  );
};

export default AdminProfilePage;