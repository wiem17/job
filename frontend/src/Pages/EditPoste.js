import React, { useEffect, useState } from "react";
import { Modal, Row, Col, Container, Form, Button } from "react-bootstrap";
import { updatePoste } from "../Services/PosteService";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios" ;
import "./AjouterPoste.css";
import categories from "../categories";
const baseUrl = process.env.REACT_APP_API;

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [newPoste, setNewPoste] = useState({
    titre: "",
    description: "",
    competences: "",
    categories: "",
    image: [], // Assuming images is an array to hold multiple image URLs
  });
  const [imgToRemove, setImgToRemove] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const fetchPosteData = async (id) => {
      try {
        const response = await Axios.get(`${baseUrl}api/postes/po/${id}`);
        console.log("get product successful:", response.data);
        setNewPoste(response.data);
      } catch (error) {
        console.error("Error fetching poste data:", error);
      }
    };

    fetchPosteData(id);
  }, [id]);

  const handleRemoveImg = (imgObject) => {
    if (imgObject && imgObject.public_id) {
      const publicId = imgObject.public_id;

      Axios.delete(`${baseUrl}images/${publicId}`)
        .then((response) => {
          console.log("Delete request successful:", response.data);

          setNewPoste((prevPoste) => ({
            ...prevPoste,
            image: prevPoste.image.filter(
              (image) => image.public_id !== publicId
            ),
          }));
        })
        .catch((error) => {
          console.error("Error in delete request:", error);
        });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPoste((prevPoste) => ({
      ...prevPoste,
      [name]: value,
    }));
  };

  const handleUpdatePoste = async (e) => {
    e.preventDefault();

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
      const response = await updatePoste(id, newPoste);
      console.log("put poste successful:", response.data);

      if (response.status === 200) {
        setNewPoste({
          titre: "",
          description: "",
          competences: "",
          categories: "",
          image: [],
        });

        alert("Poste updated successfully");
        navigate("/dashbord");
      }
    } catch (error) {
      console.error("Error updating poste:", error);
    }
  };

  const showWidget = () => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dqwc3ewbs",
        uploadPreset: "qfnwdnb8",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          const imageUrl = result.info.secure_url;
          setNewPoste((prevPoste) => ({
            ...prevPoste,
            image: [...prevPoste.image, result.info],
          }));
        }
      }
    );

    widget.open();
  };

  useEffect(() => {
    console.log("newPoste:", newPoste);
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
              <Modal.Title>Edit Poste</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form
                style={{ width: "100%" }}
                onSubmit={handleUpdatePoste}
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
                  <Button type="submit">Edit Post</Button>
                </Form.Group>
              </Form>
            </Modal.Body>
          </Modal>
        </Col>
        <Col md={6} className="newproduct__image--container"></Col>
      </Row>
    </Container>
  );
};

export default EditProduct;
