import { useEffect, useState } from "react";
import AddFriends from "./AddFriends";
import UpdateFriends from "./UpdateFriends";
import DeleteFriends from "./DeleteFriends";

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
    console.log(friends)
  }, [])

  const onUpdate = (id) => {
        UpdateFriends(id);
  };

  const onDelete = (id) => {
        DeleteFriends(id);
  };

  return (
    <div>
        <div>
            <h1 className="text-center">Friend's First and Last Name</h1>
            <AddFriends getFriends={getFriends} />
        </div>
        <div className="displayFriend text-center">
            {friends.map((friends, index) => (
                
                <div className="mapContainer d-inline-flex flex-rowp-2 m-2 justify-content-around" key={index}>
                    <UpdateFriends id ={friends.id} getFriends={getFriends} onUpdate={onUpdate}/>
                    <DeleteFriends id ={friends.id} getFriends={getFriends} onUpdate={onDelete}/>
                </div>

            
            ))}
        </div>
    </div>
  )



}