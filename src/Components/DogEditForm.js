import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

export default function DogEditForm() {
  const { id } = useParams(); // Fetch the id parameter from the URL
  const history = useHistory();
  const [dogData, setDogData] = useState({
    bred_for: '',
    height: '',
    weight: '',
    breed_group: '',
    lifespan: '',
    temperament: ''
  });

  useEffect(() => {
    // Simulating fetching dog data based on the ID (Replace with actual API call)
    const fetchDogData = async () => {
      try {
        // Fetch dog data using the ID from your database or API
        // For demonstration purposes, using sample data
        const response = await fetch(`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`);
        if (response.ok) {
          const data = await response.json();
          setDogData(data); // Update dogData state with fetched data
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error, set an error state, or redirect to an error page
      }
    };

    fetchDogData(); // Fetch dog data when the component mounts
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDogData({ ...dogData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Submit updated dog data to your backend (Replace with your logic)
      await fetch(`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dogData)
      });
      history.push(`/dogs/${id}`); // Redirect to dog detail page after successful update
    } catch (error) {
      console.error('Error updating dog data:', error);
      // Handle error, set an error state, or display an error message
    }
  };

  return (
    <div className="container">
      <h2>Edit Dog</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Bred For:</label>
          <input
            type="text"
            name="bred for"
            value={dogData.bred_for}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Height:</label>
          <input
            type="text"
            name="height"
            value={dogData.height}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Weight:</label>
          <input
            type="text"
            name="weight"
            value={dogData.weight}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Breed Group:</label>
          <input
            name="text"
            value={dogData.breed_group}
            onChange={handleChange}
            required
           />
        </div>
        <div className="form-group">
          <label>Lifespan:</label>
          <input
            name="number"
            value={dogData.lifespan}
            onChange={handleChange}
            required
           />
        </div>
        <div className="form-group">
          <label>Temperament:</label>
          <input
            name="text"
            value={dogData.temperament}
            onChange={handleChange}
            required
           />
        </div>
        <button type="submit">Update Dog</button>
      </form>
    </div>
  );
};

