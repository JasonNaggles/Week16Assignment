import React from "react";
import { useState, useEffect } from "react";


export default function UpdateFriends() {
 // Define the mock API URL as a constant 
 const MOCK_API_URL = "https://650fc3383ce5d181df5ca880.mockapi.io/Friends";  
  
 // Define state variables using the useState hook
 const [newFirstName, setNewFirstName] = useState('') // Input field for new first name
 const [newLastName, setNewLastName] = useState('') // Input field for new last name
 const [friends, setFriends] = useState([]) // Array to store friends from the API
 const [updatedFirstName, setUpdatedFirstName] = useState('') // Input field for updated first name
 const [updatedLastName, setUpdatedLastName] = useState('') // Input field for updated last name
 
 // Function to fetch friends data from the API
 
 function getFriends() {
   fetch(MOCK_API_URL)
   .then(data => data.json())
   .then(data => setFriends(data)) // Update the friends state with data from the API
 }
 
 // Use the useEffect hook to fetch friends data when the component mounts
 useEffect(() => {
   getFriends()
   console.log(friends)
 }, [])
 
 
 // Function to update a friend's information
 function updateFriends(e, friendsObject) {
   e.preventDefault()
   let updatedFriendsObject = {
     ...friendsObject,
     firstName: updatedFirstName,
     lastName: updatedLastName,
   }
   fetch(`${MOCK_API_URL}/${friendsObject.id}`, {
     method: 'PUT',
     body: JSON.stringify(updatedFriendsObject),
     headers: {
       "Content-Type": "application/json"},
     }).then(() => getFriends()) // Fetch friends data again after updating a friend
 
   }


    return (
        <div className="App">
    
      {friends.map((friends, index) => (
        <div className="friendsContainer" key={index}>
          <div>
            firstName: {friends.firstName} <br></br>
            lastName: {friends.lastName} <br></br>
          </div>
          <form>
          <label>Update First Name</label>
          <input onChange={(e) => setUpdatedFirstName(e.target.value)}></input>
          <label>Update Last Name</label>
          <input onChange={(e) => setUpdatedLastName(e.target.value)}></input>
          <button onClick={(e) => updateFriends(e, friends)}>Update</button>
          </form>
        </div>
       ))}
       </div>
    )
    
}
    
