import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import ShopPage from '../ShopAllPage/ShopAllPage'
import ShopAllPage from '../ShopPage/ShopPage'
import ProfilePage from '../ProfilePage/ProfilePage'
import InquiriesPage from '../InquiriesPage/InquiriesPage'
import ShopBooksPage from '../ShopBooksPage/ShopBooksPage'
import ShopDecorPage from '../ShopDecorPage/ShopDecorPage'
import ShopGlasswarePage from '../ShopGlasswarePage/ShopGlasswarePage'
import ProductPage from '../ProductPage/ProductPage';
import AboutPage from '../AboutPage/AboutPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState({});
  // const [user, setUser] = useState(getUser()); // come back to this
  return (
    <main className="App">
      { user ?
      <>
          <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Navigate to="/shop" />} /> {/* Navigate to /shop when "/" is accessed */}
          <Route path="/shop" element={<ShopPage />} /> {/* Render ShopPage as the homepage */}
          <Route path="/shop/all" element={<ShopAllPage />} />
          <Route path="/shop/books" element={<ShopBooksPage />} />
          <Route path="/shop/decor" element={<ShopDecorPage user={user} setUser={setUser} />} />
          <Route path="/shop/glassware" element={<ShopGlasswarePage user={user} setUser={setUser} />} />
          <Route path="shop/all/:category" element={<ShopAllPage/>} />
          <Route path="/product/:id" element={<ProductPage user={user} setUser={setUser} />} />
          <Route path="/profile" element={<ProfilePage user={user} setUser={setUser} />} /> {/* if user === customer render profile else (admin) render admin profile page component */}
          <Route path="/profile/inquiries" element={<InquiriesPage user={user} setUser={setUser} />} /> {/* page for the customer & admin to view their inquiries */}
          {/* <Route path="/login" element={<AuthPage setUser={setUser} />} /> */} {/* I want the profile icon to render the login form if user is not logged in & the user/admin profile if they are logged in */}
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </>
        :
        <ShopPage />
      }
    </main>
  );
}
