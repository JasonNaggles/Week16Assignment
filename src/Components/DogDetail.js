import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
export default function DogDetail() {
  const [ dog, setDog ] = useState([]);
  const { name } = useParams();
  
  
  useEffect(() => {
  // Assuming you fetch the dog data using an API call or from a database
  const fetchDogData = async () => {
    try {
      // Make an API call or fetch data based on the name parameter
      const response = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);
      const data = await response.json();
        setDog(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
  };

  fetchDogData();
}, [name]);


  return (
    <>
    <section className="max-w-5xl mx-auto">
      {dog.map((item) => (
        <div key={item.id}>
          <article>
            <img src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`} alt={dog.name} />
          </article>
          <article>
            <h1>{item.name}</h1>
            {item.description && <p>{item.description}</p>}
            <ul>
              <li>Bred For: {item.bred_for}</li>
              <li>Height: {item.height.metric} cm</li>
              <li>Weight: {item.weight.metric} kgs</li>
              <li>Breed Group: {item.breed_group}</li>
              <li>Lifespan: {item.life_span}</li>
              <li>Temperament: {item.temperament}</li>
            </ul>
          </article>
        </div>
      ))}
      <h1 classname="text-white text-3xl">{name}</h1>
    </section>
    </>
  );
}

