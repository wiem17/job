import axios from "axios";

const baseUrl = process.env.REACT_APP_API;

export async function upload(userID,email,motivationLettre, file,  titrePoste) {
  const formData = new FormData();
  formData.append("userID", userID);
  formData.append("email",email);
  formData.append("lettre_de_motivation", motivationLettre);
  formData.append("file", file);
  formData.append('titrePoste', titrePoste);
  
  const httpHeaders = {
    "content-Type": "multipart/form-data",
  };

  const options = { headers: httpHeaders };

  try {
    const response = await axios.post(
      `${baseUrl}api/condidates/create`,
      formData,
      options
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

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
    const response = await axios.get(`${baseUrl}api/condidates/con/acceptedcondidats`);
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