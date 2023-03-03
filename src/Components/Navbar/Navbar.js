import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar/Navbar.css"

export default function Navabar() {
  return (
  <div>
    <header className='navbar'>
      <nav>
        <NavLink to="/" className="navitem">Home</NavLink>
        <NavLink to="/about" className="navitem">About</NavLink>
        <NavLink to="/categories" className="navitem">Categories</NavLink>
        <NavLink to="/cart" className="navitem">Cart</NavLink>
        <NavLink to="/login" className="navitem">Login</NavLink>
      </nav>
    </header>
  </div>
  )
}
