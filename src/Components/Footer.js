import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Cat CRUD App</p>
      </div>
    </footer>
  );
}
