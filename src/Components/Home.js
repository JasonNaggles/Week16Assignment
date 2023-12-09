import React, { useEffect, useState } from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
export default function Home() {

  const [dogs, setDogs ] = useState([]);

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const response = await fetch("https://api.thedogapi.com/v1/breeds")
        const data = await response.json()
        setDogs(data)
        console.log(data)
      } catch (error) {
        console.error(error)
        
      }
  }
    fetchDogData()
  }, [])


  return (
    <>
    {dogs ? (
      <h1>Loading...</h1>
    ) : (
      <>
      <section>{dogs.length} dogs</section>
      </>
    )}
    </>
  )
}

