import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

export const CatDeleteForm= () => {
  const { id } = useParams();
  const history = useHistory();

  const [catData, setCatData] = useState(null);

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

  const handleDelete = () => {
    // Handle cat deletion here (e.g., delete cat data from your database)
    // After successful deletion, you can redirect to the cat list page
    history.push("/cats");
  };

  return (
    <div className="container">
      <h2>Delete Cat</h2>
      {catData ? (
        <div>
          <p>Are you sure you want to delete the cat "{catData.name}"?</p>
          <button onClick={handleDelete}>Yes, Delete</button>
          <Link to={`/cats/${id}`}>Cancel</Link>
        </div>
      ) : (
        <p>Cat not found</p>
      )}
    </div>
  );
}

