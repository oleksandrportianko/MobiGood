import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/',
  withCredentials: true,
});

export const ApiService = {
  LoginUser(email, password) {
    return instance.post('login/', { email, password }).then((response) => response.data);
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
    return instance.get(`get_smartphone/${id}/`).then((response) => response.data);
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
  AddToLikedList(id) {
    return instance.post(`add_to_liked_list/${id}/`).then((response) => response.data)
  },
  GetLikedItems() {
    return instance.get('current_user_liked_list/').then((response) => response.data) 
  },
  RemoveLikedItems(id) {
    return instance.post(`remove_from_liked_list/${id}/`).then((response) => response.data)
  },
  AddPhoneToCart(id) {
    return instance.post(`add_to_cart/${id}/`).then((response) => response.data)
  },
  GetUserCart() {
    return instance.get('current_user_cart/').then((response) => response.data)
  },
  RemoveProductFromCart(id) {
    return instance.post(`remove_from_cart/${id}/`).then((response) => response.data) 
  },
  ChangeQtyOfProductsInCart(qty, id) {
    return instance.post(`change_qty/${qty}/${id}/`).then((response) => response.data)
  }
};
