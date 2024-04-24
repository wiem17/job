import React, { useState, useEffect } from "react";
import { Table , Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { getAcceptedCondidats , deletedCondidat } from "../Services/CondidatService";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const CondidatAccepter = () => {
  const navigate = useNavigate();
  const [condidats, setCondidats] = useState([]);
  const [acceptedCondidats, setAcceptedCondidats] = useState([]);
  const [error, setError] = useState(null);
  const baseUrl = process.env.REACT_APP_API;
  const fetchData = async () => {
    try {
      const response = await getAcceptedCondidats();
      setAcceptedCondidats(response);
    } catch (error) {
      console.error("Erreur lors de la récupération des condidats :", error);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deletedCondidat(id);
      // Mettre à jour la liste des condidats après suppression
      fetchData();
      alert("Condidat supprimé avec succès");
    } catch (error) {
      alert("Erreur lors de la suppression du condidat");
      console.error("Erreur lors de la suppression du condidat :", error);
    }
  };
  const handleadd = ()=>{
    navigate("/sendemail");
  }
  return (
    <div>
      {error && <div>Erreur : {error}</div>} {/* Afficher le message d'erreur */}
      <h1>Accepted Condidats</h1>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Lettre de Motivation</th>
            <th>Titre de Poste</th>
            <th>Cv</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(acceptedCondidats) &&
            acceptedCondidats.map((condidat) => (
              <tr key={condidat._id}>
                <td>{condidat._id}</td>
                <td>{condidat.name}</td>
                <td>{condidat.email}</td>
                <td>{condidat.lettre_de_motivation}</td>
                <td>{condidat.titrePoste}</td>
                <td>
                  {condidat.cv && (
                    <div className="text-muted">
                      <a href={`${baseUrl}${condidat.cv}`} target="_blank">
                        <FontAwesomeIcon icon={faLink} />
                        Voir le Cv
                      </a>
                    </div>
                  )}
                </td>
                <td>
                  <Button color="warning" onClick={() => handleadd(condidat._id)}> 
                    Envoyer Mail
                  </Button>{" "}
                  <Button color="danger" onClick={() => handleDelete(condidat._id)}>
                    Refuser
                  </Button>
                  </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CondidatAccepter;
