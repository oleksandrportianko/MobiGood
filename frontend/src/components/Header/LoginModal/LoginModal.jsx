import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Col, Container, Image, Modal, Row } from 'react-bootstrap'
import './LoginModal.css'
import close from '../../../assets/img/close.png'
import { Field, reduxForm } from 'redux-form'
import googleLogin from '../../../assets/img/google-login.png'
import facebookLogin from '../../../assets/img/facebook-login.png'

const LoginModal = (props) => {

   let onSubmit = (formData) => {
      console.log(formData)
   }

   return (
      <Modal {...props} size="md" aria-labelledby="login-modal" centered>
         <Modal.Header className="ps-2 p-1 p-sm-3 d-flex justify-content-between">
            <Container fluid className="cart-model-title p-0 d-flex justify-content-between align-items-center">
               <p className="m-0"> Вхід </p>
               <Image onClick={props.closeModal} width="20px" height="20px" src={close} />
            </Container>
         </Modal.Header>
         <Modal.Body className="d-flex flex-column pb-0" >
            <LoginFormRedux onSubmit={onSubmit} />
         </Modal.Body>
         <Modal.Footer className="p-1 border-0">
            <Container fluid className="p-0 m-0">
               <Col className="text-center">
                  <p className="m-0">або</p>
                  <p className="m-0">Увійти через акаунт:</p>
                  <Row className="m-0 pt-1 pb-1 justify-content-center">
                     <Col xs="auto">
                        <Button className="login-modal-button-facebook p-0 m-0 p-1" onClick={() => alert('going to facebook')}>
                           <Image width="28px" height="28px" src={facebookLogin} />
                           Facebook
                        </Button>
                     </Col>
                     <Col xs="auto">
                        <Button className="login-modal-button-google p-0 m-0 p-1" onClick={() => alert('going to google')}>
                           <Image width="28px" height="28px" src={googleLogin} />
                           Google</Button>
                     </Col>
                  </Row>
                  <span>Не зареєстровані?</span>
                  <Button className="login-modal-button-to-registration" onClick={() => alert('going to registration')}>Зареєструватися</Button>
               </Col>
            </Container>
         </Modal.Footer>
      </Modal>
   )
}

let LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit} >
         <Container fluid >
            <Row>
               <label className="login-lable p-0" htmlFor="email">Введіть електронну адресу</label>
               <Field className="login-form-login" name="email" component="input" type="email" />
            </Row>
            <Row className="pt-1 pb-1">
               <label className="login-lable p-0" htmlFor="password">Введіть пароль</label>
               <Field className="login-form-password" name="password" component="input" type="password" />
            </Row>
            <Row className="p-0 d-flex flex-row pt-1 pb-1">
               <Col xs="auto" className="p-0">
                  <Field className="login-form-rememberme me-1" name="rememberMe" component="input" type="checkbox" />
               </Col>
               <Col xs="auto" className="p-0">
                  <span > Запам'ятати мене</span>
               </Col>
            </Row>
            <Row className="justify-content-center">
               <Col xs="auto">
                  <button className="login-form-submit">Увійти</button>
               </Col>
            </Row>
         </Container>
      </form>
   )
}

let LoginFormRedux = reduxForm({
   form: 'Login'
})(LoginForm)

export default LoginModal
