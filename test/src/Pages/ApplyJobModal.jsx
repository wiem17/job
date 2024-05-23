import { Link } from "react-router-dom";
import { useRef } from "react";
import React, { useEffect, useState } from "react";
import { getAllPostes } from "../Services/PosteService";
import { upload } from "../Services/CondidatService";
import "./Style.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Col, Container, Row } from "react-bootstrap";
import { countTotalPostes } from "../Services/PosteService";
import Totaljob from "./Totaljob";
import { useNavigate } from "react-router-dom";

function Post({ onClick }) {
  const modalRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [postes, setPostes] = useState([]);
  const [condidat, setCondidat] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPostes, setTotalPostes] = useState(null);
  const navigate = useNavigate();
  const [isLogedIn, setisLogedIn] = useState(false);
  const handleClick = (Titre) => {
    console.log(Titre);
    onClick(Titre);
  };
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

  useEffect(() => {
    if (localStorage.getItem("titreFromPost") && localStorage.getItem("token")) {
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
                  <Totaljob /> Disponible maintenant
                </div>
              </h3>
              <div
                className="font-sm color-text-paragraph-2 mt-10 wow animate__animated animate__fadeInUp"
                data-wow-delay=".1s"
              >
                Explorez nos opportunités d'emploi disponibles et postulez dès
                maintenant pour rejoindre notre équipe dynamique !
                <br className="d-none d-xl-block" />
                dès maintenant pour rejoindre notre équipe dynamique !
              </div>
              <div
                className="form-find text-start mt-40 wow animate__animated animate__fadeInUp"
                data-wow-delay=".2s"
              >
                <form>
                  <input
                    className="form-input input-keysearch mr-10"
                    type="search" // Changement du type d'input en "search"
                    placeholder="Chercher" // Placeholder mis à jour
                    onChange={(e) => setSearchTerm(e.target.value)} // Ajout du gestionnaire d'événements onChange
                  />
                  <button className="btn btn-default btn-find font-sm">
                    Chercher
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
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="sidebar-shadow none-shadow mb-30">
                <div className="sidebar-filters">
                  <div className="filter-block head-border mb-30">
                    <h5>
                      Filtre Avancé{" "}
                      <a className="link-reset" href="#">
                        Réinitialiser
                      </a>
                    </h5>
                  </div>
                  <div className="filter-block mb-30">
                    <div className="form-group select-style select-style-icon">
                      <select className="form-control form-icons select-active">
                        <option>New York, US</option>
                        <option>Londres</option>
                        <option>Paris</option>
                        <option>Berlin</option>
                      </select>
                      <i className="fi-rr-marker" />
                    </div>
                  </div>
                  <div className="filter-block mb-20">
                    <h5 className="medium-heading mb-15">Industrie</h5>
                    <div className="form-group">
                      <ul className="list-checkbox">
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="text-small">Tous</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">180</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">Logiciel</span>
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
                            <span className="text-small">Recrutement</span>
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
                            <span className="text-small">Publicité</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">76</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="filter-block mb-20">
                    <h5 className="medium-heading mb-25">Plage salariale</h5>
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
                            <span className="text-small">Tous</span>
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
                    <h5 className="medium-heading mb-10">Mot-clé populaire</h5>
                    <div className="form-group">
                      <ul className="list-checkbox">
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="text-small">Logiciel</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">24</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">Développeur</span>
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
                    <h5 className="medium-heading mb-10">Poste</h5>
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
                            <span className="text-small">Débutant</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">56</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="filter-block mb-30">
                    <h5 className="medium-heading mb-10">
                      Niveau d'expérience
                    </h5>
                    <div className="form-group">
                      <ul className="list-checkbox">
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">Stage</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">56</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">Débutant</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">87</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="text-small">Associé</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">24</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">
                              Niveau intermédiaire
                            </span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">45</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">Directeur</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">76</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">Cadre</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">89</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="filter-block mb-30">
                    <h5 className="medium-heading mb-10">
                      Sur site/À distance
                    </h5>
                    <div className="form-group">
                      <ul className="list-checkbox">
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">Sur site</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">12</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="text-small">À distance</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">65</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">Hybride</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">58</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="filter-block mb-30">
                    <h5 className="medium-heading mb-10">
                      Offres d'emploi publiées
                    </h5>
                    <div className="form-group">
                      <ul className="list-checkbox">
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="text-small">Toutes</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">78</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">1 jour</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">65</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">7 jours</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">24</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">30 jours</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">56</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="filter-block mb-20">
                    <h5 className="medium-heading mb-15">Type d'emploi</h5>
                    <div className="form-group">
                      <ul className="list-checkbox">
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">Temps plein</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">25</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="text-small">Temps partiel</span>
                            <span className="checkmark" />
                          </label>
                          <span className="number-item">64</span>
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">
                              Emplois à distance
                            </span>
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
    </div>
  );
}
export default Post;