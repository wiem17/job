import React, { useEffect, useState,useRef } from "react";
import Nav from "../Components/Shared/Nav";
import Header from "../Components/Shared/Header";
import {
  getUserById,
  updateUserImage,
  updateUserById,
  
} from "../Services/userApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useUser } from "../auth/useUser";
export default function Profile() {
  const [user, setUser] = useState({
    _id: "",
    name: "",
    lastname: "",
    age: "",
    email: "",
    role: "",
    image: "",
    phoneNumber: "", // Champ ajouté
    dateOfBirth: "", // Champ ajouté
    socialProfiles: {
      // Champs ajoutés
      facebook: "",
      twitter: "",
      linkedIn: "",
    },
    gender: "", // Champ ajouté
  });
  const [image, setImage] = useState("");
  const [userId, setUserId] = useState("");
  const fileInputRef = useRef(null);
  const util = useUser();
 
  const baseUrl = process.env.REACT_APP_API;
 
  useEffect(() => {
    try {
      getUserById(util._id).then((res) => {
        setUser(res);
      });
    } catch (error) {
      // Gérer les erreurs
      console.log(error);
    }
  }, []);

 

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    console.log(util);
    try {
      // Envoyez les données de l'utilisateur mises à jour à votre backend
      const updatedUser = await updateUserById(util._id, user);
      console.log("User updated successfully:", updatedUser);

      // Remettez à zéro l'état de l'image après l'enregistrement réussi
      setImage(null);
      toast.success("Données modifié avec succès !");
    } catch (error) {
      console.error("Error updating user:", error);
     toast.erreur("Données  n'est modifié avec succès !");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split(".");
    setUser((prevState) => {
      let updatedData = { ...prevState };
      let data = updatedData;

      // Iterate over the keys except for the last one to navigate through the nested objects
      for (let i = 0; i < keys.length - 1; i++) {
        data[keys[i]] = data[keys[i]] || {}; // Ensure nested structure exists
        data = data[keys[i]];
      }

      // Set the value to the last key in the path
      data[keys[keys.length - 1]] = value;
      return updatedData;
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Obtenez le premier fichier sélectionné
    if (file) {
      // Créez une instance de FileReader pour lire le contenu du fichier
      const reader = new FileReader();
      reader.readAsDataURL(file); // Lisez le fichier en tant que données d'URL
      // Gérez l'événement onload pour obtenir l'URL de l'image une fois qu'elle est chargée
      reader.onload = () => {
        updateUserImage(file).then((res) => {
          console.log(res);
          setUser({ ...user, image: res.data.image });
        });
      };
    }
  };

  const handleButtonClick = () => {
    // Déclenche le clic sur le sélecteur de fichiers
    fileInputRef.current.click();
  };

  

  return (
    <>
     <ToastContainer />
      <Header></Header>
      <main className="main">
        <Nav></Nav>
        <form onSubmit={handleSaveChanges}>
          <div className="box-content">
            <div className="box-heading">
              <div className="box-title">
                <h3 className="mb-35">Mon Profile</h3>
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
                      <span>Mon Profile</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-9 col-xl-8 col-lg-8">
                <div className="section-box">
                  <div className="container">
                    <div className="panel-white mb-30">
                      <div className="box-padding">
                        <h6 className="color-text-paragraph-2">
                          Modifier mon profile
                        </h6>
                        <div className="box-profile-image">
                          <div className="img-profile">
                          {user && user.image ? (
                              <img
                                src={baseUrl + user?.image}
                                alt="User Image"
                                onChange={handleChange}
                                style={{ maxWidth: "100%", maxHeight: "200px" }}
                                onError={(e) =>
                                  (e.target.src =
                                    "/assets/imgs/avatar/ava_1.png")
                                } // Specify the fallback image path
                              />
                            ) : (
                              <img
                                src="/assets/imgs/avatar/ava_1.png" // Specify the path to your default image
                                alt="Default User Image"
                                style={{ maxWidth: "150%", maxHeight: "200px" }}
                              />
                            )}
                          </div>
                          <div className="info-profile">
                          <a
                           className="btn btn-default"
                      onClick={handleButtonClick}
                            >
                       Télécharger Avatar
                                 </a>
                                 <input
        ref={fileInputRef}
        type="file"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
                           
                           
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group mb-30">
                              <label className="font-sm color-text-mutted mb-10">
                                Nom
                              </label>

                              <input
                                className="form-control"
                                type="text"
                                name="lastname"
                                value={user?.lastname}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group mb-30">
                              <label className="font-sm color-text-mutted mb-10">
                                Prénom
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                name="name"
                                value={user?.name}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group mb-30">
                              <label className="font-sm color-text-mutted mb-10">
                                Age{" "}
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                name="age"
                                value={user?.age}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group mb-30">
                              <label className="font-sm color-text-mutted mb-10">
                                Genre
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                name="gender"
                                value={user?.gender}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-6">
                            <div className="form-group mb-30">
                              <label className="font-sm color-text-mutted mb-10">
                                Dade de naissance
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                name="dateOfBirth"
                                value={
                                  user?.dateOfBirth
                                    ? user?.dateOfBirth
                                        .replace(/^(0{2})/, "")
                                        .replace(/T.+$/, "")
                                    : ""
                                }
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group mb-30">
                              <label className="font-sm color-text-mutted mb-10">
                                Numéro de Télephone
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                name="phoneNumber"
                                value={user?.phoneNumber}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group mb-30">
                              <label className="font-sm color-text-mutted mb-10">
                                Email
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                name="email"
                                value={user?.email}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                         

                          <div className="col-lg-12">
                            <div className="form-group mt-10">
                              <button
                                className="btn btn-default btn-brand icon-tick"
                                type="submit"
                              >
                                Enregistrer tous les modifications
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-4">
                <div className="section-box">
                  <div className="container">
                    <div className="panel-white">
                      <div className="panel-head">
                        <h5>Réseau social</h5>
                      </div>
                      <div className="panel-body pt-20">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group mb-30">
                              <label className="font-sm color-text-mutted mb-10">
                                Facebook
                              </label>
                             
                                <input
                                className="form-control"
                                type="text"
                               name="socialProfiles.facebook"
                                value={user?.socialProfiles.facebook}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group mb-30">
                              <label className="font-sm color-text-mutted mb-10">
                                Twitter
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                value={user.socialProfiles.twitter}
                                name="socialProfiles.twitter"
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group mb-30">
                              <label className="font-sm color-text-mutted mb-10">
                                LinkedIn
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                value={user.socialProfiles.linkedIn}
                                name="socialProfiles.linkedIn"
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group mt-0">
                              <button className="btn btn-default btn-brand icon-tick"
                               type="submit">
                               Enregistrer tous les modifications
                              </button>
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
        </form>
      </main>
    </>
  );
}
