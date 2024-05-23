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
    localStorage.removeItem("token");
    window.location.reload() ; 
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
                <img style={{height:"40px"}} alt="jobBox" src="assets/imgs/template/cat.png" />
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
                    <Link to="/regiter"> Inscription </Link>
                    </li>

                    <li>
                      <Link to="/login"> Connexion </Link>
                    </li>
                    <li>
                    <Link to="/forget"> Oublié mot de passe </Link>
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
