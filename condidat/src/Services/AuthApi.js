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
  };
  try {
    const response = await axios.post(`${baseUrl}api/register`, body);
    return response;
  } catch (error) {
    console.log(error);
  }
}
