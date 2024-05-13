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

function CategoryPage({ onClick }) {
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
      console.log("job titre " + value);
      setValueFromChild(value);
    };
   
    const handleCreateProduct = async (e) => {
      e.preventDefault();
      console.log(condidat);
      condidat.titrePoste = valueFromChild;
      // Vérifiez si tous les champs sont remplis
      if ( !condidat.email || !condidat.lettre_de_motivation || !condidat.titrePoste || !condidat.cv) {
        return alert("Please fill out all the fields");
      }
    
      try {
        // Appeler la fonction pour créer un produit
        const response = await upload(  userID,condidat.email, condidat.lettre_de_motivation, condidat.cv, condidat.titrePoste ,  valueFromChild);
       
        // Vérifiez si la création du produit a réussi (vous pouvez ajuster cette vérification selon la structure de votre réponse)
        if (response.data && response.data.length === 0) {
          // Réinitialiser le formulaire après la création du produit
          setCondidat({
           
            email: "",
            lettre_de_motivation: "",
            titrePoste: "",
            cv: [],
          });
        }
      
  
        // Afficher une toast pour indiquer que les données ont été envoyées avec succès
        toast.success('Données envoyées avec succès !');
      } catch (error) {
        console.error("Error:", error);
        // Gérer les erreurs si nécessaire
        toast.error('erreur!!');
      }
    
    };

    useEffect(() => {
        setLoading(true);
        Axios.get(`${baseUrl}api/postes/category/${categories}`)
            .then(({ data }) => {
                setLoading(false);
                setPostes(data);
            })
            .catch((e) => {
                setLoading(false);
                console.log(e.message);
            });
    }, [categories]);

   

    const posteSearch = postes.filter((poste) =>
        poste.titre.toLowerCase().includes(searchTerm.toLowerCase())
    );
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
      <div
    className="modal fade"
    id="ModalApplyJobForm"
    tabIndex={-1}
    aria-hidden="true"
   
   
  >
    <div className="modal-dialog modal-lg">
      <div className="modal-content apply-job-form">
        <button
          className="btn-close"
          type="button"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
        <div className="modal-body pl-30 pr-30 pt-50">
          <div className="text-center">
            <p className="font-sm text-brand-2">Job Application </p>
            <h2 className="mt-10 mb-5 text-brand-1 text-capitalize">
              Start your career today
            </h2>
            <p className="font-sm text-muted mb-30"> 
              Please fill in your information and send it to the employer.{" "}
            </p>
          </div>
          <form onSubmit={handleCreateProduct}
          >
  
  <div className="form-group">
    <label htmlFor="email">Email *</label>
    <input
      type="email"
      className="form-control"
      id="email"
      value={condidat.email}
      onChange={(e) => setCondidat({ ...condidat, email: e.target.value })}
    />
  </div>
  <div className="form-group">
    <label htmlFor="lettre_de_motivation">Lettre de motivation *</label>
    <input
      type="text"
      className="form-control"
      id="lettre_de_motivation"
      value={condidat.lettre_de_motivation}
      onChange={(e) => setCondidat({ ...condidat, lettre_de_motivation: e.target.value })}
    />
  </div>
  <div className="form-group">
    <label htmlFor="titrePoste">Titre du Poste *</label>
    <input
      type="text"
      className="form-control"
      id="titrePoste"
      value={valueFromChild}
      onChange={(e) => setCondidat({ ...condidat, titrePoste: e.target.value })}
    />
  </div>
  <div className="form-group">
    <label htmlFor="cv">Upload CV *</label>
    <input
      type="file"
      className="form-control"
      id="cv"
      onChange={(e) => setCondidat({ ...condidat, cv: e.target.files[0] })}
    />
  </div>
  <div className="login_footer form-group d-flex justify-content-between">
        <label className="cb-container">
          <input type="checkbox" />
          <span className="text-small">Agree our terms and policy</span>
          <span className="checkmark" />
        </label>
        <a className="text-muted" href="page-contact.html">
          Learn more
        </a>
      </div>
      <div className="form-group">
        <button
          className="btn btn-default hover-up w-100"
          type="submit"
          name="login"
          
        > Postulez à ce poste
         
        </button>
      </div>
      <div className="text-muted text-center">
        Do you need support? <a href="page-contact.html">Contact Us</a>
      </div>
</form>
        </div>
      </div>
    </div>
  </div>

  <Header></Header>
  
  <main className="main">
    
  <Postcategory onClick={handleChildClick} />
    
  </main>
  <footer className="footer mt-50">
    <div className="container">
      <div className="row">
        <div className="footer-col-1 col-md-3 col-sm-12">
          <a href="index.html">
            <img alt="jobBox" src="assets/imgs/template/jobhub-logo.svg" />
          </a>
          <div className="mt-20 mb-20 font-xs color-text-paragraph-2">
            JobBox is the heart of the design community and the best resource to
            discover and connect with designers and jobs worldwide.
          </div>
          <div className="footer-social">
            <a className="icon-socials icon-facebook" href="#" />
            <a className="icon-socials icon-twitter" href="#" />
            <a className="icon-socials icon-linkedin" href="#" />
          </div>
        </div>
        <div className="footer-col-2 col-md-2 col-xs-6">
          <h6 className="mb-20">Resources</h6>
          <ul className="menu-footer">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-col-3 col-md-2 col-xs-6">
          <h6 className="mb-20">Community</h6>
          <ul className="menu-footer">
            <li>
              <a href="#">Feature</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Credit</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer-col-4 col-md-2 col-xs-6">
          <h6 className="mb-20">Quick links</h6>
          <ul className="menu-footer">
            <li>
              <a href="#">iOS</a>
            </li>
            <li>
              <a href="#">Android</a>
            </li>
            <li>
              <a href="#">Microsoft</a>
            </li>
            <li>
              <a href="#">Desktop</a>
            </li>
          </ul>
        </div>
        <div className="footer-col-5 col-md-2 col-xs-6">
          <h6 className="mb-20">More</h6>
          <ul className="menu-footer">
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer-col-6 col-md-3 col-sm-12">
          <h6 className="mb-20">Download App</h6>
          <p className="color-text-paragraph-2 font-xs">
            Download our Apps and get extra 15% Discount on your first Order…!
          </p>
          <div className="mt-15">
            <a className="mr-5" href="#">
              <img
                src="assets/imgs/template/icons/app-store.png"
                alt="joxBox"
              />
            </a>
            <a href="#">
              <img src="assets/imgs/template/icons/android.png" alt="joxBox" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom mt-50">
        <div className="row">
          <div className="col-md-6">
            <span className="font-xs color-text-paragraph">
              Copyright © 2022. JobBox all right reserved
            </span>
          </div>
          <div className="col-md-6 text-md-end text-start">
            <div className="footer-social">
              <a className="font-xs color-text-paragraph" href="#">
                Privacy Policy
              </a>
              <a className="font-xs color-text-paragraph mr-30 ml-30" href="#">
                Terms &amp; Conditions
              </a>
              <a className="font-xs color-text-paragraph" href="#">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  </>
    )
}

export default CategoryPage;
