import React from 'react'
import './Footer.css'
import facebook from '../../assets/img/facebook.png'
import instagram from '../../assets/img/instagram.png'
import telegram from '../../assets/img/telegram.png'
import { Col, Container, Image, Nav, Row } from 'react-bootstrap'

const Footer = () => {
   return (
      <div className="footer-wrapper">
         <Container>
            <Row className="pt-4">
               <Col className="text-center">
                  <p className="footer-title">Соцмережі</p>
                  <Image className="me-2" width="40px" height="40px" src={instagram} />
                  <Image className="me-2" width="40px" height="40px" src={telegram} />
                  <Image width="40px" height="40px" src={facebook} />
               </Col>
               <Col>
                  <Nav className="d-flex flex-column text-center">
                     <p className="footer-title">Інформація про нас</p>
                     <Nav.Item>Про нас</Nav.Item>
                     <Nav.Item>Контакти</Nav.Item>
                     <Nav.Item>Умови користування</Nav.Item>
                  </Nav>
               </Col>
               <Col>
                  <Nav className="d-flex flex-column text-center">
                     <p className="footer-title">Допомога</p>
                     <Nav.Item>Доставка та оплата</Nav.Item>
                     <Nav.Item>Гарантія</Nav.Item>
                     <Nav.Item>Повернення товару</Nav.Item>
                  </Nav>
               </Col>
               <Col >
                  <Nav className="d-flex flex-column text-center">
                     <p className="footer-title">Партнери</p>
                     <Nav.Item>Співпраця з нами</Nav.Item>
                  </Nav>
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default Footer
