import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  const navigate = useNavigate()
    const [newSearch, setNewSearch] = useState("")

    function handleSearch(e){
      e.preventDefault()
      if (newSearch.length > 0){
        navigate("/search", {state: newSearch})
        setNewSearch("")
      }
      else {
        alert("Search bar empty")
      }
    }

  return (
    <>
      <nav id="navbar" className="navbar">
      <form className="nav-search"onSubmit={handleSearch}>
          <input onChange={(evt) => setNewSearch(evt.target.value)} className="nav-search-input" type="search" placeholder="Search" aria-label="Search" value={newSearch}/>
          <button className="nav-search-btn " type="submit"></button>
        </form>
        <Link to="/shop">Shop</Link>
        &nbsp; | &nbsp;
        <Link to="/shop/all">All</Link>
        &nbsp; | &nbsp;
        <Link to="/shop/books">Books</Link>
        &nbsp; | &nbsp;
        <Link to="/shop/decor">Decor</Link>
        &nbsp; | &nbsp;
        <Link to="/shop/glassware">Glassware</Link>
        &nbsp; | &nbsp;
        <Link to="/about">About</Link>
        &nbsp; | &nbsp;
        <Link to="login">Login</Link>
        &nbsp; | &nbsp;
        <Link to="/profile">Profile</Link>
        &nbsp; | &nbsp;
        <Link className="logout" to="" onClick={handleLogOut}>
            Log Out
        </Link>
      <div className="logo">
      <p>Welcome, {user.username}</p>
      </div>
      </nav>
    </>
  );
}
