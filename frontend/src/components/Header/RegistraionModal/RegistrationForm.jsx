import React from 'react'
import { ApiService } from '../../../api/api';
import './RegistrationForm.css'
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import TextField from '../LoginModal/TextField';
import { Col } from 'react-bootstrap';
import { validate } from '../../Common/Validate'

const RegistrationForm = (props) => {
   let history = useHistory();

   const [, setToken] = useCookies(['mytoken'])

   return (
      <Formik
         initialValues={{
            login: '',
            password: '',
         }}
         validationSchema={validate}
         onSubmit={values => {
            ApiService.RegistrationUser(values.login, values.password)
               .then((response) => response.status === 201 ? ApiService.LoginUser(values.login, values.password) : null)
               .then((resp) => props.setAuthUserToken(resp.token))
               .then((resp) => setToken('mytoken', resp.token))
               .catch(error => console.log(error))
            props.onHide()
            history.push('/')
         }}
      >
         {formik => (
            <Form onSubmit={formik.handleSubmit}>
               <TextField label="Введіть логін" name="login" type="text" />
               <TextField label="Введіть пароль" name="password" type="password" />
               <Col className="d-flex justify-content-center" >
                  <button type="submit" className="registration-form-button-submit mt-1">Зареєструватися</button>
               </Col>
            </Form>
         )
         }
      </Formik >
   )
}
export default RegistrationForm
