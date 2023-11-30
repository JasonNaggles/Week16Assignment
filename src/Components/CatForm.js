import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CatForm() {
  const [cats, setCats ] = useState([])
  
  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10")
        const data = await res.json()
        setCats(data)
        console.log(data)
      } catch (error) {
        console.error(error)
      }
  } 
    fetchCatData()
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

