import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
 function Nav() {
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
    <div className="nav">
    <a className="btn btn-expanded" />
    <nav className="nav-main-menu">
      <ul className="main-menu">
        <li>
          {" "}
          <a className="dashboard2 active" >
            <img
              src="assets/imgs/page/dashboard/dashboard.svg"
              alt="jobBox"
            />
            <span className="name"><Link to="/admin-dashboard">Tableau de bord</Link> </span>
          </a>
        </li>
        <li>
          {" "}
          <a className="dashboard2" >
            <img src="assets/imgs/page/dashboard/jobs.svg" alt="jobBox" />
            <span className="name"><Link to="/postlist">Mes emplois</Link> </span>
          </a>
        </li>
        <li>
          {" "}
          <a className="dashboard2" >
            <img
              src="assets/imgs/page/dashboard/candidates.svg"
              alt="jobBox"
            />
            <span className="name"><Link to="/postcondidat">Candidats</Link></span>
          </a>
        </li>
        <li>
          {" "}
          <a className="dashboard2" >
            <img src="assets/imgs/page/dashboard/tasks.svg" alt="jobBox" />
               <span className="name"><Link to="/condidataccepted"> Acceptés</Link></span>
          </a>
        </li>
       
        
        
        <li>
                {" "}
                <a className="dashboard2" href="profile.html">
                  <img
                    src="assets/imgs/page/dashboard/profiles.svg"
                    alt="jobBox"
                  />
                  <span className="name"> <Link to="/profile"> Mon profile</Link></span>
                </a>
              </li>
              <li>
                {" "}
                <a className="dashboard2" >
                  <img
                    src="assets/imgs/page/dashboard/logout.svg"
                    alt="jobBox"
                  />
                  
                  <span className="name">
                  {isLogedIn ? (
              <Link
               
                onClick={Logout}
              >
                Déconnexion
              </Link>
            ) : (
              <>
                
              </>
            )}
            </span>
                </a>
              </li>
       
       
       
      </ul>
    </nav>
   
    
    <div className="sidebar-border-bg mt-50">
     
      <span className="text-hiring">ENGAGE</span>
     
      <div className="mt-15">
        <a className="btn btn-paragraph-2" href="#">
          En savoir plus
        </a>
      </div>
    </div>
  </div>
  )
}
export default Nav