import React, { useEffect, useState } from "react";
import { Modal, Row, Col, Container, Form, Button } from "react-bootstrap";
import { createPoste } from "../Services/PosteService";
import "./AjouterPoste.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import categories from "../categories";
const baseUrl = process.env.REACT_APP_API;

const PosteList = () => {
  
  const [newPoste, setNewPoste] = useState({
    titre: "",
    description: "",
    competences: "",
    categories: "",
    image: [], // Assuming images is an array to hold multiple image URLs
  });
  const navigate = useNavigate();

  const [imgToRemove, setImgToRemove] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showModal, setShowModal] = useState(true); // Mettez showModal à true pour ouvrir automatiquement le modal

  const handleRemoveImg = (imgObject) => {
    if (imgObject && imgObject.public_id) {
      const publicId = imgObject.public_id;

      // Envoyez la requête DELETE vers le serveur avec l'URL correcte et le bon ID de l'image
      Axios.delete(`${baseUrl}api/postes/${publicId}`)
        .then((response) => {
          console.log("Delete request successful:", response.data);

          // Mettez à jour l'état des images dans votre composant
          setNewPoste((prevProduct) => ({
            ...prevProduct,
            image: prevProduct.image.filter(
              (image) => image.public_id !== publicId
            ),
          }));

          // Vous pouvez également réinitialiser l'état imgToRemove ici si nécessaire
          // setImgToRemove(null);
        })
        .catch((error) => {
          console.error("Error in delete request:", error);
          // Gérer les erreurs si nécessaire
        });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPoste((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();

    // Vérifiez si tous les champs sont remplis
    if (
      !newPoste.titre ||
      !newPoste.description ||
      !newPoste.competences ||
      !newPoste.categories ||
      newPoste.image.length === 0
    ) {
      return alert("Please fill out all the fields");
    }

    try {
      // Appeler la fonction pour créer un produit
      const response = await createPoste(newPoste);
      navigate("/dashbord");

      // Vérifiez si la création du produit a réussi (vous pouvez ajuster cette vérification selon la structure de votre réponse)
      if (response.data && response.data.length === 0) {
        // Réinitialiser le formulaire après la création du produit
        setNewPoste({
            titre: "",
            description: "",
            competences: "",
            categories: "",
            image: [], 
        });

        // Afficher un message de succès
        setShowSuccessMessage(true);
      }

    } catch (error) {
      console.error("Error creating product:", error);
      // Gérer les erreurs si nécessaire
    }
  };

  const showWidget = () => {
    // Use Cloudinary Upload Widget to handle image uploads
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dqwc3ewbs", // Replace with your Cloudinary cloud name
        uploadPreset: "qfnwdnb8", // Replace with your Cloudinary upload preset
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          // Handle a successful image upload
          const imageUrl = result.info.secure_url;
          setNewPoste((prevProduct) => ({
            ...prevProduct,
            image: [...prevProduct.image, result.info],
          }));
        }
      }
    );

    // Open the Cloudinary Upload Widget
    widget.open();
  };

  useEffect(() => {
    console.log("newProduct:", newPoste);
    console.log("imgToRemove:", imgToRemove);
  }, [newPoste, imgToRemove]);
  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/dashbord");
  };
  return (
    <Container>
      <Row>
        <Col md={6} className="newproduct__form--container">
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Create Poste</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form
                style={{ width: "100%" }}
                onSubmit={handleCreateProduct}
                className="upload-form"
              >
                <Form.Group>
                  <Form.Label>Titre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter titre"
                    name="titre"
                    value={newPoste.titre}
                    required
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    as="textarea"
                    rows={6}
                    placeholder="Enter description"
                    name="description"
                    value={newPoste.description}
                    required
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>competences</Form.Label>
                  <Form.Control
                    type="text"
                    as="textarea"
                    rows={5}
                    placeholder="Enter competences"
                    name="competences"
                    value={newPoste.competences}
                    required
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Categories</Form.Label>
                  <Form.Select
                    name="categories"
                    value={newPoste.categories}
                    onChange={handleInputChange}
                  >
                    <option disabled value="">
                      -- Select One --
                    </option>
                    <option value="marketing">Marketing</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="development">Development</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group>
                  <Button
                    type="button"
                    onClick={showWidget}
                    className="upload-button"
                  >
                    Upload Images
                  </Button>
                  <div className="d-flex justify-content-center mb-3">
                  <div className="images-preview">
                    {newPoste.image.map((image, index) => (
                      <div key={index} className="image-preview">
                        <img src={image.secure_url} alt={`Preview ${index}`} />
                        <i onClick={() => handleRemoveImg(image)}>
                          {imgToRemove !== image.public_id && (
                            <FontAwesomeIcon
                              icon={faTimes}
                              className="delete-icon"
                            />
                          )}
                        </i>
                      </div>
                    ))}
                  </div>
                  </div>
                </Form.Group>
                <Form.Group>
                  <Button type="submit">Create Poste</Button>
                </Form.Group>
                {showSuccessMessage && (
                  <div className="success-message">
                    Poste added successfully!
                  </div>
                )}
              </Form>
            </Modal.Body>
          </Modal>
        </Col>
        <Col md={6} className="newproduct__image--container"></Col>
      </Row>
    </Container>
  );
};

export default PosteList;
