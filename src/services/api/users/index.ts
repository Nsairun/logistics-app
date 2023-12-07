import axios from "axios";
import { API_URL } from "../../contants";

const login = (email: string, password: string) => {
    return axios.post(`${API_URL}/api/users/signin`, {
        email,
        password,
    });
}

const signUp = async (data: {
    fullname: string;
    email: string;
    quarter: string;
    password: string;
    confirmPassword: string;
    IDcard: string;
}) => await axios.post(`${API_URL}/api/users/signup`, data)

const getCurrentUser = async(token:string) => {
    return axios.get(`${API_URL}/api/users/current-user`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}


export { login, signUp, getCurrentUser };
