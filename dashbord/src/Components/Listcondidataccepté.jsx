import React, { useEffect, useState } from "react";
import { getAcceptedCondidats } from '../Services/CondidatService';
const baseUrl = process.env.REACT_APP_API;

export default function Listcondidataccepté() {
  const [condidats, setCondidats] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const condidatData = await getAcceptedCondidats();
        console.log("Postes Data:", condidatData);
        setCondidats(condidatData);
      } catch (error) {
        console.error("Error fetching postes:", error);
      }
    };
   
  
    fetchData();
  }, []);
  
  return (
    <>
   <>
  {condidats.map((condidat) => (
    <div className="card-style-3 hover-up" key={condidat._id}>
      <div className="card-image online">
      {condidat.userID.image ? (
                                     <img
                                     src={baseUrl + condidat.userID.image}
                                        alt="User Image"
     
                                           />
                                                 ) : (
                                                 <img
                                        src="/assets/imgs/avatar/ava_1.png" // Spécifiez le chemin vers votre image par défaut
                                      alt="Image par défaut"
     
                                                />
                                      )}
      </div>
      <div className="card-title">
        <h6>{condidat.userID.name} {condidat.userID.lastname}</h6>
        <span className="job-position">{condidat.titrePoste}</span>
      </div>
      <div className="card-location">
        <span >{condidat.email}</span>
      </div>
    </div>
  ))}
</>

     </>
  )
}
