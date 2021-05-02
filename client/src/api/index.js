import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:9955/' });

// /user/
export const signupUser = (newUser) => api.post('users/signup', newUser);
export const loginUser = (user) => api.post('users/login', user);

// /fridge/
// allData = item, token og userId
export const addItem = (allData) => api.post('fridge/add', allData);