import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';

const CustomerProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user when component mounts
    const fetchedUser = getUser();
    setUser(fetchedUser);
  }, []);

  if (!user) {
    // If user is not yet fetched, show loading spinner or placeholder
    return <div>Loading...</div>;
  }

  return (
    <main className="CustomerProfilePage">
      <div className="profile">
        {/* <img className="profile-photo" src={user.urlImage} alt="profile" width="150" height="150" /> */}
        <br />
        <br />
        <div className="setting-profile-details">
          <strong>User Name:</strong> {user.username}
          <br />
          <strong>Email:</strong> {user.email}
          <br />
          <strong>Full Name:</strong> {user.firsrname} {user.lastname}
          <br />
          <strong>Phone #:</strong> {user.customerphone}
        </div>
        <br />
        <Link to="/inquiries">
          <button>view my inquiry list</button>
        </Link>
        <br />
        <hr />
      </div>

  </main>
  );
};

export default CustomerProfilePage;