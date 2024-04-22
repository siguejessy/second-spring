import './ProfilePage.css';
import { Link } from 'react-router-dom';
// import Logo from '../../components/Logo/Logo';
import { getUser } from '../../utilities/users-service';
  
  export default function ProfilePage() {
  const user = getUser();
  return (
      <div className='profile'>
      <img className="profile-photo" src={user.urlImage} alt="profile" width="150" height="150" />
      <br />
      <br />
      <div className='setting-profile-details'>
              <strong>User Name:</strong> {user.username}
      <br />
              <strong>Email:</strong> {user.email}
      <br />
              <strong>Full Name:</strong> {user.firsrname} {user.lastname}
      <br />
              <strong>Phone #:</strong> {user.customerphone}
      <br />
              <strong>Payment Details</strong> {user.paymentinfo}
      </div>
      <br />
      <Link to="/profile">
            <button>Edit my Profile</button>
          </Link>
      <br />
      <hr />
      <br />
      {user && user.role === 'Admin' ? (
        <div>
          <br />
        <h1>Vendor Portal</h1>
          <br />
        <Link to="/VendorAdminPage"><button>View my admin profile</button></Link>
        </div>
        ) : (
        <div>
        {/* Add content for customers (non-admins) here */}
        </div>
        )}
        </div>
);
}