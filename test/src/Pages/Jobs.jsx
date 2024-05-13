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
import ApplyJobModal from "./ApplyJobModal";
import Header from "../Components/Shared/Header";
import Footer from "../Components/Shared/Footer";
import { useUser } from "../auth/useUser";

function Post() {
  const user = useUser();
  const modalRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const [postes, setPostes] = useState([]);
  const [condidat, setCondidat] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPostes, setTotalPostes] = useState(null);
  const [valueFromChild, setValueFromChild] = useState(null);
  const [isLogedIn, setisLogedIn] = useState(false);
  const [userID, setuserID] = useState("");
  const [userRole, setuserRole] = useState("");
  const handleChildClick = (value) => {
    setIsOpen(setIsOpen)
    console.log("job titre " + value);
    setValueFromChild(value);
  };
  const handleCreateProduct = async (e) => {
    e.preventDefault();
    console.log(condidat);
    condidat.titrePoste = valueFromChild;
    // Vérifiez si tous les champs sont remplis
    if (
      //!condidat.email ||
      !condidat.lettre_de_motivation ||
      !condidat.titrePoste ||
      !condidat.file
    ) {
      return alert("Please fill out all the fields");
    }

    try {
      // Appeler la fonction pour créer un produit
      const response = await upload(
        userID,
        condidat.email,
        condidat.lettre_de_motivation,
        condidat.file,
        valueFromChild
      );

      // Vérifiez si la création du produit a réussi (vous pouvez ajuster cette vérification selon la structure de votre réponse)
      if (response.data && response.data.length === 0) {
        // Réinitialiser le formulaire après la création du produit
        setCondidat({
          email: "",
          lettre_de_motivation: "",
          titrePoste: "",
          file: [],
        });
      }
      console.log("Fermeture du modal");

      // Afficher une toast pour indiquer que les données ont été envoyées avec succès
      toast.success("Données envoyées avec succès !");
    } catch (error) {
      console.error("Error:", error);
      // Gérer les erreurs si nécessaire
      toast.error("erreur !!");
    } finally {
      setIsOpen(false);
      document
.getElementById("ModalApplyJobForm")
        .dispatchEvent(new Event("hidden.bs.modal"));
    }
  };
  useEffect(() => {
    const storedLogedStatus = localStorage.getItem("isLogedIn");
    const storeduserID = localStorage.getItem("userID");
    const storeduserRole = localStorage.getItem("userRole");
    setuserID(storeduserID);
    setuserRole(storeduserRole);
    console.log(storedLogedStatus);
    setisLogedIn(storedLogedStatus);
  }, []);
  console.log("UserID:", userID);
  console.log("UserRole:", userRole);

  return (
    <>
      <ToastContainer />
      <div
        className="modal fade"
        id="ModalApplyJobForm"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content apply-job-form">
            <button
              className="btn-close"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
            <div className="modal-body pl-30 pr-30 pt-50">
              <div className="text-center">
                <p className="font-sm text-brand-2">Job Application </p>
                <h2 className="mt-10 mb-5 text-brand-1 text-capitalize">
                  Start your career today
                </h2>
                <p className="font-sm text-muted mb-30">{valueFromChild}</p>
              </div>
              <form onSubmit={handleCreateProduct}>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={condidat.email}
                    onChange={(e) =>
                      setCondidat({ ...condidat, email: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lettre_de_motivation">
                    Lettre de motivation *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lettre_de_motivation"
                    value={condidat.lettre_de_motivation}
                    onChange={(e) =>
                      setCondidat({
                        ...condidat,
                        lettre_de_motivation: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="titrePoste">Titre du Poste *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="titrePoste"
                    value={valueFromChild}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cv">Upload CV *</label>
                  <input
                    type="file"
                    className="form-control"
                    id="cv"
                    onChange={(e) =>
                      setCondidat({ ...condidat, file: e.target.files[0] })
                    }
                  />
                </div>
                <div className="login_footer form-group d-flex justify-content-between">
                  <label className="cb-container">
                    <input type="checkbox" />
                    <span className="text-small">
                      Agree our terms and policy
                    </span>
                    <span className="checkmark" />
                  </label>
                  <a className="text-muted" href="page-contact.html">
                    Learn more
                  </a>
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-default hover-up w-100"
                    type="submit"
                    name="login"
                  >
                    {" "}
                    Postulez à ce poste
                  </button>
                </div>
                <div className="text-muted text-center">
                  Do you need support?{" "}
                  <a href="page-contact.html">Contact Us</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Header></Header>

      <main className="main">
        <ApplyJobModal onClick={handleChildClick} />
      </main>
      <Footer></Footer>
    </>
  );
}
export default Post;
