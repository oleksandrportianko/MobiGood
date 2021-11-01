import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Col, Container, Image, Modal, Row } from 'react-bootstrap'
import './LoginModal.css'
import close from '../../../assets/img/close.svg'
import googleLogin from '../../../assets/img/google-login.png'
import LoginForm from './LoginForm'

const LoginModal = (props) => {

   const redirectToRegistration = () => {
      props.onHide()
      props.setShowRegistration()
   }

   return (
      <Modal show={props.show} size="md" aria-labelledby="login-modal" centered>
         <Modal.Header className="login-modal-header ps-2 p-1 p-sm-3 d-flex justify-content-between">
            <Container fluid className="login-modal-title p-0 d-flex justify-content-between align-items-center">
               <p className="m-0 text-white"> Вхід </p>
               <Image className="login-modal-header-image-close" onClick={props.onHide} width="20px" height="20px" src={close} />
            </Container>
         </Modal.Header>
         <Modal.Body className="d-flex flex-column pb-0" >
            <LoginForm loginUser={props.loginUser} onHide={props.onHide} />
         </Modal.Body>
         <Modal.Footer className="p-1 border-0">
            <Container fluid className="p-0 m-0">
               <Col className="text-center">
                  <p className="m-0">або</p>
                  <Row className="m-0 pt-1 pb-1 justify-content-center">
                     <Col xs="auto">
                        <Button className="login-modal-button-google p-0 m-0 p-1" onClick={() => alert('going to google')}>
                           <Image className="me-1" width="28px" height="28px" src={googleLogin} />
                           Увійти через Google</Button>
                     </Col>
                  </Row>
                  <span>Не зареєстровані?</span>
                  <Button onClick={() => redirectToRegistration()} className="login-modal-button-to-registration" >Зареєструватися</Button>
               </Col>
            </Container>
         </Modal.Footer>
      </Modal>
   )
}

export default LoginModal