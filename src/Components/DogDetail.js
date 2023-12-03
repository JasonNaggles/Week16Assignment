import React from "react";
import { useParams, Link } from "react-router-dom";

export default function DogDetail() {
  const { id } = useParams(); // Get the dog ID from the URL

 


  if (!dog) {
    return <p>dog not found</p>;
  }

  return (
    <div className="container">
      <h2>Dog Details</h2>
      <div>
        <h3>{dog.name}</h3>
        <p>Breed: {dog.breed}</p>
        <p>Age: {dog.age} years</p>
        <p>Description: {dog.description}</p>
        <Link to={`/dogs/${id}/edit`}>Edit Cat</Link>
        <Link to={`/dogs/${id}/delete`}>Delete Cat</Link>
        <Link to="/dogs">Back to Cat List</Link>
      </div>
    </div>
  );
}

