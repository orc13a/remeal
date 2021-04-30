import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:9955/' });

export const signupUser = (newUser) => api.post('users/signup', newUser);
export const loginUser = (user) => api.post('users/login', user);