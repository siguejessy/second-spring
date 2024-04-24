import { useState, useEffect, useRef } from 'react';
import './ShopDecorPage.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import ProductDetail from '../../components/ProductDetail/ProductDetail'; // Import your product detail component

export default function ShopDecorPage({ user, setUser }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   async function fetchProducts() {
  //     try {
  //       // const fetchedProducts = await productsAPI.getAll();
  //       const decorProducts = fetchedProducts.filter(product => product.category.name === 'Decor');
  //       setProducts(decorProducts);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }
  //   }

  //   fetchProducts();
  // }, []);

  return (
    <main className="ShopDecorPage">
      <aside>
        <Logo />
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <section className="product-list">
        {products.map(product => (
          <ProductDetail key={product._id} product={product} />
        ))}
      </section>
    </main>
  );
}