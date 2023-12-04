import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

export default function DogDeleteForm() {
  const {} = useParams();
  const history = useHistory();

  const [dogData, setDogData] = useState(null);

  useEffect(() => {
    const fetchedDog = {
      message: "https://images.dog.ceo/breeds/setter-gordon/n02101006_1205.jpg",
      status: "Success",
    };
    

    setDogData(fetchedDog);
  }, []);

  const handleDelete = () => {
    // Handle dog deletion here (e.g., delete dog data from your database)
    // After successful deletion, you can redirect to the dog list page
    history.push("/dogs");
  };

  return (
    <div className="container">
      <h2>Delete Dog</h2>
      {dogData ? (
        <div>
          <p>Are you sure you want to delete the dog "{dogData.name}"?</p>
          <button onClick={handleDelete}>Yes, Delete</button>
          <Link to={`/dogs`}>Cancel</Link>
        </div>
      ) : (
        <p>Dog  not found</p>
      )}
    </div>
  );
}

