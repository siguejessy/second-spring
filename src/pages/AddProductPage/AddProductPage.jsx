import React, { useEffect, useState } from 'react';
import AddProductForm from '../../components/AddProductForm/AddProductForm';
import { getUser } from '../../utilities/users-service';
import './AddProductPage.css';

const AddProductPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const role = await getUser();
      setIsAdmin(role === 'admin');
    };

    fetchUser(); // Corrected function name
  }, []);

  // If isAdmin is not yet determined, you can render a loading indicator
  if (isAdmin === null) {
    return <div>Loading...</div>;
  }

  // If the user is not an admin, redirect them to another page
  if (!isAdmin) {
    return <redirect to="/" />;
  }

  // Render the AddProductForm if the user is an admin
  return (
    <main className='AddProductPage'>
      <h2>Add a New Product</h2>
      <AddProductForm />
    </main>
  );
};

export default AddProductPage;
