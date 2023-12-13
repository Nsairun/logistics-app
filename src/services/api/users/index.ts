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

const getCurrentUser = async (token: string) => {
    return axios.get(`${API_URL}/api/users/current-user`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

const getAllUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/users/all`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch all users');
    }
};

const getOne = async (userId: string) => {
    try {
        const response = await axios.get(`${API_URL}/api/users/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch all users');
    }
};

const updateRolesInDatabase = async (selectedIds: string[], newRole: string) => {
    return axios.put(`${API_URL}/api/users/update-role`, {
        newRole,
        arrIds: [...selectedIds],
    });
};


export { login, signUp, getCurrentUser, getAllUsers, updateRolesInDatabase, getOne };
