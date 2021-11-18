import { Form, Formik } from 'formik'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import TextField from '../../../Common/TextField/TextField'
import { changePasswordValidate } from '../../../Common/Validate'
import { changePassword } from '../../../../redux/Reducers/authReducer'
import { useDispatch, useSelector } from 'react-redux'

const ChangePassword = () => {
   const dispatch = useDispatch()
   const codeChange = useSelector((state) => state.auth.changePasswordCode)

   return (
      <div>
         <Row>
            <Col className="p-0">
               <p className="personal-data-change-password-title m-0 mt-3 mb-3">Зміна пароля</p>
            </Col>
         </Row>
         {codeChange === 200 ?
            <Row className="mb-2">
               <Col className="profile-change-password-confirmed">
                  Ваш пароль змінено
               </Col>
            </Row>
            : codeChange === 0 ?
               <Row className="mb-2">
                  <Col className="profile-change-password-error">
                     Ви ввели невірні дані
                  </Col>
               </Row>
               : ''
         }
         <Formik
            initialValues={{
               oldPassword: '',
               newPassword: '',
               confirmPassword: '',
            }}
            validationSchema={changePasswordValidate}

            onSubmit={(values, { resetForm }) => {
               dispatch(changePassword(values.oldPassword, values.confirmPassword))
               resetForm()
            }}
         >
            {formik => (
               <Form onSubmit={formik.handleSubmit}>
                  <TextField label="Старий пароль" name="oldPassword" type="password" />
                  <TextField label="Новий пароль" name="newPassword" type="password" />
                  <TextField label="Повторіть пароль" name="confirmPassword" type="password" />
                  <Col className="d-flex justify-content-center" >
                     <button type="submit" className="personal-data-edit-button mt-3 mb-3">Змінити пароль</button>
                  </Col>
               </Form>
            )}
         </Formik >
      </div>
   )
}

export default ChangePassword
