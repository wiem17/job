import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";

import { Card, Badge } from "react-bootstrap";
import { getLatestPostes } from "../Services/PosteService"; // Importez votre fonction getAllProducts

const Home = () => {
  const [postes, setPostes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Utilisez la fonction getAllProducts pour obtenir la liste des produits
        const postesData = await getLatestPostes(); // Ajoutez await ici
        console.log("Postes Data:", postesData);
        setPostes(postesData);
      } catch (error) {
        console.error("Error fetching postes:", error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div>
      <div className="featured-products">
        <h2> Postes</h2>
        <div>
          <div className="d-flex justify-content-center flex-wrap">
            {postes &&
              postes.map((poste) => (
                <LinkContainer
                  key={poste._id}
                  to={`/poste/${poste._id}`}
                  style={{ cursor: "pointer", width: "13rem", margin: "10px" }}
                >
                  <Card style={{ width: "20rem", margin: "10px" }}>
                    {poste.image && poste.image.length > 0 && (
                      <Card.Img
                        variant="top"
                        className="product-preview-img"
                        src={poste.image[0].url}
                        alt={poste.titre}
                        style={{ height: "150px", objectFit: "cover" }}
                      />
                    )}
                    <Card.Body>
                      <Card.Title>{poste.titre}</Card.Title>
                      <Card.Text>
                        <Badge bg="warning" text="dark">
                          {poste.categories}
                        </Badge>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </LinkContainer>
              ))}
          </div>
        </div>

       
      </div>

     

     

      
    </div>
  );
};

export default Home;


