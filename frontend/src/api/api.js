import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
});

export const ApiService = {
  loginUser(login, password) {
    return instance.post`users/`.then((response) => console.log(response)).catch((error) => error);
  },
};
