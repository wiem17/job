import axios from "axios";

import { getSession } from "../utils/SessionUtils";



const baseUrl = process.env.REACT_APP_API;

const config = {
  headers: { Authorization: `Bearer ${getSession("token")}` },
};


export async function upload(userID, email, motivationLettre, file, titrePoste) {
  const formData = new FormData();
  formData.append("userID", userID);
  formData.append("email", email);
  formData.append("lettre_de_motivation", motivationLettre);
  formData.append("file", file);
  formData.append('titrePoste', titrePoste);

  try {
    const response = await axios.post(
      `${baseUrl}api/condidates/create`,
      formData,
      { ...config, headers: { ...config.headers, "content-Type": "multipart/form-data" } } // Fusionne les en-têtes et spécifie le type de contenu comme "multipart/form-data"
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

export const getCondidat = async () => {
    try {
      const response = await axios.get(`${baseUrl}api/condidates` , config);
      return response.data;
    } catch (error) {
      throw new Error("Erreur lors de la récupération des condidats");
    }
  };
  

export const getCondidatById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}api/condidates/${id}` , config);
    return response.data;
  } catch (error) {
    throw new Error("Erreur lors de la récupération de condidat");
  }
};


export const deletedCondidat = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}api/condidates/${id}` , config);
    return response.data;
  } catch (error) {
    throw new Error("Erreur lors de la suppression de condidat");
  }
};
export const getAcceptedCondidats = async () => {
  try {
    const response = await axios.get(`${baseUrl}api/condidates/con/acceptedcondidats`);
    return response.data;
  } catch (error) {
    throw error; // Renvoyer l'erreur d'origine pour une meilleure visibilité du problème
  }
};

export const acceptCondidat = async (id) => {
  try {
    const response = await axios.put(`${baseUrl}api/condidates/${id}/accept` , config);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};