import React from "react";
import Button from "react-bootstrap/Button"; // Import Button component from react-bootstrap library
import Modal from "react-bootstrap/Modal";   // Import Modal component from react-bootstrap library
import { useState, useEffect } from "react"; // Import useState and useEffect hooks from React
import { useHistory } from "react-router-dom"; // Import useHistory from react-router-dom for navigation
export default function DeleteFriends({ id, getFriends }) { // Define DeleteFriends component with props id and getFriends
const history = useHistory(); // Get history object from useHistory hook


function handleClick() { // Define handleClick function for navigation
  history.push("displayfriends"); // Navigate to "displayfriends" route
}
    // MOCK API URL used to update MockAPI
const MOCK_API_URL = "https://650fc3383ce5d181df5ca880.mockapi.io/Friends";

const [friends, setFriends] = useState([]) // Array to store friends from the API

// react bootstrap modal variables
const [show, setShow] = useState(false); // Initialize state variable show for modal visibility
const handleClose = () => setShow(false); // Function to close modal
const handleShow = () => setShow(true); // Function to show modal



// Use the useEffect hook to fetch friends data when the component mounts
useEffect(() => { 
  getFriends() // Fetch friends data
}, [])

    // Function to delete a friend by ID
    function deleteFriends (id) {
      fetch(`${MOCK_API_URL}/${id}`, {
      method: 'DELETE', 
       }).then(() =>  getFriends()) // Fetch friends data again after deletion
    }
  
    console.log(friends)
// Function to fetch friends data from the API
 
function getFriends() {
  fetch(MOCK_API_URL)
  .then(data => data.json())
  .then(data => setFriends(data)) // Update the friends state with data from the API
}

  return (
    
    <div style={
            {
                textAlign: 'center',
                fontFamily: 'sans-serif',
                color: 'black',
                fontSize: '20px',
            }
            
            }>
    <div className="text-center">
      <>
      <Button variant="success p-2 m-2" onClick={handleShow} >
          Delete Friend!
      </Button>
      </>
    </div>
    <Modal show={show} onHide={handleClose} >
            <Modal.Header>
                <div className="flex flex-row text-center">
                
                </div>
            </Modal.Header>
            <Modal.Body>
                {friends.map((friends, index) => ( // Map through friends array
                  <div className="friendsContainer" key={index}> {/* Container for each friend */}
                    <div>
                      firstName: {friends.firstName} <br></br>
                      lastName: {friends.lastName} <br></br>
                      <Button type="button" onClick={() => deleteFriends(friends.id)} variant="success p-2 m-2">Delete Friend!</Button> {/* Button to delete friend */}
                    </div>
                  </div>
                ))}
                  
            </Modal.Body>
            <Modal.Footer>
              <Button type="button" onClick={handleClick}>Go Back To Display Friends</Button>
            </Modal.Footer>
        </Modal>
    </div>
    
  );

};
