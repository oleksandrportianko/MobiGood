import React from 'react'
import './Footer.css'
import facebook from '../../assets/img/facebook.png'
import instagram from '../../assets/img/instagram.png'
import telegram from '../../assets/img/telegram.png'
import { Col, Container, Image, Nav, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
   return (
      <div className="footer-wrapper">
         <Container>
            <Row className="pt-4">
               <Col className="text-center">
                  <p className="footer-title">Соцмережі</p>
                  <a href="https://www.instagram.com/mobigoodshop/"><Image className="me-2" width="40px" height="40px" src={instagram} /></a>
                  <a href="https://t.me/mobigoodshop/"><Image className="me-2" width="40px" height="40px" src={telegram} /></a>
                  <a href="https://www.facebook.com/mobigoodshop/"><Image width="40px" height="40px" src={facebook} /></a>
               </Col>
               <Col>
                  <Nav className="d-flex flex-column text-center">
                     <p className="footer-title">Інформація про нас</p>
                     <Link className="text-decoration-none" to="/aboutus"><Nav.Item className="text-white">Про нас</Nav.Item></Link>
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
