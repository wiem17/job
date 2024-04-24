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
    navigate("/");
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
              <span className="name"><Link to="/admin-dashboard">Dashboard</Link> </span>
            </a>
          </li>
          <li>
            {" "}
            <a className="dashboard2" >
              <img src="assets/imgs/page/dashboard/jobs.svg" alt="jobBox" />
              <span className="name"><Link to="/postlist">My Jobs</Link> </span>
            </a>
          </li>
          <li>
            {" "}
            <a className="dashboard2" >
              <img
                src="assets/imgs/page/dashboard/candidates.svg"
                alt="jobBox"
              />
              <span className="name"><Link to="/postcondidat">Condidates</Link></span>
            </a>
          </li>
          <li>
            {" "}
            <a className="dashboard2" >
            <img src="assets/imgs/page/dashboard/tasks.svg" alt="jobBox" />
               <span className="name"><Link to="/condidataccepted"> Accepted</Link></span>
            </a>
          </li>
         
          
          
          <li>
                  {" "}
                  <a className="dashboard2" href="profile.html">
                    <img
                      src="assets/imgs/page/dashboard/profiles.svg"
                      alt="jobBox"
                    />
                    <span className="name"> <Link to="/profile"> My Profiles</Link></span>
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="dashboard2" href="login.html">
                    <img
                      src="assets/imgs/page/dashboard/logout.svg"
                      alt="jobBox"
                    />
                    <span className="name">
                    {isLogedIn ? (
                <Link
                 
                  onClick={Logout}
                >
                  logout
                </Link>
              ) : (
                <>
                  <Link to="/register"> Register </Link>
                  <Link
                    to="/login"
                    className="btn btn-default btn-shadow ml-40 hover-up"
                  >
                    Sign in
                  </Link>
                </>
              )}
              </span>
                  </a>
                </li>
         
         
         
        </ul>
      </nav>
     
      
      <div className="sidebar-border-bg mt-50">
        <span className="text-grey">WE ARE</span>
        <span className="text-hiring">HIRING</span>
       
        <div className="mt-15">
          <a className="btn btn-paragraph-2" href="#">
            Know More
          </a>
        </div>
      </div>
    </div>
  )
}
export default Nav