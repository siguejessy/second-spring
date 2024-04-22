import './ProfilePage.css';
import { Link } from 'react-router-dom';
// import Logo from '../../components/Logo/Logo';
import { getUser } from '../../utilities/users-service';
import AddProductForm from '../../components/AddProductForm/AddProductForm';
  
  export default function ProfilePage() {
  const user = getUser();
  return (
      <div className='profile'>
      <img className="profile-photo" src={user.urlImage} alt="profile" width="150" height="150" />
      {/* <img className="profile-photo" src={user.urlImage} alt="profile" width="150" height="150" /> // icebox-profile-photo */}
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
      </div>
      <br />
      <Link to="/inquiries">
            <button>view my inquiry list</button>
          </Link>
      <br />

      <hr />
      {user && user.role === 'admin' ? (
        <div className='admin-dashboard'>
        <h3>Current Product Catalogue</h3>
        <div>
          <Link to="/add-product"><button>Add a new product</button></Link>
        </div>
        </div>
        ) : (
        <div>
        {/* Add content for customers (non-admins) here */}
        </div>
        )}
        </div>
);
}