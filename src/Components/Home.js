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
    <>
    {!dogs ? (
      <h1 className="flex items-center justify-center text-slate-800 text-center px-5 text-3xl h-screen font-bold uppercase">Loading...</h1>
    ) : (
      <>
      <section className="p-8 max-w-6xl mx-auto">
        <div className="text-center">
      <h1 className="flex items-center justify-center text-slate-800 text-center px-5 text-3xl font-bold lg:text-5xl">The Dog App</h1>
      <p className="my-8">This application is powered by{" "} <a href="https://thedogapi.com" className="text-indigo-600 underline active:text-orange-400">The Dog API</a></p>
      <form>
        <input type="text" name="search" id="search" placeholder="Search for a dog / breed"
        classname="bg-rose-400 py-2 px-4 rounded shadow w-full" />
      </form>
      </div>
      </section>
      </>
    )}
    </>
  )
}

