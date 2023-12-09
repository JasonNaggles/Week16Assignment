import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
export default function Dogs() {
  
  const [dogs, setDogs ] = useState([]);
  const [error, setError] = useState(false);
  const history = useHistory();
  
  useEffect(() => {
    const getDogs = async () => {
      try {
        const response = await fetch('https://api.thedogapi.com/v1/images/search?limit=10');
        console.log(response);
        setDogs(response.data.message);
      } catch (error) {
        setError(true);
      }
  };
    getDogs();
  }, []);


  return (
    <>
    <div className="container">
      <h1>Dogs </h1>
      </div>
      {error ? (
        <div>
          We are sorry, but an unexpected error ocurred{" "}
        </div>  
      ) : null}
      {dogs.length > 0 && 
      dogs.map((dog, index) => {
          return (
            <div key ={dog}>
      
      <img alt={`Picture of a dog number ${index + 1}`} src={dog} onClick={() => history.push("/")} />
    </div>
          );
      })}
       </>
  );
}
