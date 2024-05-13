import React from 'react'
import { Link } from 'react-router-dom';
import Image from './Image';

function Header() {
  return (
    <header className="header sticky-bar">
    <div className="container">
      <div className="main-header">
        <div className="header-left">
          <div className="header-logo">
            <a className="d-flex" href="index.html">
              <img alt="jobBox" src="assets/imgs/page/dashboard/logo.svg" />
            </a>
          </div>
         
        </div>
        
       
        <div className="header-right">
          <div className="block-signin">
           
              
              <Link to="/post"   className="btn btn-default icon-edit hover-up"> Poster une offre </Link>
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
                    20 réponses
                  </a>
                </li>
              </ul>
            </div>
          <Image></Image>
          </div>
        </div>
      </div>
    </div>
  </header>

  )
}

export default Header
