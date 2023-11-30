import React from "react";

const Feed = () => {
    
    const [images, setImages] = React.useState([]);

    async function refreshImages()
    {
        setImages([])

        try {
            const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=12",{
                headers:{
                    "x-api-key": process.env.REACT_APP_CAT_API_KEY
                }
            });
            const json = await response.json();
            setImages(json);
        }
     catch (e){
        console.log(e)
    }       
}

}