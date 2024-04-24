// Signup.js
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { register } from "../Services/AuthApi";


const Signup = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const handleSignup = async (e) => {
    e.preventDefault();
    const objRegister = {
      email: email,
      password: password,
      name: name,
      lastname: lastname,
      age: age,
      image: image,
    };
    await register(objRegister).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="signup_container">
      <div className="signup_form">
        <form onSubmit={handleSignup}>
          <h1>Create an Account</h1>

          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>LastName</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter lastname"
              value={lastname}
              required
              onChange={(e) => setLastname(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter age"
              value={age}
              required
              onChange={(e) => setAge(e.target.value)}
            />
          </Form.Group>
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
            <Form.Label>image</Form.Label>
            <Form.Control
              type="file"
             
              value={image}
              required
              onChange={(e) => setImage(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Button type="submit">Sign Up</Button>
          </Form.Group>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
      <div className="signup_image"></div>
    </div>
  );
};

export default Signup;
