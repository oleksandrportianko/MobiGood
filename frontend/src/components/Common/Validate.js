import * as Yup from 'yup';

const phoneRegex = /^\+?3?8?(0\d{9})$/;

export const loginValidate = Yup.object({
  email: Yup.string().email('Не вірна електронна пошта').max(255).required(`Поле обов'язкове`),
  password: Yup.string()
    .min(4, 'Пароль повинен бути не менше 5 символів')
    .max(20, 'Пароль повинен бути не більше 20 символів')
    .required(`Поле обов'язкове`),
});

export const registrationValidate = Yup.object({
  login: Yup.string()
    .min(3, 'Логін повинен бути не менше 3 символів')
    .max(30, 'Логін повинен бути не більше 30 символів')
    .required(`Поле обов'язкове`),
  password: Yup.string()
    .min(5, 'Пароль повинен бути не менше 5 символів')
    .max(20, 'Пароль повинен бути не більше 20 символів')
    .required(`Поле обов'язкове`),
  first_name: Yup.string()
    .min(2, `Ім'я повинно бути не менше 2 символів`)
    .max(20, `Ім'я повинно бути не менше 20 символів`)
    .required(`Поле обов'язкове`),
  last_name: Yup.string()
    .min(3, `Прізвище повинно бути не менше 2 символів`)
    .max(20, `Ім'я повинно бути не менше 2 символів`)
    .required(`Поле обов'язкове`),
  father_name: Yup.string()
    .min(5, `Прізвище повинно бути не менше 2 символів`)
    .max(30, `Ім'я повинно бути не менше 2 символів`)
    .required(`Поле обов'язкове`),
  email: Yup.string().email('Не вірна електронна пошта').max(255).required(`Поле обов'язкове`),
  phone: Yup.string().matches(phoneRegex, 'Введіть коректний номер').required(`Поле обов'язкове`),
});

export const editPersonalDataValidate = Yup.object({
  login: Yup.string()
    .min(3, 'Логін повинен бути не менше 3 символів')
    .max(30, 'Логін повинен бути не більше 30 символів')
    .required(`Поле обов'язкове`),
  first_name: Yup.string()
    .min(2, `Ім'я повинно бути не менше 2 символів`)
    .max(20, `Ім'я повинно бути не менше 20 символів`)
    .required(`Поле обов'язкове`),
  last_name: Yup.string()
    .min(3, `Прізвище повинно бути не менше 2 символів`)
    .max(20, `Ім'я повинно бути не менше 2 символів`)
    .required(`Поле обов'язкове`),
  father_name: Yup.string()
    .min(5, `Прізвище повинно бути не менше 2 символів`)
    .max(30, `Ім'я повинно бути не менше 2 символів`)
    .required(`Поле обов'язкове`),
  email: Yup.string().email('Не вірна електронна пошта').max(255).required(`Поле обов'язкове`),
  phone: Yup.string().matches(phoneRegex, 'Введіть коректний номер').required(`Поле обов'язкове`),
});

export const changePasswordValidate = Yup.object({
  oldPassword: Yup.string()
    .min(5, 'Пароль повинен бути не менше 5 символів')
    .max(20, 'Пароль повинен бути не більше 20 символів')
    .required(`Поле обов'язкове`),
  newPassword: Yup.string()
    .min(5, 'Пароль повинен бути не менше 5 символів')
    .max(20, 'Пароль повинен бути не більше 20 символів')
    .required(`Поле обов'язкове`),
  confirmPassword: Yup.string()
    .min(5, 'Пароль повинен бути не менше 5 символів')
    .max(20, 'Пароль повинен бути не більше 20 символів')
    .oneOf([Yup.ref('newPassword'), null], 'Паролі не збігаються')
    .required(`Поле обов'язкове`),
});
