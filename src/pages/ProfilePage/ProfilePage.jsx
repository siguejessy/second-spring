import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AdminProfilePage from '../../pages/AdminProfilePage/AdminProfilePage';
import CustomerProfilePage from '../../pages/CustomerProfilePage/CustomerProfilePage';

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {

    const fetchedUser = getUser();
    setUser(fetchedUser);
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {user.role === 'customer' ? <CustomerProfilePage /> : <AdminProfilePage />}
    </>
  );
};

export default ProfilePage;
