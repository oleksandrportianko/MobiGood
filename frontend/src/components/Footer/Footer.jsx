import React from 'react'
import './Footer.css'
import facebook from '../../assets/img/facebook.png'
import instagram from '../../assets/img/instagram.png'
import telegram from '../../assets/img/telegram.png'
import { Col, Container, Image, Nav, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
   return (
      <div className="footer-wrapper p-0 m-0">
         <Container className="p-0">
            <Row className="pt-2 pb-3 m-0">
               <Col className="text-center">
                  <p className="footer-title mb-1 mb-lg-3">Соцмережі</p>
                  <a href="https://www.instagram.com/mobigoodshop/"><Image className="footer-social-img me-1 me-sm-2" width="40px" height="40px" src={instagram} /></a>
                  <a href="https://t.me/mobigoodshop/"><Image className="footer-social-img me-1 me-sm-2" width="40px" height="40px" src={telegram} /></a>
                  <a href="https://www.facebook.com/mobigoodshop/"><Image className="footer-social-img" width="40px" height="40px" src={facebook} /></a>
               </Col>
               <Col>
                  <Nav className="d-flex flex-column text-center">
                     <p className="footer-title mb-1 mb-lg-3">Інформація про нас</p>
                     <Link className="text-decoration-none" to="/aboutus"><Nav.Item className="text-white">Про нас</Nav.Item></Link>
                     <Nav.Item>Контакти</Nav.Item>
                     <Nav.Item>Умови користування</Nav.Item>
                  </Nav>
               </Col>
               <Col>
                  <Nav className="d-flex flex-column text-center">
                     <p className="footer-title mb-1 mb-lg-3">Допомога</p>
                     <Nav.Item>Доставка та оплата</Nav.Item>
                     <Nav.Item>Гарантія</Nav.Item>
                     <Nav.Item>Повернення товару</Nav.Item>
                  </Nav>
               </Col>
               <Col >
                  <Nav className="d-flex flex-column text-center">
                     <p className="footer-title mb-1 mb-lg-3">Партнери</p>
                     <Nav.Item>Співпраця з нами</Nav.Item>
                  </Nav>
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default Footer
