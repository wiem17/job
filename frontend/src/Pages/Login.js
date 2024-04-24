// Login.js

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Signup"; // Importez le fichier de style
import { login } from "../Services/AuthApi";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    login(email, password).then((res) => {
      console.log(res.data);
      //redirection autre page
      navigate("/");
    });
  };

  return (
    <div className="login_container">
      <div className="login_form">
        <form onSubmit={handleLogin}>
          <h1>LOGIN IN YOUR ACCOUNT</h1>
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
          <Form.Group>
            <Button type="submit">Login </Button>
          </Form.Group>
          <p>
            Don't have an account? <Link to="/signup">Create account</Link>
          </p>
        </form>
        {/* {isError && <p style={{ color: "red" }}>Login error occurred</p>} */}
      </div>
      <div className="login_image"></div>
    </div>
  );
};

export default Login;
