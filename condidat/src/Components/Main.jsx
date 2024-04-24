import React, { useState, useEffect,useRef } from "react";
import Header from "./Shared/Header";
import img from '../images/img.jpg';
import { Form, Button } from 'react-bootstrap';
import { getUserById ,fetchCondidatsByUserId,updateUserById} from "../Services/AuthApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const baseUrl = process.env.REACT_APP_API;

function Main() {
  
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState("");
  const [condidats, setCondidats] = useState([]);
  const [image, setImage] = useState('');
  const [newImage, setNewImage] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const storeduserId = localStorage.getItem("userID");
    console.log(storeduserId);
    console.log("headerhere");
    setUserId(storeduserId);
  }, []);

  console.log("the user loged in here is", userId);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserById(userId);
        console.log(userData);
        setUserData(userData);
      } catch (error) {
        // Gérer les erreurs
        console.log(error);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  
  const handleSaveChanges = async (e) => {
    e.preventDefault();
  
    try {
      // Envoyez les données de l'utilisateur mises à jour à votre backend
      const updatedUser = await updateUserById(userId, userData);
      console.log('User updated successfully:', updatedUser);
  
      // Remettez à zéro l'état de l'image après l'enregistrement réussi
      setImage(null);
      toast.success("Données modifié avec succès !");
    } catch (error) {
      console.error('Error updating user:', error);
      toast.erreur("Données  n'est modifié avec succès !");
    }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
        try {
          const condidatsData = await fetchCondidatsByUserId(userId);
          setCondidats(condidatsData);
          console.log("condidatsData");
        } catch (error) {
          // Gérer les erreurs de récupération des données
        }
      }
    };

    fetchData();
  }, [userId]);

  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', newImage);

      const response = await fetch(`${baseUrl}api/users/upload-image`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setImage(data.imageUrl); // Met à jour l'URL de l'image affichée
      // Met à jour l'image utilisateur dans la base de données
    } catch (error) {
      console.error('Erreur lors du téléchargement de l\'image :', error);
    }
  }
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Obtenez le premier fichier sélectionné
    if (file) {
      // Créez une instance de FileReader pour lire le contenu du fichier
      const reader = new FileReader();
      reader.readAsDataURL(file); // Lisez le fichier en tant que données d'URL
      // Gérez l'événement onload pour obtenir l'URL de l'image une fois qu'elle est chargée
      reader.onload = () => {
        const imageUrl = reader.result; // Obtenez l'URL de l'image
        setUserData({ ...userData, image: imageUrl }); // Mettez à jour l'état userData avec l'URL de l'image
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
      <form onSubmit={handleSaveChanges}>
        <section className="section-box-2">
          <div className="container">
            <div className="banner-hero banner-image-single">
              <img src={img} alt="jobbox" style={{ width: '2000px',height:'300px' }} />
            </div>
            <div className="box-company-profile">
              <div className="image-compay">
              <div className="image-profile">
  {userData && userData.image && (
    <img
      src={userData.image} // Utilisez la chaîne base64 directement
      alt="User Image"
      style={{ maxWidth: '100%', maxHeight: '100px' }}
    />
  )}
</div>
              </div>
              <div className="row mt-10">
                <div className="col-lg-8 col-md-12">
                  <h5 className="f-18">
                   {userData && userData.name}   {userData && userData.lastname}
                   
                  </h5>
                </div>
              </div>
            </div>
            <div className="border-bottom pt-10 pb-10" />
          </div>
        </section>
        <section className="section-box mt-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="box-nav-tabs nav-tavs-profile mb-5">
                  <ul className="nav" role="tablist">
                    <li>
                      <a
                        className="btn btn-border aboutus-icon mb-20 active"
                        href="#tab-my-profile"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-controls="tab-my-profile"
                        aria-selected="true"
                      >
                        Mon Profile
                      </a>
                    </li>
                    <li>
                      <a
                        className="btn btn-border recruitment-icon mb-20"
                        href="#tab-my-jobs"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-controls="tab-my-jobs"
                        aria-selected="false"
                      >
                        Mes Postes
                      </a>
                    </li>
                   
                  </ul>
                  <div className="border-bottom pt-10 pb-10" />
                  <div className="mt-20 mb-20">
                    <a className="link-red" href="#">
                      Supprimer Mon Compte
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-9 col-md-8 col-sm-12 col-12 mb-50">
               <div className="content-single">
               <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="tab-my-profile"
                  role="tabpanel"
                  aria-labelledby="tab-my-profile"
                >
                  <h3 className="mt-0 mb-15 color-brand-1">Mon Compte</h3>
                  <a className="font-md color-text-paragraph-2" href="#">
                    Modifier Notre Profile
                  </a>
                  <div className="box-profile-image">
                   
                   
                                
                    <div className="image-profile">
                    {userData && userData.image && (
                      
    <img
      src={userData.image} // Utilisez la chaîne base64 directement
      alt="User Image"
      onChange={handleChange}
      style={{ maxWidth: '150%', maxHeight: '200px' }}
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
                  <div className="row form-contact">
                    <div className="col-lg-6 col-md-12">
                      <div className="form-group">
                        <label className="font-sm color-text-mutted mb-10">
                         Nom
                        </label>
                        <input
                      className="form-control"
                      type="text"
                      name='lastname'
                      value={userData.lastname}
                      onChange={handleChange}
                     
                    />
                      </div>
                      <div className="form-group">
                        <label className="font-sm color-text-mutted mb-10">
                         Prénom
                        </label>
                        <input
                      className="form-control"
                      type="text"
                      name='name'
                      value={userData.name}
                      onChange={handleChange}
                     
                    />
                      </div>
                      <div className="form-group">
                        <label className="font-sm color-text-mutted mb-10">
                          Age
                        </label>
                        <input
                      className="form-control"
                      type="text"
                      name='age'
                      value={userData.age}
                      onChange={handleChange}
                    />
                      </div>
                      <div className="form-group">
                        <label className="font-sm color-text-mutted mb-10">
                         Genre
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name='gender'
                          value={userData.gender}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="font-sm color-text-mutted mb-10">
                         Date de Naissance
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name='dateOfBirth'
                          value={userData.dateOfBirth ? userData.dateOfBirth.replace(/^(0{2})/,'').replace(/T.+$/,'') : ''}
                          onChange={handleChange}
                         
                        />
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="font-sm color-text-mutted mb-10">
                            Numéro de téléphone
                            </label>
                            <input
                          className="form-control"
                          type="text"
                          name='phoneNumber'
                         
                          value={userData.phoneNumber}
                          onChange={handleChange}
                        />
                      
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="font-sm color-text-mutted mb-10">
                            Email
                            </label>
                            <input
                          className="form-control"
                          type="text"
                          name='email'
                          value={userData.email}
                          onChange={handleChange}
                        />
                      
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="font-sm color-text-mutted mb-10">
                             Mot de Passe
                            </label>
                            <input
                          className="form-control"
                          type="text"
                          name='password'
                          value={userData.password}
                          onChange={handleChange}
                        />
                          </div>
                        </div>
                      </div>
                      <div className="box-button mt-15">
                        <button className="btn btn-apply-big font-md font-bold" type="submit">
                          Enregistrer tous les modifications
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="box-skills">
                        <h5 className="mt-0 color-brand-1">Réseau Social</h5>
                        <div className="form-contact">
                          <div className="form-group">
                          <label className="font-sm color-text-mutted mb-10">
                          Facebook
                         </label>
                         <input
                          className="form-control"
                          type="text"
                          value={userData.socialProfiles ? userData.socialProfiles.facebook : ''}
                         />
                          </div>
                        </div>
                       
                        <div className="form-contact">
                          <div className="form-group">
                          <label className="font-sm color-text-mutted mb-10">
                          Twitter
                         </label>
                         <input
                          className="form-control"
                          type="text"
                          value={userData.socialProfiles ? userData.socialProfiles.twitter : ''}
                         />
                          </div>
                        </div>
                        <div className="form-contact">
                          <div className="form-group">
                          <label className="font-sm color-text-mutted mb-10">
                          LinkedIn
                         </label>
                         <input
                          className="form-control"
                          type="text"
                          value={userData.socialProfiles ? userData.socialProfiles.linkedIn : ''}
                         />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab-my-jobs"
                  role="tabpanel"
                  aria-labelledby="tab-my-jobs"
                >
                  <h3 className="mt-0 color-brand-1 mb-50">My Jobs</h3>
                  <div className="row display-list">
                    <div className="col-xl-12 col-12">
                    {condidats.length === 0 ? (
                   <p className="font-sm text-brand-2">Aucun Poste trouvé</p>
                         ) : (
                           condidats.map((condidat) => (
                      <div className="card-grid-2 hover-up" key={condidat._id}>
                            <span className="flash" />
                        <div className="row">
                         <div className="col-lg-6 col-md-6 col-sm-12">
                       <div className="card-grid-2-image-left">
                         <div className="image-box">
                             <a href={`${baseUrl}${condidat.file}`}>
                            <img src="assets/imgs/brands/brand-6.png" alt="jobBox" />
                                </a>
                                 </div>
            <div className="right-info">
              <a className="name-job" href="">
                {condidat.email}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card-block-info">
        <h4>{condidat.titrePoste}</h4>
        <span style={{ color: "purple", fontWeight: "bold" }}>Lettre de motivation: </span>
        <span style={{ color: "purple", fontWeight: "bold" }}>
          {condidat.lettre_de_motivation}
        </span>
        <div className="card-2-bottom mt-20">
          <div className="row">
            <div className="col-lg-5 col-5 text-end">
              {condidat.accepted ? (
                <p style={{ color: "green" }}>Accepté</p>
              ) : condidat.accepted === false ? (
                <p style={{ color: "red" }}>Refusé</p>
              ) : (
                <p style={{ color: "gray" }}>En attente</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  ))
)}

    </div>
                   
                  </div>
                </div>
               
              </div>
            </div>
          </div>
            </div>
          </div>
        </section>
        </form>
      </main>
    </>
  );
}

export default Main;
