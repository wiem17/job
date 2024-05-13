import axios from "axios";
import { getSession } from "../utils/SessionUtils";

const baseUrl = process.env.REACT_APP_API;

/* Setting the header for the axios request. */
const config = {
  headers: { Authorization: `Bearer ${getSession("token")}` },
};

export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${baseUrl}api/users/${userId}`, config);
    return response.data;
  } catch (error) {
    console.error("Error while fetching user by ID:", error);
    throw error;
  }
};
export async function fetchCondidatsByUserId(id) {
  try {
    const response = await axios.get(`${baseUrl}api/users/my-condidats/${id}`, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching condidats:", error);
    throw error;
  }
}
export const updateUserById = async (userId, newData) => {
  try {
    const response = await axios.put(`${baseUrl}api/users/${userId}`, newData, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export async function updateUserImage(file) {
  const formData = new FormData();
  formData.append("file", file);

  const httpHeaders = {
    Authorization: `Bearer ${getSession("token")}`,
    "content-Type": "multipart/form-data",
  };

  const options = { headers: httpHeaders };

  try {
    const response = await axios.patch(`${baseUrl}api/users/update-image`, formData, options);
    return response;
  } catch (error) {
    console.log(error);
  }
}
