import React, { useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

export default function DogDetail() {
  const {} = useParams(); // Get the dog from the URL
  const history = useHistory(); 
  const fetchedDog = {
    message: "https://images.dog.ceo/breeds/setter-gordon/n02101006_1205.jpg",
    status: "Success",
  };
  
  useEffect(() => {
  setDogData(fetchedDog);
}, []);


  return (
    <div className="container">
      <h2>Dog Details</h2>
      <div>
        <h3>{dog.name}</h3>
        <p>Breed: {dog.breed}</p>
        <p>Age: {dog.age} years</p>
        <p>Description: {dog.description}</p>
        <Link to={`/dogs/edit`}>Edit Dog</Link>
        <Link to={`/dogs/delete`}>Delete Dog</Link>
        <Link to="/dogs">Back to Dog List</Link>
      </div>
    </div>
  );
}

