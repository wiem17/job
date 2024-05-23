import axios from 'axios';


const baseUrl = process.env.REACT_APP_API;

export const updatenotification = async () => {
    try {
      const response = await axios.patch(`${baseUrl}api/notifications/put/not`  );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };