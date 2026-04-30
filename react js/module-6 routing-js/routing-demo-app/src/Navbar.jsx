import React from 'react'
import { Link } from 'react-router-dom'

export default function MyNavbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container d-flex justify-content-between align-items-center">

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          Logo
        </Link>

        {/* Desktop links */}
        <ul className="navbar-nav d-flex flex-row gap-4">

          <li className="nav-item">
            <Link to="/" className="nav-link text-white">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-link text-white">
              About Us
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contact" className="nav-link text-white">
              Contact Us
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  )
}