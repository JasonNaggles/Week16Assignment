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
        const response = await fetch(`https://api.thedogapi.com/v1/images/search`);
        if (response.ok) {
          const data = await response.json();
          setDogData(dogData);
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
      const response = await fetch(`https://api.thedogapi.com/v1/breeds`, {
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
      <h2 className="flex items-center justify-center text-white text-center px-5 text-3xl font-bold lg:text-5xl">Edit Dog</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields for dog data */}
        <div className="form-group">
          <label className="flex items-center justify-center text-white text-center px-5 text-3xl font-bold lg:text-5xl">Bred For:</label>
          <input
            type="text"
            name="bred_for"
            value={dogData.bred_for}
            onChange={handleChange}
            required
            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        {/* Add similar input fields for other attributes */}
        <div className="form-group">
          <label className="flex items-center justify-center text-white text-center px-5 text-3xl font-bold lg:text-5xl">Height:</label>
          <input
            type="text"
            name="height"
            value={dogData.height}
            onChange={handleChange}
            required
            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="form-group">
          <label className="flex items-center justify-center text-white text-center px-5 text-3xl font-bold lg:text-5xl">Weight:</label>
          <input
            type="text"
            name="weight"
            value={dogData.weight}
            onChange={handleChange}
            required
            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="form-group">
          <label className="flex items-center justify-center text-white text-center px-5 text-3xl font-bold lg:text-5xl">Breed Group:</label>
          <input
            type="text"
            name="breed_group"
            value={dogData.breed_group}
            onChange={handleChange}
            required
            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="form-group">
          <label className="flex items-center justify-center text-white text-center px-5 text-3xl font-bold lg:text-5xl">Lifespan:</label>
          <input
            type="text"
            name="lifespan"
            value={dogData.lifespan}
            onChange={handleChange}
            required
            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="form-group">
          <label className="flex items-center justify-center text-white text-center px-5 text-3xl font-bold lg:text-5xl">Temperament:</label>
          <input
            type="text"
            name="temperament"
            value={dogData.temperament}
            onChange={handleChange}
            required
            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <button type="submit">Update Dog</button>
      </form>
    </div>
  );
}
