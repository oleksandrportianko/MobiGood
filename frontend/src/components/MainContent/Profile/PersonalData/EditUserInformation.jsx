import { Form, Formik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editPersonalDataValidate } from '../../../Common/Validate'
import TextField from '../../../Common/TextField/TextField';
import { Col } from 'react-bootstrap';
import { ApiService } from '../../../../api/api';

const EditUserInformation = () => {
   const email = useSelector((state) => state.auth.email)
   const firstName = useSelector((state) => state.auth.firstName)
   const lastName = useSelector((state) => state.auth.lastName)
   const login = useSelector((state) => state.auth.login)
   const phone = useSelector((state) => state.auth.phone)
   const fatherName = useSelector((state) => state.auth.fatherName)

   return (
      <div>
         <Formik
            initialValues={{
               login: login,
               first_name: firstName,
               last_name: lastName,
               father_name: fatherName,
               email: email,
               phone: phone
            }}
            validationSchema={editPersonalDataValidate}
            onSubmit={values => {
               ApiService.EditPersonalData(values.login, values.first_name, values.last_name, values.father_name, values.email, values.phone)
            }}
         >
            {formik => (
               <Form onSubmit={formik.handleSubmit}>
                  <TextField label="Введіть логін" name="login" type="text" />
                  <TextField label="Введіть ім'я" name="first_name" type="text" />
                  <TextField label="Введіть прізвище" name="last_name" type="text" />
                  <TextField label="По батькові" name="father_name" type="text" />
                  <TextField label="Введіть електронну пошту" name="email" type="email" />
                  <TextField label="Номер телефону" name="phone" type="phone" />
                  <Col className="d-flex justify-content-center" >
                     <button type="submit" className="profile-save-personal-changes-button mt-1">Зберегти зміни</button>
                  </Col>
               </Form>
            )}
         </Formik >
      </div>
   )
}

export default EditUserInformation
