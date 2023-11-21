import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"

export const CatForm = () =>  {
  const [catData, setCatData] = useState({
    name: "",
    breed: "",
    age: "",
    description: "",
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCatData({
      ...catData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Define the URL for your mock API
    const apiUrl = "https://api.thecatapi.com/v1/images/search?limit=10&api_key=Lbn7gsdN1cVACzhJ58lHMwy8dN1bMUo9moA9H7KCQtHaN9A8mg5XLbQmY3FHcvBX"; // Replace with your API URL

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(catData),
    })
      .then((response) => {
        if (response.status === 200) {
          // Successfully created the cat, so redirect to the cat list page
          history.push("/cats");
        } else {
          // Handle error cases here
        }
      })
      .catch((error) => {
        // Handle any network or request error
        console.error("Error:", error);
      });
  };

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
}


