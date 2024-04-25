import React from 'react';
import { Link } from 'react-router-dom';
import './AdminProfilePage.css';

const AdminProfilePage = () => {
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const fetchedProducts = await getProductsByIds(user.products); // Fetch products by IDs using index function
  //       setProducts(fetchedProducts);
  //     } catch (error) {
  //       console.error('Error fetching user products:', error);
  //     }
  //   };

  //   fetchProducts();
  // }, [user.products]); // Add user.products to the dependency array

  return (
    <main className='AdminProfilePage'>
      <h2>Welcome to your Admin Profile Page</h2>
      <p>Here you can add new products to your catalogue or view your existing products.</p>
        <div>
        <Link to="/products/new">
          <button>Add a Product</button>
        </Link>
      </div>
      <div>
        <Link to="/products">
        <button>View My Product Catalogue</button>
        </Link>
      </div>
      <div className='inquiries'>
        <h3>Product Inquiries</h3>
        <p>Here you can view inquiries about your products.</p>
        <Link to="/inquiries">
          <button>View Inquiries</button>
        </Link>
      </div>
    </main>
  );
};

export default AdminProfilePage;
