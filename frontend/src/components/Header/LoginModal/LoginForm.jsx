import { Col } from 'react-bootstrap'
import { Formik, Form } from 'formik'
import { validate } from '../../Common/Validate'
import TextField from './TextField';
import './LoginForm.css'
import { useHistory } from "react-router-dom";

let LoginForm = (props) => {
   let history = useHistory();

   return (
      <Formik
         initialValues={{
            login: '',
            password: '',
         }}
         validationSchema={validate}
         onSubmit={values => {
            props.loginUser(values.login, values.password)
            props.onHide()
            history.push('/')
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
