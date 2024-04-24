
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import React, { useEffect, useState } from "react";
import { getAllPostes } from "../Services/PosteService"; 
import { upload } from "../Services/CondidatService";
import "./Style.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Col, Container, Row } from 'react-bootstrap';
import { countTotalPostes } from '../Services/PosteService';
import Totaljob from './Totaljob';


function Post() {
  const modalRef = useRef(null);
const [isOpen, setIsOpen] = useState(false);
  const [postes, setPostes] = useState([]);
  const [condidat, setCondidat] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [totalPostes, setTotalPostes] = useState(null);

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

  const posteSearch = postes.filter((poste) =>
  poste.titre.toLowerCase().includes(searchTerm.toLowerCase())
);
  return (
    <div>
      <div className="row display-list">
              {posteSearch.length === 0 ? (
                <div>
                    <h1>No product to show</h1>
                </div>
            ) : (
                <Container>
                    <Row>
                    {posteSearch && posteSearch.map((poste) => (
    <div className="col-xl-12 col-12" key={poste._id}>
      <div className="card-grid-2 hover-up">
        <span className="flash" />
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card-grid-2-image-left">
              <div className="image-box">
                {poste.image && poste.image.length > 0 && (
                  <img
                    src={poste.image[0].url}
                    alt={poste.titre}
                    className="poste-image"
                    style={{ width: '200px', height: '200px' }} // Définir la taille fixe ici
                  />
                )}
              </div>
              <div className="right-info">
                <a className="name-job" href="#">
                  {poste.titre}
                </a>
                <span className="location-small">{poste.location}</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
            <div className="pl-15 mb-15 mt-30">
              {poste.tags && poste.tags.map((tag, index) => (
                <a className="btn btn-grey-small mr-5" href="#" key={index}>
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="card-block-info">
          <h4>
            <a href={`job-details/${poste._id}`}>{poste.titre}</a>
          </h4>
          <div className="mt-5">
            <span className="card-briefcase">{poste.type}</span>
            <span className="card-time">
             
              <span> mins ago</span>
            </span>
          </div>
          <p className="font-sm color-text-paragraph mt-10">
            {poste.description}
          </p>
          <p className="font-sm color-text-paragraph mt-10">
            {poste.competences}
          </p>
          <p className="font-sm color-text-paragraph mt-10">
            {poste.categories}
          </p>
          <div className="card-2-bottom mt-20">
            <div className="row">
              <div className="col-lg-7 col-7">
                <span className="card-text-price">{poste.price}</span>
               
              </div>
              <div className="col-lg-5 col-5 text-end">
                <div
                  className="btn btn-apply-now"
                  data-bs-toggle="modal"
                  data-bs-target="#ModalApplyJobForm"
                >
                  Apply now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
                    </Row>
                </Container>
            )}
    </div>
    </div>
  )
}
export default Post