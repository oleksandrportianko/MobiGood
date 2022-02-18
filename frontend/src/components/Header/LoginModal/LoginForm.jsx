import { Col } from 'react-bootstrap'
import { Formik, Form } from 'formik'
import { loginValidate } from '../../Common/Validate'
import TextField from '../../Common/TextField/TextField';
import './LoginForm.css'

let LoginForm = (props) => {
   return (
      <Formik
         initialValues={{
            email: '',
            password: '',
         }}
         validationSchema={loginValidate}
         onSubmit={values => {
            props.loginUser(values.email, values.password)
            props.onHide()
         }}
      >
         {formik => (
            <Form onSubmit={formik.handleSubmit}>
               <TextField label="Введіть електронну адресу" name="email" type="email" />
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
