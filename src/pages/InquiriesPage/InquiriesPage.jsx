import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./InquiriesPage.css";

import SearchFilter from "../../components/SearchFilter/SearchFilter";


export default function InquiriesPage({ user, setUser }) {
  const [inquiries, setInquiries] = useState([]);
  const [filteredInquiries, setFilteredInquiries] = useState([]);


  // The empty dependency array causes the effect
  // to run ONLY after the FIRST render
  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = [...new Set(items.map(item => item.category.name))];
      setMenuItems(items);
      setActiveCat(categoriesRef.current[0]);
    }
    getItems();

    // Load cart (a cart is the unpaid order for the logged in user)
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  /*--- Event Handlers ---*/
  async function handleAddToOrder(itemId) {
    // 1. Call the addItemToCart function in ordersAPI, passing to it the itemId, and assign the resolved promise to a variable named cart.
    const updatedCart = await ordersAPI.addItemToCart(itemId);
    // 2. Update the cart state with the updated cart received from the server
    setCart(updatedCart);
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }


  return (
    <main className="NewOrderPage">
      <aside>
        <Logo />
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
        <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <MenuList
        menuItems={menuItems.filter(item => item.category.name === activeCat)}
        handleAddToOrder={handleAddToOrder}
      />
      <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
    </main>
  );
}



export default function RestaurantPage() {
  const [restaurants, setRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    category: "",
    priceRange: "",
    distance: "",
  });

  useEffect(() => {
    async function mergeRestaurants() {
      const userRestaurants = await restaurantService.getAllRestaurant();
      const combinedRestaurants = [...r, ...userRestaurants];
      const shuffledRestaurants = shuffleArray(combinedRestaurants);
      setRestaurants(shuffledRestaurants);
    }
    mergeRestaurants();
  }, []);
  
  useEffect(() => {
    let filteredResults = [...restaurants];
  
    if (filterOptions.category) {
      filteredResults = filteredResults.filter(
        (restaurant) => restaurant.category === filterOptions.category
      );
    }
    if (filterOptions.priceRange) {
      filteredResults = filteredResults.filter(
        (restaurant) => restaurant.price <= filterOptions.priceRange
      );
    }
    setFilteredRestaurants(filteredResults);
  }, [filterOptions, restaurants]);

const resetFilters = () => {
    console.log('Resetting filtered restaurants...');
    setFilteredRestaurants([...restaurants, ...r]);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // useEffect(() => {
  //   async function getAllRestaurant() {
  //     const fetchRestaurants = await restaurantService.getAllRestaurant();
  //     const shuffledRestaurants = shuffleArray(fetchRestaurants);
  //     setRestaurants(shuffledRestaurants);
  //   }
  //   getAllRestaurant();
  // }, []);

  return (
    <div className="CardRestaurant">
      <SearchFilter setFilterOptions={setFilterOptions} resetFilters={resetFilters} />
      <div className="cardRestaurant_container">
      
        {filteredRestaurants.map((restaurant) => (
          <CardRestaurant
            className="swipe"
            key={restaurant.name}
            preventSwipe={["up", "down"]}
          >
            
            <div className="card">
            <img className="image" src={restaurant.urlImage} alt={restaurant.name} />
              <h2>{restaurant.name}</h2>
              <br />
              <h2>Description: {restaurant.description}</h2>
              <br />
              <h2>Cuisine: {restaurant.cuisine}</h2>
              <br />
              <h2>Location: {restaurant.location}</h2>
              <br />
              <h2>Open Hours: {restaurant.open_hours}</h2>
              <br />
              <Link to={`/${restaurant._id}`}>View Restaurant</Link>
            </div>
          </CardRestaurant>
        ))}
      </div>
    </div>
  );
}
