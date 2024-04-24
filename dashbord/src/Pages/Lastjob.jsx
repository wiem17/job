import React, { useEffect, useState } from "react";
import { getLatestPostes } from "../Services/PosteService"; // Importez votre fonction getAllProducts
const Home = () => {
  const [postes, setPostes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Utilisez la fonction getAllProducts pour obtenir la liste des produits
        const postesData = await getLatestPostes(); // Ajoutez await ici
        console.log("Postes Data:", postesData);
        setPostes(postesData);
      } catch (error) {
        console.error("Error fetching postes:", error);
      }
    };
  
    fetchData();
  }, []);
  return (
   
   <div>
    {postes && postes.map((poste) => (
  <div className="card-style-2 hover-up" key={poste._id}>
    <div className="card-head">
    <div className="card-image" style={{ width: "100%", height: "50px", overflow: "hidden" }}>
  {poste.image && poste.image.length > 0 && (
    <img
      className="product-preview-img"
      src={poste.image[0].url}
      alt={poste.titre}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  )}
</div>

      <div className="card-title">
        <h6>{poste.titre}</h6>
        <span className="job-type">{poste.description}</span>
        
      </div>
    </div>
    <div className="card-tags">
     
    </div>
    <div className="card-price">
      <strong>{poste.categories}</strong>
     
    </div>
  </div>
))}
   </div>
  );
};

export default Home;


