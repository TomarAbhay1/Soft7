import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MyLogo</div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <button className="btn">Login</button>
    </nav>
  )
}
