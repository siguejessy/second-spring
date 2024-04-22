import { useState } from 'react';
import './AuthPage.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
// import Logo from '../../components/Logo/Logo'; icebox-logo


export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main className='auth-lander'>
      <div className='auth-blurb'>
        <h2>Second Spring</h2>
        <h3></h3>
        <h3></h3>
      </div>

      <div className='lander-form'>
      <h2>Sign Up or Log In</h2>
      <button className="toggle"
      onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
      { showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm setUser={setUser} />
      }
      </div>
    </main>
  );
}
