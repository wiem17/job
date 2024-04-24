import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { createPoste } from "../Services/PosteService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Nav from '../Components/Shared/Nav'

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
<>

  <header className="header sticky-bar">
    <div className="container">
      <div className="main-header">
        <div className="header-left">
          <div className="header-logo">
            <a className="d-flex" href="index.html">
              <img alt="jobBox" src="assets/imgs/page/dashboard/logo.svg" />
            </a>
          </div>
          <span className="btn btn-grey-small ml-10">Admin area</span>
        </div>
        <div className="header-search">
          <div className="box-search">
            <form action="">
              <input
                className="form-control input-search"
                type="text"
                name="keyword"
                placeholder="Search"
              />
            </form>
          </div>
        </div>
        <div className="header-menu d-none d-md-block">
          <ul>
            <li>
              {" "}
              <a href="http://wp.alithemes.com/html/jobbox/demos/index.html">
                Home{" "}
              </a>
            </li>
            <li>
              {" "}
              <a href="http://wp.alithemes.com/html/jobbox/demos/page-about.html">
                About us{" "}
              </a>
            </li>
            <li>
              {" "}
              <a href="http://wp.alithemes.com/html/jobbox/demos/page-contact.html">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="header-right">
          <div className="block-signin">
            <a
              className="btn btn-default icon-edit hover-up"
              href="post-job.html"
            >
              Post Job
            </a>
            <div className="dropdown d-inline-block">
              <a
                className="btn btn-notify"
                id="dropdownNotify"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-display="static"
              />
              <ul
                className="dropdown-menu dropdown-menu-light dropdown-menu-end"
                aria-labelledby="dropdownNotify"
              >
                <li>
                  <a className="dropdown-item active" href="#">
                    10 notifications
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    12 messages
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    20 replies
                  </a>
                </li>
              </ul>
            </div>
            <div className="member-login">
              <img alt="" src="assets/imgs/page/dashboard/profile.png" />
              <div className="info-member">
                {" "}
                <strong className="color-brand-1">Steven Jobs</strong>
                <div className="dropdown">
                  <a
                    className="font-xs color-text-paragraph-2 icon-down"
                    id="dropdownProfile"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-display="static"
                  >
                    Super Admin
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-light dropdown-menu-end"
                    aria-labelledby="dropdownProfile"
                  >
                    <li>
                      <a className="dropdown-item" href="profile.html">
                        Profiles
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="my-resume.html">
                        CV Manager
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="login.html">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <main className="main">
   <Nav></Nav>
    <div className="box-content">
      <div className="box-heading">
        <div className="box-title">
          <h3 className="mb-35">Post a Job</h3>
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
                <span>Post New Job</span>
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
                  <h5 className="icon-edu">Tell us about your role</h5>
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
        onClick={handleCreateProduct}
      >
        Créer un nouveau poste
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
      <div className="mt-10">
        <div className="section-box">
          <div className="container">
            <div className="panel-white pt-30 pb-30 pl-15 pr-15">
              <div className="box-swiper">
                <div className="swiper-container swiper-group-10">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      {" "}
                      <img
                        src="assets/imgs/page/dashboard/microsoft.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="swiper-slide">
                      {" "}
                      <img
                        src="assets/imgs/page/dashboard/sony.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="swiper-slide">
                      {" "}
                      <img
                        src="assets/imgs/page/dashboard/acer.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="swiper-slide">
                      {" "}
                      <img
                        src="assets/imgs/page/dashboard/nokia.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="swiper-slide">
                      {" "}
                      <img
                        src="assets/imgs/page/dashboard/asus.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="swiper-slide">
                      {" "}
                      <img
                        src="assets/imgs/page/dashboard/casio.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="swiper-slide">
                      {" "}
                      <img
                        src="assets/imgs/page/dashboard/dell.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="swiper-slide">
                      {" "}
                      <img
                        src="assets/imgs/page/dashboard/panasonic.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="swiper-slide">
                      {" "}
                      <img
                        src="assets/imgs/page/dashboard/vaio.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="swiper-slide">
                      {" "}
                      <img
                        src="assets/imgs/page/dashboard/sony.svg"
                        alt="jobBox"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer mt-20">
        <div className="container">
          <div className="box-footer">
            <div className="row">
              <div className="col-md-6 col-sm-12 mb-25 text-center text-md-start">
                <p className="font-sm color-text-paragraph-2">
                  © 2022 -{" "}
                  <a
                    className="color-brand-2"
                    href="https://themeforest.net/item/jobbox-job-portal-html-bootstrap-5-template/39217891"
                    target="_blank"
                  >
                    JobBox{" "}
                  </a>
                  Dashboard <span> Made by</span>
                  <a
                    className="color-brand-2"
                    href="http://alithemes.com"
                    target="_blank"
                  >
                    {" "}
                    AliThemes
                  </a>
                </p>
              </div>
              <div className="col-md-6 col-sm-12 text-center text-md-end mb-25">
                <ul className="menu-footer">
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Policy</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </main>
</>
  )}
  export default PosteList