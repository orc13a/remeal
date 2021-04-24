import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:9955/' });

export const createUser = (newUser) => API.post('users/create', newUser);