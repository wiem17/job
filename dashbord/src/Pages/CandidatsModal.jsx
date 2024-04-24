// CandidatsModal.js

import React from "react";

function CandidatsModal({ condidats, onClose }) {
    console.log("condidats:", condidats);
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <h2>Candidats pour le poste :</h2>
          <ul>
            {condidats.map((condidat) => (
              <li key={condidat._id}>
                <p>Nom: {condidat.name}</p>
                <p>Email: {condidat.email}</p>
                <p>Lettre de motivation: {condidat.lettre_de_motivation}</p>
                <p>Fichier: {condidat.file}</p>
                <p>Titre du poste: {condidat.titrePoste}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
export default CandidatsModal;
