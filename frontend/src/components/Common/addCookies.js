const AddCookies = (name, value) => {
  document.cookie = `${name}=${value}; path=/; Max-age=100000`;
};

export default AddCookies;
