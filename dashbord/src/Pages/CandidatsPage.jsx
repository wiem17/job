// CandidatsPage.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCondidatsByPoste } from "../Services/CondidatService";

function CandidatsPage() {
  const { titre } = useParams();
  const [condidats, setCondidats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const condidatsData = await getCondidatsByPoste(titre);
        setCondidats(condidatsData.condidats);
        console.log();
      } catch (error) {
        console.error("Error fetching condidats by poste:", error);
      }
    };
    fetchData();
  }, [titre]);

  return (
    <div>
      <h2>Candidats pour le poste "{titre}" :</h2>
      <ul>
        {condidats.map((condidat) => (
          <li key={condidat._id}>
            <p>name: {condidat.userID.name}</p>
            <p>Email: {condidat.email}</p>
            <p>Lettre de motivation: {condidat.lettre_de_motivation}</p>
            <p>Fichier: {condidat.file}</p>
            <p>Titre du poste: {condidat.titrePoste}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CandidatsPage;
