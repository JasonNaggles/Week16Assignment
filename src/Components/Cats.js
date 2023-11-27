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
      const apiResponse = await fetch(apiUrl, {headers});
      const jsonResult = await apiResponse.json();
      consone.log(jsonResult);
      setCats(jsonResult);
    } 
      
    
    useEffect(() => {
      requestCats();
    }, []);

}