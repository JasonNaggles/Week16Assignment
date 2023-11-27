import React, { useEffect, useState } from "react";

export default function Cats() {

    const apiUrl = "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng";
    const apiKey = "live_Lbn7gsdN1cVACzhJ58lHMwy8dN1bMUo9moA9H7KCQtHaN9A8mg5XLbQmY3FHcvBX";
    
    const [cats, setCats ] = useState({});
    const requestCats = async () => {
      const headers = {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      };

      try {
      const apiResponse = await fetch(apiUrl, {headers});
      const jsonResult = await apiResponse.json();
      console.log(jsonResult);
      setCats(jsonResult);
      } catch (error) {
        console.log.error(error.message)
      }
      
    } 
      
    
    useEffect(() => {
      requestCats();
    }, []);


    return (
        <div className="container">
      <h2>Cats List</h2>
      <ul>
        {cats.map((cat) => (
          <li key={cat.id}>
            <a href={`/cats/${cat.id}`}>{cat.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );

}
