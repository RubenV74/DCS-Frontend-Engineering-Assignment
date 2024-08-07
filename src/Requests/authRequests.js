import axios  from "axios";
const BASE_URL = process.env.REACT_APP_SERVER_URL

export const createUser = async (newUser)=> {
    return await axios.post( BASE_URL + '/user/register', newUser)
}

export const userLogin = async (user) =>{
    return await axios.post( BASE_URL + '/user/login', user)
}
export const userLogout = async (user) =>{
    return await axios.post( BASE_URL + '/user/logout', user)
}