// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function LoginNavbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/">Home</Link></li>
      </ul>
    </nav>
  );
}

export default LoginNavbar;
