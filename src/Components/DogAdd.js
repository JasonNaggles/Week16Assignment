import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function DogAdd() {
  const [dogs, setDogs] = useState([]);
  const [error, setError] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const getDogs = async () => {
      try {
        const response = await fetch('https://api.thedogapi.com/v1/images/search');
        if (response.ok) {
          const data = await response.json();
          const dogUrls = data.map(dog => dog.url);
          setDogs(dogUrls);
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
      <div className="container">
        <h1 className="flex items-center justify-center text-white text-center px-5 text-3xl font-bold lg:text-5xl">Dogs</h1>
      </div>
      {error ? (
        <div>We are sorry, but an unexpected error occurred</div>
      ) : null}
      {dogs.length > 0 &&
        dogs.map((dog, index) => {
          return (
            <div key={index}>
              <img
                alt={`Picture of a dog number ${index + 1}`}
                src={dog}
                onClick={() => history.push("/")}
              />
            </div>
          );
        })}
    </>
  );
}
