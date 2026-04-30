import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterApp() {
  return (
    <footer className="bg-dark text-light mt-5 pt-4 pb-2">
      <div className="container">
        <div className="row">

          {/* About */}
          <div className="col-md-4 mb-3">
            <h5>MySite</h5>
            <p>
              Simple website footer example with Home, About Us, and Contact details.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-light text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-light text-decoration-none">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light text-decoration-none">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +91 12345 67890</p>
          </div>

        </div>

        <hr className="border-light" />

        {/* Bottom */}
        <div className="text-center">
          <p className="mb-0">© 2026 MySite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}