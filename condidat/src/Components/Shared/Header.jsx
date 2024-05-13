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
    window.location.reload();
   
  };
  useEffect(() => {
    const storedLogedStatus = localStorage.getItem("isLogedIn");
    console.log(storedLogedStatus);
    console.log("headerhere");
    setisLogedIn(storedLogedStatus);
  }, []);
  return (
    <header className="header sticky-bar">
      <div className="container">
        <div className="main-header">
          <div className="header-left">
            <div className="header-logo">
              <a className="d-flex" >
                <img alt="jobBox" src="assets/imgs/template/jobhub-logo.svg" />
              </a>
            </div>
          </div>
          <div className="header-nav">
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
                  logout
                </Link>
              ) : (
                <>
                 
                
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
