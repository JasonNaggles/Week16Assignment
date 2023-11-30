import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
export default function Cats() {

    const apiUrl = "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng";
    const apiKey = "live_Lbn7gsdN1cVACzhJ58lHMwy8dN1bMUo9moA9H7KCQtHaN9A8mg5XLbQmY3FHcvBX";
    
    const [cats, setCats ] = useState({});
    const requestCats = async () => {
      const headers = {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      };

      try {
      const apiResponse = await fetch(apiUrl, {headers});
      const jsonResult = await apiResponse.json();
      console.log(jsonResult);
      setCats(jsonResult);
      } catch (error) {
        console.log.error(error.message)
      }
      
    } 
      
    
    useEffect(() => {
      requestCats();
    }, []);


    return (
        <>
        <Container>
            <Row className="justified-content-center">
            {Object.values(cats).map(cat => (
            <Col key={cat.id}>
                <Card>
                    <Card.Body>
                        <Card.Title>{cat.name}</Card.Title>
                        <p>{cat.description}</p>
                        <Card.Img src={cat.url} />
                    </Card.Body>
                </Card>
            </Col>
            ))}
            </Row>
        </Container>
        </>
  );

}
