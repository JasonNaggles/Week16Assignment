import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
export default function DeleteFriends({ id, getFriends }) {
const history = useHistory();

function handleClick() {
  history.push("displayfriends");
}
    // MOCK API URL used to update MockAPI
const MOCK_API_URL = "https://650fc3383ce5d181df5ca880.mockapi.io/Friends";

const [friends, setFriends] = useState([]) // Array to store friends from the API

// react bootstrap modal variables
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);



// Use the useEffect hook to fetch friends data when the component mounts
useEffect(() => {
  getFriends()
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
                {friends.map((friends, index) => (
                  <div className="friendsContainer" key={index}>
                    <div>
                      firstName: {friends.firstName} <br></br>
                      lastName: {friends.lastName} <br></br>
                      <Button type="button" onClick={() => deleteFriends(friends.id)} variant="success p-2 m-2">Delete Friend!</Button>
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
