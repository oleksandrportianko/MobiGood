import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
});

export const ApiService = {
  LoginUser(username, password) {
    return instance.post('auth/', { username, password }).then((response) => response.data);
  },
  RegistrationUser(username, password) {
    return instance.post('mainapp/users/', { username, password });
  },
};
