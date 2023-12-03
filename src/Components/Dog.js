import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function Dog() {
  
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
    <div>
      <h1>Dogs </h1>
      <img alt="picture of a dog" src={dog} onClick={() => history.push("/")} />
    </div>


  );

  };

