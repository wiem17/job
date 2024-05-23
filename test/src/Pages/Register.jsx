import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { register } from "../Services/AuthApi";
import {  updateUserImage } from "../Services/userApi";
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
        updateUserImage(file).then((res) => {
          console.log(res);
          setImage( res.data.image );
        });
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
            <p className="font-sm text-brand-2">S'inscrire</p>
            <h2 className="mt-10 mb-5 text-brand-1">Commencez gratuitement aujourd'hui</h2>
            <p className="font-sm text-muted mb-30">
              Accès à toutes les fonctionnalités. Aucune carte de crédit requise.
            </p>
          </div>
          <form onSubmit={handleSignup}>
            <Form.Group>
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez votre nom"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez votre prénom"
                value={lastname}
                required
                onChange={(e) => setLastname(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Âge</Form.Label>
              <Form.Control
                type="number"
                placeholder="Entrez votre âge"
                value={age}
                required
                onChange={(e) => setAge(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date de naissance</Form.Label>
              <Form.Control
                type="date"
                placeholder="Entrez votre date de naissance"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Sexe</Form.Label>
              <div>
                <Form.Check
                  inline
                  label="Homme"
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === 'Male'}
                  onChange={(e) => setGender(e.target.value)}
                />
                <Form.Check
                  inline
                  label="Femme"
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === 'Female'}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
            </Form.Group>
            <Form.Group>
              <Form.Label>Numéro de téléphone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Entrez votre numéro de téléphone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Profils sociaux</Form.Label>
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
                placeholder="Entrez votre email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="Entrez votre mot de passe"
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
            >
              S'inscrire
            </Button>
            <div className="text-muted text-center">
              Vous avez déjà un compte ? <Link to="/login">Connectez-vous</Link>
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

 
</>

  )}
  export default Register