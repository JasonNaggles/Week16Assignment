import React from "react";
import background from "./Images/friends.jpg";
import "./Home.css";
export default function Home() {
    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
            height: 'auto',
        }}>
        <div style={
            
        {
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            height: '100vh',
            textAlign: 'center',
            paddingTop: '10%',
            paddingLeft: '10%',
            paddingRight: '10%',
            paddingBottom: '10%',
            fontFamily: 'sans-serif',
            color: 'black',
            fontSize: '20px',
        }
        
        }>
            <h1>Welcome to the Friends App</h1>
            </div>
        </div>
    )
}