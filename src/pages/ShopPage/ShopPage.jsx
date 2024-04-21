import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import CategoryList from '../../components/CategoryList/CategoryList';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import ShopBooksPage from '../ShopBooksPage/ShopBooksPage'
import ShopDecorPage from '../ShopDecorPage/ShopDecorPage';
import ShopGlasswarePage from '../ShopGlasswarePage/ShopGlasswarePage';

export default function ShopPage({ user, setUser, products }) {
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    categoriesRef.current = [...new Set(products.map(product => product.category.name))];
  }, [products]);

  return (
    <main className="ShopPage">
      <aside>
        <Logo />
        <CategoryList
          categories={categoriesRef.current}
          activeCat=""
        />
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <section className="product-list">
        <ShopBooksPage products={products} />
        <ShopDecorPage products={products} />
        <ShopGlasswarePage products={products} />
      </section>
    </main>
  );
}