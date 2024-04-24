import React, { useEffect, useState } from "react";
import Nav from '../Components/Shared/Nav'
import Header from '../Components/Shared/Header'
import Footer from '../Components/Shared/Footer'
import { getAllPostes } from "../Services/PosteService";
import {getAcceptedCondidatsByPosteTitle } from "../Services/CondidatService";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import {  deletedCondidat } from "../Services/CondidatService";
const baseUrl = process.env.REACT_APP_API;
 function Postcondidataccepter() {

        const [postes, setPostes] = useState([]);
        const [condidats, setCondidats] = useState([]);
        const [message, setMessage] = useState("");
        const fetchData = async () => {
          try {
            const postesData = await getAllPostes();
            console.log("Postes Data:", postesData);
            setPostes(postesData);
          } catch (error) {
            console.error("Error fetching postes:", error);
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
            const updatedCondidats = condidats.filter((condidat) => condidat._id !== id);
            if (updatedCondidats.length > 0) {
              setCondidats(updatedCondidats);
            } else {
              setMessage("Aucun candidat n'a postulé à ce poste.");
            }
           
          } catch (error) {
            alert("Failed to delete this condidat");
            console.error("Error deleting condidat:", error);
          }
        };        
       
        const handleCloseModal = () => {
          setCondidats([]); // Réinitialiser les candidats
          setMessage(""); // Réinitialiser le message
        };
        
      
      
        const handlePosteClick = async (titre) => {
          try {
            const condidatsData = await getAcceptedCondidatsByPosteTitle(titre);
            setCondidats(condidatsData.condidats);
        
            if (condidatsData.condidats.length === 0) {
              setMessage("Aucun candidat accepter à ce poste.");
            } else {
              setMessage("");
            }
          } catch (error) {
            console.error("Error fetching condidats by poste:", error);
          }
        };
        
       
      

  return (
    
    <>
    <ToastContainer />

  <Header></Header>
 
 
  <main className="main">
 <Nav></Nav>
    <div className="box-content">
      <div className="box-heading">
        <div className="box-title">
          <h3 className="mb-35">Condidates Acceptées</h3>
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
                <span>Condidates</span>
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
                 
                  <div className="row">
                  {postes.map((poste) => (
  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12" data-bs-toggle="modal"
  data-bs-target="#ModalApplyJobForm" key={poste._id} onClick={() => handlePosteClick(poste.titre)}>
     
    <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn" style={{ height: '250px',width: '270px' }}>
      <div className="image-box" style={{ height: '50%' }}>
        <a href="company-details.html">
          {poste.image && poste.image.length > 0 && poste.image[0].url &&
            <img src={poste.image[0].url} alt="jobBox" className="card-image"  style={{ width: '90px', height: '90px' }} />
          }
        </a>
      </div>
      <div className="info-text mt-10" >
      <h5 className="font-bold" >
                  {poste.titre}
                </h5>
        
        <div className="rating" >
        <div className="mt-5">
          <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
          <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
          <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
          <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
          <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
          <span className="font-xs color-text-mutted ml-10">
            
          </span>
        </div>
        </div>
       
       
        <div className="job-count" >
        <a className="btn btn-grey-big">
            <span>67</span>
            <span> Jobs Open </span>
          </a>
         
        </div>
      </div>
    </div>
  </div>
))}



                  
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
      <div className="modal fade" id="ModalApplyJobForm" tabIndex={-1} aria-hidden="true"   onClick={handleCloseModal}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content apply-job-form">
            <button className="btn-close"  onClick={handleCloseModal} type="button" data-bs-dismiss="modal" aria-label="Close" />
            <div className="modal-body pl-30 pr-30 pt-50">
              <div className="text-center">
                
                <h2 className="mt-10 mb-5 text-brand-1 text-capitalize">Votre Condidates</h2>
                
              </div>
              {condidats.length === 0 ? (
                 <div className="text-center">
                <p className="font-sm text-brand-2">Aucun condidat acceptée a ce poste</p>
                </div>
              ) : (
                <div className="row">
                  {condidats.map((condidat) => (
                    <div className="col-xl-6 col-lg-6 col-md-6 mb-4" key={condidat._id}>
                      <div className="card-grid-2 hover-up">
                        <div className="card-grid-2-image-left">
                          <div className="card-profile pt-10">
                            <a href={`${baseUrl}${condidat.file}`}>
                              <h5>{condidat.name}</h5>
                            </a>
                            <span className="font-xs" style={{ color: '#a56de2' }}>{condidat.titrePoste}</span>
                            <div className="rate-reviews-small pt-3">
                              <span className="font-xs color-text-mutted">{condidat.email}</span>
                            </div>
                            <div className="rate-reviews-small pt-3">
                              <span className="font-xs color-text-paragraph-2">{condidat.lettre_de_motivation}</span>
                            </div>
                          </div>
                        </div>
                        <div className="card-block-info">
                          <div className="card-2-bottom">
                            <div className="d-flex justify-content-between align-items-center px-3">
                              <div className="btn btn-sm btn-apply-now float-start"  onClick={() =>
                                            handleAccepted(condidat)
                                          }>Accept</div>
                              <div><div className="btn btn-sm btn-apply-now float-end"  onClick={() =>
                                            handleDelete(condidat._id)
                                          }>Delete</div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    <Footer></Footer>
    </div>
  </main>
    </>
  );
};
export default Postcondidataccepter