import React from "react";
import { useParams, Link } from "react-router-dom";

export const CatDetail = () => {
  const { id } = useParams(); // Get the cat ID from the URL

  // Replace this with your cat data retrieval logic
  // Example data for demonstration purposes:
  const cat = {
    id: id,
    name: "Fluffy",
    breed: "Persian",
    age: 3,
    description: "A cute and fluffy Persian cat.",
  };

  if (!cat) {
    return <p>Cat not found</p>;
  }

  return (
    <div className="container">
      <h2>Cat Details</h2>
      <div>
        <h3>{cat.name}</h3>
        <p>Breed: {cat.breed}</p>
        <p>Age: {cat.age} years</p>
        <p>Description: {cat.description}</p>
        <Link to={`/cats/${id}/edit`}>Edit Cat</Link>
        <Link to={`/cats/${id}/delete`}>Delete Cat</Link>
        <Link to="/cats">Back to Cat List</Link>
      </div>
    </div>
  );
}

