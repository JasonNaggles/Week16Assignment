import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
export default function DogDetail() {
  const { dogId } = useParams(); // Get the dog from the URL
  const history = useHistory(); 
  const [ dog, setDogs ] = useState(null);
  
  
  useEffect(() => {
  // Assuming you fetch the dog data using an API call or from a database
  const fetchDogData = async () => {
    try {
      // Make an API call or fetch data based on the dogId parameter
      const response = await fetch(`https://dog.ceo/api/breeds/image/random/4/${dogId}`);
      console.log(response);
        setDogs(response.data.message);
      } catch (error) {
        setError(true);
      }
  };

  fetchDogData();
}, [dogId]);

if (!dog) {
  return <div>Loading...</div>; // Show a loading message while fetching data
}

  return (
    <div className="container">
      <h2>Dog Details</h2>
      <div>
        <h3>{dog.name}</h3>
        <p>Breed: {dog.breed}</p>
        <p>Age: {dog.age} years</p>
        <p>Description: {dog.description}</p>
        <Link to={`/dogs/edit/${dogId}`}>Edit Dog</Link>
        <Link to={`/dogs/delete/${dogId}`}>Delete Dog</Link>
        <Link to="/dogs">Back to Dog List</Link>
      </div>
    </div>
  );
}

