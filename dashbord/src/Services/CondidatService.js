import axios from "axios";

const baseUrl = process.env.REACT_APP_API;

export const getCondidat = async () => {
  try {
    const response = await axios.get(`${baseUrl}api/condidates`);
    return response.data;
  } catch (error) {
    throw new Error("Erreur lors de la récupération des condidats");
  }
};

export const getCondidatById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}api/condidates/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Erreur lors de la récupération de condidat");
  }
};

export const deletedCondidat = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}api/condidates/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Erreur lors de la suppression de condidat");
  }
};
export const getAcceptedCondidats = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}api/condidates/con/acceptedcondidats`
    );
    return response.data;
  } catch (error) {
    throw error; // Renvoyer l'erreur d'origine pour une meilleure visibilité du problème
  }
};

export const acceptCondidat = async (id) => {
  try {
    const response = await axios.put(`${baseUrl}api/condidates/${id}/accept`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const getCondidatsByPoste = async (titre) => {
  try {
    const response = await axios.get(`${baseUrl}api/condidates/poste/${titre}`);
    return response.data;
  } catch (error) {
    throw new Error(
      "Erreur lors de la récupération des condidats par titre de poste"
    );
  }
};
export const countTotalCondidates = async () => {
  try {
    const response = await axios.get(`${baseUrl}api/condidates/count/condidat`);
    return response.data.count;
  } catch (error) {
    console.error("Error counting total condidat:", error);
    throw error; // Remarque : Vous pouvez gérer les erreurs comme vous le souhaitez
  }
};
export const getAcceptedCondidatsByPosteTitle = async (titre) => {
  try {
    const response = await axios.get(
      `${baseUrl}api/condidates/accepted/${titre}`
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
      `${baseUrl}api/condidates/nonaccepted/${titre}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
