import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardProductDetail from '../../components/CardProductDetail/CardProductDetail';
import { deleteProduct, getAdminProducts } from '../../utilities/products-api';

const AdminProfilePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const adminProducts = await getAdminProducts();
        setProducts(adminProducts);
      } catch (error) {
        console.error('Error fetching admin products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      await deleteProduct(productId);
      setProducts(products.filter(product => product.id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

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
            <button onClick={() => handleDelete(product.id)}>Delete</button>
            <Link to={`/products/${product.id}/edit`}>
              <button>Update</button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AdminProfilePage;