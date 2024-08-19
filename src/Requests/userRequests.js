import axios  from "axios";
const BASE_URL = process.env.REACT_APP_SERVER_URL


export const getAllUsers = async () => {
    const response =  await axios.get(BASE_URL + '/user');
    return response.data;
}