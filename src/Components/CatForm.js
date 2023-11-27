import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CatForm() {
  
  const apiUrl = "https://api.thecatapi.com/v1/images/search";
  const apiKey = "live_Lbn7gsdN1cVACzhJ58lHMwy8dN1bMUo9moA9H7KCQtHaN9A8mg5XLbQmY3FHcvBX";
  
  const [cats, setCats ] = useState({});
  const requestCatForm = async () => {
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
    };
    const apiResponse = await fetch(apiUrl, {headers});
    const jsonResult = await apiResponse.json();
    consone.log(jsonResult);
    setCats(jsonResult);
  } 
    
  
  useEffect(() => {
    requestCatForm();
  }, []);


  return (
    <div className="container">
      <h2>Add a New Cat</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={catData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Breed:</label>
          <input
            type="text"
            name="breed"
            value={catData.breed}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={catData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={catData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Add Cat</button>
        <Link to="/cats">Back to Cat List</Link>
      </form>
    </div>
  );

  };

