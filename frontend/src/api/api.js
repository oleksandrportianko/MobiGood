import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/',
  withCredentials: true,
});

export const ApiService = {
  LoginUser(username, password) {
    return instance.post('login/', { username, password }).then((response) => response.data);
  },
  RegistrationUser(username, password, first_name, last_name, father_name, email, phone) {
    return instance.post('register/', {
      username,
      password,
      first_name,
      last_name,
      father_name,
      email,
      phone,
    });
  },
  LogoutUser() {
    return instance.post('logout/');
  },
  GetUserInfo() {
    return instance.get(`user/`).then((response) => response.data);
  },
  GetPhonesData() {
    return instance.get('shop/smartphones/').then((response) => response.data);
  },
  GetPhonesById(id) {
    return instance.get(`shop/smartphones/${id}/`).then((response) => response.data);
  },
  EditPersonalData(username, first_name, last_name, father_name, email, phone) {
    return instance
      .put('update_user/', {
        username,
        first_name,
        last_name,
        father_name,
        email,
        phone,
      })
      .then((response) => response.data);
  },
  ChangePassword(old_password, new_password) {
    return instance
      .post('change_password/', { old_password, new_password })
      .then((response) => response.data);
  },
};
