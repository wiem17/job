import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import categories from "../categories";
import { LinkContainer } from "react-router-bootstrap";

import "./Home.css";

import { Card, Badge } from "react-bootstrap";
import { getAllPostes } from "../Services/PosteService"; // Importez votre fonction getAllProducts

const Home = () => {
  const [postes, setPostes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Utilisez la fonction getAllProducts pour obtenir la liste des produits
        const postesData = await getAllPostes();
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

        <div>
          <Link
            to="/category/all"
            style={{
              textAlign: "right",
              display: "block",
              textDecoration: "none",
            }}
          >
            See more {">>"}
          </Link>
        </div>
      </div>

      <div className="sale_banner"></div>

      <div className="recent-products">
        {/* Ajoutez ici le contenu des produits récents si nécessaire */}
      </div>

      <h2>Catégories</h2>
      <Row>
        {categories.map((description) => (
          <LinkContainer
            to={`/category/${description.name.toLowerCase()}`}
            key={description.name}
          >
            <Col md={4}>
              <div
                className="categorytile"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${description.img})`,
                  gap: "10px",
                }}
              >
                {description.name}
              </div>
            </Col>
          </LinkContainer>
        ))}
      </Row>
    </div>
  );
};

export default Home;


