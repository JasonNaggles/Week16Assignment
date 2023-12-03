import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

export default function DogDeleteForm() {
  const { id } = useParams();
  const history = useHistory();

  const [dogData, setDogData] = useState(null);

  useEffect(() => {
    

    setDogData(fetchedDog);
  }, [id]);

  const handleDelete = () => {
    // Handle cat deletion here (e.g., delete cat data from your database)
    // After successful deletion, you can redirect to the cat list page
    history.push("/dogs");
  };

  return (
    <div className="container">
      <h2>Delete Dog</h2>
      {catData ? (
        <div>
          <p>Are you sure you want to delete the dog "{dogData.name}"?</p>
          <button onClick={handleDelete}>Yes, Delete</button>
          <Link to={`/dogs/${id}`}>Cancel</Link>
        </div>
      ) : (
        <p>Dog  not found</p>
      )}
    </div>
  );
}

