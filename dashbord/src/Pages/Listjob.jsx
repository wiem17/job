import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { getAllPostes } from "../Services/PosteService";
import { Link } from 'react-router-dom';
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { deletePoste } from "../Services/PosteService";
import Nav from '../Components/Shared/Nav'
import Header from '../Components/Shared/Header'
import Totaljob from './Totaljob';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const List = () => {

  const [postes, setPostes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Utilisez la fonction getAllProducts pour obtenir la liste des produits
        const postesData = await getAllPostes();
        console.log("Postes Data:", postesData);
        setPostes(postesData);
      } catch (error) {
        console.error("Error fetching postes:", error);
      }
    };

    fetchData();
  }, []);

  const handleDeletePoste = async (id) => {
    try {
        // Appel de la fonction deleteProduct de votre service pour supprimer le produit
        await deletePoste(id);
        // Mise à jour de l'état local des produits après la suppression
        const updatedPostes = postes.filter(poste => poste._id !== id);
        setPostes(updatedPostes);
       toast.success("postes supprimé avec succées")
    } catch (error) {
        toast.error("postes  n'est pas supprimé");
        console.error("Error deleting poste:", error);
    }
};


    return(
<>
<ToastContainer />

 <Header></Header>
  <main className="main">
   <Nav></Nav>
    <div className="box-content">
      <div className="box-heading">
        <div className="box-title">
          <h3 className="mb-35">Mes Postes</h3>
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
                <span>Mes Postes</span>
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
                <div className="box-padding">
                  <div className="box-filters-job">
                    <div className="row">
                      <div className="col-xl-6 col-lg-5">
                        <span className="font-sm text-showing color-text-paragraph">
                          <Totaljob></Totaljob>
                        </span>
                      </div>
                     
                    </div>
                  </div>
                  <div className="row">
              
              <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
    {postes && postes.map((poste) => (
      <div className="col-xl-4 col-lg-4 col-md-6" key={poste._id}>
        <div className="card-grid-2 hover-up d-flex flex-column h-100">
          <div className="card-grid-2-image-left">
            <span className="flash" />
            <div className="image-box">
              {poste.image && poste.image.length > 0 && (
                <img
                  src={poste.image[0].url}
                  alt={poste.titre}
                  className="poste-image"
                  style={{ width: '100px', height: '100px' }}
                />
              )}
            </div>
            <div className="right-info">
              <a className="name-job" href="company-details.html">
                {poste.titre}
              </a>
            </div>
          </div>
         <div className="card-block-info flex-grow-1 d-flex flex-column justify-content-between">
            <h6>
              <a href="job-details.html">{poste.categories}</a>
            </h6>
            <div className="mt-5">
              <span className="card-briefcase"> Description: {poste.description}</span>
            </div>
            <p className="font-sm color-text-paragraph mt-15">
             Compétences: {poste.competences}
            </p>



            <div className="card-2-bottom mt-30">
  <div className="d-flex justify-content-between align-items-center px-3">
    <div>
    <Link to={`/${poste._id}`} className="btn btn-apply-now float-start">Modifier</Link>
    </div>
    
    <div>
      <div className="btn btn-apply-now float-end" onClick={()=>handleDeletePoste(poste._id)}>Supprimer</div>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    ))}
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
    )
}
export default List