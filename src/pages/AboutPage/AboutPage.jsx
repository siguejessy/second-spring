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
        <h2>About Project</h2>
        <p>About Project</p>
        {/* import reader-friendly ReadMe? */}
      </section>
    </main>
  );
}