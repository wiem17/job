import React, { useEffect, useState } from "react";
import {getAllPostes } from "../Services/PosteService";
import { deletePoste } from "../Services/PosteService";
import {
    Table,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from "reactstrap";
import { Link } from "react-router-dom";
import './DashboardPoste.css';
import { FloatButton } from './FloatButton';
import { useNavigate } from "react-router-dom";




function DashboardPoste(){
    const navigate = useNavigate();
    const [postes, setPostes] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          // Utilisez la fonction getAllProducts pour obtenir la liste des produits
          const postesData = await getAllPostes();
          console.log("Postes Data:", postesData);
          setPostes(postesData);
        } catch (error) {
          console.error("Error fetching postes:", error);
        }
      };
  
      fetchData();
    }, []);
    
    const handleDeletePoste = async (id) => {
        try {
            // Appel de la fonction deleteProduct de votre service pour supprimer le produit
            await deletePoste(id);
            // Mise à jour de l'état local des produits après la suppression
            const updatedPostes = postes.filter(poste => poste._id !== id);
            setPostes(updatedPostes);
            alert("Are you sure to delete this poste");
        } catch (error) {
            alert("Failed to delete this poste");
            console.error("Error deleting poste:", error);
        }
    };
    const handleAddPoste = () => {
      navigate("/ajouterposte");
    };
    return(
      <div>
   <Table striped bordered hover responsive>
    <thead>
        <tr>
            <th>Image</th>
            <th>Poste Id</th>
            <th>Poste Titre</th>
            <th>Poste Description</th>
            <th>Poste Compétence</th>
            <th>Poste catégories</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {postes.map((poste) =><tr  key={poste._id}>
        <td>
  {poste.image && poste.image.length > 0 && poste.image[0].url &&
    <img src={poste.image[0].url} className="dashboard-poste-preview" />
  }
</td>

            <td>{poste._id}</td>
            <td>{poste.titre}</td>
            <td>{poste.description}</td>
            <td>{poste.competences}</td>
            <td>{poste.categories}</td>
            <td>
                <Button color="primary" onClick={()=>handleDeletePoste(poste._id)}>Delete</Button>
                <Link to={`/poste/po/${poste._id}/edit`} className="btn btn-warning">Edit</Link>

            </td>

        </tr>
        
        )}
    </tbody>

   </Table>
    <FloatButton onClick={handleAddPoste}/>
    </div>
    );
}
export default DashboardPoste;