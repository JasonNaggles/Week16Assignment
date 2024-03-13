import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function AddFriends({ getFriends }) {

    // MOCK API URL used to update MockAPI
    const MOCK_API_URL = "https://650fc3383ce5d181df5ca880.mockapi.io/Friends";

    // state add state variables and state update function used in add form and set to null
    const [newFirstName, setNewFirstName] = useState('') // Input field for new first name
    const [newLastName, setNewLastName] = useState('') // Input field for new last name
    const [friends, setFriends] = useState([]) // Array to store friends from the API

    // react bootstrap modal variables
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //when add button is clicked, the new object is posted as a string to MockAPI
    function postNewFriends(e) {
        
        e.preventDefault();
        fetch(MOCK_API_URL, {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            firstName: newFirstName,
            lastName: newLastName,
          })
        }).then(() => getFriends()) // Fetch friends data again after adding a new friend
        console.log(friends);
    // set form fields to blank after update
        setNewFirstName('')
        setNewLastName('')
      }

      

      function getFriends() {
        fetch(MOCK_API_URL)
        .then(data => data.json())
        .then(data => setFriends(data)) // Update the friends state with data from the API
      }
      // react bootstrap modal used to only display form fields if user wants to add a friend
      return (
    
        <div style={{
      
      height: 'auto',
  }}>
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
            <Button variant="primary p-2 m-2" onClick={handleShow} >
                Add a new friend!
            </Button>
            </>
        </div>

        <Modal show={show} onHide={handleClose} >
            <Modal.Header>
                <div className="flex flex-row text-center">

                </div>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <label>Add New First Name</label>
                    <input className="m-1" onChange={(e) => setNewFirstName(e.target.value)} value={newFirstName}></input>

                    <label>Add New Last Name</label>
                    <input className="m-1" onChange={(e) => setNewLastName(e.target.value)} value={newLastName}></input>

                    <div className="text-center">
                        <Button type="button" onClick={(e) => postNewFriends(e)} className="btn btn-success p-2 m-2">Add New Friend</Button>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <div className="text-center">
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                </div>
            </Modal.Footer>
        </Modal>
        </div>
        </div>
        
      )

}