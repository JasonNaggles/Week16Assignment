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
    const [updatedFirstName, setUpdatedFirstName] = useState('') // Input field for updated first name
    const [updatedLastName, setUpdatedLastName] = useState('') // Input field for updated last name

    // react bootstrap modal variables
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //when add button is clicked, the new object is posted as a string to MockAPI
    function postNewFriends(e) {
        e.preventDefault()
        fetch(MOCK_API_URL, {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            firstName: newFirstName,
            lastName: newLastName,
          })
        }).then(() => getFriends()) // Fetch friends data again after adding a new friend

    // set form fields to blank after update
        setNewFirstName('')
        setNewLastName('')
      }
      // react bootstrap modal used to only display form fields if user wants to add a friend
      return (
        <>
        <div className="text-center">
            <Button variant="primary" onClick={handleShow} >
                Add a new friend!
            </Button>
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
                        <Button type="button" onClick={postNewFriends} className="m-1">Add New Friend</Button>
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
        </>
      )

}