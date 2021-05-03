import axios from 'axios';
import { getLoggedInUser, IsLoggedIn } from '../components/Auth/Auth';

const api = axios.create({ baseURL: 'http://localhost:9955/' });

api.interceptors.request.use((req) => {
    if (IsLoggedIn() === true) {
        req.headers.Auth = getLoggedInUser().token;
    }

    return req;
});

// /user/
export const signupUser = (newUser) => api.post('users/signup', newUser);
export const loginUser = (user) => api.post('users/login', user);

// /fridge/
// allData = item, token og userId
export const addItem = (allData) => api.post('fridge/add', allData);
export const getUsersItems = (user) => api.get(`fridge/items/${user.user.userId}`);
export const deleteItem = (allData) => api.post(`fridge/delete`, allData);