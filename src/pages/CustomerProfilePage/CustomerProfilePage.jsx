import React, { useEffect, useState } from 'react';
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
        <div className="setting-profile-details">
        </div>
        <div className="profile-details">
          <h2>{user.username}'s Profile</h2>
        </div>
        <br />
        {/* icebox, customer can view the inquiries they've sent */}
        {/* <Link to="/inquiries">
          <button>view my inquiry list</button>
        </Link> */}
        <br />
        <hr />
      </div>

  </main>
  );
};

export default CustomerProfilePage;