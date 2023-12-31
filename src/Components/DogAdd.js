import React, { useEffect, useState } from "react";

export default function DogAdd({ dog }) {

  const API_URL = 'https://api.thedogapi.com/v1/images/serach';
  const [dogs, setDogs] = useState([{}]);

  const handleDogAdd = (e) => {
    e.preventDefault();
    postToDogAPI(dog);
  };

    const postToDogAPI = () => {

      const dogToData = {
        ...dog,
        name: true,
      }

      fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify(dogToData),
      }).then(response => response.json())
      .then(data => {
        console.log(data);
      });
    };
  useEffect(() => {
    setDogs(dog);
  }, []);

  return (
    <h1 className="inline-block bg-slate-600 py-2 px-6 rounded mt-8" onClick={handleDogAdd}>Add Dog</h1>
    )}
  