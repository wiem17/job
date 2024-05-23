import { Link } from "react-router-dom";
import { useRef } from "react";
import Axios from 'axios';
import React, { useEffect, useState } from "react";
import { getAllPostes } from "../Services/PosteService";
import { upload } from "../Services/CondidatService";
import "./Style.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import {  Container, Row } from "react-bootstrap";
import { countTotalPostes } from "../Services/PosteService";
import Totaljob from "./Totaljob";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
function Post({ onClick }) {
  const modalRef = useRef(null);
  const { categories } = useParams();
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [postes, setPostes] = useState([]);
  const [condidat, setCondidat] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPostes, setTotalPostes] = useState(null);
  const navigate = useNavigate();
  const [isLogedIn, setisLogedIn] = useState(false);
  const baseUrl = process.env.REACT_APP_API;
  const handleClick = (Titre) => {
    console.log(Titre);
    onClick(Titre);
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

useEffect(() => {
  if (localStorage.getItem("titreFromPost")) {
    const poste = postes.find((poste) => {
      return poste.titre === localStorage.getItem("titreFromPost");
    });
    console.log("titre de poste :", postes.length > 0);
    handleClick(localStorage.getItem("titreFromPost"));

    localStorage.removeItem("titreFromPost");
  }
}, [postes]);
useEffect(() => {
    const storedLogedStatus = localStorage.getItem("isLogedIn");
    console.log(storedLogedStatus);
    setisLogedIn(storedLogedStatus);
  }, []);
  const posteSearch = postes.filter((poste) =>
    poste.titre.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div>
      <section className="section-box-2">
        <div className="container">
          <div className="banner-hero banner-single banner-single-bg">
            <div className="block-banner text-center">
              <h3 className="wow animate__animated animate__fadeInUp">
                <div>
                  <Totaljob /> Available Now
                </div>
              </h3>
              <div
                className="font-sm color-text-paragraph-2 mt-10 wow animate__animated animate__fadeInUp"
                data-wow-delay=".1s"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                repellendus magni, <br className="d-none d-xl-block" />
                atque delectus molestias quis?
              </div>
              <div
                className="form-find text-start mt-40 wow animate__animated animate__fadeInUp"
                data-wow-delay=".2s"
              >
                <form>
                  <input
                    className="form-input input-keysearch mr-10"
                    type="search" // Changement du type d'input en "search"
                    placeholder="Search" // Placeholder mis à jour
                    onChange={(e) => setSearchTerm(e.target.value)} // Ajout du gestionnaire d'événements onChange
                  />
                  <button className="btn btn-default btn-find font-sm">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-box mt-30">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-9 col-md-12 col-sm-12 col-12 float-right">
              <div className="content-page">
                <div className="box-filters-job">
                  <div className="row">
                    <div className="col-xl-6 col-lg-5">
                      <span className="text-small text-showing">
                        Showing <strong>41-60 </strong>of <strong>944 </strong>
                        jobs
                      </span>
                    </div>
                    <div className="col-xl-6 col-lg-7 text-lg-end mt-sm-15">
                      <div className="display-flex2">
                        <div className="box-border mr-10">
                          <span className="text-sortby">Show:</span>
                          <div className="dropdown dropdown-sort">
                            <button
                              className="btn dropdown-toggle"
                              id="dropdownSort"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              data-bs-display="static"
                            >
                              <span>12</span>
                              <i className="fi-rr-angle-small-down" />
                            </button>
                            <ul
                              className="dropdown-menu dropdown-menu-light"
                              aria-labelledby="dropdownSort"
                            >
                              <li>
                                <a className="dropdown-item active" href="#">
                                  10
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  12
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  20
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="box-border">
                          <span className="text-sortby">Sort by:</span>
                          <div className="dropdown dropdown-sort">
                            <button
                              className="btn dropdown-toggle"
                              id="dropdownSort2"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              data-bs-display="static"
                            >
                              <span>Newest Post</span>
                              <i className="fi-rr-angle-small-down" />
                            </button>
                            <ul
                              className="dropdown-menu dropdown-menu-light"
                              aria-labelledby="dropdownSort2"
                            >
                              <li>
                                <a className="dropdown-item active" href="#">
                                  Newest Post
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Oldest Post
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Rating Post
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="box-view-type">
                          <a className="view-type" href="jobs-list.html">
                            <img
                              src="assets/imgs/template/icons/icon-list.svg"
                              alt="jobBox"
                            />
                          </a>
                          <a className="view-type" href="jobs-grid.html">
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
              </div>
              <div className="row display-list">
                {posteSearch.length === 0 ? (
                  <div>
                    <h1>No product to show</h1>
                  </div>
                ) : (
                  <Container>
                    <Row>
                    {posteSearch &&
                        posteSearch.map((poste) => (
                          <div className="col-xl-12 col-12" key={poste._id}>
                            <div className="card-grid-2 hover-up">
                              <span className="flash" />
                              <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                  <div className="card-grid-2-image-left">
                                    <div className="image-box">
                                      {poste.image &&
                                        poste.image.length > 0 && (
                                          <img
                                            src={poste.image[0].url}
                                            alt={poste.titre}
                                            className="poste-image"
                                            style={{
                                              width: "200px",
                                              height: "200px",
                                            }} // Définir la taille fixe ici
                                          />
                                        )}
                                    </div>
                                    <div className="right-info">
                                      <a className="name-job" href="#">
                                        {poste.titre}
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-block-info">
                                <h4>
                                  <a href={`job-details/${poste._id}`}>
                                    {poste.categories}
                                  </a>
                                </h4>

                                <p className="font-sm color-text-paragraph mt-10">
                                  Description: {poste.description}
                                </p>
                                <p className="font-sm color-text-paragraph mt-10">
                                  Compétences: {poste.competences}
                                </p>

                                <div className="card-2-bottom mt-20">
                                  <div className="row">
                                    <div className="col-lg-7 col-7"></div>
                                    <div className="col-lg-5 col-5 text-end">
                                      {isLogedIn ? (
                                        <div
                                          className="btn btn-apply-now"

                                          onClick={() => handleClick(poste.titre)
                                          }
                                        >
                                          Postulez maintenant
                                        </div>
                                      ) : (
                                        <div
                                          className="btn btn-apply-now"
                                          onClick={() => {
                                            localStorage.setItem(
                                              "titreFromPost",
                                              poste.titre
                                            );

                                            navigate("/loginuser");
                                          }}
                                        >
                                          Postulez maintenant
                                        </div>
                                      )}
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
            <div className="col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="sidebar-shadow none-shadow mb-30">
                <div className="sidebar-filters">
                  <div className="filter-block head-border mb-30">
                    <h5>
                      Advance Filter{" "}
                      <a className="link-reset" href="#">
                        Reset
                      </a>
                    </h5>
                  </div>
                  <div className="filter-block mb-30">
                    <div className="form-group select-style select-style-icon">
                      <select className="form-control form-icons select-active">
                        <option>New York, US</option>
                        <option>London</option>
                        <option>Paris</option>
                        <option>Berlin</option>
                      </select>
                      <i className="fi-rr-marker" />
                    </div>
                  </div>
                  <div className="filter-block mb-20">
                    <h5 className="medium-heading mb-15">Industry</h5>
                    <div className="form-group">
                      <ul className="list-checkbox">
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="text-small">All</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">180</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">Software</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">12</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">Finance</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">23</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">Recruting</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">43</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">Management</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">65</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">Advertising</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">76</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="filter-block mb-20">
                    <h5 className="medium-heading mb-25">Salary Range</h5>
                    <div className="list-checkbox pb-20">
                      <div className="row position-relative mt-10 mb-20">
                        <div className="col-sm-12 box-slider-range">
                          <div id="slider-range" />
                        </div>
                        <div className="box-input-money">
                          <input
                            className="input-disabled form-control min-value-money"
                            type="text"
                            name="min-value-money"
                            disabled="disabled"
                            defaultValue=""
                          />
                          <input
                            className="form-control min-value"
                            type="hidden"
                            name="min-value"
                            defaultValue=""
                          />
                        </div>
                      </div>
                      <div className="box-number-money">
                        <div className="row mt-30">
                          <div className="col-sm-6 col-6">
                            <span className="font-sm color-brand-1">$0</span>
                          </div>
                          <div className="col-sm-6 col-6 text-end">
                            <span className="font-sm color-brand-1">$500</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-20">
                      <ul className="list-checkbox">
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="text-small">All</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">145</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">$0k - $20k</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">56</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">$20k - $40k</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">37</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">$40k - $60k</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">75</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">$60k - $80k</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">98</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">$80k - $100k</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">14</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">$100k - $200k</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">25</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="filter-block mb-30">
                    <h5 className="medium-heading mb-10">Popular Keyword</h5>
                    <div className="form-group">
                      <ul className="list-checkbox">
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="text-small">Software</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">24</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">Developer</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">45</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">Web</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">57</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="filter-block mb-30">
                    <h5 className="medium-heading mb-10">Position</h5>
                    <div className="form-group">
                      <ul className="list-checkbox">
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">Senior</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">12</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="text-small">Junior</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">35</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">Fresher</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">56</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="filter-block mb-30">
                    <h5 className="medium-heading mb-10">Experience Level</h5>
                    <div className="form-group">
                      <ul className="list-checkbox">
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">Internship</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">56</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">Entry Level</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">87</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="text-small">Associate</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">24</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">Mid Level</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">45</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">Director</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">76</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">Executive</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">89</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="filter-block mb-30">
                    <h5 className="medium-heading mb-10">Onsite/Remote</h5>
                    <div className="form-group">
                      <ul className="list-checkbox">
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">On-site</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">12</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="text-small">Remote</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">65</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">Hybrid</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">58</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="filter-block mb-30">
                    <h5 className="medium-heading mb-10">Job Posted</h5>
                    <div className="form-group">
                      <ul className="list-checkbox">
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="text-small">All</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">78</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">1 day</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">65</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">7 days</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">24</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">30 days</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">56</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="filter-block mb-20">
                    <h5 className="medium-heading mb-15">Job type</h5>
                    <div className="form-group">
                      <ul className="list-checkbox">
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">Full Time</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">25</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="text-small">Part Time</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">64</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">Remote Jobs</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">78</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">Freelancer</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">97</span>
                        </li>
                      </ul>
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
          <div className="text-start">
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
                            21 Job Interview Tips: How To Make a Great
                            Impression
                          </a>
                        </h5>
                        <p className="mt-10 color-text-paragraph font-sm">
                          Our mission is to create the world&amp;rsquo;s most
                          sustainable healthcare company by creating
                          high-quality healthcare products in iconic,
                          sustainable packaging.
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
                          sustainable healthcare company by creating
                          high-quality healthcare products in iconic,
                          sustainable packaging.
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
                          Learn how to respond if an interviewer asks you why
                          you dont have a degree, and read example answers that
                          can help you craft
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
    </div>
  );
}
export default Post;
