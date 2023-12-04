import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Dog CRUD App</p>
      </div>
    </footer>
  );
}
