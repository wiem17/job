import { Link } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import React, { useState, useEffect } from "react";
import {
  getAcceptedCondidats,
  deletedCondidat,
} from "../Services/CondidatService";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Nav from "../Components/Shared/Nav";

const CandidatAccept = () => {
  const navigate = useNavigate();
  const [condidats, setCondidats] = useState([]);
  const [acceptedCondidats, setAcceptedCondidats] = useState([]);
  const [error, setError] = useState(null);
  const baseUrl = process.env.REACT_APP_API;

  const fetchData = async () => {
    try {
      const response = await getAcceptedCondidats();
      setAcceptedCondidats(response);
    } catch (error) {
      console.error("Erreur lors de la récupération des condidats :", error);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAccepted = async (condidat) => {
    console.log(condidat);
    let dataSend = {
      email: condidat.email,
      subject: "you are accepted at " + condidat.titrePoste,
      message: "message",
    };
    try {
      console.log("function start");
      const res = await fetch(`${baseUrl}api/sendmail/mail`, {
        method: "POST",
        body: JSON.stringify(dataSend),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      console.log(res);
      console.log("function endeed");

      // Successfully sent
      toast.success("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      // Display error notification
      toast.error("An error occurred while sending the email.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deletedCondidat(id);
      // Mettre à jour la liste des condidats après suppression
      fetchData();
      alert("Condidat supprimé avec succès");
    } catch (error) {
      alert("Erreur lors de la suppression du condidat");
      console.error("Erreur lors de la suppression du condidat :", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <header className="header sticky-bar">
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <a className="d-flex" href="index.html">
                  <img alt="jobBox" src="assets/imgs/page/dashboard/logo.svg" />
                </a>
              </div>
              <span className="btn btn-grey-small ml-10">Admin area</span>
            </div>
            <div className="header-search">
              <div className="box-search">
                <form action="">
                  <input
                    className="form-control input-search"
                    type="text"
                    name="keyword"
                    placeholder="Search"
                  />
                </form>
              </div>
            </div>
            <div className="header-menu d-none d-md-block">
              <ul>
                <li>
                  {" "}
                  <a href="http://wp.alithemes.com/html/jobbox/demos/index.html">
                    Home{" "}
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="http://wp.alithemes.com/html/jobbox/demos/page-about.html">
                    About us{" "}
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="http://wp.alithemes.com/html/jobbox/demos/page-contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="header-right">
              <div className="block-signin">
                <a
                  className="btn btn-default icon-edit hover-up"
                  href="post-job.html"
                >
                  Post Job
                </a>
                <div className="dropdown d-inline-block">
                  <a
                    className="btn btn-notify"
                    id="dropdownNotify"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-display="static"
                  />
                  <ul
                    className="dropdown-menu dropdown-menu-light dropdown-menu-end"
                    aria-labelledby="dropdownNotify"
                  >
                    <li>
                      <a className="dropdown-item active" href="#">
                        10 notifications
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        12 messages
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        20 replies
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="member-login">
                  <img alt="" src="assets/imgs/page/dashboard/profile.png" />
                  <div className="info-member">
                    {" "}
                    <strong className="color-brand-1">Steven Jobs</strong>
                    <div className="dropdown">
                      <a
                        className="font-xs color-text-paragraph-2 icon-down"
                        id="dropdownProfile"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        data-bs-display="static"
                      >
                        Super Admin
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-light dropdown-menu-end"
                        aria-labelledby="dropdownProfile"
                      >
                        <li>
                          <a className="dropdown-item" href="profile.html">
                            Profiles
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="my-resume.html">
                            CV Manager
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="login.html">
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <Nav></Nav>
        <div className="box-content">
          <div className="box-heading">
            <div className="box-title">
              <h3 className="mb-35">Recruiters</h3>
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
                    <span>Recruiters</span>
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
                      <div className="row mb-30">
                        <div className="col-12">
                          <div className="box-list-character">
                            <ul>
                              <li>
                                <a className="active" href="#">
                                  A
                                </a>
                              </li>
                              <li>
                                <a href="#">B</a>
                              </li>
                              <li>
                                <a href="#">C</a>
                              </li>
                              <li>
                                <a href="#">D</a>
                              </li>
                              <li>
                                <a href="#">E</a>
                              </li>
                              <li>
                                <a href="#">F</a>
                              </li>
                              <li>
                                <a href="#">G</a>
                              </li>
                              <li>
                                <a href="#">H</a>
                              </li>
                              <li>
                                <a href="#">I</a>
                              </li>
                              <li>
                                <a href="#">J</a>
                              </li>
                              <li>
                                <a href="#">K</a>
                              </li>
                              <li>
                                <a href="#">L</a>
                              </li>
                              <li>
                                <a href="#">M</a>
                              </li>
                              <li>
                                <a href="#">N</a>
                              </li>
                              <li>
                                <a href="#">O</a>
                              </li>
                              <li>
                                <a href="#">P</a>
                              </li>
                              <li>
                                <a href="#">Q</a>
                              </li>
                              <li>
                                <a href="#">R</a>
                              </li>
                              <li>
                                <a href="#">S</a>
                              </li>
                              <li>
                                <a href="#">T</a>
                              </li>
                              <li>
                                <a href="#">U</a>
                              </li>
                              <li>
                                <a href="#">V</a>
                              </li>
                              <li>
                                <a href="#">W</a>
                              </li>
                              <li>
                                <a href="#">X</a>
                              </li>
                              <li>
                                <a href="#">Y</a>
                              </li>
                              <li>
                                <a href="#">Z</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        {Array.isArray(acceptedCondidats) &&
                          acceptedCondidats.map((condidat) => (
                            <div
                              className="col-xl-3 col-lg-4 col-md-6"
                              key={condidat._id}
                            >
                              <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                  <div className="card-profile pt-10">
                                    <a href={`${baseUrl}${condidat.file}`}>
                                      <h5>{condidat.name}</h5>
                                    </a>
                                    <span
                                      className="font-xs"
                                      style={{ color: "#a56de2" }}
                                    >
                                      {condidat.titrePoste}
                                    </span>

                                    <div className="rate-reviews-small pt-5">
                                      <span className="font-xs color-text-mutted">
                                        {condidat.email}
                                      </span>
                                    </div>
                                    <div className="rate-reviews-small pt-5">
                                      <span className="font-xs color-text-paragraph-2">
                                        {condidat.lettre_de_motivation}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="card-block-info">
                                  <div className="card-2-bottom mt-30">
                                    <div className="d-flex justify-content-between align-items-center px-3">
                                      <div>
                                        <div
                                          className="btn btn-apply-now float-end"
                                          onClick={() =>
                                            handleDelete(condidat._id)
                                          }
                                        >
                                          Refuser
                                        </div>
                                      </div>
                                      <div>
                                        <div
                                          className="btn btn-apply-now float-end"
                                          onClick={() =>
                                            handleAccepted(condidat)
                                          }
                                        >
                                          Accepter
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12" />
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
                      Please fill in your information and send it to the
                      employer.{" "}
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
  );
};
export default CandidatAccept;
