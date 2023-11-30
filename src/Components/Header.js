import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cats/add" className="nav-link">
                  CatForm
                </Link>
              </li>
              <li className="nav-item">
                <Link to="cats/feed" className="nav-link">
                  Cat Feed
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cats/:id" className="nav-link">
                  CatDetail
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cats/:id/edit" className="nav-link">
                  CatEditForm
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cats/:id/delete" className="nav-link">
                  CatDeleteForm
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  NotFound
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}



