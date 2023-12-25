import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-100">
      <nav className="container mx-auto flex items-center justify-center py-4">
        <button
          className="block lg:hidden px-3 py-2 border rounded text-gray-600 border-gray-600 hover:text-gray-900 hover:border-gray-900"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="hidden lg:block">
          <ul className="flex space-x-4">
            <li className="nav-item">
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="text-gray-600 hover:text-gray-900">
                Dogs
              </Link>
            </li>
            {/* Replace `/:name` with a specific route path */}
            <li className="nav-item">
              <Link to="/details" className="text-gray-600 hover:text-gray-900">
                DogDetail
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/edit" className="text-gray-600 hover:text-gray-900">
                DogEditForm
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/delete" className="text-gray-600 hover:text-gray-900">
                DogDeleteForm
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/notfound" className="text-gray-600 hover:text-gray-900">
                NotFound
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
