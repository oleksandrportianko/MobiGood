import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Col, Container, Image, Modal, Row } from 'react-bootstrap'
import './RegistrationModal.css'
import close from '../../../assets/img/close.svg'
import { Field, reduxForm } from 'redux-form'
import googleLogin from '../../../assets/img/google-login.png'

const RegistrationModal = (props) => {

   const onSubmit = (formData) => {
      console.log(formData)
   }

   const redirectToLogin = () => {
      props.setShowLogin(true);
      props.setShowRegistration(false);
   }

   return (
      <Modal {...props} size="md" aria-labelledby="registration-modal" centered>
         <Modal.Header className="registration-modal-header ps-2 p-1 p-sm-3 d-flex justify-content-between">
            <Container fluid className="registration-modal-title p-0 d-flex justify-content-between align-items-center">
               <p className="m-0 text-white"> Реєстрація </p>
               <Image className="registration-modal-header-image-close" onClick={props.closeModal} width="20px" height="20px" src={close} />
            </Container>
         </Modal.Header>
         <Modal.Body className="d-flex flex-column pb-0" >
            <RegistrationFormRedux onSubmit={onSubmit} />
         </Modal.Body>
         <Modal.Footer className="p-1 border-0">
            <Container fluid className="p-0 m-0">
               <Col className="text-center">
                  <p className="m-0">або</p>
                  <Row className="m-0 pt-1 pb-1 justify-content-center">
                     <Col xs="auto">
                        <Button className="registration-modal-button-google p-0 m-0 p-1" onClick={() => alert('going to google')}>
                           <Image className="me-1" width="28px" height="28px" src={googleLogin} />
                           Увійти через Google</Button>
                     </Col>
                  </Row>
                  <span>Вже маєте акаунт?</span>
                  <Button className="registration-modal-button-to-login" onClick={redirectToLogin}>Увійти</Button>
               </Col>
            </Container>
         </Modal.Footer>
      </Modal>
   )
}

let RegistrationForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit} >
         <Container fluid >
            <Row>
               <label className="registration-lable p-0 m-0" htmlFor="email">Введіть електронну адресу</label>
               <Field className="registration-form-registration" name="email" component="input" type="email" />
            </Row>
            <Row>
               <label className="registration-lable p-0" htmlFor="name">Введіть ім'я</label>
               <Field className="registration-form-name" name="name" component="input" type="text" />
            </Row>
            <Row>
               <label className="registration-lable p-0" htmlFor="tel">Введіть номер телефону</label>
               <Field className="registration-form-tel" name="tel" component="input" type="tel" />
            </Row>
            <Row className="pt-1 pb-1">
               <label className="registration-lable p-0" htmlFor="password">Введіть пароль</label>
               <Field className="registration-form-password" name="password" component="input" type="password" />
            </Row>
            <Row className="justify-content-center">
               <Col xs="auto">
                  <button className="registration-form-submit">Зареєструватися</button>
               </Col>
            </Row>
         </Container>
      </form>
   )
}

let RegistrationFormRedux = reduxForm({
   form: 'Registration'
})(RegistrationForm)

export default RegistrationModal