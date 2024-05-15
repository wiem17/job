import axios from "axios";
import { getSession } from "../utils/SessionUtils";





const config = {
  headers: { Authorization: `Bearer ${getSession("token")}` },
};
const baseUrl = process.env.REACT_APP_API;



export const getCondidat = async () => {
  try {
    const response = await axios.get(`${baseUrl}api/condidates` );
    return response.data;
  } catch (error) {
    throw new Error("Erreur lors de la récupération des condidats");
  }
};

export const getCondidatById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}api/condidates/${id}` ,config);
    return response.data;
  } catch (error) {
    throw new Error("Erreur lors de la récupération de condidat");
  }
};

export const refuseCondidat = async (id) => {
  try {
    const response = await axios.put(`${baseUrl}api/condidates/${id}/refuse`  );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const getAcceptedCondidats = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}api/condidates/con/acceptedcondidats` ,config
    );
    return response.data;
  } catch (error) {
    throw error; // Renvoyer l'erreur d'origine pour une meilleure visibilité du problème
  }
};

export const acceptCondidat = async (id) => {
  try {
    const response = await axios.put(`${baseUrl}api/condidates/${id}/accept`  );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const getCondidatsByPoste = async (titre) => {
  try {
    const response = await axios.get(`${baseUrl}api/condidates/poste/${titre}` );
    return response.data;
  } catch (error) {
    throw new Error(
      "Erreur lors de la récupération des condidats par titre de poste"
    );
  }
};
export const countTotalCondidates = async () => {
  try {
    const response = await axios.get(`${baseUrl}api/condidates/count/condidat` ,config);
    return response.data.count;
  } catch (error) {
    console.error("Error counting total condidat:", error);
    throw error; // Remarque : Vous pouvez gérer les erreurs comme vous le souhaitez
  }
};
export const countTotalCondidatesaccepté = async () => {
  try {
    const response = await axios.get(`${baseUrl}api/condidates/count/accepted` ,config);
    return response.data.count;
  } catch (error) {
    console.error("Error counting total condidat accept:", error);
    throw error; // Remarque : Vous pouvez gérer les erreurs comme vous le souhaitez
  }
};
export const countTotalCondidatesrefusé = async () => {
  try {
    const response = await axios.get(`${baseUrl}api/condidates/count/refused` ,config);
    return response.data.count;
  } catch (error) {
    console.error("Error counting total condidat refuse:", error);
    throw error; // Remarque : Vous pouvez gérer les erreurs comme vous le souhaitez
  }
};
export const getAcceptedCondidatsByPosteTitle = async (titre) => {
  try {
    const response = await axios.get(
      `${baseUrl}api/condidates/accepted/${titre}` ,config
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching accepted condidats by poste:", error);
    throw error; // Vous pouvez gérer cette erreur de manière appropriée dans votre composant React
  }
};
export const getNonAcceptedCondidatsByPosteTitle = async (titre) => {
  try {
    const response = await axios.get(
      `${baseUrl}api/condidates/nonaccepted/${titre}` ,config
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getLatestcondidat = async () => {
  try {
    const response = await axios.get(`${baseUrl}api/condidates/dernier/condidat`);
    return response.data;
  } catch (error) {
    console.error('Error fetching condidats:', error);
    throw error;
  }
};
export const countTotalPourcentagescondidats = async () => {
  try {
    const response = await axios.get(`${baseUrl}api/condidates/percentage/condidats`, config);
    return response.data; // Retournez la réponse entière
  } catch (error) {
    console.error('Error counting total condidats:', error);
    throw error;
  }
};

export const countTotalPourcentagescondidatsaccept = async () => {
  try {
    const response = await axios.get(`${baseUrl}api/condidates/percentage/accepted`, config);
    return response.data; // Retournez la réponse entière
  } catch (error) {
    console.error('Error counting total condidats:', error);
    throw error;
  }
};
export const countTotalPourcentagescondidatsnonaccept = async () => {
  try {
    const response = await axios.get(`${baseUrl}api/condidates/percentage/nonaccepted`, config);
    return response.data; // Retournez la réponse entière
  } catch (error) {
    console.error('Error counting total condidats:', error);
    throw error;
  }
};

