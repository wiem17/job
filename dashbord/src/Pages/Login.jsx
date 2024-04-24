import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

import { login } from "../Services/AuthApi";

import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
        const res = await login(email, password);
        console.log(res.data);
        console.log(res);
        // redirection autre page
        if (res.data.role === "ADMIN") {
            localStorage.setItem("isLogedIn", true);
            localStorage.setItem("userID", res.data.userID);
            localStorage.setItem("userRole", res.data.role);
            navigate("/admin-dashboard");
        } else {
            alert("only admin can access to this part of the website ");
        }
    } catch (error) {
        console.error('Login error:', error);
        // Vérifier si error.response est défini avant d'accéder à ses propriétés
        if (error.response) {
            // Gérer les erreurs de réponse HTTP
            if (error.response.status === 401) {
                alert("Email or password invalid. Please try again.");
            } else {
                alert("An error occurred. Please try again later.");
            }
        } else {
            // Gérer les autres types d'erreurs
            alert("An error occurred. Please try again later.");
        }
    }
};


  return (
    <>
      <main className="main">
        <section className="pt-100 login-register">
          <div className="container">
            <div className="row login-register-cover">
              <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                <div className="text-center">
                  <p className="font-sm text-brand-2">Welcome back! </p>
                  <h2 className="mt-10 mb-5 text-brand-1">Member Login</h2>
                  <p className="font-sm text-muted mb-30">
                    Access to all features. No credit card required.
                  </p>
                </div>
                <form
                  className="login-register text-start mt-20"
                  onSubmit={handleLogin}
                >
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <div className="login_footer form-group d-flex justify-content-between">
                    <label className="cb-container"></label>
                    <a className="text-muted" href="page-contact.html">
                      Forgot Password
                    </a>
                  </div>
                  <div className="form-group">
                    <Button
                      className="btn btn-brand-1 hover-up w-100"
                      type="submit"
                    >
                      Login
                    </Button>
                  </div>
                  <div className="text-muted text-center">
                    Don't have an Account? <Link to="/register"> Sign up </Link>
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
