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
            {friends.map((friend, index) => (
                <div className="mapContainer d-inline-flex flex-row p-2 m-2 justify-content-around" key={index}>
                <UpdateFriends id={friend.id} getFriends={getFriends} onUpdate={UpdateFriends}/>      
                </div>
            ))}
        </div>
    </div>
    </div>
  )



}