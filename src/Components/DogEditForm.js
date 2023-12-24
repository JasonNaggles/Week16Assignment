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

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDogData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Fetch dog data when the component mounts
  useEffect(() => {
    const fetchDogData = async () => {
      try {
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

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dogData),
      });

      if (response.ok) {
        // Redirect to dog detail page after successful update
        history.push(`/dogs/${id}`); // Redirect to the dog detail page
      } else {
        throw new Error('Failed to update data');
      }
    } catch (error) {
      console.error('Error updating dog data:', error);
      // Handle error, set an error state, or display an error message
    }
  };

  return (
    <div className="container">
      <h2>Edit Dog</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields for dog data */}
        <div className="form-group">
          <label>Bred For:</label>
          <input
            type="text"
            name="bred_for"
            value={dogData.bred_for}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add similar input fields for other attributes */}
        
        <button type="submit">Update Dog</button>
      </form>
    </div>
  );
}
