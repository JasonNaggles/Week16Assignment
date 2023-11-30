import React, { useState } from "react";

const Feed = () => {
    
    const [images, setImages] = useState([]);

    async function refreshImages()
    {
        setImages([])

        try {
            const response = await fetch("https://api.thecatapi.com/v1/images/search");
            const json = await response.json();
            setImages(json);
        }
    }       
}