import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:9955/' });

export const createUser = (newUser) => api.post('users/create', newUser);
export const loginUser = (loginUser) => api.post('/users/login', loginUser);

export const addItem = (item) => api.post('/fridge/add', item);