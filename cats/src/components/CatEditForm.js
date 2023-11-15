import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

function CatEditForm() {
  const { id } = useParams();
  const history = useHistory();

  const [catData, setCatData] = useState({
    name: "",
    breed: "",
    age: "",
    description: "",
  });

  useEffect(() => {
    // Replace this with your data retrieval logic to get the cat's data by ID
    // Example data for demonstration purposes:
    const fetchedCat = {
      name: "Fluffy",
      breed: "Persian",
      age: 3,
      description: "A cute and fluffy Persian cat.",
    };

    setCatData(fetchedCat);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCatData({
      ...catData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., update cat data in your database)
    // After successful submission, you can redirect to the cat detail page
    history.push(`/cats/${id}`);
  };

  return (
    <div className="container">
      <h2>Edit Cat</h2>
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
        <button type="submit">Update Cat</button>
        <Link to={`/cats/${id}`}>Cancel</Link>
      </form>
    </div>
  );
}

export default CatEditForm;
