import React, { useState } from 'react';

export default function FriendManage() {

    const [contentDisplayed, setContentDisplayed] = useState(false);

    const displayContent = () => {
        if (!contentDisplayed) {

            console.log("Post new friends form");
      console.log("First Name");
      console.log("Last Name");
      console.log("Submit");

      console.log("First Name: Jason");
      console.log("Last Name: German");
      console.log("Update First Name");
      console.log("Update Last Name");
      console.log("Update");
      console.log("Delete Friend!");

      console.log("First Name: Hugh");
      console.log("Last Name: Downs");
      console.log("Update First Name");
      console.log("Update Last Name");
      console.log("Update");
      console.log("Delete Friend!");

      setContentDisplayed(true);

        } else {
            console.log("Content is already displayed.");
        }
    };

    return (
        <div>
          <h1>Friend Management</h1>
          <button onClick={displayContent}>Display Content</button>
        </div>
      );
    };
