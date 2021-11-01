import * as Yup from 'yup';

export const validate = Yup.object({
  login: Yup.string()
    .min(3, 'Логін повинен бути не менше 3 символів')
    .max(30, 'Логін повинен бути не більше 30 символів')
    .required(`Поле обов'язкове`),
  password: Yup.string()
    .min(6, 'Пароль повинен бути не менше 6 символів')
    .max(20, 'Пароль повинен бути не більше 20 символів')
    .required(`Поле обов'язкове`),
});
