import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:9955/' });

export const createUser = (newUser) => api.post('users/create', newUser);