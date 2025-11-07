// AuthNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function AuthNavbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/add2">About</Link></li>
        <li><Link to="/add">Add</Link></li>
        <li><Link to="/update">Update</Link></li>
        <li><Link to="/fetchAll">FindAll</Link></li>
      </ul>
    </nav>
  );
}

export default AuthNavbar;
