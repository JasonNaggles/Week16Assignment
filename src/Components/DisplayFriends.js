import { useEffect, useState } from "react";
import UpdateFriends from "./UpdateFriends";
import "./DisplayFriends.css"

export default function DisplayFriends () {
    // This is my URL for Mock API
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
  }, [])

  // Function to delete a friend by ID
  function deleteFriends(id) { // Define function to delete a friend by ID
    fetch(`${MOCK_API_URL}/${id}`, { // Fetch the specific friend by ID
      method: "DELETE",
    }).then(() => getFriends()); // Fetch friends data again after deletion
  }

  // Function to add a new friend
  function postNewFriends(e) { // Define function to add new friend
    e.preventDefault(); // Prevent default form submission behavior
    fetch(MOCK_API_URL, { // Fetch data from the mock API URL
      method: "POST",
      headers: { "Content-Type": "application/json" }, // Set headers
      body: JSON.stringify({ // Convert data to JSON format
        firstName: newFirstName, // Get new friend's first name
        lastName: newLastName, // Get new friend's last name
      }),
    }).then(() => getFriends()); // Fetch friends data again after adding a new friend
  }

  // Function to update a friend's information
  function updateFriends(e, friendsObject) { // Define function to update a friend's information
    e.preventDefault(); // Prevent default form submission behavior
    let updatedFriendsObject = { // Create updated friend object
      firstName: updatedFirstName, // Get updated first name
      lastName: updatedLastName, // Get updated last name
    };
    fetch(`${MOCK_API_URL}/${friendsObject.id}`, { // Fetch a specific friend by ID
      method: "PUT",
      body: JSON.stringify(updatedFriendsObject), // Covert data to JSON format
      headers: {
        "Content-Type": "application/json", // Set headers
      },
    }).then(() => getFriends()); // Fetch friends data again after updating a friend
  }

  console.log(friends); // Log friends data to console

  return (
    <div style={
              
      {
          textAlign: 'center',
          fontFamily: 'sans-serif',
          color: 'black',
          fontSize: '20px',
      }
      
      }>
    <div>
        <div className="displayFriend text-center">
              <div className="mapContainer d-inline-flex flex-row p-2 m-2 justify-content-around">
              <UpdateFriends friends={friends}
              getFriends={getFriends} // Pass getFriends as prop
              deleteFriends={deleteFriends} // Pass deleteFriends as prop
              postNewFriends={postNewFriends} // Pass postNewFriends as prop
              updateFriends={updateFriends} // Pass updateFriends as prop
              />      
              </div>
            
        </div>
    </div>
    </div>
  )



}