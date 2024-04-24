import React, { useEffect, useState,useRef } from "react";
import { getUserById} from "../../Services/AuthApi";
import { Link } from 'react-router-dom';
export default function Image() {
    const [user, setUser] = useState({
        _id: "",
        name: "",
        lastname: "",
        age: "",
        email: "",
        role: "",
       password:"",
        image: "",
        phoneNumber: "", // Champ ajouté
        dateOfBirth: "", // Champ ajouté
        socialProfiles: {
          // Champs ajoutés
          facebook: "",
          twitter: "",
          linkedIn: "",
        },
        gender: "", // Champ ajouté
      });
      const [userId, setUserId] = useState("");
      
      useEffect(() => {
        const storeduserId = localStorage.getItem("userID");
        console.log(storeduserId);
        console.log("headerhere");
        setUserId(storeduserId);
      }, []);
    
      console.log("the user loged in here is", userId);
      useEffect(() => {
        const fetchUser = async () => {
          try {
            const user = await getUserById(userId);
            console.log(user);
            setUser(user);
          } catch (error) {
            // Gérer les erreurs
            console.log(error);
          }
        };
        if (userId) {
          fetchUser();
        }
      }, [userId]);
      const handleImageChange = (e) => {
        const file = e.target.files[0]; // Obtenez le premier fichier sélectionné
        if (file) {
          // Créez une instance de FileReader pour lire le contenu du fichier
          const reader = new FileReader();
          reader.readAsDataURL(file); // Lisez le fichier en tant que données d'URL
          // Gérez l'événement onload pour obtenir l'URL de l'image une fois qu'elle est chargée
          reader.onload = () => {
            const imageUrl = reader.result; // Obtenez l'URL de l'image
            setUser({ ...user, image: imageUrl }); // Mettez à jour l'état userData avec l'URL de l'image
          };
        }
      };
      
     
    
  return (
    <>
        <div className="member-login">
        {user && user.image && (
    <img
      src={user.image} 
      onChange={handleImageChange}// Utilisez la chaîne base64 directement
      alt="User Image"
     
    />
  )}
              <div className="info-member">
                {" "}
                <strong className="color-brand-1"> {user && user.name}   {user && user.lastname}</strong>
                <div className="dropdown">
                  <a
                    className="font-xs color-text-paragraph-2 icon-down"
                    id="dropdownProfile"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-display="static"
                  >
                    Super Admin
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-light dropdown-menu-end"
                    aria-labelledby="dropdownProfile"
                  >
                    
                    <li>
                      <Link to="/profile" className="dropdown-item" >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="login.html">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
    </>
  )
}
