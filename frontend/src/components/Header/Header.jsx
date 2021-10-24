import React from 'react'
import './Header.css'
import { Col, Container, Image, Nav, Row } from 'react-bootstrap'
import logo from '../../assets/img/logo.svg'
import logoText from '../../assets/img/logo-text.svg'
import login from '../../assets/img/login.png'
import cart from '../../assets/img/cart.png'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
   return (
      <Container className="p-0 m-0 ms-2">
         <Row className="p-0 m-0">
            <Col className="header-logo-container p-0 m-0 d-flex align-items-center">
               <Link to="/">
                  <Image className="header-logo" src={logo} />
               </Link>
               <Col className="header-name-company d-flex flex-column" >
                  <Link to="/">
                     <Image width="162px" className="header-text-img" src={logoText} />
                  </Link>
                  <p className="border-under-img"></p>
               </Col>
            </Col>
            <Col xs={4} className="header-navigation p-0 m-0">
               <Nav className="ml-3">
                  <NavLink className="header-nav-link text-decoration-none text-dark" activeClassName="header-nav-active" to="/phones"><Nav.Item className="header-nav-item">Телефони</Nav.Item></NavLink>
                  <NavLink className="text-decoration-none text-dark" activeClassName="header-nav-active" to="/accessories"><Nav.Item className="header-nav-item">Аксесуари</Nav.Item></NavLink>
                  <NavLink className="text-decoration-none text-dark" activeClassName="header-nav-active" to="/forauto"><Nav.Item className="header-nav-item">Для авто</Nav.Item></NavLink>
                  <NavLink className="text-decoration-none text-dark" activeClassName="header-nav-active" to="/aboutus"><Nav.Item className="header-nav-item">Про нас</Nav.Item></NavLink>
               </Nav>
            </Col>
            <Col xs={2} className="p-0 d-flex align-items-center">
               <p className="header-phone-number m-0 fw-bold">(066)-090-36-80</p>
            </Col>
            <Col xs="auto" className="d-flex align-items-center">
               <Link to="/cart">
                  <Image width="32px" height="32px" className="" src={cart} />
               </Link>
               <Link className="text-decoration-none" to="/cart">
                  <div className="header-cart-circle">1</div>
               </Link>
            </Col>
            <Col xs="auto" className="d-flex align-items-center">
               <Image width="32px" height="32px" src={login} />
               <button className="header-button-login bg-transparent text-black">Вхід</button>
               <button className="header-button-regitration bg-transparent text-black">Реєстрація</button>
            </Col>
         </Row>
      </Container>
   )
}

export default Header
