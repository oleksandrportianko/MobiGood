import React from 'react'
import './Header.css'
import { Col, Container, Image, Nav, Row } from 'react-bootstrap'
import logo from '../../assets/img/logo.svg'
import logoText from '../../assets/img/logo-text.svg'
// import login from '../../assets/img/login.png'
import cart from '../../assets/img/cart.png'

const Header = () => {
   return (
      <Container className="p-0 m-0">
         <Row className="p-0 m-0">
            <Col className="header-logo-container p-0 m-0 d-flex align-items-center">
               <Image className="header-logo" src={logo} />
               <Col className="header-name-company d-flex flex-column" >
                  <Image width="162px" className="header-text-img" src={logoText} />
                  <p className="border-under-img"></p>
               </Col>
            </Col>
            <Col xs="4" className="header-navigation p-0 m-0">
               <Nav className="ml-3">
                  <Nav.Item className="header-nav-item active">Телефони</Nav.Item>
                  <Nav.Item className="header-nav-item">Аксесуари</Nav.Item>
                  <Nav.Item className="header-nav-item">Для авто</Nav.Item>
                  <Nav.Item className="header-nav-item">Про нас</Nav.Item>
               </Nav>
            </Col>
            <Col xs={2} className="p-0 d-flex align-items-center">
               <p className="m-0 fw-bold">(098)-863-81-38</p>
            </Col>
            <Col className="d-flex align-items-center">
               <Image width="32px" height="32px" className="" src={cart} />
               <div className="header-cart-circle">1</div>
            </Col>
         </Row>
      </Container>
   )
}

export default Header
