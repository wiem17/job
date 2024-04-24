import React, { useState, useEffect } from "react";
import { Table, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { getCondidat, deletedCondidat, acceptCondidat } from "../Services/CondidatService";
import { useNavigate } from "react-router-dom";

const CondidatHome = () => {
  const [condidats, setCondidats] = useState([]);
  const baseUrl = process.env.REACT_APP_API;

  const fetchData = async () => {
    try {
      const response = await getCondidat();
      setCondidats(response.condidats);
    } catch (error) {
      console.error("Erreur lors de la récupération des condidats :", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAccept = async (id) => {
    try {
      await acceptCondidat(id);
      fetchData(); // Récupérer à nouveau les condidats après avoir accepté un condidat
    } catch (error) {
      console.error("Error accepting condidat:", error);
    }
  };
  

  const handleDelete = async (id) => {
    try {
      await deletedCondidat(id);
      const updatedCondidats = condidats.filter((condidat) => condidat._id !== id);
      setCondidats(updatedCondidats);
      alert("Are you sure to delete this condidat");
    } catch (error) {
      alert("Failed to delete this condidat");
      console.error("Error deleting condidat:", error);
    }
  };

  return (
    <div>
      <h1>Condidat List</h1>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Lettre de Motivation</th>
            <th>Cv</th>
            <th>Titre de Poste</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(condidats) &&
            condidats.map((condidat) => (
              <tr key={condidat._id}>
                <td>{condidat._id}</td>
                <td>{condidat.name}</td>
                <td>{condidat.email}</td>
                <td>{condidat.lettre_de_motivation}</td>
                <td>{condidat.titrePoste}</td>
                <td>
                  {condidat.file && (
                    <div className="text-muted">
                      <a href={`${baseUrl}${condidat.file}`} target="_blank">
                        <FontAwesomeIcon icon={faLink} />
                        Voir le Cv
                      </a>
                    </div>
                  )}
                </td>
                <td>
                  <Button color="primary" onClick={() => handleAccept(condidat._id)}>
                    Accepter
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

export default CondidatHome;
