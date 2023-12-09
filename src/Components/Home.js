import React, { useEffect, useState } from "react";
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
    <div>
    {dogs ? (
      <h1 className="flex items-center justify-center text-slate-800 text-center px-5 text-3xl h-screen">Loading...</h1>
    ) : (
      <div>
      <section className="p-8 max-w-6xl mx-auto">{dogs.length} dogs</section>
      </div>
    )}
    </div>
  )
}

