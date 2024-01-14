import React from "react";
import Button from "react-bootstrap/Button";


export default function DeleteFriends({ id, onDelete, getFriends }) {

    // MOCK API URL used to update MockAPI
const MOCK_API_URL = "https://650fc3383ce5d181df5ca880.mockapi.io/Friends";

    // Function to delete a friend by ID
 function deleteFriends() {
    onDelete(id)
    fetch(`${MOCK_API_URL}/${id}`, {
      method: 'DELETE',
    }).then(() => getFriends()) // Fetch friends data again after deletion
  }

  return (
    <div className="text-center">
      
        <Button type="button" onClick={deleteFriends} className="btn btn-success p-2 m-2">Delete Friend!</Button>
    </div>
  );

}