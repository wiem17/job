import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Components/Shared/Header";
import { forgetpassword } from "../Services/AuthApi";
import { useUser } from "../auth/useUser";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useUser();
  const handleLogin = async (e) => {
    e.preventDefault();
    if (email != null) {
      try {
        await forgetpassword(email);
        toast.success("Email de réinitialisation du mot de passe envoyé avec succès");
      } catch (error) {
        console.error("Erreur lors de l'envoi de la requête forgetpassword :", error);
        toast.error("Erreur lors de l'envoi de l'email de réinitialisation du mot de passe");
      }
    } 
  };
  return (
    <>
    <ToastContainer></ToastContainer>
      <Header></Header>

      <main className="main">
        <section className="pt-100 login-register">
          <div className="container">
            <div className="row login-register-cover">
              <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                <div className="text-center">
                  <p className="font-sm text-brand-2">Bienvenue ! </p>
                  <h2 className="mt-10 mb-5 text-brand-1">Connexion</h2>
                  <p className="font-sm text-muted mb-30">
                  Accédez à toutes les fonctionnalités.
                  </p>
                </div>
                <form
                  className="login-register text-start mt-20"
                  onSubmit={handleLogin}
                >
                  <Form.Group>
                    <Form.Label>Adresse e-mail</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                 
                  <div className="login_footer form-group d-flex justify-content-between">
                    <label className="cb-container"></label>
                    <a className="text-muted" >
                    <Link to="/login"> Connexion</Link>
                    </a>
                  </div>
                  <div className="form-group">
                    <Button
                      className="btn btn-brand-1 hover-up w-100"
                      type="submit"
                    >
                       Envoyer
                    </Button>
                  </div>
                 
                </form>
              </div>
              <div className="img-1 d-none d-lg-block">
                <img
                  className="shape-1"
                  src="assets/imgs/page/login-register/img-4.svg"
                  alt="JobBox"
                />
              </div>
              <div className="img-2">
                <img
                  src="assets/imgs/page/login-register/img-3.svg"
                  alt="JobBox"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer mt-50">
        <div className="container">
          <div className="row">
            <div className="footer-col-1 col-md-3 col-sm-12">
              <a href="index.html">
                <img alt="jobBox" src="assets/imgs/template/jobhub-logo.svg" />
              </a>
              <div className="mt-20 mb-20 font-xs color-text-paragraph-2">
                JobBox is the heart of the design community and the best
                resource to discover and connect with designers and jobs
                worldwide.
              </div>
              <div className="footer-social">
                <a className="icon-socials icon-facebook" href="#" />
                <a className="icon-socials icon-twitter" href="#" />
                <a className="icon-socials icon-linkedin" href="#" />
              </div>
            </div>
            <div className="footer-col-2 col-md-2 col-xs-6">
              <h6 className="mb-20">Resources</h6>
              <ul className="menu-footer">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-col-3 col-md-2 col-xs-6">
              <h6 className="mb-20">Community</h6>
              <ul className="menu-footer">
                <li>
                  <a href="#">Feature</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Credit</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="footer-col-4 col-md-2 col-xs-6">
              <h6 className="mb-20">Quick links</h6>
              <ul className="menu-footer">
                <li>
                  <a href="#">iOS</a>
                </li>
                <li>
                  <a href="#">Android</a>
                </li>
                <li>
                  <a href="#">Microsoft</a>
                </li>
                <li>
                  <a href="#">Desktop</a>
                </li>
              </ul>
            </div>
            <div className="footer-col-5 col-md-2 col-xs-6">
              <h6 className="mb-20">More</h6>
              <ul className="menu-footer">
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="footer-col-6 col-md-3 col-sm-12">
              <h6 className="mb-20">Download App</h6>
              <p className="color-text-paragraph-2 font-xs">
                Download our Apps and get extra 15% Discount on your first
                Order…!
              </p>
              <div className="mt-15">
                <a className="mr-5" href="#">
                  <img
                    src="assets/imgs/template/icons/app-store.png"
                    alt="joxBox"
                  />
                </a>
                <a href="#">
                  <img
                    src="assets/imgs/template/icons/android.png"
                    alt="joxBox"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom mt-50">
            <div className="row">
              <div className="col-md-6">
                <span className="font-xs color-text-paragraph">
                  Copyright © 2022. JobBox all right reserved
                </span>
              </div>
              <div className="col-md-6 text-md-end text-start">
                <div className="footer-social">
                  <a className="font-xs color-text-paragraph" href="#">
                    Privacy Policy
                  </a>
                  <a
                    className="font-xs color-text-paragraph mr-30 ml-30"
                    href="#"
                  >
                    Terms &amp; Conditions
                  </a>
                  <a className="font-xs color-text-paragraph" href="#">
                    Security
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Login;
