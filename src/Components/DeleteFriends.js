import React from "react";
export default function DeleteFriends(id, onDelete, getFriends) {

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
  )

}