import { useState, useEffect, useRef } from 'react';
import './AboutPage.css'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function AboutPage({ user, setUser }) {
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  return (
    <main className="AboutPage">
      <nav />
      <aside>
        {/* <Logo /> */}
      </aside>
      <section>
        <h2>About this Project</h2>
        <p>Welcome to Second Spring - your destination for thrifted treasures and unique finds for your home!
        <br/>At Second Spring, we believe in giving new life to pre-loved items, allowing them to bloom once again in your space.
        <br/>Our curated collection includes a variety of home decor, books, and interior design gems, each with its own story and charm. Whether you're searching for that perfect vintage vase, a cozy reading nook addition, or a statement piece to elevate your space, Second Spring has something for everyone.
       <br/>
        <br/>We're committed to sustainability and ethical shopping practices, offering a more eco-friendly alternative to traditional retail. By choosing Second Spring, you're not only supporting small businesses and local artisans, but also reducing waste and promoting a circular economy.
       <br/>
        <br/>The name "Second Spring" embodies our mission - to provide a fresh start for items, offering them a second chance to shine and bloom anew. It's all about embracing the beauty of renewal and transformation, where something old becomes something new.
        <br/>
        <br/>
        While our current functionality may be streamlined due to time constraints, we're constantly evolving to better serve you. In future iterations, expect exciting features such as live chat with our admin for real-time assistance and seamless shopping experiences with add-to-cart and checkout functionality.
        <br/>
        <br/>Thank you for joining us on this journey of rediscovery and renewal. Let's make every season a Second Spring!</p>
      </section>
    </main>
  );
}