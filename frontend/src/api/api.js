import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/',
  withCredentials: true,
});

export const ApiService = {
  LoginUser(username, password) {
    return instance.post('login/', { username, password }).then((response) => response.data);
  },
  RegistrationUser(username, password, first_name, last_name, email) {
    return instance.post('register/', { username, password, first_name, last_name, email });
  },
  LogoutUser() {
    return instance.post('logout/');
  },
  GetUserInfo() {
    return instance.get(`user/`).then((response) => response.data);
  },
  GetPhonesData() {
    return instance.get('mainapp/smphones/').then((response) => response.data);
  },
};
