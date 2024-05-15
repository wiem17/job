import React from 'react'
import Header from './Shared/Header'
import Nav from './Shared/Nav';
import Footer from './Shared/Footer'
import { Link } from 'react-router-dom';
import Lastjob from '../Pages/Lastjob'
import Totaljob from "./Totaljob";
import Totalcondidat from "./Totalcondidat";
import Totalpourcentageposte from "./Totalpourcentageposte";
import Totalpourcentagecondidats from "./Totalpourcentagecondidats";
import Totalpourcentagecondidataccept from "./Totalpourcentagecondidataccept";
import Totalcondidatnonaccept from "./Totalcondidatnonaccept";
import Totalcondidataccepté from "./Totalcondidataccepté";
import Totalcondidatrefusé from "./Totalcondidatrefusé";
import Listcondidataccepté from "./Listcondidataccepté";
function Main() {
  return (
   
      <>
    
 <Header></Header>

 
  <main className="main">
   <Nav></Nav>
    <div className="box-content">
      <div className="box-heading">
        <div className="box-title">
          <h3 className="mb-35">Tableau de bord</h3>
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
                <span>Tableau de bord</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xxl-8 col-xl-7 col-lg-7">
          <div className="section-box">
            <div className="row">
              <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-4 col-sm-6">
                <div className="card-style-1 hover-up">
                  <div className="card-image">
                    {" "}
                    <img
                      src="assets/imgs/page/dashboard/doc.svg"
                      alt="jobBox"
                    />
                  </div>
                  <div className="card-info">
                    <div className="card-title">
                      <h3>
                       <Totaljob></Totaljob>
                        <Totalpourcentageposte></Totalpourcentageposte>
                      </h3>
                    </div>
                    <p className="color-text-paragraph-2">
                              Postes <br></br>
                             Ajoutée 

                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-4 col-sm-6">
                <div className="card-style-1 hover-up">
                  <div className="card-image">
                    {" "}
                    <img
                      src="assets/imgs/page/dashboard/man.svg"
                      alt="jobBox"
                    />
                  </div>
                  <div className="card-info">
                    <div className="card-title">
                      <h3>
                       <Totalcondidat></Totalcondidat>
                      <Totalpourcentagecondidats></Totalpourcentagecondidats>
                      </h3>
                    </div>
                    <p className="color-text-paragraph-2">Condidates Postulées</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-4 col-sm-6">
                <div className="card-style-1 hover-up">
                  <div className="card-image">
                    {" "}
                    <img
                      src="assets/imgs/page/dashboard/man.svg"
                      alt="jobBox"
                    />
                  </div>
                  <div className="card-info">
                    <div className="card-title">
                      <h3>
                       <Totalcondidataccepté></Totalcondidataccepté>
                        <Totalpourcentagecondidataccept></Totalpourcentagecondidataccept>
                      </h3>
                    </div>
                    <p className="color-text-paragraph-2">Condidates Acceptée</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-4 col-sm-6">
                <div className="card-style-1 hover-up">
                  <div className="card-image">
                    {" "}
                    <img
                      src="assets/imgs/page/dashboard/man.svg"
                      alt="jobBox"
                    />
                  </div>
                  <div className="card-info">
                    <div className="card-title">
                      <h3>
                        <Totalcondidatrefusé></Totalcondidatrefusé>
                        <Totalcondidatnonaccept></Totalcondidatnonaccept>
                      </h3>
                    </div>
                    <p className="color-text-paragraph-2">Condidates Refusée</p>
                  </div>
                </div>
              </div>
             
              
            </div>
          </div>
         
          <div className="section-box">
            <div className="container">
              <div className="panel-white">
                <div className="panel-head">
                  <h5>Dernier Postes</h5>
                
                  
                </div>
                <div className="panel-body">
                  
                 <Lastjob></Lastjob>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-xl-5 col-lg-5">
          <div className="section-box">
            <div className="container">
              <div className="panel-white">
                <div className="panel-head">
                  <h5>Les Candidates Acceptés</h5>
                </div>
                <div className="panel-body">
                  
                 <Listcondidataccepté></Listcondidataccepté>
                </div>
              </div>
            </div>
          </div>
        
         
        </div>
      </div>
   
  
    </div>
  </main>

  
</>


  )
}

export default Main
