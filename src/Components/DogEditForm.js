import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

 export default function DogEditForm() {
  const {} = useParams();
  const history = useHistory();

  const [dogData, setDogData] = useState({
    message: "",
    status: "",
    
  });

  useEffect(() => {
    // Replace this with your data retrieval logic to get the dog's data by ID
    // Example data for demonstration purposes:
    const fetchedDog = {
      message: "https://images.dog.ceo/breeds/setter-gordon/n02101006_1205.jpg",
      status: "Success",
    };

    setDogData(fetchedDog);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDogData({
      ...dogData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., update dog data in your database)
    // After successful submission, you can redirect to the dog detail page
    history.push(`/dogs/${id}`);
  };

  return (
    <div className="container">
      <h2>Edit Dog</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={dogData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Breed:</label>
          <input
            type="text"
            name="breed"
            value={dogData.breed}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={dogData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={dogData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Update Dog</button>
        <Link to={`/`}>Cancel</Link>
      </form>
    </div>
  );
}

