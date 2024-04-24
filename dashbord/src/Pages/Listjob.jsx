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
        alert("Are you sure to delete this poste");
    } catch (error) {
        alert("Failed to delete this poste");
        console.error("Error deleting poste:", error);
    }
};


    return(
<>

 <Header></Header>
  <main className="main">
   <Nav></Nav>
    <div className="box-content">
      <div className="box-heading">
        <div className="box-title">
          <h3 className="mb-35">My Jobs</h3>
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
                <span>My Jobs</span>
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
                      <div className="col-xl-6 col-lg-7 text-lg-end mt-sm-15">
                        <div className="display-flex2">
                          
                        
                          <div className="box-view-type">
                            <a className="view-type" href="my-job-list.html">
                              <img
                                src="assets/imgs/template/icons/icon-list.svg"
                                alt="jobBox"
                              />
                            </a>
                            <a className="view-type" href="my-job-grid.html">
                              <img
                                src="assets/imgs/template/icons/icon-grid-hover.svg"
                                alt="jobBox"
                              />
                            </a>
                          </div>
                        </div>
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
              <span className="card-briefcase">{poste.description}</span>
            </div>
            <p className="font-sm color-text-paragraph mt-15">
              {poste.competences}
            </p>



            <div className="card-2-bottom mt-30">
  <div className="d-flex justify-content-between align-items-center px-3">
    <div>
    <Link to={`/${poste._id}`} className="btn btn-apply-now float-start">Edit</Link>
    </div>
    
    <div>
      <div className="btn btn-apply-now float-end" onClick={()=>handleDeletePoste(poste._id)}>Delete</div>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    ))}
  </div>
  
  
  
                 
  
 
               
              </div>
                  <div className="paginations">
                    <ul className="pager">
                      <li>
                        <a className="pager-prev" href="#" />
                      </li>
                      <li>
                        <a className="pager-number" href="#">
                          1
                        </a>
                      </li>
                      <li>
                        <a className="pager-number" href="#">
                          2
                        </a>
                      </li>
                      <li>
                        <a className="pager-number" href="#">
                          3
                        </a>
                      </li>
                      <li>
                        <a className="pager-number" href="#">
                          4
                        </a>
                      </li>
                      <li>
                        <a className="pager-number" href="#">
                          5
                        </a>
                      </li>
                      <li>
                        <a className="pager-number active" href="#">
                          6
                        </a>
                      </li>
                      <li>
                        <a className="pager-number" href="#">
                          7
                        </a>
                      </li>
                      <li>
                        <a className="pager-next" href="#" />
                      </li>
                    </ul>
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
              <form
                className="login-register text-start mt-20 pb-30"
                action="#"
              >
                <div className="form-group">
                  <label className="form-label" htmlFor="input-1">
                    Full Name *
                  </label>
                  <input
                    className="form-control"
                    id="input-1"
                    type="text"
                    required=""
                    name="fullname"
                    placeholder="Steven Job"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="input-2">
                    Email *
                  </label>
                  <input
                    className="form-control"
                    id="input-2"
                    type="email"
                    required=""
                    name="emailaddress"
                    placeholder="stevenjob@gmail.com"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="number">
                    Contact Number *
                  </label>
                  <input
                    className="form-control"
                    id="number"
                    type="text"
                    required=""
                    name="phone"
                    placeholder="(+01) 234 567 89"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="des">
                    Description
                  </label>
                  <input
                    className="form-control"
                    id="des"
                    type="text"
                    required=""
                    name="Description"
                    placeholder="Your description..."
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="file">
                    Upload Resume
                  </label>
                  <input
                    className="form-control"
                    id="file"
                    name="resume"
                    type="file"
                  />
                </div>
                <div className="login_footer form-group d-flex justify-content-between">
                  <label className="cb-container">
                    <input type="checkbox" />
                    <span className="text-small">
                      Agree our terms and policy
                    </span>
                    <span className="checkmark" />
                  </label>
                  <a className="text-muted" href="page-contact.html">
                    Lean more
                  </a>
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-default hover-up w-100"
                    type="submit"
                    name="login"
                  >
                    Apply Job
                  </button>
                </div>
                <div className="text-muted text-center">
                  Do you need support?{" "}
                  <a href="page-contact.html">Contact Us</a>
                </div>
              </form>
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
    )
}
export default List