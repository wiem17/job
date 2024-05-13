import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [isLogedIn, setisLogedIn] = useState(false);

  const Logout = () => {
    localStorage.removeItem("isLogedIn");
    setisLogedIn(false);
    localStorage.removeItem("userID");
    localStorage.removeItem("isLogedIn");
    navigate("/");
  };

  useEffect(() => {
    const storedLogedStatus = localStorage.getItem("isLogedIn");
    console.log(storedLogedStatus);
    setisLogedIn(storedLogedStatus);
  }, []);

  return (
    <header className="header sticky-bar">
      <div className="container">
        <div className="main-header">
          <div className="header-left">
            <div className="header-logo">
              <a className="d-flex" href="index.html">
                <img alt="jobBox" src="assets/imgs/template/jobhub-logo.svg" />
              </a>
            </div>
          </div>
          <div className="header-nav">
            <nav className="nav-main-menu">
              <ul className="main-menu">
                <li >
                  <Link to="/">Accueil</Link>
                </li>
                <li >
                  <a> <Link to="/jobs"> Liste des emplois  </Link></a>
                  
                </li>
                
                <li className="has-children">
                  <a >Pages</a>
                  <ul className="sub-menu">
                    <li>
                      <a >About Us</a>
                    </li>
                    <li>
                      <a >Pricing Plan</a>
                    </li>
                    <li>
                      <a >Contact Us</a>
                    </li>

                    <li>
                      <Link to="/login"> Connexion </Link>
                    </li>
                    <li>
                      <a >Reset Password</a>
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
               
              </ul>
            </nav>
            <div className="burger-icon burger-icon-white">
              <span className="burger-icon-top" />
              <span className="burger-icon-mid" />
              <span className="burger-icon-bottom" />
            </div>
          </div>
          <div className="header-right">
            <div className="block-signin">
              {isLogedIn ? (
                <Link
                  className="btn btn-default btn-shadow ml-40 hover-up"
                  onClick={Logout}
                >
                   Déconnexion
                </Link>
              ) : (
                <>
                  <Link to="/register">  S'inscrire </Link>
                  <Link
                    to="/login"
                    className="btn btn-default btn-shadow ml-40 hover-up"
                  >
                    Se connecter
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
