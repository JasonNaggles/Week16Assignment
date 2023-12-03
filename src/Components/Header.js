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
                <Link to="/dogs/add" className="nav-link">
                  Dog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dogs/:id" className="nav-link">
                  DogDetail
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dogs/:id/edit" className="nav-link">
                  DogEditForm
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dogs/:id/delete" className="nav-link">
                  DogDeleteForm
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



