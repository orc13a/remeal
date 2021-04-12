import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:8899' });

export const fetchUsers = () => api.get('/admin/users');