import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import ShopPage from '../ShopPage/ShopPage'
import ShopBooksPage from '../ShopBooksPage/ShopBooksPage'
import ShopDecorPage from '../ShopDecorPage/ShopDecorPage'
imp

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ?
        <Routes>
          <Route path="/" element={<Navigate to="/shop" />} /> {/* Navigate to /shop when "/" is accessed */}
          <Route path="/shop" element={<ShopPage user={user} setUser={setUser} />} /> {/* Render ShopPage as the homepage */}
          <Route path="/shop/books" element={<ShopBooksPage user={user} setUser={setUser} />} />
          <Route path="/shop/decor" element={<ShopDecorPage user={user} setUser={setUser} />} />
          <Route path="shop/:category" element={<ShopPage user={user} setUser={setUser} />} />
          <Route path="/product/:id" element={<ProductDetail user={user} setUser={setUser} />} />
          <Route path="/profile" element={<ProfilePage user={user} setUser={setUser} />} />
          <Route path="/profile/inquiries" element={<InquiriesPage user={user} setUser={setUser} />} />
          <Route path="/product/:id/inquiry" element={<InquiryPage user={user} setUser={setUser} />} />
          <AuthPage setUser={setUser} />
        </Routes>
        :
        <Route path="/*" element={<Navigate to="/shop" />} />
      }
    </main>
  );
}
