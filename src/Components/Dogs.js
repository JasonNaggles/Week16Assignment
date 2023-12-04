import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function Dogs() {
  
  const [dogs, setDogs ] = useState([]);
  const [error, setError] = useState(false);
  const history = useHistory();
  
  useEffect(() => {
    const getDogs = async () => {
      try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random/4',
      );
        console.log(response);
        setDogs(response.data.message);
      } catch (error) {
        setError(error);
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
      {dogs && 
      dogs.map((dog) => {
          return (
            <div key ={dog}>
      
      <img alt="picture of a dog" src={dog} onClick={() => history.push("/")} />
    </div>
          );
      })}
       </>
  );
}
