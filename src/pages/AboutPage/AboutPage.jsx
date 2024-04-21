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
        <Logo />
      </aside>
      <section>
        <h2>Our Story</h2>
        <p>Our story began in 2021 when we decided to create a website that would allow users to shop for items from different categories. We wanted to create a user-friendly experience that would allow users to easily browse and purchase items from the comfort of their own home.</p>
        <p>Our website features a wide range of items including books, decor, and more. We are constantly updating our inventory to provide our customers with the best selection of items possible.</p>
        <p>Our goal is to provide our customers with a seamless shopping experience that is both enjoyable and convenient. We are committed to providing excellent customer service and are always available to answer any questions you may have.</p>
        <p>Thank you for visiting our website and we hope you enjoy shopping with us!</p>
      </section>
    </main>
  );
}