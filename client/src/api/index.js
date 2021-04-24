import axios from 'axios';

const url = 'http://localhost:9955/users';

export const createUser = (newUser) => axios.post(`${url}/create`, newUser);