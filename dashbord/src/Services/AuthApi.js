import axios from "axios";

const baseUrl = process.env.REACT_APP_API;

/**
 * The above function is an asynchronous function that takes an email and password as parameters, sends
 * a POST request to the specified API endpoint for user login, and returns the response.
 * @param email - The email parameter is the email address of the user trying to login.
 * @param password - The `password` parameter is the user's password that they provide during the login
 * process. It is used to authenticate the user and verify their identity.
 * @returns The response from the API call is being returned.
 */
export async function login(email, password) {
  const body = { email: email, password: password };
  try {
    const response = await axios.post(`${baseUrl}api/login`, body);
    return response;
  } catch (error) {
    console.log(error);
  }
}
export async function forgetpassword(email) {
  const body = { email: email };
  try {
    const response = await axios.post(`${baseUrl}api/forgot-password`, body);
    return response;
  } catch (error) {
    console.log(error);
    throw error; // Lance l'erreur en cas d'échec
  }
}

/**
 * The function `register` sends a POST request to the server to register a user with the provided
 * information.
 * @param objRegister - An object containing the registration details of a user. It should have the
 * following properties:
 * @returns the response from the API call made using axios.
 */
export async function register(objRegister) {
  const body = {
    email: objRegister.email,
    password: objRegister.password,
    name: objRegister.name,
    lastname: objRegister.lastname,
    age: objRegister.age,
    image: objRegister.image,
    phoneNumber: objRegister.phoneNumber,
    dateOfBirth: objRegister.dateOfBirth,
    socialProfiles: {
      facebook: objRegister.facebook,
      twitter: objRegister.twitter,
      linkedIn: objRegister.linkedIn,
      
    },
    gender: objRegister.gender,
    
  
  };
  try {
    const response = await axios.post(`${baseUrl}api/register`, body);
    return response;
  } catch (error) {
    console.log(error);
  }
}
export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${baseUrl}user/getall`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
export const getAdminUsers = async () => {
  try {
    const response = await axios.get(`${baseUrl}api/users/role/admin`);
    return response.data;
  } catch (error) {
    console.error('Error while fetching admin users:', error);
    throw error;
  }
};
export const updateUserById = async (userId, newData) => {
  try {
    const response = await axios.put(`${baseUrl}api/users/${userId}`, newData);
    return response.data; // Si nécessaire, renvoyez les données mises à jour de l'utilisateur
  } catch (error) {
    throw error; // Si une erreur se produit, propagez-la pour la gérer dans le composant
  }
};
export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${baseUrl}api/users/${userId}`); // Assurez-vous d'ajuster l'URL en fonction de votre API
    return response.data;
  } catch (error) {
    console.error('Error while fetching user by ID:', error);
    throw error;
  }
};