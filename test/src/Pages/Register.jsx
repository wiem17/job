import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { register } from "../Services/AuthApi";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Header from '../Components/Shared/Header'

function Register() {
    const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState('');
const [dateOfBirth, setDateOfBirth] = useState('');
const [socialProfiles, setSocialProfiles] = useState({
  facebook: '',
  twitter: '',
  linkedIn: '',
});
const [gender, setGender] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    const objRegister = {
      email: email,
      password: password,
      name: name,
      lastname: lastname,
      age: age,
      image: image,
      phoneNumber: phoneNumber,
      dateOfBirth: dateOfBirth,
      socialProfiles: {
        facebook: socialProfiles.facebook,
        twitter: socialProfiles.twitter,
        linkedIn: socialProfiles.linkedIn,
      },
      gender: gender,
    };
    
    try {
      const res = await register(objRegister);
      console.log(res);
      toast.success('Données envoyées avec succès !');
    } catch (error) {
        console.error("Error:", error);
      toast.error(' Veuillez réessayer !');
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Obtenez le premier fichier sélectionné
    if (file) {
      // Créez une instance de FileReader pour lire le contenu du fichier
      const reader = new FileReader();
      reader.readAsDataURL(file); // Lisez le fichier en tant que données d'URL
      // Gérez l'événement onload pour obtenir l'URL de l'image une fois qu'elle est chargée
      reader.onload = () => {
        const imageUrl = reader.result; // Obtenez l'URL de l'image
        setImage(imageUrl); // Mettez à jour l'état de l'image avec l'URL
      };
    }
  };
  return (
    <>
     <ToastContainer />
   
     <Header></Header>
  <main className="main">
    <section className="pt-100 login-register">
      <div className="container">
        <div className="row login-register-cover">
          <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
            <div className="text-center">
              <p className="font-sm text-brand-2">Register </p>
              <h2 className="mt-10 mb-5 text-brand-1">Start for free Today</h2>
              <p className="font-sm text-muted mb-30">
                Access to all features. No credit card required.
              </p>
              
            </div>
            <form onSubmit={handleSignup}>

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
  <Form.Label>Date of Birth</Form.Label>
  <Form.Control
    type="date"
    placeholder="Enter date of birth"
    value={dateOfBirth}
    onChange={(e) => setDateOfBirth(e.target.value)}
  />
</Form.Group>
<Form.Group>
        <Form.Label>Gender</Form.Label>
        <div>
          <Form.Check
            inline
            label="Male"
            type="radio"
            name="gender"
            value="Male"
            checked={gender === 'Male'}
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Check
            inline
            label="Female"
            type="radio"
            name="gender"
            value="Female"
            checked={gender === 'Female'}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
      </Form.Group>
      <Form.Group>
  <Form.Label>Phone Number</Form.Label>
  <Form.Control
    type="tel"
    placeholder="Enter phone number"
    value={phoneNumber}
    onChange={(e) => setPhoneNumber(e.target.value)}
  />
</Form.Group>
<Form.Group>
  <Form.Label>Social Profiles</Form.Label>
  <div>
    <Form.Control
      type="text"
      placeholder="Facebook"
      value={socialProfiles.facebook}
      onChange={(e) =>
        setSocialProfiles({ ...socialProfiles, facebook: e.target.value })
      }
    />
    <Form.Control
      type="text"
      placeholder="Twitter"
      value={socialProfiles.twitter}
      onChange={(e) =>
        setSocialProfiles({ ...socialProfiles, twitter: e.target.value })
      }
    />
    <Form.Control
      type="text"
      placeholder="LinkedIn"
      value={socialProfiles.linkedIn}
      onChange={(e) =>
        setSocialProfiles({ ...socialProfiles, linkedIn: e.target.value })
      }
    />
  </div>
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
  <Form.Group style={{ marginBottom: '20px' }}>
  <Form.Label>Image</Form.Label>
  <Form.Control
    type="file"
    onChange={(e) => handleImageChange(e)}
  />
</Form.Group>
 
  
    <Button 
       className="btn btn-brand-1 hover-up w-100"
    type="submit"
    
    >Sign Up</Button>
    
 
    <div className="text-muted text-center">
                Already have an account?  <Link to="/login"> Sign in </Link>
              </div>
</form>

          </div>
          <div className="img-1 d-none d-lg-block">
            <img
              className="shape-1"
              src="assets/imgs/page/login-register/img-1.svg"
              alt="JobBox"
            />
          </div>
          <div className="img-2">
            <img src="assets/imgs/page/login-register/img-2.svg" alt="JobBox" />
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
            JobBox is the heart of the design community and the best resource to
            discover and connect with designers and jobs worldwide.
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
            Download our Apps and get extra 15% Discount on your first Order…!
          </p>
          <div className="mt-15">
            <a className="mr-5" href="#">
              <img
                src="assets/imgs/template/icons/app-store.png"
                alt="joxBox"
              />
            </a>
            <a href="#">
              <img src="assets/imgs/template/icons/android.png" alt="joxBox" />
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
              <a className="font-xs color-text-paragraph mr-30 ml-30" href="#">
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

  )}
  export default Register