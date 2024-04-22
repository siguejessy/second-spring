import { useState, useEffect, useRef } from 'react';
import * as productsAPI from '../../utilities/products-api';
import './SearchPage.css'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import CategoryList from '../../components/CategoryList/CategoryList';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewOrderPage({ user, setUser }) {

  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  // The empty dependency array causes the effect
  // to run ONLY after the FIRST render
  useEffect(function() {
    async function getItems() {
      const items = await productsAPI.getAll();
      categoriesRef.current = [...new Set(items.map(item => item.category.name))];
      setMenuItems(items);
      setActiveCat(categoriesRef.current[0]);
    }
    getItems();
  }, []);

  const [menuItems, setMenuItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');

  return (
    <main className="NewOrderPage">
        <Logo />
        <CategoryList
          categories={categoriesRef.current}
        />
    </main>
  );
}