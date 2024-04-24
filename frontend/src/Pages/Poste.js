// Poste.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Container, Button, ButtonGroup } from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";
import Axios from "axios";
import Loading from "../Components/Loading";
import SimilarPoste from "../Components/SimilarPoste";
import { Badge } from "react-bootstrap";
import "./Poste.css";
import Condidat from './Condidat';
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from "react-router-dom";

const baseUrl = process.env.REACT_APP_API;

const Poste = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [poste, setPoste] = useState(null);
  const [similar, setSimilar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false); // État pour afficher/cacher le modal
  const handleDragStart = (e) => e.preventDefault();

  useEffect(() => {
    console.log("Fetching poste data for ID:", id);
    Axios.get(`${baseUrl}api/postes/${id}`)
      .then(({ data }) => {
        console.log("Received poste data:", data);
        setPoste(data.poste);
        setSimilar(data.similar);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  const handleApplyClick = () => {
    const userLoggedIn = true; // Vérifiez ici si l'utilisateur est connecté
    if (userLoggedIn) {
      setShowModal(true); // Afficher le modal lorsque vous cliquez sur le bouton "Postuler ici"
    } else {
      navigate("/login");
    }
  };

  if (!poste) {
    return <Loading />;
  }

  const images = poste.image.map((image, index) => (
    <img
      key={index}
      className="poste__carousel--image"
      src={image.url}
      onDragStart={handleDragStart}
      alt={`Poste ${index + 1}`}
    />
  ));

  return (
    <Container className="pt-4" style={{ position: "relative" }}>
      <Row>
        <Col lg={6}>
          <AliceCarousel
            mouseTracking
            items={images}
            controlsStrategy="alternate"
          />
        </Col>
        <Col lg={6} className="pt-4">
          <h1>{poste.titre}</h1>
          <p>
            <Badge bg="primary">{poste.description}</Badge>
          </p>
          <p style={{ textAlign: "justify" }} className="py-3">
            <strong>Compétences:</strong>
            {poste.competences}
          </p>
          <p style={{ textAlign: "justify" }} className="py-3">
            <strong>Categories:</strong>
            {poste.categories}
          </p>
          <ButtonGroup style={{ width: "60%" }}>
            <Button size="lg" disabled={loading} onClick={handleApplyClick}>
              Postuler ici
            </Button>
          </ButtonGroup>
        </Col>
      </Row>

      {/* Affichage des produits similaires */}
      {similar && similar.length > 0 && (
        <Row className="pt-4">
          <Col>
            <h2>Similar Postes</h2>
            <div className="d-flex justify-content-center flex-wrap">
              {similar.map((similarPoste) => (
                <SimilarPoste key={similarPoste._id} {...similarPoste} />
              ))}
            </div>
          </Col>
        </Row>
      )}

      {/* Affichage du modal uniquement si showModal est true */}
      {showModal && <Condidat postId={id} isOpen={showModal} toggle={() => setShowModal(!showModal)} />}
    </Container>
  );
};

export default Poste;
