import React from "react";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

export default function DeleteFriends({ id, onDelete, getFriends }) {

    // MOCK API URL used to update MockAPI
const MOCK_API_URL = "https://650fc3383ce5d181df5ca880.mockapi.io/Friends";

const [friends, setFriends] = useState([]) // Array to store friends from the API

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
    // Function to delete a friend by ID
 function deleteFriends() {
  onDelete(id)
    fetch(`${MOCK_API_URL}/${id}`, {
      method: 'DELETE',
    }).then(() => getFriends()) // Fetch friends data again after deletion
  }

  return (
    <div style={{
     
      height: 'auto',
  }}>
    <div style={
            {
                textAlign: 'center',
                fontFamily: 'sans-serif',
                color: 'black',
                fontSize: '20px',
            }
            
            }>
    <div className="text-center"> 
        <Button type="button" onClick={deleteFriends} className="btn btn-success p-2 m-2">Delete Friend!</Button>
    </div>
    </div>
    </div>
  );

}