import './ShopPage.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';

import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function ShopPage({ user, setUser }) {
  const navigate = useNavigate();

  return (
    <main className="ShopPage">
      <aside>
        <Logo />
        {/* <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
        <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
        <UserLogOut user={user} setUser={setUser} />
      <MenuList
        menuItems={menuItems.filter(item => item.category.name === activeCat)}
        handleAddToOrder={handleAddToOrder}
      />
      <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      /> */}
      <h2>inside the aside</h2>
       </aside>
      <h2>inside the main</h2>
    </main>
  );
}