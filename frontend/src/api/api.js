import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  withCredentials: true,
});

export const ApiService = {
  LoginUser(username, password) {
    return instance.post('login/', { username, password }).then((response) => response.data);
  },
  RegistrationUser(username, password, first_name, last_name, email) {
    return instance.post('register/', { username, password, first_name, last_name, email });
  },
  GetUserInfo() {
    return instance.get(`user/`).then((response) => response.data);
  },
};
