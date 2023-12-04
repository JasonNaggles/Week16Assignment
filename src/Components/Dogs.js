import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function Dog() {
  
  const [dogs, setDogs ] = useState([null]);
  const history = useHistory();
  
  useEffect(() => {
    const getDogs = async () => {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random/4',
      );
        console.log(response);
        setDogs(response.data.message);
  };
    getDogs();
  }, []);


  return (
    <div className="container">
      <h1>Dog </h1>
      <img alt="picture of a dog" src={dogs} onClick={() => history.push("/")} />
      <img alt="picture of a dog" src={dogs} onClick={() => history.push("/")} />
      <img alt="picture of a dog" src={dogs} onClick={() => history.push("/")} />
      <img alt="picture of a dog" src={dogs} onClick={() => history.push("/")} />
    </div>


  );

  };

