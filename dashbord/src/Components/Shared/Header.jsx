import React, { useEffect, useState } from "react";
import { getLatestcondidat  } from "../../Services/CondidatService"; 
import { Link } from 'react-router-dom';
import Image from './Image';
const baseUrl = process.env.REACT_APP_API;
function Header() {
  const [condidats, setCondidat] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Utilisez la fonction getAllProducts pour obtenir la liste des produits
        const condidatData = await getLatestcondidat(); // Ajoutez await ici
       
        setCondidat(condidatData);
      } catch (error) {
        console.error("Error fetching condidat:", error);
      }
    };
  
    fetchData();
  }, []);
  return (
    <header className="header sticky-bar">
    <div className="container">
      <div className="main-header">
        <div className="header-left">
          <div className="header-logo">
            <a className="d-flex" href="index.html">
              <img alt="jobBox" src="assets/imgs/page/dashboard/logo.svg" />
            </a>
          </div>
         
        </div>
        
       
        <div className="header-right">
          <div className="block-signin">
           
              
              <Link to="/post"   className="btn btn-default icon-edit hover-up"> Poster une offre </Link>
            <div className="dropdown d-inline-block">
              { 
                condidats.lenght >=1 ?  <a
                className="btn btn-notify"
                id="dropdownNotify"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-display="static"
              />:
              <i class="fa-regular fa-bell"></i>
              }
              <ul
                className="dropdown-menu dropdown-menu-light dropdown-menu-end"
                aria-labelledby="dropdownNotify"
              >
                 
                
                 
                  {condidats.map((condidat) => (
                    <div className="dropdown-item" key={condidat._id}>
                            {condidat.email}:
                            {condidat.titrePoste}
                    </div>
                   
                  ))}
                 
              </ul>
            </div>
          <Image></Image>
          </div>
        </div>
      </div>
    </div>
  </header>

  )
}

export default Header
