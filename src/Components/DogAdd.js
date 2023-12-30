import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function DogAdd() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const getDogs = async () => {
      try {
        const response = await fetch('https://api.thedogapi.com/v1/breeds');
        if (response.ok) {
          const data = await response.json();
          setDogs(data);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      }
    };
    getDogs();
  }, []);

  return (
    <>
    {!dogs ? (
      <h1 className="flex items-center justify-center text-slate-800 text-center px-5 text-3xl h-screen font-bold uppercase">Loading...</h1>
    ) : (
      <>
      <section className="p-8 max-w-7xl mx-auto">
        <div className="text-center">
      <h1 className="flex items-center justify-center text-white text-center px-5 text-3xl font-bold lg:text-5xl">The Dog App</h1>
      <p className="my-8 text-white">This application is powered by{" "} <a href="https://thedogapi.com" className="text-indigo-600 underline active:text-orange-400">The Dog API</a></p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 my-10 lg:my-20">
      {dogs.map((dog, index) => (
        <div key={index}>
        <article className="bg-slate-700 p-4 rounded">
          <img src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`} alt={dog.name} loading="lazy" className="rounded md:h-72 w-full"/>
          <h3 className="text-white text-lg font-bold mt-4">{dog.name}</h3>
          <p className="text-slate-400">Bred For: {dog.bred_for}</p>
        </article>
        </div>
      ))}
      </div>
      </section>
      </>
    )}
    </>
  )
}