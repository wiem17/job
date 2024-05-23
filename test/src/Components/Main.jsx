import React, { useEffect, useState } from "react";
import Header from './Shared/Header'
import Footer from './Shared/Footer'
import { Link } from 'react-router-dom';
import categories from '../Pages/categories'
import { Row, Col } from "react-bootstrap";
import { Card, Badge } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { getLatestPostes } from "../Services/PosteService"; 
import  '../Pages/Style.css';
const Main = () => {
  const [postes, setPostes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Utilisez la fonction getAllProducts pour obtenir la liste des produits
        const postesData = await getLatestPostes(); // Ajoutez await ici
        console.log("Postes Data:", postesData);
        setPostes(postesData);
      } catch (error) {
        console.error("Error fetching postes:", error);
      }
    };
  
    fetchData();
  }, []);

  return (
   
      <> 


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
          <form className="login-register text-start mt-20 pb-30" action="#">
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
                <span className="text-small">Agree our terms and policy</span>
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
              Do you need support? <a href="page-contact.html">Contact Us</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
<Header></Header>
  
  
  <main className="main">
    <div className="bg-homepage1" />
    <section className="section-box">
      <div className="banner-hero hero-1">
        <div className="banner-inner">
          <div className="row">
            <div className="col-xl-8 col-lg-12">
              <div className="block-banner">
                <h1 className="heading-banner wow animate__animated animate__fadeInUp">
                   <span className="color-brand-2">
                                        Le moyen le plus simple
                           </span>
                  <br className="d-none d-lg-block" />
                  pour obtenir votre nouvel emploi
                </h1>
                <div
                  className="banner-description mt-20 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".1s"
                >
                  Chaque mois, plusieurs chercheurs d'emploi se tournent vers notre site
                       dans leur recherche de travail{" "}
                  <br className="d-none d-lg-block" />
                  dans leur recherche de travail{" "}
                 
                </div>
               
                <div
                  className="list-tags-banner mt-60 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".3s"
                >
                  <strong>Recherches populaires</strong>
                  <a href="#">Designer</a>, <a href="#">Web</a>,{" "}
                  <a href="#">IOS</a>, <a href="#">Développeur</a>,{" "}
                  <a href="#">PHP</a>, <a href="#">Sénior</a>,{" "}
                  <a href="#"> Ingénieur</a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12 d-none d-xl-block col-md-6">
              <div className="banner-imgs">
                <div className="block-1 shape-1">
                  <img
                    className="img-responsive"
                    alt="jobBox"
                    src="assets/imgs/page/homepage1/banner1.png"
                  />
                </div>
                <div className="block-2 shape-2">
                  <img
                    className="img-responsive"
                    alt="jobBox"
                    src="assets/imgs/page/homepage1/banner2.png"
                  />
                </div>
                <div className="block-3 shape-3">
                  <img
                    className="img-responsive"
                    alt="jobBox"
                    src="assets/imgs/page/homepage1/icon-top-banner.png"
                  />
                </div>
                <div className="block-4 shape-3">
                  <img
                    className="img-responsive"
                    alt="jobBox"
                    src="assets/imgs/page/homepage1/icon-bottom-banner.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="mt-100" />
    <section className="section-box mt-80">
      <div className="section-box wow animate__animated animate__fadeIn">
        <div className="container">
          <div className="text-center">
          <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
  Parcourir par catégorie
</h2>
<p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
  Trouvez le travail qui est parfait pour vous. 
</p>

            <div className="box-swiper mt-50">
      <div className="swiper-container swiper-group-5 swiper">
        <div className="swiper-wrapper pb-70 pt-5">
       
        {categories.map((category, index) => (
           
              <LinkContainer
                to={`/${category.name.toLowerCase()}`}
                key={index}
              >
                <div className="item-logo">
                  <div className="image-left">
                    <img alt="jobBox" src={category.img} />
                  </div>
                  <div className="text-info-right">
                    <h4>{category.name}</h4>
                    <p className="font-xs">Cliquer Ici</p>
                  </div>
                </div>
              </LinkContainer>
            
          ))}
          </div>
        
      </div>
    </div>
   </div>
         
        </div>
      </div>
  </section>
  <div className="section-box mb-30">
  <div className="container">
    <div className="box-we-hiring">
      <div className="text-1">
        <span className="text-we-are">Nous</span>
        <span className="text-hiring">Recrutons</span>
      </div>
      <div className="text-2">
        Travaillons <span className="color-brand-1">Ensemble</span>
        <br /> et <span className="color-brand-1">Explorons</span> les Opportunités
      </div>
     
    </div>
  </div>
</div>

    <section className="section-box mt-50">
      <div className="container">
      <div className="text-center">
  <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
    Offres d'emploi du jour
  </h2>
  <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
    Recherchez et connectez-vous plus rapidement avec les bons emplois.
  </p>
</div>

        <div className="mt-70">
          <div className="tab-content" id="myTabContent-1">
            <div
              className="tab-pane fade show active"
              id="tab-job-1"
              role="tabpanel"
              aria-labelledby="tab-job-1"
            >
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
         <div className="row">
          <div className="col-lg-7 col-7">
                           
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
</div>



               

</div>
             
            </div>
            <div
              className="tab-pane fade"
              id="tab-job-2"
              role="tabpanel"
              aria-labelledby="tab-job-2"
            >
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-6.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Quora JSC
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">Senior System Engineer</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Part time</span>
                        <span className="card-time">
                          5<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          PHP
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          Android
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$800</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-7.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Nintendo
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">Products Manager</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          6<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          ASP .Net
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          Figma
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-4.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Dailymotion
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">Frontend Developer</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          6<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Typescript
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Java
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-5.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Linkedin
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">
                          React Native Web Developer
                        </a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Fulltime</span>
                        <span className="card-time">
                          4<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Angular
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$500</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-8.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Periscope
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">Lead Quality Control QA</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          6<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          iOS
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          Laravel
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          Golang
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-1.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          LinkedIn
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">UI / UX Designer fulltime</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Fulltime</span>
                        <span className="card-time">
                          4<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Adobe XD
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Figma
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Photoshop
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$500</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-2.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Adobe Ilustrator
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">Full Stack Engineer</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Part time</span>
                        <span className="card-time">
                          5<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          React
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          NodeJS
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$800</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-3.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Bing Search
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">Java Software Engineer</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          6<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Python
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          AWS
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Photoshop
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
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
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="tab-job-3"
              role="tabpanel"
              aria-labelledby="tab-job-3"
            >
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-4.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Dailymotion
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">Frontend Developer</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          6<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Typescript
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Java
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-5.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Linkedin
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">
                          React Native Web Developer
                        </a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Fulltime</span>
                        <span className="card-time">
                          4<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Angular
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$500</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-6.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Quora JSC
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">Senior System Engineer</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Part time</span>
                        <span className="card-time">
                          5<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          PHP
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          Android
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$800</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-7.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Nintendo
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">Products Manager</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          6<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          ASP .Net
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          Figma
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-8.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Periscope
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">Lead Quality Control QA</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          6<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          iOS
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          Laravel
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          Golang
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-1.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          LinkedIn
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">UI / UX Designer fulltime</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Fulltime</span>
                        <span className="card-time">
                          4<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Adobe XD
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Figma
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Photoshop
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$500</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-2.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Adobe Ilustrator
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">Full Stack Engineer</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Part time</span>
                        <span className="card-time">
                          5<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          React
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          NodeJS
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$800</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-3.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Bing Search
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">Java Software Engineer</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          6<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Python
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          AWS
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Photoshop
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
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
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="tab-job-4"
              role="tabpanel"
              aria-labelledby="tab-job-4"
            >
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-7.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Nintendo
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">Products Manager</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          6<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          ASP .Net
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          Figma
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-8.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Periscope
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">Lead Quality Control QA</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          6<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          iOS
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          Laravel
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          Golang
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-4.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Dailymotion
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">Frontend Developer</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          6<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Typescript
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Java
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-5.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Linkedin
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">
                          React Native Web Developer
                        </a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Fulltime</span>
                        <span className="card-time">
                          4<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Angular
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$500</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-6.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Quora JSC
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">Senior System Engineer</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Part time</span>
                        <span className="card-time">
                          5<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          PHP
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          Android
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$800</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-1.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          LinkedIn
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">UI / UX Designer fulltime</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Fulltime</span>
                        <span className="card-time">
                          4<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Adobe XD
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Figma
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Photoshop
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$500</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-2.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Adobe Ilustrator
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">Full Stack Engineer</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Part time</span>
                        <span className="card-time">
                          5<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          React
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          NodeJS
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$800</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-3.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Bing Search
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">Java Software Engineer</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          6<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Python
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          AWS
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Photoshop
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
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
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="tab-job-5"
              role="tabpanel"
              aria-labelledby="tab-job-5"
            >
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-8.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Periscope
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">Lead Quality Control QA</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          6<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          iOS
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          Laravel
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          Golang
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-1.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          LinkedIn
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">UI / UX Designer fulltime</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Fulltime</span>
                        <span className="card-time">
                          4<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Adobe XD
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Figma
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Photoshop
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$500</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-4.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Dailymotion
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">Frontend Developer</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          6<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Typescript
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Java
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-5.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Linkedin
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">
                          React Native Web Developer
                        </a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Fulltime</span>
                        <span className="card-time">
                          4<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Angular
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$500</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-6.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Quora JSC
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">Senior System Engineer</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Part time</span>
                        <span className="card-time">
                          5<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          PHP
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          Android
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$800</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-7.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Nintendo
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">Products Manager</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          6<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          ASP .Net
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          Figma
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-2.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Adobe Ilustrator
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">Full Stack Engineer</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Part time</span>
                        <span className="card-time">
                          5<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          React
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          NodeJS
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$800</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-3.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Bing Search
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">Java Software Engineer</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          6<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Python
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          AWS
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Photoshop
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
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
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="tab-job-6"
              role="tabpanel"
              aria-labelledby="tab-job-6"
            >
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-8.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Periscope
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">Lead Quality Control QA</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          6<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          iOS
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          Laravel
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          Golang
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-1.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          LinkedIn
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">UI / UX Designer fulltime</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Fulltime</span>
                        <span className="card-time">
                          4<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Adobe XD
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Figma
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Photoshop
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$500</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-2.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Adobe Ilustrator
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">Full Stack Engineer</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Part time</span>
                        <span className="card-time">
                          5<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          React
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          NodeJS
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$800</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-3.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Bing Search
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">Java Software Engineer</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          6<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Python
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          AWS
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Photoshop
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-4.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Dailymotion
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">Frontend Developer</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          6<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Typescript
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Java
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-5.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Linkedin
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">
                          React Native Web Developer
                        </a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Fulltime</span>
                        <span className="card-time">
                          4<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="jobs-grid.html"
                        >
                          Angular
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$500</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-6.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Quora JSC
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">Senior System Engineer</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Part time</span>
                        <span className="card-time">
                          5<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          PHP
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          Android
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$800</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <img
                          src="assets/imgs/brands/brand-7.png"
                          alt="jobBox"
                        />
                      </div>
                      <div className="right-info">
                        <a className="name-job" href="company-details.html">
                          Nintendo
                        </a>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <a href="job-details.html">Products Manager</a>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          6<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="mt-30">
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          ASP .Net
                        </a>
                        <a
                          className="btn btn-grey-small mr-5"
                          href="job-details.html"
                        >
                          Figma
                        </a>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section-box overflow-visible mt-100 mb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="box-image-job">
              <img
                className="img-job-1"
                alt="jobBox"
                src="assets/imgs/page/homepage1/img-chart.png"
              />
              <img
                className="img-job-2"
                alt="jobBox"
                src="assets/imgs/page/homepage1/controlcard.png"
              />
              <figure className="wow animate__animated animate__fadeIn">
                <img alt="jobBox" src="assets/imgs/page/homepage1/img1.png" />
              </figure>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="content-job-inner">
              <span className="color-text-mutted text-32">
                Millions Of Jobs.{" "}
              </span>
              <h2 className="text-52 wow animate__animated animate__fadeInUp">
                Find The One That’s <span className="color-brand-2">Right</span>{" "}
                For You
              </h2>
              <div className="mt-40 pr-50 text-md-lh28 wow animate__animated animate__fadeInUp">
                Search all the open positions on the web. Get your own
                personalized salary estimate. Read reviews on over 600,000
                companies worldwide. The right job is out there.
              </div>
              <div className="mt-40">
                <div className="wow animate__animated animate__fadeInUp">
                <Link to="/jobs" className="btn btn-default">
                Search Jobs
                </Link>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
   
    
  </main>
<Footer> </Footer>
</>
  )
}

export default Main
