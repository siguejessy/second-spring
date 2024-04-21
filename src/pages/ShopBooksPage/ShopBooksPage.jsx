import { useState, useEffect, useRef } from 'react';
import * as productsAPI from '../../utilities/products-api';
import './ShopBooksPage.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import CategoryList from '../../components/CategoryList/CategoryList';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import ProductDetail from '../../components/ProductDetail/ProductDetail'; // Import your product detail component

export default function ShopBooksPage({ user, setUser }) {
  const categoriesRef = useRef([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(function() {
    
  }, []);


  return (
    <main className="ShopBooksPage">
      <aside>
        <Logo />
        <CategoryList
          categories={categoriesRef.current}
          activeCat=""
        />
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <section className="product-list">
        <ProductDetail />
      </section>
    </main>
  );
}