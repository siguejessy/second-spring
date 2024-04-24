import React, { useEffect, useState } from 'react';
import { getUser } from '../../utilities/users-service';
import AdminProfilePage from '../../pages/AdminProfilePage/AdminProfilePage';
import CustomerProfilePage from '../../pages/CustomerProfilePage/CustomerProfilePage';

const ProfilePage = () => {
  const [user, setUser] = useState(getUser());

  return (
    <main className='ProfilePage'>
      Hi, {user.username}!
      <br />
      Profile Email: {user.email}
      <br />
      Profile Role: {user.role}
      <br />
      Profile Products: {user.products}
      <br />
      <br />

    <>
      {user.role === 'customer' ? <CustomerProfilePage /> : <AdminProfilePage />}
    </>
    </main>
  );
};

export default ProfilePage;
