import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import CategoryList from '../../components/CategoryList/CategoryList';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import ShopBooksPage from '../ShopBooksPage/ShopBooksPage'
import ShopDecorPage from '../ShopDecorPage/ShopDecorPage';
import ShopGlasswarePage from '../ShopGlasswarePage/ShopGlasswarePage';
import NavBar from '../../components/NavBar/NavBar';

export default function ShopPage({ user, setUser, products }) {
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    categoriesRef.current = [...new Set(products.map(product => product.category.name))];
  }, [products]);

  return (
    <>
    <NavBar />
    <main className="ShopPage">

    </main>
    </>
  );
}