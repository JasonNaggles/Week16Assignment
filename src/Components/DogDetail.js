import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
export default function DogDetail() {
  const [ dog, setDog ] = useState([]);
  const { name } = useParams();
  
  
  useEffect(() => {
  // Assuming you fetch the dog data using an API call or from a database
  const getDogData = async () => {
    try {
      // Make an API call or fetch data based on the detail parameter
      const response = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);
      const data = await response.json();
        setDog(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
  };

  getDogData();
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
            <h1 className="text-3xl font-bold text-white mb-8 lg:text-5xl">{item.name}</h1>
            {item.description && <p className="text-slate-400 mb-8 text-sm lg:text-base leading-loose lg:leading-relaxed">{item.description}</p>}
            <ul className="text-sm text-slate-400 leading-loose lg:text-base lg:leading-relaxed">
              <li>Bred For: {item.bred_for}</li>
              <li>Height: {item.height.metric} cm</li>
              <li>Weight: {item.weight.metric} kgs</li>
              <li>Breed Group: {item.breed_group}</li>
              <li>Lifespan: {item.life_span}</li>
              <li>Temperament: {item.temperament}</li>
            </ul>
            <Link to="/" className="inline-block bg-slate-600 py-2 px-6 rounded mt-8">&larr; Back</Link>
          </article>
        </div>
      ))}
    </section>
    </>
  );
}

