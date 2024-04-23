import './ShopPage.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';

import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function ShopAllPage({ user, setUser }) {
  const navigate = useNavigate();

  return (
    <main className="ShopPage">
        <Logo />
      <h2>inside the main</h2>
    </main>
  );
}