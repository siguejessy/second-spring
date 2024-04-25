import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
  const navigate = useNavigate();
  const [newSearch, setNewSearch] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    if (newSearch.length > 0) {
      navigate(`/search/${newSearch}`); // Redirect to /search/:query route
      setNewSearch("");
    } else {
      alert("Search bar empty");
    }
  }

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav id="navbar" className="navbar">
      <form className="nav-search" onSubmit={handleSearch}>
        <input
          onChange={(evt) => setNewSearch(evt.target.value)}
          className="nav-search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={newSearch}
        />
        <button className="nav-search-btn" type="submit">Search </button>
      </form>
      <div>
        <Link to="/shop">Shop</Link>
        &nbsp; | &nbsp;
        {/* ice-box revisit to add shop-by-category */}
        {/* <Link to="/shop/books">Books</Link>
        &nbsp; | &nbsp;
        <Link to="/shop/decor">Decor</Link>
        &nbsp; | &nbsp; 
        <Link to="/shop/glassware">Glassware</Link>
        &nbsp; | &nbsp; */} 
        <Link to="/about">About</Link>
        {user ? (
          <>
            &nbsp; | &nbsp;
            <Link to="/profile">My Profile</Link>
            &nbsp; | &nbsp;
            <Link className="logout" to="" onClick={handleLogOut}>
              Log Out
            </Link>
            <div className="nav-welcome">
              <p>Welcome, {user.username}!</p>
            </div>
          </>
        ) : (
          <>
            &nbsp; | &nbsp;
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
}