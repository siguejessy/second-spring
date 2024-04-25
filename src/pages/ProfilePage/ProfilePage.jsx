import React, { useState } from 'react';
import { getUser } from '../../utilities/users-service';
import AdminProfilePage from '../../pages/AdminProfilePage/AdminProfilePage';
import CustomerProfilePage from '../../pages/CustomerProfilePage/CustomerProfilePage';

const ProfilePage = () => {
  const [user, setUser] = useState(getUser());

  return (
    <main className='ProfilePage'>
      <strong>Registered Email:</strong> {user.email}
      <br />
      <strong>Profile Role: </strong> {user.role}
      <br />
      <br />
    <>
      {user.role === 'customer' ? <CustomerProfilePage /> : <AdminProfilePage />}
    </>
    </main>
  );
};

export default ProfilePage;
