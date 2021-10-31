import React, { useEffect } from 'react'
import { Col } from 'react-bootstrap'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from './TextField';
import './LoginForm.css'
import { useCookies } from 'react-cookie'
import { useHistory } from "react-router-dom";
import { ApiService } from '../../../api/api';

let LoginForm = (props) => {
   let history = useHistory();

   const [token, setToken] = useCookies(['mytoken'])

   const validate = Yup.object({
      login: Yup.string()
         .min(3, 'Логін повинен бути не менше 3 символів')
         .max(30, 'Логін повинен бути не більше 30 символів')
         .required(`Поле обов'язкове`),
      password: Yup.string()
         .min(6, 'Пароль повинен бути не менше 6 символів')
         .max(20, 'Пароль повинен бути не більше 20 символів')
         .required(`Поле обов'язкове`),
   })

   useEffect(() => {
      if (token['mytoken']) {
         history.push('/')
      }
   }, [token])

   return (
      <Formik
         initialValues={{
            login: '',
            password: '',
         }}
         validationSchema={validate}
         onSubmit={values => {
            ApiService.LoginUser(values.login, values.password)
               .then((response) => props.setAuthUserToken(response.token))
               .then((response) => setToken('mytoken', response.token))
            props.onHide()
               .catch(error => console.log(error))

         }}
      >
         {formik => (
            <Form onSubmit={formik.handleSubmit}>
               <TextField label="Введіть логін" name="login" type="text" />
               <TextField label="Введіть пароль" name="password" type="password" />
               <Col className="d-flex justify-content-center" >
                  <button type="submit" className="login-form-button-submit mt-1">Вхід</button>
               </Col>
            </Form>
         )
         }
      </Formik >
   )
}

export default LoginForm
