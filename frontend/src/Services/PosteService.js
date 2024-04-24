
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API;

export const getAllPostes = async () => {
  try {
    const response = await axios.get(`${baseUrl}api/postes/getallpostes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching postes:', error);
    throw error;
  }
};






export const getPosteById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}api/postes/po/${id}`);
    return response.data; 
  } catch (error) {
    throw error; 
  }
};




export async function createPoste(objPoste) {
    const body = {
      titre: objPoste.titre,
      description: objPoste.description,
      competences: objPoste.competences,
      categories: objPoste.categories,
      image: objPoste.image,
    };
    try {
      const response = await axios.post(`${baseUrl}api/postes/addposte`, body);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  export const updatePoste = async (posteId, posteData) => {
    try {
      const response = await axios.put(`${baseUrl}api/postes/updateposte/${posteId}`, posteData);
      return response;
    } catch (error) {
      console.error('Error updating poste:', error);
      throw error;
    }
  };
  

export const deletePoste = async (posteId) => {
  try {
    const response = await axios.delete(`${baseUrl}api/postes/deletepo/${posteId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting poste:', error);
    throw error;
  }
};







