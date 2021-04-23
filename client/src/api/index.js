import axios from 'axios';

const url = 'localhost:9955/users';

export const createUser = (newUser) => axios.post(`${url}/create`, newUser);