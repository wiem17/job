import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {forgetpassword } from "../Services/AuthApi";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
     <ToastContainer />
      <main className="main">
        <section className="pt-100 login-register">
          <div className="container">
            <div className="row login-register-cover">
              <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                <div className="text-center">
                  <p className="font-sm text-brand-2">Bienvenue !</p>
                  <h2 className="mt-10 mb-5 text-brand-1">Connexion</h2>
                  <p className="font-sm text-muted mb-30">
                  Mettre ton email.
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
                    <a className="text-muted" href="page-contact.html">
                    <Link to="/login">Connexion</Link>  
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
    </>
  );
}
export default Login;
