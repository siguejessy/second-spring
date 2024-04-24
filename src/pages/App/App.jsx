import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import ShopPage from '../ShopPage/ShopPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import InquiriesPage from '../InquiriesPage/InquiriesPage';
import ShopBooksPage from '../ShopBooksPage/ShopBooksPage';
import ShopDecorPage from '../ShopDecorPage/ShopDecorPage';
import ShopGlasswarePage from '../ShopGlasswarePage/ShopGlasswarePage';
import ProductPage from '../ProductPage/ProductPage';
import AboutPage from '../AboutPage/AboutPage'; 
import AuthPage from '../AuthPage/AuthPage';
import { getUser } from '../../utilities/users-service';
import AddProductForm from '../../components/AddProductForm/AddProductForm';
import ProductsPage from '../ProductsPage/ProductsPage';


export default function App() {
  const [user, setUser] = useState(getUser());
  const location = useLocation();

  useEffect(() => {
    // Force a re-render whenever the location changes
  }, [location]);
 
  return (
    <>
      <main className="App">
        <NavBar
          user={user}
          setUser={setUser}
        />
        <Routes>
          <Route path="/" element={<Navigate to="/shop" />} />
          <Route path="/shop" element={<ShopPage />} />
          {/* <Route path="/shop/books" element={<ShopBooksPage />} />
          <Route path="/shop/decor" element={<ShopDecorPage user={user} setUser={setUser} />} />
          <Route path="/shop/glassware" element={<ShopGlasswarePage user={user} setUser={setUser} />} />
          <Route path="search/:query" element={<SearchPage />} /> */}
          <Route path="/profile" element={<ProfilePage user={user} setUser={setUser} />} />
          <Route path="/profile/inquiries" element={<InquiriesPage user={user} />} />
          <Route path="/products" element={<ProductsPage user={user} setUser={setUser} />} />
          <Route path="/products/:id" element={<ProductPage user={user} setUser={setUser} />} />
          <Route path="/products/new" element={<AddProductForm />} />
         <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<AuthPage user={user} setUser={setUser} />} />
        </Routes>
      </main>
    </>
  );
}
