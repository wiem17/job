import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { createPoste } from "../Services/PosteService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import Header from '../Components/Shared/Header'
import { updatePoste , getPosteById } from "../Services/PosteService";
import { useParams, } from "react-router-dom";
import { Link } from 'react-router-dom';
import Nav from '../Components/Shared/Nav'




import { getSession } from "../utils/SessionUtils";

const baseUrl = process.env.REACT_APP_API;

/* Setting the header for the axios request. */
const config = {
  headers: { Authorization: `Bearer ${getSession("token")}` },
};
const PosteList = () => {
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
        const response = await Axios.get(`${baseUrl}api/postes/po/${id}` ,config);
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

      Axios.delete(`${baseUrl}api/postes/${publicId}` ,config)
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
        navigate("/postlist");
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

 
  return (
<>

  <Header></Header>

  <main className="main">
    <Nav></Nav>
    <div className="box-content">
      <div className="box-heading">
        <div className="box-title">
          <h3 className="mb-35">Modifier Poste</h3>
        </div>
        <div className="box-breadcrumb">
          <div className="breadcrumbs">
            <ul>
              <li>
                {" "}
                <a className="icon-home" href="index.html">
                  Admin
                </a>
              </li>
              <li>
                <span>Modifier Poste</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="section-box">
            <div className="container">
              <div className="panel-white mb-30">
                <div className="box-padding bg-postjob">
                  <h5 className="icon-edu">Ajouter ici</h5>
                  <div className="row mt-30">
                    <div className="col-lg-9">
                    <div className="row">
  <div className="col-lg-12">
    <div className="form-group mb-30">
      <label className="font-sm color-text-mutted mb-10">
        Titre *
      </label>
      <input
        className="form-control"
        type="text"
        placeholder="Enter titre"
        name="titre"
        value={newPoste.titre}
        required
        onChange={handleInputChange}
      />
    </div>
  </div>
  <div className="col-lg-12">
    <div className="form-group mb-30">
      <label className="font-sm color-text-mutted mb-10">
        Description *
      </label>
      <textarea
        className="form-control"
        rows={8}
        placeholder="Enter description"
        name="description"
        value={newPoste.description}
        required
        onChange={handleInputChange}
      />
    </div>
  </div>
  <div className="col-lg-6 col-md-6">
    <div className="form-group mb-30">
      <label className="font-sm color-text-mutted mb-10">
        Compétences *
      </label>
      <textarea
        className="form-control"
        rows={5}
        placeholder="Enter competences"
        name="competences"
        value={newPoste.competences}
        required
        onChange={handleInputChange}
      />
    </div>
  </div>
  <div className="col-lg-6 col-md-6">
    <div className="form-group mb-30">
      <label className="font-sm color-text-mutted mb-10">
        Catégories *
      </label>
      <select
        className="form-control"
        name="categories"
        value={newPoste.categories}
        onChange={handleInputChange}
      >
        <option disabled value="">
          -- Sélectionnez --
        </option>
        <option value="marketing">Marketing</option>
        <option value="maintenance">Maintenance</option>
        <option value="development">Development</option>
      </select>
    </div>
  </div>
  <div className="col-lg-6 col-md-6">
  <div className="form-group mb-30">
    <Button
      type="button"
      onClick={showWidget}
      className="btn btn-default upload-button"
    >
      Upload Images
    </Button>
    <div className="d-flex justify-content-center mb-3">
      <div className="images-preview">
        {newPoste.image.map((image, index) => (
          <div key={index} className="image-preview">
            <img src={image.secure_url} alt={`Preview ${index}`} />
            <div className="col-lg-6 col-md-6 mt-2">
              {/* Ajout de l'espace entre le bouton et l'image */}
              <a className="btn btn-delete" onClick={() => handleRemoveImg(image)}>Delete</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

  <div className="col-lg-12">
    <div className="form-group mt-10">
      <Button
        className="btn btn-default btn-brand icon-tick"
        type="submit"
        onClick={handleUpdatePoste}
      >
        Update poste
      </Button>
    </div>
  </div>
</div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
      
    </div>
  </main>
</>







  )}
  export default PosteList