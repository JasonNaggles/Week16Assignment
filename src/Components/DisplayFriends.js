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
  function deleteFriends(id) {
    fetch(`${MOCK_API_URL}/${id}`, {
      method: "DELETE",
    }).then(() => getFriends()); // Fetch friends data again after deletion
  }

  // Function to add a new friend
  function postNewFriends(e) {
    e.preventDefault();
    fetch(MOCK_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: newFirstName,
        lastName: newLastName,
      }),
    }).then(() => getFriends()); // Fetch friends data again after adding a new friend
  }

  // Function to update a friend's information
  function updateFriends(e, friendsObject) {
    e.preventDefault();
    let updatedFriendsObject = {
      firstName: updatedFirstName,
      lastName: updatedLastName,
    };
    fetch(`${MOCK_API_URL}/${friendsObject.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedFriendsObject),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => getFriends()); // Fetch friends data again after updating a friend
  }

  console.log(friends);

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
              getFriends={getFriends}
              deleteFriends={deleteFriends}
              postNewFriends={postNewFriends}
              updateFriends={updateFriends}
              />      
              </div>
            
        </div>
    </div>
    </div>
  )



}