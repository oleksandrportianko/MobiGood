import React from 'react'
import './RegistrationForm.css'
import { Formik, Form } from 'formik';
import TextField from '../../Common/TextField/TextField';
import { Col } from 'react-bootstrap';
import { registrationValidate } from '../../Common/Validate'

const RegistrationForm = (props) => {
   return (
      <Formik
         initialValues={{
            login: '',
            password: '',
            first_name: '',
            last_name: '',
            father_name: '',
            email: '',
            phone: '+380'
         }}
         validationSchema={registrationValidate}
         onSubmit={values => {
            props.registrationUser(values.login, values.password, values.first_name, values.last_name, values.father_name, values.email, values.phone)
            props.onHide()
         }}
      >
         {formik => (
            <Form onSubmit={formik.handleSubmit}>
               <TextField label="Введіть логін" name="login" type="text" />
               <TextField label="Введіть пароль" name="password" type="password" />
               <TextField label="Введіть ім'я" name="first_name" type="text" />
               <TextField label="Введіть прізвище" name="last_name" type="text" />
               <TextField label="По батькові" name="father_name" type="text" />
               <TextField label="Введіть електронну пошту" name="email" type="email" />
               <TextField label="Номер телефону" name="phone" type="phone" />
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
