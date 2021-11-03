const AddCookies = (name, value) => {
  document.cookie = `${name}=${value};path=/;`;
};

export default AddCookies;
