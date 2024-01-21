import React from "react";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
 function deleteFriends(e) {
  e.preventDefault()
    onDelete(id)
    fetch(`${MOCK_API_URL}/${id}`, {
      method: 'DELETE',
    }).then(() => getFriends()) // Fetch friends data again after deletion
  }

  return (
    <div className="text-center">
        <Link to="/DisplayFriends">
        <Button type="button" onClick={deleteFriends} className="btn btn-success p-2 m-2">Delete Friend!</Button>
        </Link>
    </div>
  );

}