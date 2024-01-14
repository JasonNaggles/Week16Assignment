import React from "react";
export default function DeleteFriends( getFriends ) {

    // MOCK API URL used to update MockAPI
const MOCK_API_URL = "https://650fc3383ce5d181df5ca880.mockapi.io/Friends";

    // Function to delete a friend by ID
 function deleteFriends(id) {
    fetch(`${MOCK_API_URL}/${id}`, {
      method: 'DELETE',
    }).then(() => getFriends()) // Fetch friends data again after deletion
  }

  return (
    <div className="text-center">
        <button type="button" onClick={deleteFriends} className="btn btn-success p-2 m-2">Delete Friend!</button>
    </div>
  );

}