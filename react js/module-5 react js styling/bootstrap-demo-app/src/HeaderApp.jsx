import React, { useState } from "react";

export default function HeaderApp() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-primary text-white">
      <div className="container d-flex justify-content-between align-items-center py-3">
        
        <h4 className="mb-0">My Website</h4>

        {/* Hamburger */}
        <button className="btn btn-light d-lg-none" onClick={() => setOpen(!open)}>☰</button>

        {/* Menu */}
        <div className={`${open ? "d-block" : "d-none"} d-lg-flex`}>
          <ul className="nav ms-lg-4">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Contact</a>
            </li>
          </ul>
        </div>

      </div>
    </header>
  );
}