import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './CategoryPage.css';
import { upload } from "../Services/CondidatService";
import { Card, Badge } from 'react-bootstrap';
import categories from './categories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import Header from "../Components/Shared/Header";
import Postcategory from "./Postcategory";

const baseUrl = process.env.REACT_APP_API;

function CategoryPage() {
    const { categories } = useParams();
    const [loading, setLoading] = useState(false);
    const [postes, setPostes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);
   
  const [userID, setuserID] = useState("");
  const [userRole, setuserRole] = useState("");
    const [condidat, setCondidat] = useState([]);
    const [valueFromChild, setValueFromChild] = useState(null);
    const [isLogedIn, setisLogedIn] = useState(false);
    const navigate = useNavigate();
    
    const handleChildClick = (value) => {
      setIsOpen(true)
      console.log("job titre " + value);
      setValueFromChild(value);
    };
    const handleCreateProduct = async (e) => {
      e.preventDefault();
      console.log(condidat);
      condidat.titrePoste = valueFromChild;
      // Vérifiez si tous les champs sont remplis
      if (
        //!condidat.email ||
        !condidat.lettre_de_motivation ||
        !condidat.titrePoste ||
        !condidat.file
      ) {
        toast.error("Veuillez remplir tous les champs");
  
      }
  
      try {
        // Appeler la fonction pour créer un produit
        const response = await upload(
          userID,
          condidat.email,
          condidat.lettre_de_motivation,
          condidat.file,
          valueFromChild
        );
  
        // Vérifiez si la création du produit a réussi (vous pouvez ajuster cette vérification selon la structure de votre réponse)
        if (response.data && response.data.length === 0) {
          // Réinitialiser le formulaire après la création du produit
          setCondidat({
            email: "",
            lettre_de_motivation: "",
            titrePoste: "",
            file: [],
          });
        }
        console.log("Fermeture du modal");
  
        // Afficher une toast pour indiquer que les données ont été envoyées avec succès
        toast.success("Données envoyées avec succès !");
       setIsOpen(false);
      } catch (error) {
        console.error("Error:", error);
        // Gérer les erreurs si nécessaire
        toast.error("erreur !!");
      } 
    };
    useEffect(() => {
      const storedLogedStatus = localStorage.getItem("isLogedIn");
      const storeduserID = localStorage.getItem("userID");
      const storeduserRole = localStorage.getItem("userRole");
      setuserID(storeduserID);
      setuserRole(storeduserRole);
      console.log(storedLogedStatus);
      setisLogedIn(storedLogedStatus);
    }, []);
    console.log("UserID:", userID);
    console.log("UserRole:", userRole);
  

    return (
      
      <>
       <ToastContainer />
      {isOpen ? <div style={{
        minWidth: "", top: "0px", left: "0px", position: "fixed", height: '100%'
        , width: "100vw", zIndex: "50", backgroundColor: '#ececec99'
      }} className="  top-0 left-0    fixed w-full h-full z-50  ">
        <div style={{ height: '100%' }} class="w-96 w-80 mx-auto max-w-96 max-w-80 rounded-lg shadow-lg p-2 bg-slate-100 z-20">
          <div className="modal-dialog modal-lg" >
            <div style={{ backgroundColor: "white" , marginTop:"70px"}} className="modal-content apply-job-form">
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setIsOpen(false)}
              />
              <div className="modal-body pl-30 pr-30 pt-50">
                <div className="text-center">
                 
                  <h2 className="mt-10 mb-5 text-brand-1 text-capitalize">
                  Commencez votre carrière dès aujourd'hui
                  </h2>
                  <p className="font-sm text-brand-2">{valueFromChild} </p>
                </div>
                <form onSubmit={handleCreateProduct}>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={condidat.email}
                      onChange={(e) =>
                        setCondidat({ ...condidat, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lettre_de_motivation">
                      Lettre de motivation *
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="lettre_de_motivation"
                      value={condidat.lettre_de_motivation}
                      onChange={(e) =>
                        setCondidat({
                          ...condidat,
                          lettre_de_motivation: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="titrePoste">Titre du Poste *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="titrePoste"
                      value={valueFromChild}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cv">Télécharger le CV *</label>
                    <input
                      type="file"
                      className="form-control"
                      id="cv"
                      onChange={(e) =>
                        setCondidat({ ...condidat, file: e.target.files[0] })
                      }
                    />
                  </div>
                 
                  <div className="form-group">
                    <button
                      className="btn btn-default hover-up w-100"
                      type="submit"
                      name="login"
                    >
                      {" "}
                      Postulez à ce poste
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={setIsOpen}
          className=" w-full h-full bg-black opacity-70"
        ></div>
      </div > : null
      }
      <Header></Header>
  
  <main className="main">
    
  <Postcategory onClick={handleChildClick} />
    
  </main>
 
  </>
    )
}

export default CategoryPage;
