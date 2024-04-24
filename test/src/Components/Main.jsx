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
  <div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
    <div className="mobile-header-wrapper-inner">
      <div className="mobile-header-content-area">
        <div className="perfect-scroll">
          <div className="mobile-search mobile-header-border mb-30">
            <form action="#">
              <input type="text" placeholder="Search…" />
              <i className="fi-rr-search" />
            </form>
          </div>
          <div className="mobile-menu-wrap mobile-header-border">
            {/* mobile menu start*/}
            <nav>
              <ul className="mobile-menu font-heading">
                <li className="has-children">
                <Link to="/">Home</Link>
                    
                  
                 
                </li>
                <li className="has-children">
                  <a href="jobs-grid.html">Find a Job</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="jobs-grid.html">Jobs Grid</a>
                    </li>
                    <li>
                    <Link to={"jobs"}> Jobs List </Link>
                    </li>
                    <li>
                      <a href="job-details.html">Jobs Details</a>
                    </li>
                    <li>
                      <a href="job-details-2.html">Jobs Details 2</a>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <a href="companies-grid.html">Recruiters</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="companies-grid.html">Recruiters</a>
                    </li>
                    <li>
                      <a href="company-details.html">Company Details</a>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <a href="candidates-grid.html">Candidates</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="candidates-grid.html">Candidates Grid</a>
                    </li>
                    <li>
                      <a href="candidate-details.html">Candidate Details</a>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <a href="blog-grid.html">Pages</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="page-about.html">About Us</a>
                    </li>
                    <li>
                      <a href="page-pricing.html">Pricing Plan</a>
                    </li>
                    <li>
                      <a href="page-contact.html">Contact Us</a>
                    </li>
                    <li>
                    <Link to={"register"}> Register </Link>
                    </li>
                    <li>
                      <a href="page-signin.html">Signin</a>
                    </li>
                    <li>
                      <a href="page-reset-password.html">Reset Password</a>
                    </li>
                    <li>
                      <a href="page-content-protected.html">
                        Content Protected
                      </a>
                    </li>
                    <li>
                      <a href="page-404.html">404 Error</a>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <a href="blog-grid.html">Blog</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="blog-grid.html">Blog Grid</a>
                    </li>
                    <li>
                      <a href="blog-grid-2.html">Blog Grid 2</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Single</a>
                    </li>
                  </ul>
                </li>
                
              </ul>
            </nav>
          </div>
          <div className="mobile-account">
            <h6 className="mb-10">Your Account</h6>
            <ul className="mobile-menu font-heading">
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Work Preferences</a>
              </li>
              <li>
                <a href="#">Account Settings</a>
              </li>
              <li>
                <a href="#">Go Pro</a>
              </li>
              <li>
                <a href="page-signin.html">Sign Out</a>
              </li>
            </ul>
          </div>
          <div className="site-copyright">
            Copyright 2022 © JobBox.
            <br />
            Designed by AliThemes.
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
    <div className="mobile-header-wrapper-inner">
      <div className="mobile-header-content-area">
        <div className="perfect-scroll">
          <div className="mobile-search mobile-header-border mb-30">
            <form action="#">
              <input type="text" placeholder="Search…" />
              <i className="fi-rr-search" />
            </form>
          </div>
          <div className="mobile-menu-wrap mobile-header-border">
            {/* mobile menu start*/}
            <nav>
              <ul className="mobile-menu font-heading">
                <li className="has-children">
                <Link to="/">Home</Link>
                    
                 
                 
                </li>
                <li className="has-children">
                  <a href="jobs-grid.html">Find a Job</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="jobs-grid.html">Jobs Grid</a>
                    </li>
                    <li>
                      <a href="jobs.jsx">Jobs List</a>
                    </li>
                    <li>
                      <a href="job-details.html">Jobs Details</a>
                    </li>
                    <li>
                      <a href="job-details-2.html">Jobs Details 2</a>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <a href="companies-grid.html">Recruiters</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="companies-grid.html">Recruiters</a>
                    </li>
                    <li>
                      <a href="company-details.html">Company Details</a>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <a href="candidates-grid.html">Candidates</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="candidates-grid.html">Candidates Grid</a>
                    </li>
                    <li>
                      <a href="candidate-details.html">Candidate Details</a>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <a href="blog-grid.html">Pages</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="page-about.html">About Us</a>
                    </li>
                    <li>
                      <a href="page-pricing.html">Pricing Plan</a>
                    </li>
                    <li>
                      <a href="page-contact.html">Contact Us</a>
                    </li>
                    <li>
                    <Link to={"register"}> Register </Link>
                    </li>
                    <li>
                    <Link to={"login"}> Sign in </Link>
                    </li>
                    <li>
                      <a href="page-reset-password.html">Reset Password</a>
                    </li>
                    <li>
                      <a href="page-content-protected.html">
                        Content Protected
                      </a>
                    </li>
                    <li>
                      <a href="page-404.html">404 Error</a>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <a href="blog-grid.html">Blog</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="blog-grid.html">Blog Grid</a>
                    </li>
                    <li>
                      <a href="blog-grid-2.html">Blog Grid 2</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Single</a>
                    </li>
                  </ul>
                </li>
                
              </ul>
            </nav>
          </div>
          <div className="mobile-account">
            <h6 className="mb-10">Your Account</h6>
            <ul className="mobile-menu font-heading">
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Work Preferences</a>
              </li>
              <li>
                <a href="#">Account Settings</a>
              </li>
              <li>
                <a href="#">Go Pro</a>
              </li>
              <li>
                <a href="page-signin.html">Sign Out</a>
              </li>
            </ul>
          </div>
          <div className="site-copyright">
            Copyright 2022 © JobBox.
            <br />
            Designed by AliThemes.
          </div>
        </div>
      </div>
    </div>
  </div>
  <main className="main">
    <div className="bg-homepage1" />
    <section className="section-box">
      <div className="banner-hero hero-1">
        <div className="banner-inner">
          <div className="row">
            <div className="col-xl-8 col-lg-12">
              <div className="block-banner">
                <h1 className="heading-banner wow animate__animated animate__fadeInUp">
                  The <span className="color-brand-2">Easiest Way</span>
                  <br className="d-none d-lg-block" />
                  to Get Your New Job
                </h1>
                <div
                  className="banner-description mt-20 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".1s"
                >
                  Each month, more than 3 million job seekers turn to{" "}
                  <br className="d-none d-lg-block" />
                  website in their search for work, making over 140,000{" "}
                  <br className="d-none d-lg-block" />
                  applications every single day
                </div>
               
                <div
                  className="list-tags-banner mt-60 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".3s"
                >
                  <strong>Popular Searches:</strong>
                  <a href="#">Designer</a>, <a href="#">Web</a>,{" "}
                  <a href="#">IOS</a>, <a href="#">Developer</a>,{" "}
                  <a href="#">PHP</a>, <a href="#">Senior</a>,{" "}
                  <a href="#">Engineer</a>
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
              Browse by category
            </h2>
            <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
              Find the job that’s perfect for you. about 800+ new jobs everyday
            </p>
            <div className="box-swiper mt-50">
      <div className="swiper-container swiper-group-5 swiper">
        <div className="swiper-wrapper pb-70 pt-5">
       
        {categories.map((category, index) => (
           
              <LinkContainer
                to={`/category/${category.name.toLowerCase()}`}
                key={index}
              >
                <div className="item-logo">
                  <div className="image-left">
                    <img alt="jobBox" src={category.img} />
                  </div>
                  <div className="text-info-right">
                    <h4>{category.name}</h4>
                    <p className="font-xs">1526<span> Jobs Available</span></p>
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
            <span className="text-we-are">We are</span>
            <span className="text-hiring">Hiring</span>
          </div>
          <div className="text-2">
            Let’s <span className="color-brand-1">Work</span> Together
            <br /> &amp; <span className="color-brand-1">Explore</span>{" "}
            Opportunities
          </div>
          <div className="text-3">
           
          </div>
        </div>
      </div>
    </div>
    <section className="section-box mt-50">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
            Jobs of the day
          </h2>
          <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
            Search and connect with the right candidates faster.{" "}
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
    <section className="section-box overflow-visible mt-50 mb-50">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="text-center">
              <h1 className="color-brand-2">
                <span className="count">25</span>
                <span> K+</span>
              </h1>
              <h5>Completed Cases</h5>
              <p className="font-sm color-text-paragraph mt-10">
                We always provide people a <br className="d-none d-lg-block" />
                complete solution upon focused of
                <br className="d-none d-lg-block" /> any business
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="text-center">
              <h1 className="color-brand-2">
                <span className="count">17</span>
                <span> +</span>
              </h1>
              <h5>Our Office</h5>
              <p className="font-sm color-text-paragraph mt-10">
                We always provide people a <br className="d-none d-lg-block" />
                complete solution upon focused of{" "}
                <br className="d-none d-lg-block" />
                any business
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="text-center">
              <h1 className="color-brand-2">
                <span className="count">86</span>
                <span> +</span>
              </h1>
              <h5>Skilled People</h5>
              <p className="font-sm color-text-paragraph mt-10">
                We always provide people a <br className="d-none d-lg-block" />
                complete solution upon focused of{" "}
                <br className="d-none d-lg-block" />
                any business
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="text-center">
              <h1 className="color-brand-2">
                <span className="count">28</span>
                <span> +</span>
              </h1>
              <h5>CHappy Clients</h5>
              <p className="font-sm color-text-paragraph mt-10">
                We always provide people a <br className="d-none d-lg-block" />
                complete solution upon focused of{" "}
                <br className="d-none d-lg-block" />
                any business
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section-box mt-50">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
            Top Recruiters
          </h2>
          <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
            Discover your next career move, freelance gig, or internship
          </p>
        </div>
      </div>
      <div className="container">
        <div className="box-swiper mt-50">
          <div className="swiper-container swiper-group-1 swiper-style-2 swiper">
            <div className="swiper-wrapper pt-5">
              <div className="swiper-slide">
                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                  <a href="#">
                    <div className="item-logo">
                      <div className="image-left">
                        <img
                          alt="jobBox"
                          src="assets/imgs/brands/brand-1.png"
                        />
                      </div>
                      <div className="text-info-right">
                        <h4>Linkedin</h4>
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <span className="font-xs color-text-mutted ml-10">
                          <span>(</span>
                          <span>68</span>
                          <span>)</span>
                        </span>
                      </div>
                      <div className="text-info-bottom mt-5">
                        <span className="font-xs color-text-mutted icon-location">
                          New York, US
                        </span>
                        <span className="font-xs color-text-mutted float-end mt-5">
                          25<span> Open Jobs</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                  <a href="#">
                    <div className="item-logo">
                      <div className="image-left">
                        <img
                          alt="jobBox"
                          src="assets/imgs/brands/brand-2.png"
                        />
                      </div>
                      <div className="text-info-right">
                        <h4>Adobe</h4>
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <span className="font-xs color-text-mutted ml-10">
                          <span>(</span>
                          <span>42</span>
                          <span>)</span>
                        </span>
                      </div>
                      <div className="text-info-bottom mt-5">
                        <span className="font-xs color-text-mutted icon-location">
                          New York, US
                        </span>
                        <span className="font-xs color-text-mutted float-end mt-5">
                          17<span> Open Jobs</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                  <a href="#">
                    <div className="item-logo">
                      <div className="image-left">
                        <img
                          alt="jobBox"
                          src="assets/imgs/brands/brand-3.png"
                        />
                      </div>
                      <div className="text-info-right">
                        <h4>Dailymotion</h4>
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <span className="font-xs color-text-mutted ml-10">
                          <span>(</span>
                          <span>46</span>
                          <span>)</span>
                        </span>
                      </div>
                      <div className="text-info-bottom mt-5">
                        <span className="font-xs color-text-mutted icon-location">
                          New York, US
                        </span>
                        <span className="font-xs color-text-mutted float-end mt-5">
                          65<span> Open Jobs</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                  <a href="#">
                    <div className="item-logo">
                      <div className="image-left">
                        <img
                          alt="jobBox"
                          src="assets/imgs/brands/brand-4.png"
                        />
                      </div>
                      <div className="text-info-right">
                        <h4>NewSum</h4>
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <span className="font-xs color-text-mutted ml-10">
                          <span>(</span>
                          <span>68</span>
                          <span>)</span>
                        </span>
                      </div>
                      <div className="text-info-bottom mt-5">
                        <span className="font-xs color-text-mutted icon-location">
                          New York, US
                        </span>
                        <span className="font-xs color-text-mutted float-end mt-5">
                          25<span> Open Jobs</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                  <a href="#">
                    <div className="item-logo">
                      <div className="image-left">
                        <img
                          alt="jobBox"
                          src="assets/imgs/brands/brand-5.png"
                        />
                      </div>
                      <div className="text-info-right">
                        <h4>PowerHome</h4>
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <span className="font-xs color-text-mutted ml-10">
                          <span>(</span>
                          <span>87</span>
                          <span>)</span>
                        </span>
                      </div>
                      <div className="text-info-bottom mt-5">
                        <span className="font-xs color-text-mutted icon-location">
                          New York, US
                        </span>
                        <span className="font-xs color-text-mutted float-end mt-5">
                          34<span> Open Jobs</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                  <a href="#">
                    <div className="item-logo">
                      <div className="image-left">
                        <img
                          alt="jobBox"
                          src="assets/imgs/brands/brand-6.png"
                        />
                      </div>
                      <div className="text-info-right">
                        <h4>Whop.com</h4>
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <span className="font-xs color-text-mutted ml-10">
                          <span>(</span>
                          <span>34</span>
                          <span>)</span>
                        </span>
                      </div>
                      <div className="text-info-bottom mt-5">
                        <span className="font-xs color-text-mutted icon-location">
                          New York, US
                        </span>
                        <span className="font-xs color-text-mutted float-end mt-5">
                          56<span> Open Jobs</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                  <a href="#">
                    <div className="item-logo">
                      <div className="image-left">
                        <img
                          alt="jobBox"
                          src="assets/imgs/brands/brand-7.png"
                        />
                      </div>
                      <div className="text-info-right">
                        <h4>Greewood</h4>
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <span className="font-xs color-text-mutted ml-10">
                          <span>(</span>
                          <span>124</span>
                          <span>)</span>
                        </span>
                      </div>
                      <div className="text-info-bottom mt-5">
                        <span className="font-xs color-text-mutted icon-location">
                          New York, US
                        </span>
                        <span className="font-xs color-text-mutted float-end mt-5">
                          78<span> Open Jobs</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                  <a href="#">
                    <div className="item-logo">
                      <div className="image-left">
                        <img
                          alt="jobBox"
                          src="assets/imgs/brands/brand-8.png"
                        />
                      </div>
                      <div className="text-info-right">
                        <h4>Kentucky</h4>
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <span className="font-xs color-text-mutted ml-10">
                          <span>(</span>
                          <span>54</span>
                          <span>)</span>
                        </span>
                      </div>
                      <div className="text-info-bottom mt-5">
                        <span className="font-xs color-text-mutted icon-location">
                          New York, US
                        </span>
                        <span className="font-xs color-text-mutted float-end mt-5">
                          98<span> Open Jobs</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                  <a href="#">
                    <div className="item-logo">
                      <div className="image-left">
                        <img
                          alt="jobBox"
                          src="assets/imgs/brands/brand-9.png"
                        />
                      </div>
                      <div className="text-info-right">
                        <h4>Qeuity</h4>
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <span className="font-xs color-text-mutted ml-10">
                          <span>(</span>
                          <span>76</span>
                          <span>)</span>
                        </span>
                      </div>
                      <div className="text-info-bottom mt-5">
                        <span className="font-xs color-text-mutted icon-location">
                          New York, US
                        </span>
                        <span className="font-xs color-text-mutted float-end mt-5">
                          90<span> Open Jobs</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                  <a href="#">
                    <div className="item-logo">
                      <div className="image-left">
                        <img
                          alt="jobBox"
                          src="assets/imgs/brands/brand-10.png"
                        />
                      </div>
                      <div className="text-info-right">
                        <h4>Honda</h4>
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <span className="font-xs color-text-mutted ml-10">
                          <span>(</span>
                          <span>89</span>
                          <span>)</span>
                        </span>
                      </div>
                      <div className="text-info-bottom mt-5">
                        <span className="font-xs color-text-mutted icon-location">
                          New York, US
                        </span>
                        <span className="font-xs color-text-mutted float-end mt-5">
                          34<span> Open Jobs</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                  <a href="#">
                    <div className="item-logo">
                      <div className="image-left">
                        <img
                          alt="jobBox"
                          src="assets/imgs/brands/brand-5.png"
                        />
                      </div>
                      <div className="text-info-right">
                        <h4>Toyota</h4>
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <span className="font-xs color-text-mutted ml-10">
                          <span>(</span>
                          <span>34</span>
                          <span>)</span>
                        </span>
                      </div>
                      <div className="text-info-bottom mt-5">
                        <span className="font-xs color-text-mutted icon-location">
                          New York, US
                        </span>
                        <span className="font-xs color-text-mutted float-end mt-5">
                          26<span> Open Jobs</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                  <a href="#">
                    <div className="item-logo">
                      <div className="image-left">
                        <img
                          alt="jobBox"
                          src="assets/imgs/brands/brand-3.png"
                        />
                      </div>
                      <div className="text-info-right">
                        <h4>Lexuxs</h4>
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <span className="font-xs color-text-mutted ml-10">
                          <span>(</span>
                          <span>27</span>
                          <span>)</span>
                        </span>
                      </div>
                      <div className="text-info-bottom mt-5">
                        <span className="font-xs color-text-mutted icon-location">
                          New York, US
                        </span>
                        <span className="font-xs color-text-mutted float-end mt-5">
                          54<span> Open Jobs</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                  <a href="#">
                    <div className="item-logo">
                      <div className="image-left">
                        <img
                          alt="jobBox"
                          src="assets/imgs/brands/brand-6.png"
                        />
                      </div>
                      <div className="text-info-right">
                        <h4>Ondo</h4>
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <span className="font-xs color-text-mutted ml-10">
                          <span>(</span>
                          <span>54</span>
                          <span>)</span>
                        </span>
                      </div>
                      <div className="text-info-bottom mt-5">
                        <span className="font-xs color-text-mutted icon-location">
                          New York, US
                        </span>
                        <span className="font-xs color-text-mutted float-end mt-5">
                          58<span> Open Jobs</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                  <a href="#">
                    <div className="item-logo">
                      <div className="image-left">
                        <img
                          alt="jobBox"
                          src="assets/imgs/brands/brand-2.png"
                        />
                      </div>
                      <div className="text-info-right">
                        <h4>Square</h4>
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <span className="font-xs color-text-mutted ml-10">
                          <span>(</span>
                          <span>16</span>
                          <span>)</span>
                        </span>
                      </div>
                      <div className="text-info-bottom mt-5">
                        <span className="font-xs color-text-mutted icon-location">
                          New York, US
                        </span>
                        <span className="font-xs color-text-mutted float-end mt-5">
                          37<span> Open Jobs</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                  <a href="#">
                    <div className="item-logo">
                      <div className="image-left">
                        <img
                          alt="jobBox"
                          src="assets/imgs/brands/brand-8.png"
                        />
                      </div>
                      <div className="text-info-right">
                        <h4>Vista</h4>
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <img
                          alt="jobBox"
                          src="assets/imgs/template/icons/star.svg"
                        />
                        <span className="font-xs color-text-mutted ml-10">
                          <span>(</span>
                          <span>97</span>
                          <span>)</span>
                        </span>
                      </div>
                      <div className="text-info-bottom mt-5">
                        <span className="font-xs color-text-mutted icon-location">
                          New York, US
                        </span>
                        <span className="font-xs color-text-mutted float-end mt-5">
                          43<span> Open Jobs</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-button-next swiper-button-next-1" />
          <div className="swiper-button-prev swiper-button-prev-1" />
        </div>
      </div>
    </section>
    <section className="section-box mt-50">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
            Jobs by Location
          </h2>
          <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
            Find your favourite jobs and get the benefits of yourself
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row mt-50">
          <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">
            <div className="card-image-top hover-up">
              <a href="jobs-grid.html">
                <div
                  className="image"
                  style={{
                    backgroundImage:
                      "url(assets/imgs/page/homepage1/location1.png)"
                  }}
                >
                  <span className="lbl-hot">Hot</span>
                </div>
              </a>
              <div className="informations">
                <a href="jobs-grid.html">
                  <h5>Paris, France</h5>
                </a>
                <div className="row">
                  <div className="col-lg-6 col-6">
                    <span className="text-14 color-text-paragraph-2">
                      5 Vacancy
                    </span>
                  </div>
                  <div className="col-lg-6 col-6 text-end">
                    <span className="color-text-paragraph-2 text-14">
                      120 companies
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-7 col-sm-12 col-12">
            <div className="card-image-top hover-up">
              <a href="jobs-grid.html">
                <div
                  className="image"
                  style={{
                    backgroundImage:
                      "url(assets/imgs/page/homepage1/location2.png)"
                  }}
                >
                  <span className="lbl-hot">Trending</span>
                </div>
              </a>
              <div className="informations">
                <a href="jobs-grid.html">
                  <h5>London, England</h5>
                </a>
                <div className="row">
                  <div className="col-lg-6 col-6">
                    <span className="text-14 color-text-paragraph-2">
                      7 Vacancy
                    </span>
                  </div>
                  <div className="col-lg-6 col-6 text-end">
                    <span className="color-text-paragraph-2 text-14">
                      68 companies
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-7 col-sm-12 col-12">
            <div className="card-image-top hover-up">
              <a href="jobs-grid.html">
                <div
                  className="image"
                  style={{
                    backgroundImage:
                      "url(assets/imgs/page/homepage1/location3.png)"
                  }}
                >
                  <span className="lbl-hot">Hot</span>
                </div>
              </a>
              <div className="informations">
                <a href="jobs-grid.html">
                  <h5>New York, USA</h5>
                </a>
                <div className="row">
                  <div className="col-lg-6 col-6">
                    <span className="text-14 color-text-paragraph-2">
                      9 Vacancy
                    </span>
                  </div>
                  <div className="col-lg-6 col-6 text-end">
                    <span className="color-text-paragraph-2 text-14">
                      80 companies
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12">
            <div className="card-image-top hover-up">
              <a href="jobs-grid.html">
                <div
                  className="image"
                  style={{
                    backgroundImage:
                      "url(assets/imgs/page/homepage1/location4.png)"
                  }}
                />
              </a>
              <div className="informations">
                <a href="jobs-grid.html">
                  <h5>Amsterdam, Holland</h5>
                </a>
                <div className="row">
                  <div className="col-lg-6 col-6">
                    <span className="text-14 color-text-paragraph-2">
                      16 Vacancy
                    </span>
                  </div>
                  <div className="col-lg-6 col-6 text-end">
                    <span className="color-text-paragraph-2 text-14">
                      86 companies
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-7 col-sm-12 col-12">
            <div className="card-image-top hover-up">
              <a href="jobs-grid.html">
                <div
                  className="image"
                  style={{
                    backgroundImage:
                      "url(assets/imgs/page/homepage1/location5.png)"
                  }}
                />
              </a>
              <div className="informations">
                <a href="jobs-grid.html">
                  <h5>Copenhagen, Denmark</h5>
                </a>
                <div className="row">
                  <div className="col-lg-6 col-6">
                    <span className="text-14 color-text-paragraph-2">
                      39 Vacancy
                    </span>
                  </div>
                  <div className="col-lg-6 col-6 text-end">
                    <span className="color-text-paragraph-2 text-14">
                      186 companies
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">
            <div className="card-image-top hover-up">
              <a href="jobs-grid.html">
                <div
                  className="image"
                  style={{
                    backgroundImage:
                      "url(assets/imgs/page/homepage1/location6.png)"
                  }}
                />
              </a>
              <div className="informations">
                <a href="jobs-grid.html">
                  <h5>Berlin, Germany</h5>
                </a>
                <div className="row">
                  <div className="col-lg-6 col-6">
                    <span className="text-14 color-text-paragraph-2">
                      15 Vacancy
                    </span>
                  </div>
                  <div className="col-lg-6 col-6 text-end">
                    <span className="color-text-paragraph-2 text-14">
                      632 companies
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section-box mt-50 mb-50">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
            News and Blog
          </h2>
          <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
            Get the latest news, updates and tips
          </p>
        </div>
      </div>
      <div className="container">
        <div className="mt-50">
          <div className="box-swiper style-nav-top">
            <div className="swiper-container swiper-group-3 swiper">
              <div className="swiper-wrapper pb-70 pt-5">
                <div className="swiper-slide">
                  <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn">
                    <div className="text-center card-grid-3-image">
                      <a href="#">
                        <figure>
                          <img
                            alt="jobBox"
                            src="assets/imgs/page/homepage1/img-news1.png"
                          />
                        </figure>
                      </a>
                    </div>
                    <div className="card-block-info">
                      <div className="tags mb-15">
                        <a className="btn btn-tag" href="blog-grid.html">
                          News
                        </a>
                      </div>
                      <h5>
                        <a href="blog-details.html">
                          21 Job Interview Tips: How To Make a Great Impression
                        </a>
                      </h5>
                      <p className="mt-10 color-text-paragraph font-sm">
                        Our mission is to create the world&amp;rsquo;s most
                        sustainable healthcare company by creating high-quality
                        healthcare products in iconic, sustainable packaging.
                      </p>
                      <div className="card-2-bottom mt-20">
                        <div className="row">
                          <div className="col-lg-6 col-6">
                            <div className="d-flex">
                              <img
                                className="img-rounded"
                                src="assets/imgs/page/homepage1/user1.png"
                                alt="jobBox"
                              />
                              <div className="info-right-img">
                                <span className="font-sm font-bold color-brand-1 op-70">
                                  Sarah Harding
                                </span>
                                <br />
                                <span className="font-xs color-text-paragraph-2">
                                  06 September
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 text-end col-6 pt-15">
                            <span className="color-text-paragraph-2 font-xs">
                              8 mins to read
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn">
                    <div className="text-center card-grid-3-image">
                      <a href="#">
                        <figure>
                          <img
                            alt="jobBox"
                            src="assets/imgs/page/homepage1/img-news2.png"
                          />
                        </figure>
                      </a>
                    </div>
                    <div className="card-block-info">
                      <div className="tags mb-15">
                        <a className="btn btn-tag" href="blog-grid.html">
                          Events
                        </a>
                      </div>
                      <h5>
                        <a href="blog-details.html">
                          39 Strengths and Weaknesses To Discuss in a Job
                          Interview
                        </a>
                      </h5>
                      <p className="mt-10 color-text-paragraph font-sm">
                        Our mission is to create the world&amp;rsquo;s most
                        sustainable healthcare company by creating high-quality
                        healthcare products in iconic, sustainable packaging.
                      </p>
                      <div className="card-2-bottom mt-20">
                        <div className="row">
                          <div className="col-lg-6 col-6">
                            <div className="d-flex">
                              <img
                                className="img-rounded"
                                src="assets/imgs/page/homepage1/user2.png"
                                alt="jobBox"
                              />
                              <div className="info-right-img">
                                <span className="font-sm font-bold color-brand-1 op-70">
                                  Steven Jobs
                                </span>
                                <br />
                                <span className="font-xs color-text-paragraph-2">
                                  06 September
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 text-end col-6 pt-15">
                            <span className="color-text-paragraph-2 font-xs">
                              6 mins to read
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn">
                    <div className="text-center card-grid-3-image">
                      <a href="#">
                        <figure>
                          <img
                            alt="jobBox"
                            src="assets/imgs/page/homepage1/img-news3.png"
                          />
                        </figure>
                      </a>
                    </div>
                    <div className="card-block-info">
                      <div className="tags mb-15">
                        <a className="btn btn-tag" href="blog-grid.html">
                          News
                        </a>
                      </div>
                      <h5>
                        <a href="blog-details.html">
                          Interview Question: Why Dont You Have a Degree?
                        </a>
                      </h5>
                      <p className="mt-10 color-text-paragraph font-sm">
                        Learn how to respond if an interviewer asks you why you
                        dont have a degree, and read example answers that can
                        help you craft
                      </p>
                      <div className="card-2-bottom mt-20">
                        <div className="row">
                          <div className="col-lg-6 col-6">
                            <div className="d-flex">
                              <img
                                className="img-rounded"
                                src="assets/imgs/page/homepage1/user3.png"
                                alt="jobBox"
                              />
                              <div className="info-right-img">
                                <span className="font-sm font-bold color-brand-1 op-70">
                                  Wiliam Kend
                                </span>
                                <br />
                                <span className="font-xs color-text-paragraph-2">
                                  06 September
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 text-end col-6 pt-15">
                            <span className="color-text-paragraph-2 font-xs">
                              9 mins to read
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
          </div>
          <div className="text-center">
            <a
              className="btn btn-brand-1 btn-icon-load mt--30 hover-up"
              href="blog-grid.html"
            >
              Load More Posts
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="section-box mt-50 mb-20">
      <div className="container">
        <div className="box-newsletter">
          <div className="row">
            <div className="col-xl-3 col-12 text-center d-none d-xl-block">
              <img
                src="assets/imgs/template/newsletter-left.png"
                alt="joxBox"
              />
            </div>
            <div className="col-lg-12 col-xl-6 col-12">
              <h2 className="text-md-newsletter text-center">
                New Things Will Always
                <br /> Update Regularly
              </h2>
              <div className="box-form-newsletter mt-40">
                <form className="form-newsletter">
                  <input
                    className="input-newsletter"
                    type="text"
                    defaultValue=""
                    placeholder="Enter your email here"
                  />
                  <button className="btn btn-default font-heading icon-send-letter">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="col-xl-3 col-12 text-center d-none d-xl-block">
              <img
                src="assets/imgs/template/newsletter-right.png"
                alt="joxBox"
              />
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
