import React from 'react'
import './RegistrationForm.css'
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router-dom';
import TextField from '../LoginModal/TextField';
import { Col } from 'react-bootstrap';
import { validate } from '../../Common/Validate'

const RegistrationForm = (props) => {
   let history = useHistory();

   return (
      <Formik
         initialValues={{
            login: '',
            password: '',
         }}
         validationSchema={validate}
         onSubmit={values => {
            props.registrationUser(values.login, values.password)
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