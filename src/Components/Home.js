import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
export default function Home() {

  const [dog, setDogs ] = useState([null]);
  const history = useHistory();
  
  useEffect(() => {
    const getDogs = async () => {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random',
      );
        console.log(response);
        setDogs(response.data.message);
  };
    getDogs();
  }, []);


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
        <img alt="picture of a dog" src={dog} onClick={() => history.push("/")} />
        <Link to={`/dogs`}></Link>
          <h1>Welcome to the Dog CRUD App</h1>
          <p>
            This is a simple application for managing information about dogs.
          </p>
        </div>
      </div>
    </div>
  );
}

