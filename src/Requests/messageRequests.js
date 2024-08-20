import axios  from "axios";
const BASE_URL = process.env.REACT_APP_SERVER_URL

export const getAllMessages = async () => {
    const response =  await axios.get(BASE_URL + '/message');
    return response.data;
}