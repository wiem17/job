import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { createPoste } from "../Services/PosteService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Nav from '../Components/Shared/Nav'
import Header from '../Components/Shared/Header'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
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
      return toast.error("Veuillez remplir tous les champs")
    }

    try {
      // Appeler la fonction pour créer un produit
      const response = await createPoste(newPoste);
      toast.success("Poste ajouté avec succès!");
         navigate("/postlist")
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

       
      }

    } catch (error) {
      console.error("Error creating product:", error);
      toast.erreur("Poste n'est pas ajouté !");
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
<ToastContainer />

 <Header></Header>
  <main className="main">
   <Nav></Nav>
    <div className="box-content">
      <div className="box-heading">
        <div className="box-title">
          <h3 className="mb-35">Ajouter Poste</h3>
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
                <span>AjouterPoste</span>
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
      Télécharger Image
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
      
     
    </div>
  </main>
</>
  )}
  export default PosteList