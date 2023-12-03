import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function Cat() {
  
  const [cat, setCats ] = useState([null]);
  const history = useHistory();
  
  useEffect(() => {
    const getCats = async () => {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search',
      );
        console.log(response);
        setCats(response.data.message);
  };
    getCats();
  }, []);


  return (
    <div>
      <h1>Cats </h1>
      <img alt="picture of a cat" src={cat} onClick={() => history.push("/")} />
    </div>


  );

  };

